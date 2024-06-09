import { pool } from '../models/db.js';


const registerController = (req, res) => {
  const { name, surname, email, password, city } = req.body;

  if (!name || !surname || !email || !password || !city) {
    return res.status(400).json({ success: false, message: 'All fields are required.' });
  }

  const checkEmailSql = 'SELECT * FROM user WHERE mail = ?';
  pool.query(checkEmailSql, [email], (err, results) => {
    if (err) {
      console.error('Database error:', err.message);
      return res.status(500).json({ success: false, message: 'Database error.' });
    }

    if (results.length > 0) {
      return res.status(409).json({ success: false, message: 'Email already exists.' });
    }

     

      const insertUserSql = 'INSERT INTO user (name, surname, mail, password, city) VALUES (?, ?, ?, ?, ?)';
      pool.query(insertUserSql, [name, surname, email, password, city], (err, results) => {
        if (err) {
          console.error('Database error:', err.message);
          return res.status(500).json({ success: false, message: 'Database error.' });
        }

        res.json({ success: true, message: 'Registration successful.' });
      });
    });
 
};

export { registerController };
