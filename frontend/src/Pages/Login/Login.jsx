import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Input } from '../../Components/inputs/input.jsx';
import './Login.css';
import { useAuth } from '../../context/authContext';

export const Login = () => {
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth(); // usamos el contexto

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:3000/api/usuarios/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ correo, contraseña }),
      });

      const data = await res.json();

      if (res.ok) {
        alert('✅ Inicio de sesión exitoso');

        // Guardamos en el contexto
        login(data.token, data.user); // <-- requiere que el backend devuelva data.user

        // Redirigimos según rol
        switch (data.user.rol) {
          case 'cliente':
            navigate('/');
            break;
          case 'cajero':
            navigate('/cajero');
            break;
          case 'administrador':
            navigate('/admin'); // si tienes ruta admin
            break;
          default:
            navigate('/');
        }
      } else {
        alert('❌ ' + data.message);
      }
    } catch (error) {
      console.error(error);
      alert('❌ Error de conexión con el servidor');
    }
  };

  return (
    <div className='login-container'>
      <form className='login-form' onSubmit={handleSubmit}>
        <h2 className='login-title'>Iniciar sesión</h2>

        <div>
          <label htmlFor="correo" className='label-login'>Correo</label>
          <Input
            id="correo"
            type="email"
            placeholder="Correo"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            className="input"
          />
        </div>

        <div>
          <label htmlFor="contraseña" className='label-login'>Contraseña</label>
          <Input
            id="contraseña"
            type="password"
            placeholder="Contraseña"
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
            className="input"
          />
        </div>

        <div className='login-remember-container'>
          <p>¿No tienes cuenta?</p>
          <Link to="/register" className='link-to-register'>Regístrate aquí</Link>
        </div>

        <div className='login-button-container'>
          <button className='login-button' type="submit">Iniciar sesión</button>
        </div>
      </form>
    </div>
  );
};
