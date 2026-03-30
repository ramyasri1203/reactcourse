import React from "react";
import Todoo from "./Todoo";
import Navbarr from "./Navbarr";
import Home  from "./Home";
import Products from "./Products";
import Orders from "./Orders";
import Cart from "./Cart";
import {Routes,Route}from "react-router-dom";
import Pagenotfound from "./Pagenotfound";
// import {useAuth} from "./useAuth";
// import {BrowserRouter,Routes,Route,Link}from "react-router-dom";
import Login from './Login';
import Signup from './Signup';
import PrivateRoute from "./PrivateRoute";
import {AuthContext} from "./AuthContext";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

function App() {
  const [isLoggedIn,setIsLoggedIn]=useState(false);
  const navigate=useNavigate();

  const login=()=>{
    setIsLoggedIn(true);
    navigate("/",{replace:true});
  };

  const logout=()=>{
    setIsLoggedIn(false);
    navigate("/login",{replace:true});
  };

    return (
    <>

    <AuthContext.Provider value={{isLoggedIn,login,logout}}>

    {/* <div className="container"> */}
      {/* <Todoo /> */} 
      {isLoggedIn && <Navbarr/>}
    {/* </div> */}
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
       <Route path="/" element={
      <PrivateRoute>
        <Home/>
      </PrivateRoute>
       }/>
      {/* <Route path="/" element={<Home/>}/> */}
      <Route path="/Todo" element={
        <PrivateRoute>
        <Todoo/>
        </PrivateRoute>
        }/>
      <Route path="/Products" element={
        <PrivateRoute>
        <Products/>
        </PrivateRoute>
        }/>
      <Route path="/Orders" element={
        <PrivateRoute>
        <Orders/>
        </PrivateRoute>}/>
      <Route path="/cart" element={
        <PrivateRoute>
        <Cart/>
        </PrivateRoute>}/>
      <Route path="*" element={<Pagenotfound/>}/>
    </Routes>
    </AuthContext.Provider>
    </>

    
  );
}

export default App;
