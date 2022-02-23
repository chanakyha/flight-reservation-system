import React from "react";
import { Link } from "react-router-dom";
import { authentication } from "./../firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import "./Login.css";

function Login() {
  const Signinwithgoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(authentication, provider)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="loginPage container d-flex justify-content-center">
      <div className="card">
        <h5 className="card-header">Login</h5>
        <div className="card-body">
          <h5 className="card-title">Login using Email ID and Password</h5>
          <form action="">
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                className="form-control"
                id="email-address"
                placeholder="name@example.com"
              />
            </div>
            <div className="mb-3">
              <label for="password" className="form-label">
                Enter Password
              </label>
              <input type="password" className="form-control" id="password" />
            </div>
          </form>
          <Link to="/">
            <a href="#" className="btn btn-primary">
              Login
            </a>
          </Link>
        </div>
        <div className="card-footer">
          <p>
            Create an account: &nbsp;
            <Link to="/create">
              <a href="#" className="">
                Sign Up
              </a>
            </Link>
            <button onClick={Signinwithgoogle} className="btn btn-success">
              Google Sign in
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
