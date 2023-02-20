import "./index.css";

import React, { Component } from "react";
import Navbar from "../Navbar";

class LoginRegister extends Component {
  state = { isRegister: false };

  resetLoginRegister = () => {
    //console.log("clicked..")
    this.setState({ isRegister: true });
    console.log(this.state.isRegister);
  };

  resetToLogin = () => {
    console.log("register button clicked");
    this.setState({ isRegister: false });
  };

  render() {
    const { isRegister } = this.state;
    return (
      <>
        <Navbar />
        <div className="login-register-container">
          <div className="login-container">
            {isRegister ? (
              <form className="register-form">
                <h1 className="login-form">Register</h1>
                <div className="form-items">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="register-input-box"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="register-input-box"
                  />
                </div>
                <div className="form-items">
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="register-input-box"
                  />
                  <input
                    type="password"
                    placeholder="Re-type password"
                    className="register-input-box"
                  />
                </div>
                <div className="form-items">
                  <input
                    type="text"
                    placeholder="Email"
                    className="register-input-box"
                  />
                  <select name="roles" className="register-input-box">
                    <option value="select">
                      --Role you are applying for --
                    </option>
                    <option value="mgmt">Manager</option>
                    <option value="admin">Admin</option>
                    <option value="Treasurer">Treasurer</option>
                    <option value="account">Account</option>
                  </select>
                </div>

                <input
                  type="text"
                  placeholder="Phone Number"
                  className="register-input-box adjust"
                />
                <button type="button" className="button-register">
                  Register
                </button>
                <button
                  type="button"
                  className="back-to-login-btn"
                  onClick={this.resetToLogin}
                >
                  Back to Login
                </button>
              </form>
            ) : (
              <form className="login-form">
                <h1 className="login-heading">Sign In</h1>
                <input
                  type="text"
                  placeholder="Email"
                  className="login-input-box"
                />
                <input
                  type="text"
                  placeholder="Password"
                  className="login-input-box"
                />
                <button type="button" className="login-button">
                  Sign
                </button>
                <p className="forgot-pwd">Forgot your password?</p>
                <h1 className="register-desc">Don't have an account?</h1>
                <button
                  type="button"
                  className="regiser-btn"
                  onClick={this.resetLoginRegister}
                >
                  Register
                </button>
              </form>
            )}
          </div>
        </div>
      </>
    );
  }
}

export default LoginRegister;
