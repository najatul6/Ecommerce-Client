import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";

function CheckAuth({ isAuthenticated = false, user, children }) {
  const location = useLocation();
  const currentPath = location.pathname;

  console.log(currentPath, isAuthenticated);

  // Redirect unauthenticated users to the sign-in page, unless already on sign-in/sign-up
  if (
    !isAuthenticated &&
    !currentPath.includes("/signIn") &&
    !currentPath.includes("/signUp")
  ) {
    return <Navigate to="/auth/signIn" replace={true} />;
  }

  // Redirect authenticated users trying to access sign-in/sign-up
  if (
    isAuthenticated &&
    (currentPath.includes("/signIn") || currentPath.includes("/signUp"))
  ) {
    return user?.role === "admin" ? (
      <Navigate to="/admin/dashboard" replace={true} />
    ) : (
      <Navigate to="/shop/home" replace={true} />
    );
  }

  // Prevent non-admin users from accessing admin paths
  if (isAuthenticated && user?.role !== "admin" && currentPath.includes("admin")) {
    return <Navigate to="/un-authorization" replace={true} />;
  }

  // Prevent admin users from accessing non-admin paths
  if (isAuthenticated && user?.role === "admin" && currentPath.includes("user")) {
    return <Navigate to="/admin/dashboard" replace={true} />;
  }

  // Render children if no redirect conditions are met
  return children;
}

CheckAuth.propTypes = {
  isAuthenticated: PropTypes.bool,
  user: PropTypes.object,
  children: PropTypes.node,
};

export default CheckAuth;
