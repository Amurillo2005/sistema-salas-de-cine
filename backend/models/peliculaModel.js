const db = require('../config/db');

// Obtener todas las películas activas
const getAll = async () => {
  const [rows] = await db.query("SELECT * FROM peliculas WHERE estado != 'inactiva'");
  return rows;
};

// Obtener una película por su ID
const getById = async (id) => {
  const [rows] = await db.query("SELECT * FROM peliculas WHERE id_pelicula = ?", [id]);
  return rows[0]; // Retorna solo una
};

const getByEstado = async (estado) => {
  const [rows] = await db.query("SELECT * FROM peliculas WHERE estado = ?", [estado]);
  return rows;
};

module.exports = {
  getAll,
  getById,
  getByEstado,
};

