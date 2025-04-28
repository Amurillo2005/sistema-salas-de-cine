import { useState } from 'react';
import { Input } from '../../Components/inputs/input.jsx';
import './Login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className='login-container'>
        <div>
          <label htmlFor="">Nombre</label>
          <Input type={"name"} placeholder={"Nombre completo"} />
        </div>
      </div>
    </>
  );
}
