const jwt = require('jsonwebtoken');
const Usuario = require('../models/usuarioModel');

// Registrar usuario
const register = async (req, res) => {
    const { nombre, correo, contraseña, telefono, cedula, rol } = req.body;

    // Validación básica en el backend
    if (!nombre || !correo || !contraseña || !telefono || !cedula) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios.' });
    }

    try {
        const existingUser = await Usuario.findByEmail(correo);
        if (existingUser) {
            return res.status(400).json({ message: 'El correo ya está registrado' });
        }

        await Usuario.create(nombre, correo, contraseña, telefono, cedula, rol);
        res.status(201).json({ message: 'Usuario registrado exitosamente' });

    } catch (error) {
        console.error("Error en registro:", error);
        res.status(500).json({ message: 'Error al registrar usuario', error: error.message });
    }
};


// Login de usuario
const login = async (req, res) => {
    const { correo, contraseña } = req.body;

    try {
        const user = await Usuario.findByEmail(correo);

        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        if (user.contraseña !== contraseña) {
            return res.status(401).json({ message: 'Contraseña incorrecta' });
        }

        // Crear el token JWT
        const token = jwt.sign(
            { id_usuario: user.id_usuario, rol: user.rol },
            'secreto_cine', // Recuerda cambiar a variable de entorno después
            { expiresIn: '2h' }
        );

        res.json({
            message: 'Inicio de sesión exitoso',
            token,
            user: {
                id_usuario: user.id_usuario,
                nombre: user.nombre,
                rol: user.rol
            }
        });


    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al iniciar sesión' });
    }
};

module.exports = {
    register,
    login
};