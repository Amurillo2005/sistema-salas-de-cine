const db = require('../config/db');

// Modelo de Usuario
const Usuario = {
    // Registrar un nuevo usuario
    create: async (nombre, correo, contraseña, telefono, cedula, rol) => {
        const [result] = await db.query(
            'INSERT INTO usuarios (nombre, correo, contraseña, telefono, cedula, rol, fecha_creacion) VALUES (?, ?, ?, ?, ?, ?, NOW())',
            [nombre, correo, contraseña, telefono, cedula, rol]
        );
        return result;
    },

    // Buscar usuario por correo
    findByEmail: async (correo) => {
        const [rows] = await db.query(
            'SELECT * FROM usuarios WHERE correo = ?',
            [correo]
        );
        return rows[0];
    }
};

module.exports = Usuario;