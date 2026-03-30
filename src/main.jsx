import { createRoot } from "react-dom/client";
import "./Todo.css";
import App from "./App.jsx";
import {AuthProvider} from "./AuthProvider";
import {BrowserRouter,Routes,Route}from "react-router-dom"
createRoot(document.getElementById("root")).render(
 <BrowserRouter>
 <AuthProvider>
  <App />
  </AuthProvider>
 </BrowserRouter>
  
);
