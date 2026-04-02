// import {useAuth} from "./useAuth";
// 


import axios from "axios";
import { useContext, useState } from "react";
import { Authcontext } from "./Authcontext";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {

  const { login } = useContext(Authcontext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:3000/api/auth/login", form)
      .then((res) => {
        console.log(res.data);

        login();

       
        navigate("/home");
      })
      .catch((error) => {
        console.log(error.response?.data);

       
        alert(error.response?.data?.message || "login failed");
      });
  };

  return (
    <div className="login-container">
      <div className="login-box">

        <form onSubmit={handleSubmit}>
          <h2>Login</h2>

          <input
            type="text"
            name="username"
            placeholder="Enter username"
            value={form.username}
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={form.password}
            onChange={handleChange}
          />

          <button type="submit">Login</button>
          <p>
            New user? <Link to="/signup">Create account</Link>
          </p>
    

        </form>

      </div>
    </div>
  );
}

export default Login;