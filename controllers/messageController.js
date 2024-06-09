import { pool } from '../models/db.js'; 


const messageController = (req, res) => {
    const { name, email, message, movieId } = req.body;

 
    const sql = 'INSERT INTO messages (name, mail, message, movie_id) VALUES (?, ?, ?, ?)';
    pool.query(sql, [name, email, message, movieId], (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Database error: ' + err.message });
        }

        return res.status(200).json({ message: 'Message sent successfully' });
    })
}

export { messageController };
