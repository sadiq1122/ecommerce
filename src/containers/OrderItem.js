import React, { Component } from "react";

export default class OrderItem extends Component {
  render() {
    let date = this.props.data.orderDate
    date=date.substring(0,10)
    return (
      <div className="cart-item">
        <div className="cart-item-child">
          <h6 style={{ color: "grey" }}>
            Order Id : <br /> {this.props.data.orderId}
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
          <h4 style={{ color: "green" }}>{this.props.data.productName}</h4>
          <h6 style={{ color: "orange" }}>Category : Clothing</h6>
        </div>{" "}
        <div className="cart-item-child">
          <h6>Order Date : {date}</h6>
          <h6>Price - $ 56.5</h6>
        </div>
        <div className="cart-item-child">
          <h6>Quantity : {this.props.data.quantity}</h6>
        </div>
        <div className="cart-item-child">
          <h6 style={{ color: "red" }}> Total Price : $ {Math.round(this.props.data.totalPrice)}</h6>
        </div>
      </div>
    );
  }
}
