import {useState} from "react";
import {Authcontext} from "./Authcontext";
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
        <Authcontext.Provider value={{isLoggedIn,login,logout}}>
        {children}
        </Authcontext.Provider>
    )
}