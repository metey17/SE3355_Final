import mysql from 'mysql';


const dbConfig = {
    host: 'localhost',
    user: 'root', // MySQL kullanıcı adı
    password: '', // MySQL şifre
    database: 'imdb' // Veritabanı adı
};

// MySQL bağlantı havuzunu oluştur
const pool = mysql.createPool(dbConfig);

// Bağlantı havuzundan bir bağlantı al
function getConnection(callback) {
    pool.getConnection(function(err, connection) {
        if (err) {
            throw err;
        }
        callback(connection);
    });
}

export { pool };
