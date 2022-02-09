import axios from "axios";
import React, { Component } from "react";
import { GATEWAY_SERVICE_LOGIN_API } from "../constants/Api_Details";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.username = React.createRef();
    this.password = React.createRef();
    this.isAdmin = React.createRef();
  }

  authenticate = async (loginData, isAdmin) => {
    const response = await axios
      .post(GATEWAY_SERVICE_LOGIN_API, loginData)

      .catch((err) => console.log(err));

    if (
      response.data.code === 200 &&
      isAdmin === true &&
      response.data.response.customerId === "617f8777cf81d3de042ffaad"
    ) {
      sessionStorage.setItem("isLoggedIn", "true");
      sessionStorage.setItem("isAdmin", "true");
      sessionStorage.setItem("user", response.data.response.name);

      this.setState({
        message: "Logged In Successfully",
      });

      setTimeout(() => this.props.history.push("/admin"), 800);
    } else if (response.data.code === 200 && isAdmin === false) {
      sessionStorage.setItem("isLoggedIn", "true");
      sessionStorage.setItem("customerId", response.data.response.customerId);
      sessionStorage.setItem("user", response.data.response.name);
      this.setState({
        message: "Logged In Successfully",
      });

      setTimeout(() => this.props.history.push("/home"), 800);
    } else {
      sessionStorage.setItem("isLoggedIn", "false");
    }

    console.log(response);
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const loginData = {
      email: this.username.current.value,
      password: this.password.current.value,
    };

    const isAdmin = this.isAdmin.current.checked;
    console.log(isAdmin);
    console.log(loginData);

    this.authenticate(loginData,isAdmin);
  };

  render() {
    return (
      <div className="parent">
        <div className="jumbotron">
          <center>
            {" "}
            <h3 className="display-3">Login</h3>
          </center>
        </div>
        <br />
        <div className="login-form">
          <form>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Username </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  ref={this.username}
                  placeholder="username"
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Password</label>
              <div className="col-sm-10">
                <input
                  type="password"
                  className="form-control"
                  ref={this.password}
                  placeholder="password"
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Admin</label>
              <div className="col-sm-10">
                <input
                  type="checkbox"
                  className="form-control my-radio"
                  ref={this.isAdmin}
                  onChange={this.handleChecked}
                />
              </div>
            </div>
            <div className="form-group row">
              <div className="col-sm-10">
                <button className="btn btn-success" onClick={this.handleSubmit}>
                  Login
                </button>

                <h5 style={{color:'green'}}>{this.state.message}</h5>
              </div>
            </div>
            <div className="form-group row">
              <div className="col-sm-10">
                Not Registered yet! Please Register here
                <br />
                <br />
                <button
                  className="btn btn-danger"
                  onClick={(e) => {
                    e.preventDefault();
                    this.props.history.push("/signup");
                  }}
                >
                  Register
                </button>
                {this.state.isAdmin}
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
