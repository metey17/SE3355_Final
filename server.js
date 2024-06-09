
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import http from 'http';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import jwt from 'jsonwebtoken';
import session from 'express-session';
import { Translate } from '@google-cloud/translate';

const app = express();
const server = http.createServer(app);
const port = 55000;


const translate = new Translate({
  projectId: 'verify-425115',  
  keyFilename: './controllers/translate_key.json'  
});

app.use(cors()); 



const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


app.use(bodyParser.json({ limit: '50mb' })); 
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));


app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

import { loginController } from './controllers/loginController.js';
import { searchController } from './controllers/searchController.js';
import { messageController } from './controllers/messageController.js';
import { getComments } from './controllers/commentController.js';
import { contentController } from './controllers/contentController.js';
import { passController } from './controllers/passController.js';
import { getMovie } from './controllers/getMovieController.js';
import { registerController } from './controllers/registerController.js';

passport.use(new GoogleStrategy({
  clientID: '380814697452-egtfj1o8ad3eumasoog59gmos47uvevu.apps.googleusercontent.com',  
  clientSecret: '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', 
  callbackURL: 'http://localhost:55000/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {

  done(null, { id: profile.id, displayName: profile.displayName });
}));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});


app.use(session({
  secret: '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', 
  resave: false,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.get('/auth/google', passport.authenticate('google', { scope: ['profile'] }));

app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), (req, res) => {
  const token = jwt.sign({ id: req.user.id, displayName: req.user.displayName }, 'gizliAnahtar', { expiresIn: '1h' });
  res.redirect(`/setUser?name=${encodeURIComponent(req.user.displayName)}&token=${token}`);
});

app.get('/setUser', (req, res) => {
  res.render('setUser');
});

const translations = {
  tr: {
    trendingToday: 'Bugün Trend Olanlar',
    untoldStory: 'En güzel filmleri şimdi keşfet',
    watchItNow: 'Şimdi İzle',
    actionMovies: 'Bu hafta IMDB de en iyi 10',
  },
  en: {
    trendingToday: 'Trending Today',
    untoldStory: 'Discover the best movies now',
    watchItNow: 'Watch It Now',
    actionMovies: 'Top 10 on IMDB this week',
  }
};

// Translate 
const languages = {
  'tr': 'Türkçe',
  'en': 'İngilizce'
};

app.get('/', async (req, res) => {
  const language = req.query.lang || 'tr';
  const text = {
    title: 'Merhaba, Dünya!',
    content: 'Bu, çeviri test içeriğidir.'
  };

  try {
    const [translatedTitle] = await translate.translate(text.title, language);
    const [translatedContent] = await translate.translate(text.content, language);

    res.render('index', {
      title: translatedTitle,
      content: translatedContent,
      language: languages[language], 
      translations: translations[language]  
    });
  } catch (err) {
    console.error(err);
    res.send('Dil çevirisi sırasında hata oluştu.');
  }
});

//  GET ve POST istekleri
app.get('/content', (req, res) => {
  res.render('contentMovie');
});

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.get('/signin', (req, res) => {
  res.render('sigin');
});

app.get('/logout', (req, res) => {
  res.render('logout');
});


app.get('/comments', getComments);
app.get('/movies', getMovie);

app.post('/login', loginController);
app.post('/search', searchController);
app.post('/message', messageController);
app.post('/content', contentController);
app.post('/pass', passController);
app.post('/register', registerController);


server.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalışıyor`);
});
