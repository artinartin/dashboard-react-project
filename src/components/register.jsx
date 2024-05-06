import "../css/login.css";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import {formTitle} from "./reset";
//input validation

function Register() {
  const handleRegister = async () => {
    event.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let email = document.getElementById("email").value;
    let errorsCount = 0;
    if (username == "") {
      document.getElementById("username").classList = "form-control is-invalid";
      document.getElementById("username-error").style.display = "flex";
      errorsCount++;
    } else {
      document.getElementById("username").classList = "form-control is-valid";
      document.getElementById("username-error").style.display = "none";
    }

    if (password == "" || password.length < 4) {
      document.getElementById("password").classList = "form-control is-invalid";
      document.getElementById("password-error").style.display = "flex";
      errorsCount++;
    } else {
      document.getElementById("password").classList = "form-control is-valid";
      document.getElementById("password-error").style.display = "none";
    }

    if (email == "") {
      document.getElementById("email").classList = "form-control is-invalid";
      document.getElementById("email-error").style.display = "flex";
      errorsCount++;
    } else {
      document.getElementById("email").classList = "form-control is-valid";
      document.getElementById("email-error").style.display = "none";
    }

    if (password != passwordConfirmation.value) {
      document.getElementById("passwordConfirmation").classList =
        "form-control is-invalid";
      document.getElementById("passwordConfirmation-error").style.display =
        "flex";
      errorsCount++;
    } else {
      document.getElementById("passwordConfirmation").classList =
        "form-control is-valid";
      document.getElementById("passwordConfirmation-error").style.display =
        "none";
    }
    if (errorsCount == 0) {
      await axios
        .post("https://api.escuelajs.co/api/v1/users", {
          name: username,
          email: email,
          password: password,
          avatar: "https://picsum.photos/800",
        })
        .then((response) => {
          alert("Register Successful");
        });
    }
  };
  return (
    <>
      <div className="d-flex justify-content-center">
        <form className="card shadow-sm rounded mt-5">
          <div className="d-flex align-items-center">
            <div>
              <img src={logo} className="form-img" />
            </div>
            <h2 className="login-title">{formTitle}</h2>
          </div>
          <h6 className="mt-2">Please enter your user information.</h6>
          <div className="mt-4">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              style={{ width: "300px !important" }}
            />
            <div className="invalid-feedback" id="username-error">
              username is empty!
            </div>
          </div>

          <div className="mt-4">
            <label htmlFor="email" className="form-label">
              E-mail
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              style={{ width: "300px !important" }}
            />
            <div className="invalid-feedback" id="email-error">
              email is empty!
            </div>
          </div>

          <div className="mt-4">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              style={{ width: "300px !important" }}
            />
            <div className="invalid-feedback" id="password-error">
              password don't have correct format!
            </div>
          </div>

          <div className="mt-4">
            <label htmlFor="passwordConfirmation" className="form-label">
              Confirm
            </label>
            <input
              type="password"
              className="form-control"
              id="passwordConfirmation"
              style={{ width: "300px !important" }}
            />
            <div className="invalid-feedback" id="passwordConfirmation-error">
              Confirm password confirmation does not match!
            </div>
          </div>

          <div className="form-check mt-3">
            <input
              className="form-check-input"
              type="checkbox"
              id="checkbox1"
            />
            <label className="form-check-label" htmlFor="checkbox1">
              By creating an account, you agree the <br />
              <a href="" style={{ color: "#624BFF", textDecoration: "none" }}>
                terms and conditions.
              </a>
            </label>
          </div>
          <button
            className="btn btn-info w-100 mt-3"
            onClick={handleRegister}
            type="submit"
          >
            Signup
          </button>
          <div className="row mt-3">
            <div className="col text-center">
              <Link to={"/login"} style={{ textDecoration: "none" }}>
                <a href="" style={{ color: "#624BFF", textDecoration: "none" }}>
                  Already member? Login
                </a>
              </Link>
            </div>
            <div className="col text-center">
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

export default Register;
