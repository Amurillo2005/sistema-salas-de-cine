const funcionModel = require('../models/funcionModel');

const buscarFuncion = async (req, res) => {
  const { id_pelicula, fecha, hora } = req.query;

  if (!id_pelicula || !fecha || !hora) {
    return res.status(400).json({ error: 'Faltan parámetros: peliculaId, fecha y hora son requeridos.' });
  }

  try {
    const funcion = await funcionModel.buscarPorFechaHora(id_pelicula, fecha, hora);

    if (!funcion) {
      return res.status(404).json({ error: 'Función no encontrada' });
    }

    res.json(funcion);
  } catch (error) {
    console.error('Error al buscar función:', error);
    res.status(500).json({ error: 'Error del servidor' });
  }
};

module.exports = {
  buscarFuncion
};
