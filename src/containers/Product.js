import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/styles.css";

export default class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="col-12 col-md-3 col-sm-5">
        <div className="product">
          <Link
            className="product-link"
            to={`/products/${this.props.data._id}`}
          >
            <img
              className="product-image"
              src={this.props.data.imgSrc}
              alt="t-shirt"
            ></img>

            <div className="product-meta">
              <center>
                <h6 className="product-name">{this.props.data.name}</h6>
              </center>
              <div className="price left">
                <center>
                  {" "}
                  <h6 className="product-price">
                    ${this.props.data.price}
                  </h6>{" "}
                </center>
              </div>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}
