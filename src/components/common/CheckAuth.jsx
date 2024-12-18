import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";

function CheckAuth({ isAuthenticated, user, children }) {
  const location = useLocation();

  //   Check if the user is not authenticated then redirect to the sign-in page
  if (
    !isAuthenticated &&
    !(
      location.pathname.includes("/signIn") ||
      location.pathname.includes("/signUp")
    )
  ) {
    return <Navigate to="/userAuth/signIn" />;
  }

  //   Check if the user is authenticated and the user is an admin then redirect to the admin dashboard
  if (
    (isAuthenticated && location.pathname.includes("/signIn")) ||
    location.pathname.includes("/signUp")
  ) {
    if (user?.role === "admin") return <Navigate to="/admin/dashboard" />;
    return <Navigate to="/user/home" />;
  }

  //   Check if the user is authenticated and the user is not an admin then redirect to the user home page
  if (
    isAuthenticated &&
    user?.role !== "admin" &&
    location.pathname.includes("admin")
  ) {
    return <Navigate to="/unauth-page" />;
  }

  //   Check if the user is authenticated and the user is an admin then redirect to the admin dashboard
  if (
    isAuthenticated &&
    user?.role === "admin" &&
    location.pathname.includes("user")
  ) {
    return <Navigate to="/admin/dashboard" />;
  }

  return children;
}

CheckAuth.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  user: PropTypes.object,
  children: PropTypes.node,
};

export default CheckAuth;
