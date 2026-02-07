import { authHelper } from "@api";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  
  const { getToken } = authHelper;
  const token = getToken();

  if (!token) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
