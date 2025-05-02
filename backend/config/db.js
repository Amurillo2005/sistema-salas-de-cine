const mysql = require('mysql2');

// Creamos el pool de conexión
const pool = mysql.createPool({
    host: 'hopper.proxy.rlwy.net',
    port: 59530, // ✅ puerto de Railway
    user: 'root',
    password: 'dqmDaKDKFvafMOUeDexphWYRpnLJdTSa',
    database: 'proyectosaladecines',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

const promisePool = pool.promise();
module.exports = promisePool;
