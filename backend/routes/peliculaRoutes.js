const express = require('express');
const router = express.Router();
const PeliculaController = require('../controllers/peliculaController');

// Primero las rutas más específicas
router.get('/pronto', PeliculaController.getPeliculasPronto);
router.get('/:id', PeliculaController.getPeliculaById);
router.get('/', PeliculaController.getPeliculas);

module.exports = router;
