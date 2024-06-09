import { pool } from '../models/db.js';

const contentController = (req, res) => {
    const sql = 'SELECT name, img, video,description, imdb_no FROM movie WHERE id = ?';
    const movieId = req.body.id; 
    pool.query(sql, [movieId], (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Database error: ' + err.message });
        }
        if (results.length === 0) {
            return res.status(404).json({ error: 'Movie not found' });
        }
        const movie = results[0];
        res.json(movie);
    });
};

export { contentController };
