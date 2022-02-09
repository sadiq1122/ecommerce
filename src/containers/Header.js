import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

 class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user:sessionStorage.getItem("user")
    };
  }


  handleLogout =(e)=>{
    
    e.preventDefault();
    sessionStorage.clear();
    this.props.history.push("/")
  }
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link className="navbar-brand" to="/home">
            E-Commerce
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item ">
                <Link className="nav-link" to="/products">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <span className="nav-link" to="/cart">
                    Welcome {sessionStorage.getItem("user")}
                  </span>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/cart">
                    My Cart
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/orders">
                    Orders
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/" onClick={this.handleLogout}>
                    Logout
                  </Link>
                </li>
              </ul>
            </form>
          </div>
        </nav>
      </div>
    );
  }
}


export default withRouter(Header)