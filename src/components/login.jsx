import "../css/login.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import DashboardContext from "./dashboardContext";
import { useContext } from "react";
import logo from "../assets/logo.png";
import {formTitle} from "./reset";

//input validation
import { useNavigate } from "react-router-dom";

function Login() {
  const context = useContext(DashboardContext);
  const naviagate = useNavigate();
  const [validated, setValidated] = useState(false);
  const getDataByAccessToken = async (accessToken) => {
    await axios
      .get("https://api.escuelajs.co/api/v1/auth/profile", {
        headers: {
          Authorization: "Bearer " + accessToken,
        },
      })
      .then((response) => {
        const user = {
          username: response.data.name,
          email: response.data.email,
          password: response.data.password,
        };
        localStorage.setItem("isLogin", "true");
        localStorage.setItem("loggedUser", JSON.stringify(user));
        naviagate("/dashboard");
      });
  };
  const handleLogin = async () => {
    event.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    await axios
      .post(`https://api.escuelajs.co/api/v1/auth/login`, {
        email: email,
        password: password,
      })
      .then(async (response) => {
        const accessToken = response.data.access_token;
        getDataByAccessToken(accessToken);
      })
      .catch((error) => {
        //error handling
      });
  };
  return (
    <>
      <div className="d-flex justify-content-center">
        <form
          noValidate
          validated="false"
          className="card shadow-sm rounded mt-5"
        >
          <div className="d-flex align-items-center">
            <div>
              <img src={logo} className="form-img" />
            </div>
            <h2 className="login-title">{formTitle}</h2>
          </div>
          <h6 className="mt-2">Please enter your user information.</h6>
          <div className="mt-4">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control is-valid"
              id="email"
              style={{ width: "300px !important" }}
            />
          </div>
          <div className="mt-4">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="text"
              className="form-control is-invalid"
              id="password"
              style={{ width: "300px !important" }}
            />
          </div>
          <div className="form-check mt-3">
            <input
              className="form-check-input"
              type="checkbox"
              id="checkbox1"
            />
            <label className="form-check-label" htmlFor="checkbox1">
              Remember Me
            </label>
          </div>
          <button
            className="btn btn-info w-100 mt-3"
            onClick={handleLogin}
            type="submit"
          >
            Signin
          </button>
          <div className="row mt-3">
            <div className="col-6 text-center">
              <Link to={"/register"} style={{ textDecoration: "none" }}>
                <a href="" style={{ color: "#624BFF", textDecoration: "none" }}>
                  Create An Account
                </a>
              </Link>
            </div>
            <div className="col-6 text-center">
              <Link to={"/forgetPassword"} style={{ textDecoration: "none" }}>
                <a href="" style={{ color: "black", textDecoration: "none" }}>
                  {" "}
                  Forgot Password
                </a>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
