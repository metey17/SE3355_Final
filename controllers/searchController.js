import { pool } from '../models/db.js';

function searchController(req, res) {
    const query = req.body.query;
    console.log(query)
    if (!query) {
        return res.status(400).json({ error: 'Query parameter is required' });
    }

    console.log(query)

    const movieQuery = `SELECT id, name, img FROM movie WHERE name LIKE ?`;
    const actressQuery = `SELECT name, img FROM actress WHERE name LIKE ?`;

    pool.query(movieQuery, [`%${query}%`], (err, movieResults) => {
        if (err) {
            return res.status(500).json({ error: 'Database query failed' });
        }

        pool.query(actressQuery, [`%${query}%`], (err, actressResults) => {
            if (err) {
                return res.status(500).json({ error: 'Database query failed' });
            }
            
            const results = [
                ...movieResults.map(movie => ({ type: 'Movie', id: movie.id, name: movie.name, img: movie.img })),
                ...actressResults.map(actress => ({ type: 'Actress', name: actress.name, img: actress.img }))
            ];

            res.json(results);
        });
    });
};

export { searchController };
