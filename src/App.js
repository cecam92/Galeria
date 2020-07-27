import React, { Fragment } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Home from "./container/Home";
import Checkout from "./container/Checkout";
function App() {
  return (
    <Fragment>
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/checkout" component={Checkout}></Route>
        </Switch>
      </HashRouter>
    </Fragment>
  );
}

export default App;
