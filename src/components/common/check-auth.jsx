import { Navigate, useLocation } from "react-router-dom";

function CheckAuth({ isAuthenticated, user, children }) {
  const location = useLocation();

  if (
    !isAuthenticated &&
    !(location.pathname === "/login" || location.pathname === "/register")
  ) {
    return <Navigate to="/auth/login" />;
  }

  if(isAuthenticated && (location.pathname === "/login" || location.pathname==="/register")){
    if(user.role === "admin"){
        return <Navigate to="/admin/dashboard" />
    }
  }
}

export default CheckAuth;
