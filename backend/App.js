const express = require('express');
const app = express();

// Importar rutas
const peliculaRoutes = require('./routes/peliculaRoutes');
const usuarioRoutes = require('./routes/usuarioRoutes');

// Middleware para leer JSON
app.use(express.json());

// Usar rutas
app.use('/api/peliculas', peliculaRoutes);
app.use('/api/usuarios', usuarioRoutes);

// Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
