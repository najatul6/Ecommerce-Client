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
    if(user?.role === "admin"){
        return <Navigate to="/admin/dashboard" />
    }else{
        return <Navigate to="/shop/home" />
    }
  }

  if(isAuthenticated && user?.role !== "admin" && location.pathname.includes === 'admin'){
    return <Navigate to="/unauth-page" />
  }

  if(isAuthenticated && user?.role === "admin" && location.pathname.includes ==='shop'){
    
  }
}

export default CheckAuth;
