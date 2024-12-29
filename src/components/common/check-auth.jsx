import { Navigate, useLocation } from "react-router-dom";

function CheckAuth({ isAuthenticated, user, children }) {
  const location = useLocation();

//  if user is not authenticated and the current path is not login or register, redirect to login page  
  if (
    !isAuthenticated &&
    !(
      location.pathname.includes === "/login" ||
      location.pathname.includes === "/register"
    )
  ) {
    return <Navigate to="/auth/login" />;
  }

//  if user is authenticated and the current path is login or register, redirect to dashboard page
  if (
    isAuthenticated &&
    (location.pathname.includes === "/login" ||
      location.pathname.includes === "/register")
  ) {
    if (user?.role === "admin") {
      return <Navigate to="/admin/dashboard" />;
    } else {
      return <Navigate to="/shop/home" />;
    }
  }

//  if user is authenticated and the current path is admin, redirect to unauth page  
  if (
    isAuthenticated &&
    user?.role !== "admin" &&
    location.pathname.includes === "admin"
  ) {
    return <Navigate to="/unauth-page" />;
  }

// if user is authenticated and the current path is shop, redirect to admin dashboard page   
  if (
    isAuthenticated &&
    user?.role === "admin" &&
    location.pathname.includes === "shop"
  ) {
    return <Navigate to="/admin/dashboard" />;
  }

  return <>{children}</>;
}

export default CheckAuth;
