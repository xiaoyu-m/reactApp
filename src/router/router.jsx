import React, { Component } from "react";
import { HashRouter as Routers, Route, Switch, Link } from "react-router-dom";
import routes from "./routes";
import Article from "@/pages/article/article";
import Student from "@/pages/admin/student";

class Router extends Component {
  render() {
    return (
      <div className="content">
        <Routers>
          <Switch>
            {routes.map((ritem, rindex) => {
              if (ritem.children) {
                return (
                  <Route path={ritem.path}>
                    {ritem.children.map((citem, cindex) => {
                      return (
                        <Route
                          exact
                          path={ritem.path + citem.path}
                          component={citem.component}
                          key={rindex + "-" + cindex}
                        />
                      );
                    })}
                  </Route>
                );
              } else if (ritem.name !== "404") {
                return (
                  <Route
                    exact
                    path={ritem.path}
                    component={ritem.component}
                    key={rindex}
                  />
                );
              } else {
                return <Route component={ritem.component} key={rindex} />;
              }
            })}
          </Switch>
        </Routers>
      </div>
    );
  }
}
export default Router;
