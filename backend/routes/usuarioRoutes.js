const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

// Registro de usuario
router.post('/register', usuarioController.register);

// Login de usuario
router.post('/login', usuarioController.login);

module.exports = router;
