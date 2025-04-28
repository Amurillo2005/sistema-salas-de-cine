const Pelicula = require('../models/peliculaModel');

// Controlador que maneja las respuestas
const getPeliculas = async (req, res) => {
    try {
        const peliculas = await Pelicula.getAll();
        res.json(peliculas);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener películas' });
    }
};

module.exports = {
    getPeliculas
};