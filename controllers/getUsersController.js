import { pool } from '../models/db.js';

function getUsers(req, res) {


   
    const sql = 'SELECT name, mail, password, city FROM users ';

    pool.query(sql, (err, result) => {
        if (err) {
            return res.status(500).send({ error: 'Veritabanı hatası: ' + err.message });
        } else {
            return res.status(200).json(result);
        }
    });

   
}

export { getUsers };
