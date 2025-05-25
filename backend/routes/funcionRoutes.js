const express = require('express');
const router = express.Router();
const funcionesController = require('../controllers/funcionesController');

router.get('/funciones/buscar', funcionesController.buscarFuncion);

module.exports = router;