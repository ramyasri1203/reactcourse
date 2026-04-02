import {Link} from "react-router-dom";
import "./Navbar.css";
//import {useAuth} from "./useAuth";
import {useContext} from "react";
import {Authcontext} from "./Authcontext";

function Navbarr(){
    // const {logout} = useAuth();
    const{logout}=useContext(Authcontext);
    return(
        <>
        <ul className="navbar">
            <li>
                <Link className="link" to="/">Home</Link>

            </li>
            <li>
                <Link className="link" to="/Todoo">Todoo</Link>
            </li>
                <li>
                    <Link className="link" to="/Products">Products</Link>
            </li>
            <li><Link className="link" to="/Orders">Orders</Link>
            </li>
            <li>
                <Link className="link" to="/cart">Cart</Link>
            </li>
        <li>
            <button onClick={logout}>Logout</button>
        </li>
         </ul>
        </>


    )
}
export default Navbarr;
