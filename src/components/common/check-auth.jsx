import { Navigate, useLocation } from "react-router-dom";

import PropTypes from 'prop-types';

function CheckAuth({ isAuthenticated, user, children }) {
    const location = useLocation();
    
    if (
        !isAuthenticated &&
        !(location.pathname === "/login" || location.pathname === "/register")
    ) {
        return <Navigate to="/auth/login" />;
    }

    return children;
}

// PropTypes validation
CheckAuth.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    user: PropTypes.object,
    children: PropTypes.node.isRequired,
};

export default CheckAuth;
