import { Navigate, useLocation } from "react-router-dom";

function CheckAuth({ isAuthenticated, user, children }) {
  const location = useLocation();

  if (
    !isAuthenticated &&
    !(
      location.pathname.includes("/signIn") ||
      location.pathname.includes("/signUp")
    )
  ) {
    return <Navigate to="/userAuth/signIn" />;
  }

  if (
    (isAuthenticated && location.pathname.includes("/signIn")) ||
    location.pathname.includes("/signUp")
  ) {
    if (user?.role === "admin") return <Navigate to="/admin/dashboard" />;
    return <Navigate to="/user/home" />;
  }

  if (
    isAuthenticated &&
    user?.role !== "admin" &&
    location.pathname.includes("admin")
  ) {
    return <Navigate to="/unauth-page" />;
  }

  if (
    isAuthenticated &&
    user?.role === "admin" &&
    location.pathname.includes("user")
  ) {
    return <Navigate to="/admin/dashboard" />;
  }
}

export default CheckAuth;
