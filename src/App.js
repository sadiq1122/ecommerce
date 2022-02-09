import { BrowserRouter, Switch, Route } from "react-router-dom";
import Cart from "./containers/Cart";
import CheckOutPage from "./containers/CheckOutPage";
import Header from "./containers/Header";
import Order from "./containers/Order";
import ProductDetails from "./containers/ProductDetails";
import ProductGrid from "./containers/ProductGrid";
import Welcome from "./containers/Welcome";
import DashBoard from "./containers/DashBoard";
import AdminProductsPage from "./containers/AdminProductsPage";
import Login from "./containers/Login";
import Register from "./containers/Register";
import { useState } from "react";
import { useEffect } from "react";
import About from "./containers/About";

function App(props) {
  const [login] = useState(sessionStorage.getItem("isLoggedIn"));
  const [user] = useState(sessionStorage.getItem("user"));
  const [isAdmin] = useState(sessionStorage.getItem("isAdmin"));
  const [value, setValue] = useState(0);

  useEffect(() => { console.log("update")
    },[login,user]
  );

  let routes = (
    <Switch>
       <Route path="/home" exact component={Welcome}></Route>
          <Route path="/products" exact component={ProductGrid}></Route>
          <Route path="/about" exact component={About}></Route>
          <Route path="/products/:id" exact component={ProductDetails}></Route>
          <Route path="/cart" exact component={Cart}></Route>
          <Route path="/orders" exact component={Order}></Route>
          <Route path="/cart/buy" exact component={CheckOutPage}></Route>
          <Route path="/admin" exact component={DashBoard}></Route>
          <Route path="/admin/products" component={AdminProductsPage}></Route>
          <Route path="/admin/users" exact component={DashBoard}></Route>
          <Route path="/admin/orders" exact component={DashBoard}></Route>
          <Route path="/admin/reports" exact component={DashBoard}></Route>
          <Route path="/" exact component={Login}></Route>
          <Route path="/signup" exact component={Register}></Route>

    </Switch>
  );

  // if (login === "true" && user !== "admin") {
  //   routes = (
  //     <Switch>
  //       <Route path="/home" exact component={Welcome}></Route>
  //       <Route path="/products" exact component={ProductGrid}></Route>
  //       <Route path="/products/:id" exact component={ProductDetails}></Route>
  //       <Route path="/cart" exact component={Cart}></Route>
  //       <Route path="/orders" exact component={Order}></Route>
  //       <Route path="/cart/buy" exact component={CheckOutPage}></Route>
  //       <Route path="/" exact component={Login}></Route>
  //       <Route path="/signup" exact component={Register}></Route>
  //     </Switch>
  //   );
  // } else if (login === "true" && user === "admin" && isAdmin === "true") {
  //   routes = (
  //     <Switch>
  //       <Route path="/home" exact component={AdminProductsPage}></Route>
  //       <Route path="/products" exact component={ProductGrid}></Route>
  //       <Route path="/products/:id" exact component={ProductDetails}></Route>
  //       <Route path="/admin" exact component={DashBoard}></Route>
  //       <Route path="/admin/products" component={AdminProductsPage}></Route>
  //       <Route path="/admin/users" exact component={DashBoard}></Route>
  //       <Route path="/admin/orders" exact component={DashBoard}></Route>
  //       <Route path="/admin/reports" exact component={DashBoard}></Route>
  //       <Route path="/" exact component={Login}></Route>
  //       <Route path="/signup" exact component={Register}></Route>
  //     </Switch>
  //   );
  // } else {
  //   routes = (
  //     <Switch>
  //       <Route path="/" exact component={Login}></Route>
  //       <Route path="/signup" exact component={Register}></Route>
  //     </Switch>
  //   );
  // }
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        {routes}

        {/* <Switch>
          <Route path="/home" exact component={Welcome}></Route>
          <Route path="/products" exact component={ProductGrid}></Route>
          <Route path="/products/:id" exact component={ProductDetails}></Route>
          <Route path="/cart" exact component={Cart}></Route>
          <Route path="/orders" exact component={Order}></Route>
          <Route path="/cart/buy" exact component={CheckOutPage}></Route>
          <Route path="/admin" exact component={DashBoard}></Route>
          <Route path="/admin/products" component={AdminProductsPage}></Route>
          <Route path="/admin/users" exact component={DashBoard}></Route>
          <Route path="/admin/orders" exact component={DashBoard}></Route>
          <Route path="/admin/reports" exact component={DashBoard}></Route>
          <Route path="/" exact component={Login}></Route>
          <Route path="/signup" exact component={Register}></Route>
        </Switch> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
