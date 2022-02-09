import React, { Component } from "react";
import axios from "axios";
import {
  CART_SERVICE_BUY_PRODUCT_FROM_CART_API,
  CART_SERVICE_REMOVE_FROM_CART_API,
  CART_SERVICE_UPDATE_CART_API,
} from "../constants/Api_Details";
import { deleteFromCart } from "../redux/actions/Actions";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router";

class CartItem extends Component {
  handleRemoveCartItem = (e) => {
    this.makeRemoveActionCall();
  };

  makeRemoveActionCall = async () => {
    const response = await axios
      .get(
        CART_SERVICE_REMOVE_FROM_CART_API +
          "productId=" +
          this.props.data.productId +
          `&customerId=` +
          sessionStorage.getItem("customerId")
      )
      .catch((err) => console.log(err));

    console.log(response);
    if (response.data.message === "Success") {
      //
      this.props.deleteFromCart(this.props.data.productId);
      console.log("fetch");
      this.props.updateCart();
      // this.fetchCart();

      console.log(response);
    }
  };

  makeQuantityUpdateCall = async (quantity) =>
    await axios
      .post(
        CART_SERVICE_UPDATE_CART_API +
          "productId=" +
          this.props.data.productId +
          "&customerId=" +
          sessionStorage.getItem("customerId") +
          "&quantity=" +
          quantity
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

  handleQuantityChange = (e) => {
    var quantity = e.target.value;
    console.log(quantity);
    this.props.updateCart();
    this.makeQuantityUpdateCall(quantity);
    this.props.updateCart();
  };

  makeBuyProductFromCartCall = async () => {
    await axios
      .post(
        CART_SERVICE_BUY_PRODUCT_FROM_CART_API +
          "productId=" +
          this.props.data.productId +
          "&customerId=" +
          sessionStorage.getItem("customerId")
      )
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  buyHandle = () => {
    console.log("handle buy");
    const product = this.props.data;
    this.makeBuyProductFromCartCall();
    this.props.history.push({
      pathname: "/cart/buy",
      state: {
        data: [product],
      },
    });
  };

  render() {
    return (
      <div className="cart-item">
        <div className="cart-item-child">
          <h6 style={{ color: "#111244" }}>
            Product Id : <br /> {this.props.data.productId}
          </h6>
        </div>
        <div className="cart-item-child">
          <img
            className="cart-product-image"
            src={this.props.data.imgSrc}
            alt="t-shirt"
          ></img>
        </div>
        <div className="cart-item-child">
          <h6>{this.props.data.productName}</h6>
          <h6>Category : Clothing</h6>
        </div>{" "}
        <div className="cart-item-child">
          <h6>Price - $ {this.props.data.price}</h6>
        </div>
        <div className="cart-item-child">
          <h6>
            Quantity :{" "}
            <input
              className="quantity-input"
              min="1"
              defaultValue={this.props.data.quantity}
              type="number"
              onChange={this.handleQuantityChange}
            ></input>
          </h6>
        </div>
        <div className="cart-item-child">
          <h6 style={{ color: "red" }}>
            {" "}
            Total Price : $ {this.props.data.totalPrice}
          </h6>
        </div>
        <div className="cart-item-child">
          <button className="btn btn-success cart-btn" onClick={this.buyHandle}>
            Buy
          </button>{" "}
          <br />
          <button
            className="btn btn-warning"
            onClick={this.handleRemoveCartItem}
          >
            Remove Item
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteFromCart: (id) => dispatch(deleteFromCart(id)),
  };
};

export default compose(withRouter, connect(null, mapDispatchToProps))(CartItem);
