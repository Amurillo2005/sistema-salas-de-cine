import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/authContext';

export const PrivateRoute = ({ allowedRoles }) => {
  const { user } = useAuth();

  // Si no hay usuario, redirige a login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Si el rol del usuario está permitido, renderiza la ruta hija
  if (allowedRoles.includes(user.rol)) {
    return <Outlet />;
  }

  // Si el rol no está permitido, redirige (puedes enviarlo a / o /403)
  return <Navigate to="/" replace />;
};
