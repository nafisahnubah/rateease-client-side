import { useContext } from "react";
import AuthContext from "./context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";
import LoadingSpinner from "./components/LoadingSpinner";
import PropTypes from "prop-types";

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <LoadingSpinner></LoadingSpinner>
    }

    if(user){
        return children;
    }
    return <Navigate to={'/login'} state={location?.pathname}></Navigate>
};

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

export default PrivateRoute;