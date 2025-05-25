import { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useParams } from 'react-router-dom';
import './DetallePelicula.css';
import { useNavigate } from 'react-router-dom';

const horariosDisponibles = {
  '2025-05-22': ['11:00', '14:00', '18:00'],
  '2025-05-24': ['14:00', '16:30', '20:00'],
  '2025-05-25': ['12:00', '15:00', '19:30'],
  '2025-05-26': ['13:30', '18:00'],
};

const DetallePelicula = () => {
  const { id } = useParams();
  const [pelicula, setPelicula] = useState(null);
  const [fecha, setFecha] = useState(new Date());
  const [horarios, setHorarios] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (fecha) {
      const key = fecha.toISOString().split('T')[0];
      setHorarios(horariosDisponibles[key] || []);
    }
  }, [fecha]);

  const handleSeleccionHora = async (hora) => {
    const keyFecha = fecha.toISOString().split('T')[0];
    console.log(`→ Buscando función: id=${id}, fecha=${keyFecha}, hora=${hora}`);
    try {
      const res = await fetch(`http://localhost:3000/api/funciones/buscar?id_pelicula=${id}&fecha=${keyFecha}&hora=${hora}`, {
        cache: 'no-store',
      });

      if (!res.ok) {
        throw new Error('Función no encontrada');
      }

      const funcion = await res.json();
      console.log('Función encontrada:', funcion);
      navigate(`/medio-pago/${funcion.id_funcion}`);
    } catch (error) {
      console.error('Error al redirigir al medio de pago:', error);
      alert('No se pudo encontrar la función para la fecha y hora seleccionada.');
    }

  };


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
            <h3>Fechas</h3>
            <div className="fechas">
              <DatePicker selected={fecha} onChange={(date) => setFecha(date)} dateFormat='dd/MM/yyyy' minDate={new Date()} className="calendario" />
            </div>

            <div className="sede">
              <h4>Cine Ya - Sede Centro</h4>
              <div className="horarios">
                {horarios.length > 0 ? (
                  horarios.map((hora) => (
                    <div key={hora}>
                      <button onClick={() => handleSeleccionHora(hora)}>{hora}</button>
                    </div>
                  ))
                ) : (
                  <p>No hay horarios disponibles para esta fecha.</p>
                )}
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
