import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {
  const isAuthenticated = !!sessionStorage.getItem('userId'); // Verifica se tem userId

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}

export default ProtectedRoute;
