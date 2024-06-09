import { pool } from '../models/db.js';

const getMovie = (req, res) => {
  const sql = 'SELECT id, name, imdb_no, img FROM movie';
  pool.query(sql, (err, results) => {
    if (err) {
      console.error('Database error:', err.message);
      return res.status(500).json({ error: 'Database error' });
    }
    res.json(results);
  });
};

export { getMovie };
