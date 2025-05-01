import React from 'react';
import './DetallePelicula.css';
import img1 from '../../assets/img/img1.png';

const DetallePelicula = () => {
  return (
    <div className="detalle-pelicula">
      <div className="banner">
        <div className="poster">
          <img src={img1} alt="Captain America Poster" />
        </div>
        <div className="info">
          <h1>ThunderBolts</h1>
          <p className="subtitulo">Título en español: ThunderBolts</p>
          <p className="fecha-lanzamiento">Estreno: 13-Feb-2025</p>
          <p className="info-extra">Acción, Aventura, Ciencia Ficción</p>
          <p className="clasificacion">Recomendada para Mayores de 12 años | 118 Min</p>
        </div>
      </div>

      <div className="descripcion">
        <p>
          Tras reunirse con el recién elegido presidente de Estados Unidos, Thaddeus Ross,
          Sam se encuentra en medio de un incidente internacional. Debe descubrir la razón de un
          nefasto complot mundial antes de que el verdadero cerebro de la operación haga que el
          mundo entero se ponga rojo.
        </p>
      </div>

      <div className="contenido">
        <div className="info-tecnica">
          <p><strong>Título Original:</strong> Captain America: Brave New World</p>
          <p><strong>País de Origen:</strong> United States of America</p>
          <p><strong>Director:</strong> Julius Onah</p>
          <p><strong>Actores:</strong> Anthony Mackie, Harrison Ford, Danny Ramírez, Rosa Salazar, Liv Tyler, Giancarlo Esposito</p>
          <p><strong>Idioma:</strong> Inglés</p>
        </div>

        <div className="funciones">
          <h3>MAR</h3>
          <div className="fechas">
            <button>8<br/>SÁB</button>
            <button>9<br/>DOM</button>
            <button>10<br/>LUN</button>
            <button>11<br/>MAR</button>
            <button>12<br/>MIÉ</button>
            <button className="icono">📅</button>
          </div>

          <div className="sede">
            <h4>📍 Buenavista</h4>
            <div className="horarios">
              <div><strong>2D Doblado</strong><button>1:30 PM</button></div>
              <div><strong>2D Doblado</strong><button>7:00 PM</button></div>
              <div><strong>2D Subtitulado</strong><button>9:40 PM</button></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetallePelicula;
