import React, { Component } from "react";
import { setTotalPrice, updateCart } from "../redux/actions/Actions";
import "../styles/styles.css";
import CartItem from "./CartItem";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router";
import axios from "axios";
import {
  CART_SERVICE_BUY_ALL_PRODUCTS_FROM_CART_API,
  CART_SERVICE_GET_CART_API,
} from "../constants/Api_Details";

class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount = () => {
    this.fetchCart();
  };

  makeBuyAllCall = async () => {
    const res = await axios
      .post(CART_SERVICE_BUY_ALL_PRODUCTS_FROM_CART_API + "customerId="+ sessionStorage.getItem('customerId'))
      .then((response) => console.log(response))
      .catch((err) => console.log(err));

    console.log(res);
  };

  handleBuyCart = () => {
    this.fetchCart();

    const checkoutlist = this.props.cartItems;
    this.makeBuyAllCall();
    this.props.history.push({
      pathname: "/cart/buy",
      state: {
        data: checkoutlist,
      },
    });
    this.fetchCart();
  };

  fetchCart = async () => {
    const response = await axios
      .get(CART_SERVICE_GET_CART_API+"customerId="+sessionStorage.getItem('customerId'))
      .catch((err) => console.log(err));

    let total = response.data.response.reduce(
      (acc, item) => acc + item.totalPrice,
      0
    );
    total = Math.round(total);
    this.props.setCart(response.data.response);
    this.props.setPrice(total);

    console.log(response);
  };
  render() {
    const cartItemList = this.props.cartItems.map((item) => (
      <CartItem key={item.cartId} updateCart={this.fetchCart} data={item} />
    ));
    return (
      <div className="cart">
        <div className="jumbotron">
          <h3 className="display display-4" style={{ marginLeft: "20px" }}>
            My Cart
          </h3>
        </div>

        {cartItemList}

        <div className="cart-total">
          <h3 className="cart-total-item">Total -$ {this.props.totalPrice} </h3>
          <button
            className="btn btn-danger cart-total-item "
            onClick={this.handleBuyCart}
          >
            Buy All
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cartItems: state.CartReducer.items,
    totalPrice: state.CartReducer.totalPrice,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCart: (items) => dispatch(updateCart(items)),
    setPrice: (total) => dispatch(setTotalPrice(total)),
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(Cart);
