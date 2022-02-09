import axios from "axios";
import React, { Component } from "react";
import { withRouter } from "react-router";
import { compose } from "redux";
import {
  CART_SERVICE_GET_CART_API,
  CART_SERVICE_ADD_TO_CART_API,
  CART_SERVICE_GET_PRODUCT_BY_ID_API,
  CART_SERVICE_BUY_PRODUCT_API,
} from "../constants/Api_Details";
import { connect } from "react-redux";
import {
  setProduct,
  updateCart,
  setTotalPrice,
} from "../redux/actions/Actions";
class ProductDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount = () => {
    this.fetchProduct();
  };

  fetchProduct = async () => {
    const res = await axios
      .get(CART_SERVICE_GET_PRODUCT_BY_ID_API + this.props.match.params.id)
      .catch((err) => console.log(err));

    console.log(res);
    this.props.setProduct(res.data.response);
    this.setState({ ...this.state, id: this.props.product._id });
  };

  makeAddToCartCall = async () => {
    await axios
      .post(
        CART_SERVICE_ADD_TO_CART_API +
          "customerId=" +
          sessionStorage.getItem("customerId"),
        this.props.product
      )
      .then((response) => {
        console.log(response);
        alert("Product Successfully Added to cart");
      })
      .catch((err) => console.log(err));
  };

  handleAddToCart = (e) => {
    this.makeAddToCartCall();
  };

  fetchCart = async () => {
    const response = await axios
      .get(
        CART_SERVICE_GET_CART_API +
          "customerId=" +
          sessionStorage.getItem("customerId")
      )
      .catch((err) => console.log(err));

    let total = response.data.response.reduce(
      (acc, item) => acc + item.price,
      0
    );
    total = Math.round(total);
    this.props.setCart(response.data.response);
    this.props.setPrice(total);

    console.log(response);
  };

  makeBuyProductCall = async () => {
    await axios
      .post(
        CART_SERVICE_BUY_PRODUCT_API +
          "customerId=" +
          sessionStorage.getItem("customerId") +
          "&productId=" +
          this.props.product._id +
          "&quantity=1"
      )
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  buyHandle = () => {
    console.log("handle buy");
    const product = this.props.product;
    this.makeBuyProductCall();
    this.props.history.push({
      pathname: "/cart/buy",
      state: {
        data: [product],
      },
    });
  };

  render() {
    return (
      <div className="product-details">
        <div className="row">
          <div className="product-photo-container col-6">
            <center>
              <img
                className="detail-image"
                src={this.props.product.imgSrc}
                alt="t-shirt"
              ></img>
            </center>
          </div>
          <div className="product-detail-container col-6">
            <h2 className="display display-5">{this.props.product.name}</h2>
            <br />

            <h5 style={{ color: "red" }}>Description : </h5>
            <h6>{this.props.product.details}</h6>
            <br />

            <h5 style={{ color: "red" }}>Category : </h5>
            <h6>{this.props.product.category}</h6>
            <br />
            <h5 style={{ color: "red" }}>Price : </h5>
            <h6>${this.props.product.price}</h6>
            <br />

            <button className="btn btn-danger" onClick={this.handleAddToCart}>
              Add to cart
            </button>
            <button className="btn btn-danger buynow" onClick={this.buyHandle}>
              Buy Now
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    product: state.ProductReducer.product,
    cartItems: state.CartReducer.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setProduct: (product) => dispatch(setProduct(product)),
    setCart: (items) => dispatch(updateCart(items)),
    setPrice: (total) => dispatch(setTotalPrice(total)),
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(ProductDetails);
