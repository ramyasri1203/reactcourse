import {useContext} from "react";
import {Authcontext} from "./Authcontext";
import {Navigate} from "react-router-dom";
function PrivateRoute({children}){
    const {isLoggedIn}=useContext(Authcontext);
    return(
        isLoggedIn ? children:<Navigate to="/login" replace/>

    )
}; 
export default PrivateRoute;
