import axios from "axios";
import React, { Component } from "react";
import { ADMIN_SERVICE_ADD_PRODUCT } from "../constants/Api_Details";

export default class AddProductForm extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.name = React.createRef();
    this.desc = React.createRef();
    this.price = React.createRef();
    this.imgSrc = React.createRef();
    this.category = React.createRef();
  }

  makeAddproductCall = async (product) => {
    const res = await axios
      .post(ADMIN_SERVICE_ADD_PRODUCT, product)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let product = {
      name: this.name.current.value,
      details: this.desc.current.value,
      isActive: false,
      price: this.price.current.value,
      imgSrc: this.imgSrc.current.value,
      category: this.category.current.value,
    };

    console.log(product)

    this.makeAddproductCall(product);
  };

  render() {
    return (
      <div className="add-product-form">
        <form>
          <div className="form-group row">
            <label for="inputEmail3" class="col-sm-2 col-form-label">
              Name
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="inputEmail3"
                ref={this.name}
                placeholder="Product Name"
              />
            </div>
          </div>
          <div className="form-group row">
            <label for="inputPassword3" class="col-sm-2 col-form-label">
              Description
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="inputPassword3"
                ref={this.desc}
                placeholder="Description"
              />
            </div>
          </div>
          <div className="form-group row">
            <label for="inputPassword3" class="col-sm-2 col-form-label">
              Category
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="inputPassword3"
                ref={this.category}
                placeholder="Category"
              />
            </div>
          </div>{" "}
          <div className="form-group row">
            <label for="inputPassword3" class="col-sm-2 col-form-label">
              Price
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="inputPassword3"
                ref={this.price}
                placeholder="Price"
              />
            </div>
          </div>{" "}
          <div className="form-group row">
            <label for="inputPassword3" class="col-sm-2 col-form-label">
              Image Source
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="inputPassword3"
                ref={this.imgSrc}
                placeholder="Image Link"
              />
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-10">
              <button className="btn btn-primary" onClick={this.handleSubmit}>
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
