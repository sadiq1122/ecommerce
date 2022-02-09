import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

import Product from "./Product";
import { setProducts, setTotalPrice } from "../redux/actions/Actions";
import { CART_SERVICE_GET_ALL_PRODUCTS_API } from "../constants/Api_Details";

class ProductGrid extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount = () => {
    this.fetchProducts();
  };

  fetchProducts = async () => {
    const response = await axios
      .get(CART_SERVICE_GET_ALL_PRODUCTS_API)
      .catch((err) => console.log(err));
    console.log(response.data.response);
    this.props.setProducts(response.data.response);
  };

  render() {
    const productList = this.props.productList.map((product) => (
      <Product key={product._id} data={product}></Product>
    ));
    return (
      <div className="container-fluid">
        <div className="row">{productList}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    productList: state.ProductListReducer.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setProducts: (products) => dispatch(setProducts(products)),

    setPrice: (total) => dispatch(setTotalPrice(total)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductGrid);
