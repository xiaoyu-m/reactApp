import React, { Component, setStateAsync } from "react";
import { Formik, Form, Field } from "formik";
class SetStateDemo extends Component {
  state = {
    number: 0,
  };
  setStateAsync = (state) => {
    return new Promise((resolve) => {
      this.setState(state, resolve);
    });
  };
  addNumber = async () => {
    await this.setStateAsync({ number: this.state.number + 1 }); // 使用Promise将setState变为同步执行
    console.log(this.refs.number);
  };
  render() {
    return (
      <div>
        <div ref="number">数量：{this.state.number}</div>
        <div>
          <button onClick={this.addNumber}>＋</button>
        </div>
      </div>
    );
  }
}

export default SetStateDemo;
