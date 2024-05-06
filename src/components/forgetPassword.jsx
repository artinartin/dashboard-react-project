import "../css/login.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import DashboardContext from "./dashboardContext";
import { useContext } from "react";
//input validation
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import {formTitle} from "./reset";

function ForgetPassword() {
  const naviagate = useNavigate();

  const handleChangePassword = async () => {
    event.preventDefault();
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

          <h6 className="mt-2">
            Don't worry, we'll send you an email to reset your password.
          </h6>
          <div className="mt-4">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control "
              id="username"
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
            onClick={handleChangePassword}
            type="submit"
          >
            Reset Password
          </button>
          <div className="row mt-3">
            <Link to={"/register"} style={{ textDecoration: "none" }}>
              <div>
                Don't have an account?
                <a href="" style={{ color: "#624BFF", textDecoration: "none" }}>
                  <span> </span>Sign Up
                </a>
              </div>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default ForgetPassword;
