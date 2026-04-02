import {useContext} from "react";
import {Authcontext} from "./Authcontext";
export const useAuth=()=>{
    return useContext(Authcontext);
}