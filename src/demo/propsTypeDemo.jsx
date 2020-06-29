import React, { Component } from "react";
import PropTypes from "prop-types";

class PropsTypeDemo extends Component {
  static propTypes = { text: PropTypes.string, title: PropTypes.string };
  static defaultProps = {
    title: "标题",
  };
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h3>{this.props.text}</h3>
      </div>
    );
  }
}
export default PropsTypeDemo;
