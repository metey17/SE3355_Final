import { pool } from '../models/db.js';

const getComments = (req, res) => {
    const movieId = req.query.movie_id;

    if (!movieId) {
        return res.status(400).json({ error: 'Movie ID is required' });
    }

    const sql = 'SELECT name, message FROM messages WHERE movie_id = ?';
    pool.query(sql, [movieId], (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Database error: ' + err.message });
        }
        res.json(results);
    });
};

export { getComments };
