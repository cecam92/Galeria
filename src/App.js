import React, {Fragment} from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./container/Home";
function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component = {Home} ></Route>
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
