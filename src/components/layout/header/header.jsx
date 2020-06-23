import React, { Component } from "react";
import PropTypes from "props-type";
import { MenuFoldOutlined } from "@ant-design/icons";
import "./header.less";

class Header extends Component {
  state = {
    navState: true,
  };
  static propTypes = {
    changeNavState: PropTypes.func,
  };
  changeNavState = () => {
    let { navState } = this.state;
    navState = !navState;
    this.props.changeNavState(navState);
    this.setState({ navState });
  };
  render() {
    return (
      <header>
        <h1>
          <MenuFoldOutlined onClick={this.changeNavState} /> header
        </h1>
      </header>
    );
  }
}

export default Header;
