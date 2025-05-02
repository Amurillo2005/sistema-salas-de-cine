import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './DetallePelicula.css';

const DetallePelicula = () => {
  const { id } = useParams();
  const [pelicula, setPelicula] = useState(null);

  useEffect(() => {
    const fetchPelicula = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/peliculas/${id}`);
        const data = await res.json();
        setPelicula(data);
      } catch (error) {
        console.error('Error al obtener película:', error);
      }
    };

    fetchPelicula();
  }, [id]);

  if (!pelicula) {
    return <p>Cargando película...</p>;
  }

  return (
    <div className="detalle-pelicula">
      <div className="banner">
        <div className="poster">
          <img src={pelicula.imagen_url} alt={pelicula.titulo} />
        </div>
        <div className="info">
          <h1>{pelicula.titulo}</h1>
          <p className="subtitulo">{pelicula.genero}</p>
          <p className="clasificacion">Clasificación: {pelicula.clasificacion}</p>
          <p className="info-extra">Duración: {pelicula.duracion} min</p>
          <p className="info-extra">Idioma: {pelicula.idioma}</p>
        </div>
      </div>

      <div className="descripcion">
        <p>{pelicula.sipnosis}</p>
      </div>

      {pelicula.estado === "activa" ? (
        <div className="contenido">
          <div className="info-tecnica">
            <h3>Información técnica</h3>
            <p><strong>Género:</strong> {pelicula.genero}</p>
            <p><strong>Clasificación:</strong> {pelicula.clasificacion}</p>
            <p><strong>Idioma:</strong> {pelicula.idioma}</p>
            <p><strong>Duración:</strong> {pelicula.duracion} minutos</p>
          </div>

          <div className="funciones">
            <h3>Próximas funciones</h3>
            <div className="fechas">
              <button className="icono">📅</button>
              <button>Hoy</button>
              <button>Mañana</button>
            </div>

            <div className="sede">
              <h4>Cine Ya - Sede Centro</h4>
              <div className="horarios">
                <div><button>3:30 PM</button></div>
                <div><button>6:45 PM</button></div>
                <div><button>9:15 PM</button></div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="contenido">
          <div className="info-tecnica">
            <h3 style={{ color: "#003b95" }}>Próximamente en cartelera</h3>
            <p>Esta película aún no está disponible para funciones. ¡Espérala muy pronto!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetallePelicula;
