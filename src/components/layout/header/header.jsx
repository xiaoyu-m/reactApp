import React, { Component } from "react";
import PropTypes from "prop-types";
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
        <MenuFoldOutlined onClick={this.changeNavState} />
      </header>
    );
  }
}

export default Header;
