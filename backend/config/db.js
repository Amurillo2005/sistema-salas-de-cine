const mysql = require('mysql2');

// Creamos el pool de conexión
const pool = mysql.createPool({
    host: 'localhost',      
    user: 'root',          
    password: '12345',           
    database: 'proyectosaladecines',       
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

const promisePool = pool.promise();
module.exports = promisePool;