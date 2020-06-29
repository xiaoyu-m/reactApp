import React, { Component } from "react";
import { HashRouter as Routers, Route, Switch, link } from "react-router-dom";
import routes from "./routes";
class Router extends Component {
  render() {
    return (
      <div className="content">
        <Routers>
          {/*<Route ></Route>*/}
          {/*<ul>*/}
          {/*  {routes.map(*/}
          {/*    (e, i) =>*/}
          {/*      // e.component && (*/}
          {/*      //   // <Route path={e.path} component={e.component} key={i}></Route>*/}
          {/*      //   <Link to={}>首页</Link>*/}
          {/*      // )*/}
          {/*  )}*/}
          {/*</ul>*/}
        </Routers>
      </div>
    );
  }
}

export default Router;
