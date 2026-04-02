import {useState} from "react";
import {AuthContext} from "./AuthContext";
import {useNavigate} from "react-router-dom";

export const AuthProvider=({ children }) => {
    const [isLoggedIn,setIsLoggedIn]=useState(false);
    const navigate=useNavigate()
    const login=()=>{
        setIsLoggedIn(true);
        navigate("/",{replace:true});
    };
    const logout=()=>{
        setIsLoggedIn(false);
        navigate("/login",{replace:true});
    };
    return(
        <AuthContext.Provider value={{isLoggedIn,login,logout}}>
        {children}
        </AuthContext.Provider>
    )
}