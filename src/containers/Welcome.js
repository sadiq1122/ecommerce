import React, { Fragment } from "react";
import ProductGrid from "./ProductGrid";

export default function Welcome() {

  return (
    <Fragment>
      <div className="welcome">
        <br />
        <br />
        <h1 className="display display-3">
          <center>Welcome to the World of Shopping</center>
        </h1>
        <br />
      </div>
      <ProductGrid />
    </Fragment>
  );
}
