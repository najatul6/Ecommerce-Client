import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";

function CheckAuth({ isAuthenticated, user, children }) {
  const location = useLocation();
  const currentPath = location.pathname;

  console.log(currentPath, isAuthenticated);

  // Not authenticated and not on the sign-in or sign-up page
  if (
    !isAuthenticated &&
    !currentPath.includes("/signIn") &&
    !currentPath.includes("/signUp")
  ) {
    return <Navigate to="/auth/signIn" replace />;
  }

  // Authenticated and navigating to sign-in or sign-up
  if (
    isAuthenticated &&
    (currentPath.includes("/signIn") || currentPath.includes("/signUp"))
  ) {
    return user?.role === "admin" ? (
      <Navigate to="/admin/dashboard" replace />
    ) : (
      <Navigate to="/shop/home" replace />
    );
  }

  // Authenticated, non-admin user trying to access admin paths
  if (
    isAuthenticated &&
    user?.role !== "admin" &&
    currentPath.includes("/admin")
  ) {
    return <Navigate to="/un-authorization" replace />;
  }

  // Authenticated admin user trying to access non-admin paths
  if (
    isAuthenticated &&
    user?.role === "admin" &&
    currentPath.includes("/user")
  ) {
    return <Navigate to="/admin/dashboard" replace />;
  }

  // If none of the above conditions are met, render children
  return children;
}

CheckAuth.propTypes = {
  isAuthenticated: PropTypes.bool,
  user: PropTypes.object,
  children: PropTypes.node,
};

export default CheckAuth;
