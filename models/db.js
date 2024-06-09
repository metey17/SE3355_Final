import mysql from 'mysql';


const dbConfig = {
    host     : process.env.MYSQL_ADDON_HOST,
    database : process.env.MYSQL_ADDON_DB,
    user     : process.env.MYSQL_ADDON_USER,
    password : process.env.MYSQL_ADDON_PASSWORD
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
