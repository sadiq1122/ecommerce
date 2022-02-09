import React, { Component } from "react";

export default class DashBoard extends Component {
  handleProducts = () => {
    this.props.history.push("/admin/products");
  };
  render() {
    return (
      <div className="dashboard">
        <div className="jumbotron admin">
          <h2 className="display-3"> Admin Dashboard</h2>
        </div>

        <center>
          <button className="btn btn-warning admin-btn">Users</button>
          <button
            className="btn btn-warning admin-btn"
            onClick={this.handleProducts}
          >
            Products
          </button>
          <button className="btn btn-warning admin-btn">Orders</button>
          <button className="btn btn-warning admin-btn">Reports</button>
        </center>
      </div>
    );
  }
}
