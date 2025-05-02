const Pelicula = require('../models/peliculaModel');

const getPeliculas = async (req, res) => {
  try {
    const peliculas = await Pelicula.getAll();
    res.json(peliculas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener películas' });
  }
};

const getPeliculaById = async (req, res) => {
  const { id } = req.params;

  try {
    const pelicula = await Pelicula.getById(id);
    if (!pelicula) {
      return res.status(404).json({ message: 'Película no encontrada' });
    }
    res.json(pelicula);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener la película' });
  }
};

const getPeliculasPronto = async (req, res) => {
  try {
    const peliculas = await Pelicula.getByEstado('pronto');
    res.json(peliculas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener películas próximas' });
  }
};


module.exports = {
  getPeliculas,
  getPeliculaById,
  getPeliculasPronto,
};
