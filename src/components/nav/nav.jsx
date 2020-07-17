import React, { Component } from "react";
import "./nav.less";
import { HashRouter as Router, NavLink } from "react-router-dom";
import routes from "@/router/routes";
class Nav extends Component {
  render() {
    return (
      <div className="nav-box">
        <Router>
          <ul>
            {routes.map((ritem, rindex) =>
              ritem.children ? (
                <li className="subNav" key={rindex}>
                  <b>{ritem.name}</b>
                  <ul>
                    {ritem.children.map((citem, cindex) => (
                      <li key={cindex}>
                        <NavLink exact to={ritem.path + citem.path}>
                          {citem.name}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                ritem.name != "404" && (
                  <li key={rindex}>
                    <NavLink exact to={ritem.path}>
                      {ritem.name}
                    </NavLink>
                  </li>
                )
              )
            )}
          </ul>
        </Router>
      </div>
    );
  }
}

export default Nav;
