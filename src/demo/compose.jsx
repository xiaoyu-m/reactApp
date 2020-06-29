import React, { Component } from "react";
// import './compose.less'

class Compose extends Component {
  render() {
    return (
      <div>
        <h1>哈哈哈</h1>
        {this.props.children}
      </div>
    );
  }
}

export default Compose;
