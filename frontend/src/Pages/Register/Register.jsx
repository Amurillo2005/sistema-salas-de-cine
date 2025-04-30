import "./Register.css"
import { Input } from "../../Components/inputs/input"

export const Register = () => {
    return (
        <>
            <div className="register-container">
                <form className="register-form">
                    <h2 className="register-title">Registrate</h2>
                    <div>
                        <label htmlFor="nombre" className="label-register">Nombre</label>
                        <Input id="nombre" type="name" placeholder="Nombre" />
                    </div>

                    <div>
                        <label htmlFor="correo" className="label-register">Correo</label>
                        <Input id="correo" type="email" placeholder="Correo" />
                    </div>

                    <div>
                        <label htmlFor="contraseña" className="label-register">Contraseña</label>
                        <Input id="contraseña" type="password" placeholder="Contraseña" />
                    </div>

                    <div>
                        <label htmlFor="documentoIdentidad" className="label-register">Documento de identidad</label>
                        <Input id="documentoIdentidad" type="number" placeholder="Contraseña" />
                    </div>

                    <div>
                        <label htmlFor="celular" className="label-register">Celular</label>
                        <Input id="celular" type="number" placeholder="Celular" />
                    </div>

                    <div className='register-remember-container'>
                        <p>¿Ya tienes cuenta?</p><p className='link-to-login'>Inicia sesión</p>
                    </div>

                    <div className='register-button-container'>
                        <button className='register-button' type="submit">Registrate</button>
                    </div>
                </form>
            </div>
        </>
    )
}
