import React, { Component } from "react";
import "./sider.less";
import Nav from "@/components/nav/nav";

class Sider extends Component {
  render() {
    return (
      <aside>
        <Nav />
      </aside>
    );
  }
}

export default Sider;
