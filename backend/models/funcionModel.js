const db = require('../config/db');

const buscarPorFechaHora = async (id_pelicula, fecha, hora) => {
  const [rows] = await db.query(
    `SELECT * FROM funciones 
     WHERE id_pelicula = ? AND fecha = ? AND hora = ? 
     LIMIT 1`,
    [id_pelicula, fecha, hora]
  );
  return rows[0];
};

module.exports = {
  buscarPorFechaHora,
};