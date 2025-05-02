import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

export const RutaProtegida = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return null; // ⏳ Esperar a que se cargue el contexto

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};
