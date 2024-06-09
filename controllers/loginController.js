import { pool } from '../models/db.js';
import jwt from 'jsonwebtoken';

function loginController(req, res) {
    const { email, password } = req.body;

    const sql = 'SELECT name, mail, password FROM user WHERE mail = ? AND password = ?';

    pool.query(sql, [email, password], (err, result) => {
        if (err) {
            return res.status(500).send({ error: 'Veritabanı hatası: ' + err.message });
        }
        
        if (result.length === 0) {
            return res.status(401).send('Geçersiz kullanıcı adı veya şifre');
        } else {
            // Başarılı giriş
            const userData = {
                mail: result[0].mail,
                name: result[0].name
            };
            const token = jwt.sign(userData, 'gizliAnahtar', { expiresIn: '1h' });
            const responsePayload = {
                token: token,
                mail: userData.mail,
                name: userData.name

            };

            return res.status(200).json(responsePayload); // Kullanıcı bilgilerini token olarak gönder
        }
    });
}

export { loginController };
