import { pool } from '../models/db.js';

const passController = (req, res) => {
    const  movieName  = req.body.name; 

    
    const sql = 'SELECT id FROM movie WHERE name = ?'; 
    pool.query(sql, [movieName], (err, results) => {
        if (err) {
            console.error('Database error:', err.message);
            return res.status(500).json({ error: 'Database error' });
        }

        if (results.length === 0) {
            return res.status(404).json({ error: 'Movie not found' });
        }


        const movieId = results[0].id;

        console.log(movieId)
        res.json(movieId);
    });
};

export { passController };
