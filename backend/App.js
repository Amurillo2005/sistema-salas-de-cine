const express = require('express');
const cors = require('cors');
const app = express();

// Middleware para CORS
app.use(cors());

// Middleware para leer JSON
app.use(express.json());

// Rutas
const peliculaRoutes = require('./routes/peliculaRoutes');
const usuarioRoutes = require('./routes/usuarioRoutes');
const funcionRoutes = require('./routes/funcionRoutes');

app.use('/api/peliculas', peliculaRoutes);
app.use('/api/usuarios', usuarioRoutes);
app.use('/api', funcionRoutes);

// Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
