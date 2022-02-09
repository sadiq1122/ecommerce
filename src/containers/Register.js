import axios from "axios";
import React, { Component } from "react";
import { GATEWAY_SERVICE_REGISTER_API } from "../constants/Api_Details";

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.email = React.createRef();
    this.firstName = React.createRef();
    this.lastName = React.createRef();
    this.dob = React.createRef();
    this.country = React.createRef();
    this.phone = React.createRef();
    this.password = React.createRef();
  }

  makeRegisterCall = async (user) => {
    const res = await axios
      .post(GATEWAY_SERVICE_REGISTER_API, user)
      .then((response) => {
        console.log(response);
        this.setState({ message: "You Have been Registered Successfully" });
        setTimeout(() => this.props.history.push("/"), 1000);
      })
      .catch((err) => console.log(err));
  };

  handleRegister = (e) => {
    e.preventDefault();
    const user = {
      firstName: this.firstName.current.value,
      lastName: this.lastName.current.value,
      email: this.email.current.value,
      dob: this.dob.current.value,
      country: this.country.current.value,
      phone: this.phone.current.value,
      password: this.password.current.value,
    };

    console.log(user)
    this.makeRegisterCall(user);
  };

  render() {
    return (
      <div className="parent">
        <div className="jumbotron">
          <center>
            {" "}
            <h3 className="display-3">Register</h3>
          </center>
        </div>
        <br />
        <div className="login-form">
          <form>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Email </label>
              <div className="col-sm-10">
                <input
                  type="email"
                  className="form-control"
                  ref={this.email}
                  placeholder="email"
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Firstname </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  ref={this.firstName}
                  placeholder="firstname"
                />
              </div>
            </div>{" "}
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Lastname </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  ref={this.lastName}
                  placeholder="lastname"
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Country</label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  ref={this.country}
                  placeholder="country"
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Phone</label>
              <div className="col-sm-10">
                <input
                  type="number"
                  className="form-control"
                  ref={this.phone}
                  placeholder="phone number"
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">DOB</label>
              <div className="col-sm-10">
                <input type="date" className="form-control" ref={this.dob} />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Password</label>
              <div className="col-sm-10">
                <input
                  type="password"
                  className="form-control"
                  ref={this.password}
                />
              </div>
            </div>
            <div className="form-group row">
              <div className="col-sm-10">
                <button
                  className="btn btn-success"
                  onClick={this.handleRegister}
                >
                  Register
                </button>
                <h5 style={{ color: "green" }}>{this.state.message}</h5>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
