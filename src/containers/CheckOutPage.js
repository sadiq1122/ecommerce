import React, { Component } from "react";

import gif from "../assets/check-circle.gif";

class CheckOutPage extends Component {
  render() {
    const list = this.props.location.state.data.map((item) => (
      <h3>
        {item.productName} {item.name} <br />
      </h3>
    ));
    return (
      <div className="checkout">
        <div className="jumbotron-checkout">
          <h3 className="display-4">
            <center>
              Your Order is Successful
              <br />
              <img src={gif} alt="success"></img>
            </center>
          </h3>

          <center>
            Ordered Items: <br />
            {list}
          </center>
        </div>
      </div>
    );
  }
}

export default CheckOutPage;
