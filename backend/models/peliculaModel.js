const db = require('../config/db');

// Modelo para interactuar con las películas
const Pelicula = {
    getAll: async () => {
        const [rows] = await db.query('SELECT * FROM peliculas');
        return rows;
    }
};

module.exports = Pelicula;