import React, { Component } from "react";
import { Switch, Route } from "react-router";
import AddProductForm from "./AddProductForm";
import BulkUpload from "./BulkUpload";

export default class AdminProductsPage extends Component {
  render() {
    return (
      <div className="admin-products">
        <div className="jumbotron">
          <h2 className="display-3">Products</h2>
        </div>

        <br />

        <div className="row" style={{ marginLeft: "120px" }}>
          <div className="col">
            {" "}
            <button className="btn btn-danger">List Products</button> <br />
          </div>
          <div className="col">
            {" "}
            <button
              className="btn btn-danger"
              onClick={() => this.props.history.push("/admin/products/add")}
            >
              Add Product
            </button>
          </div>
          <div className="col">
            {" "}
            <button className="btn btn-danger" onClick={()=>this.props.history.push('/admin/products/bulkAdd')}>Bulk Upload</button>
          </div>
        </div>

        <div className="content">
          <Switch>
            <Route
              path="/admin/products/add"
              exact
              component={AddProductForm}
            ></Route>

            <Route
              path="/admin/products/bulkAdd"
              exact
              component={BulkUpload}
            ></Route>
          </Switch>
        </div>
      </div>
    );
  }
}
