import { Routes, Route } from "react-router-dom";
import { Login } from "../Pages/Login/Login.jsx";
import { Register } from "../Pages/Register/Register.jsx";
import { Cartelera } from "../Pages/Cartelera/Cartelera.jsx";
import { ClienteLayout } from "../Pages/Layouts/ClienteLayout.jsx";
import { CajeroLayout } from "../Pages/Layouts/CajeroLayout.jsx";
import { HomeCliente } from "../Pages/HomeCliente/HomeCliente.jsx";
import { HomeCajero } from "../Pages/HomeCajero/HomeCajero.jsx";
import { Pronto } from "../Pages/Pronto/Pronto.jsx";
import DetallePelicula from "../Pages/DetallePelicula/DetallePelicula.jsx";
import { PrivateRoute } from "../Components/PrivateRoute";
import  MedioPago from "../Pages/MedioPago/MedioPago.jsx";
import CajeroMedioPago from "../Pages/MedioPago/CajeroMedioPago.jsx";

// (opcional) rutas protegidas futuras
// import Comprar from "../Pages/Comprar/Comprar.jsx";
// import MisCompras from "../Pages/MisCompras/MisCompras.jsx";

export const Rutas = () => {
  return (
    <Routes>
      {/* Público: Login y Registro */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Público: ClienteLayout con vistas públicas */}
      <Route path="/" element={<ClienteLayout />}>
        <Route index element={<Cartelera />} />
        <Route path="pronto" element={<Pronto />} />
        <Route path="detalle/:id" element={<DetallePelicula />} />
        <Route path="medio-pago/:id_funcion" element={<MedioPago />} />
        <Route path="cajero-medio-pago" element={<CajeroMedioPago />} />
        

        {/* Protegido: Solo cliente puede comprar/ver compras */}
        <Route element={<PrivateRoute allowedRoles={['cliente']} />}>
          {/* <Route path="comprar/:id" element={<Comprar />} />
          <Route path="mis-compras" element={<MisCompras />} /> */}
        </Route>
      </Route>

      {/* Privado: Cajero layout */}
      <Route element={<PrivateRoute allowedRoles={['cajero']} />}>
        <Route path="/cajero" element={<CajeroLayout />}>
          <Route index element={<HomeCajero />} />
          <Route path="cartelera" element={<Cartelera />} />
          <Route path="pronto" element={<Pronto />} />
        </Route>
      </Route>
    </Routes>
  );
};
