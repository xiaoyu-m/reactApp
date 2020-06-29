import React, { Component } from "react";

class Child1 extends Component {
  state = { value: "" };
  changeValue = (value) => {
    console.log(value.target.value);
    this.setState({ value: value.target.value });
  };
  render() {
    return (
      <div>
        <div>
          <input
            type="text"
            value={this.state.value}
            onChange={this.changeValue}
          />
        </div>
      </div>
    );
  }
}

export default Child1;
