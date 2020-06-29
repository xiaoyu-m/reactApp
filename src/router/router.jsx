import React, { Component } from "react";
import { HashRouter as Routers, Route, Switch, link } from "react-router-dom";
import routes from "./routes";
class Router extends Component {
  render() {
    return (
      <div className="content">
        <Routers>
          <Switch>
            {routes.map(
              (e, i) =>
                e.component && (
                  <Route exact path={e.path} component={e.component} key={i} />
                )
            )}
          </Switch>
        </Routers>
      </div>
    );
  }
}

export default Router;
