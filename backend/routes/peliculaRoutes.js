const express = require('express');
const router = express.Router();
const peliculaController = require('../controllers/peliculaController');

// Ruta para obtener todas las películas
router.get('/', peliculaController.getPeliculas);

module.exports = router;