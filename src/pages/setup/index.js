import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./home";
import Easy from "./easy";
import Junior from "./junior";
import Mid from "./mid";
import Senior from "./senior";
import Error from "./error";
import Enrolpage from "./enrolpage";
import Boarding from "./boarding";

const Index = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/enrolpage">
          <Enrolpage />
        </Route>
        <Route path="/Junior">
          <Junior />
        </Route>
        <Route path="/Senior">
          <Senior />
        </Route>
        <Route path="/mid">
          <Mid />
        </Route>
        <Route path="/easy">
          <Easy />
        </Route>
        <Route path="/boarding">
          <Boarding />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
};

export default Index;
