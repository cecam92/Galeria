import React, { Fragment } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./container/Home";
import Checkout from "./container/Checkout";
function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/checkout" component={Checkout}></Route>
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
