import React, { Component } from "react";
import img from "../assets/state.PNG";
import flow from '../assets/ecom-arch.PNG'

export default class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="jumbotron">
          <h3 className="display-3">About</h3>
        </div>
        <center>
            <h5 className="display-4">Application State</h5>
          <img src={img} alt="state" className="state-img"></img>
          <br/>
          <br/>
          <h5 className="display-4">Architecture</h5>
          <img src={flow} alt="state" className="state-img"></img>
        </center>
      </div>
    );
  }
}
