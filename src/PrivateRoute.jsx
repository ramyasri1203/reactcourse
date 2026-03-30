import {useContext} from "react";
import {AuthContext} from "./AuthContext";
import {Navigate} from "react-router-dom";
function PrivateRoute({children}){
    const {isLoggedIn}=useContext(AuthContext);
    return(
        isLoggedIn ? children:<Navigate to="/login" replace/>

    )
}; 
export default PrivateRoute;
