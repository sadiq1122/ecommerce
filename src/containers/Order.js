import axios from "axios";
import React, { Component } from "react";
import {
  CART_SERVICE_SHOW_ORDERS_API,
  FILE_SERVICE_DOWNLOAD_RECEIT,
} from "../constants/Api_Details";
import { setOrders } from "../redux/actions/Actions";
import OrderItem from "./OrderItem";
import { connect } from "react-redux";

class Order extends Component {
  componentDidMount = () => {
    this.fetOrders();
  };

  fetOrders = async () => {
    const response = await axios
      .get(
        CART_SERVICE_SHOW_ORDERS_API +
          "customerId=" +
          sessionStorage.getItem("customerId")
      )
      .catch((err) => console.log(err));

    console.log(response);
    this.props.setMyOrders(response.data.response);
  };

  fetchReceipt = async () => {
    const response = await axios
      .get(
        FILE_SERVICE_DOWNLOAD_RECEIT +
          "customerId=" +
          sessionStorage.getItem("customerId")
      )
      .catch((err) => console.log(err));
    window.open(
      FILE_SERVICE_DOWNLOAD_RECEIT +
        "customerId=" +
        sessionStorage.getItem("customerId"),
      "_blank",
      "noopener,noreferrer"
    );
  };
  handleDownload = () => {
    this.fetchReceipt();
  };

  render() {
    const orders = this.props.orderList.map((order) => (
      <OrderItem key={order.orderId} data={order} />
    ));
    return (
      <div className="cart">
        <div className="jumbotron">
          <h3 className="display-4">My Orders</h3>
        </div>
        {orders}

        <div className="cart-total">
          <button
            className="btn btn-danger cart-total-item "
            onClick={this.handleDownload}
          >
            Download Invoice
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    orderList: state.OrderReducer.orders,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setMyOrders: (orders) => dispatch(setOrders(orders)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Order);
