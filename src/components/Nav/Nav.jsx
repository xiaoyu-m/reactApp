import React, { Component } from "react";
import "./Nav.less";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>首页</li>
          <li>加入我们</li>
          <li>管理页面</li>
          <li>关于</li>
        </ul>
      </div>
    );
  }
}

export default Nav;
