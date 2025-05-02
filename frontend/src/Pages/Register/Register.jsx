import "./Register.css";
import { useState } from "react";
import { Link } from "react-router-dom"

export const Register = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    contraseña: "",
    telefono: null,
    cedula: null,
  });

  const handleChange = (e) => {
    const { id, value, type } = e.target;

    setFormData((prev) => ({
      ...prev,
      [id]: type === "number" ? (value === "" ? null : Number(value)) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const cleanFormData = {
      nombre: formData.nombre,
      correo: formData.correo,
      contraseña: formData.contraseña,
      telefono: formData.telefono,
      cedula: formData.cedula,
      rol: "cliente",
    };

    try {
      const res = await fetch("http://localhost:3000/api/usuarios/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cleanFormData),
      });

      const data = await res.json();
      if (res.ok) {
        alert("✅ Usuario registrado correctamente");
        setFormData({
          nombre: "",
          correo: "",
          contraseña: "",
          telefono: null,
          cedula: null,
        });
      } else {
        alert("❌ Error: " + data.message);
      }
    } catch (error) {
      console.error(error);
      alert("❌ Error de conexión con el servidor");
    }
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2 className="register-title">Regístrate</h2>

        <div>
          <label htmlFor="nombre" className="label-register">Nombre</label>
          <input
            id="nombre"
            type="text"
            placeholder="Nombre"
            value={formData.nombre}
            onChange={handleChange}
            className="input"
          />
        </div>

        <div>
          <label htmlFor="correo" className="label-register">Correo</label>
          <input
            id="correo"
            type="email"
            placeholder="Correo"
            value={formData.correo}
            onChange={handleChange}
            className="input"
          />
        </div>

        <div>
          <label htmlFor="contraseña" className="label-register">Contraseña</label>
          <input
            id="contraseña"
            type="password"
            placeholder="Contraseña"
            value={formData.contraseña}
            onChange={handleChange}
            className="input"
          />
        </div>

        <div>
          <label htmlFor="cedula" className="label-register">Documento de identidad</label>
          <input
            id="cedula"
            type="number"
            placeholder="Documento"
            value={formData.cedula !== null ? formData.cedula : ""}
            onChange={handleChange}
            className="input"
          />
        </div>

        <div>
          <label htmlFor="telefono" className="label-register">Celular</label>
          <input
            id="telefono"
            type="number"
            placeholder="Celular"
            value={formData.telefono !== null ? formData.telefono : ""}
            onChange={handleChange}
            className="input"
          />
        </div>

        <div className='register-remember-container'>
          <p>¿Ya tienes cuenta?</p><Link className='link-to-login' to="/login">Inicia sesión</Link>
        </div>

        <div className='register-button-container'>
          <button className='register-button' type="submit">Registrarse</button>
        </div>
      </form>
    </div>
  );
};
