import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../pages/Loading";
import { AuthContext } from "../auth/AuthProvider";

const Private = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const location=useLocation()
    // console.log(location);

    if(loading){
        return <Loading></Loading>
    }
    if(user&& user.email){
        return children
    }

    return (
        <Navigate state={location.pathname} to={"/login"}></Navigate>
    );
};

export default Private;