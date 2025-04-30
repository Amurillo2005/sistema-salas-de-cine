const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Esperamos "Bearer TOKEN"

    if (!token) {
        return res.status(401).json({ message: 'Acceso denegado, token no encontrado' });
    }

    jwt.verify(token, 'secreto_cine', (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Token inválido o expirado' });
        }

        req.user = user; // Guardamos el usuario decodificado en la request
        next();
    });
};

module.exports = authenticateToken;
