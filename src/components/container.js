import React from "react";
import { Switch, Route } from "react-router-dom";
import Resume from "./resumePage";
import Projects from "./projects";

import Home from "./homepage";

const Container = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/resume" component={Resume} />
      <Route path="/projects" component={Projects} />
    </Switch>
  </div>
);

export default Container;
