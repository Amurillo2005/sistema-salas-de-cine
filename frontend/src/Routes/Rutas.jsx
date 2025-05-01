import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "../Pages/Login/Login.jsx";
import { Register } from "../Pages/Register/Register.jsx";
import { Cartelera } from "../Pages/Cartelera/Cartelera.jsx";
import { ClienteLayout } from "../Pages/Layouts/ClienteLayout.jsx";
import { HomeCliente } from "../Pages/HomeCliente/HomeCliente.jsx";
import { HomeCajero } from "../Pages/HomeCajero/HomeCajero.jsx";
import { CajeroLayout } from "../Pages/Layouts/CajeroLayout.jsx";
import { Pronto } from "../Pages/Pronto/Pronto.jsx";
import DetallePelicula from "../Pages/DetallePelicula/DetallePelicula.jsx";

export const Rutas = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<ClienteLayout />}>
                        <Route index element={<Cartelera />} />
                        <Route path="pronto" element={<Pronto />} />
                        <Route path="DetallePelicula" element={<DetallePelicula />} />

                    </Route>

                    <Route path="/cajero" element={<CajeroLayout />}>
                        <Route index element={<HomeCajero />} />
                        <Route path="cartelera" element={<Cartelera />} />
                        <Route path="pronto" element={<Pronto />} />
                    </Route>

                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </Router>
        </>
    )
}
