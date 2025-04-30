import { useState } from 'react';
import { Input } from '../../Components/inputs/input.jsx';
import './Login.css';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className='login-container'>
        <form className='login-form' onSubmit={handleSubmit}>
          <h2 className='login-title'>Iniciar sesión</h2>
          <div>
            <label htmlFor="nombre" className='label-login'>Correo</label>
            <Input id="nombre" type="name" placeholder="Correo" />
          </div>

          <div>
            <label htmlFor="nombre" className='label-login'>Contraseña</label>
            <Input id="nombre" type="name" placeholder="Contraseña" />
          </div>

          <div className='login-remember-container'>
            <p>¿Ya tienes contraseña?</p><p className='link-to-register'>Registrate aquí</p>
          </div>

          <div className='login-button-container'>
            <button className='login-button' type="submit">Iniciar sesión</button>
          </div>
        </form>
      </div>
    </>
  );
}
