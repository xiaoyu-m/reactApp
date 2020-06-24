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
  validate = (values) => {
    console.log(values);
  };
  render() {
    return (
      <div>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={({ setSubmitting }) => {
            alert("Form is validated! Submitting the form...");
            setSubmitting(false);
          }}
        >
          {() => (
            <Form>
              <Field type="email" name="email" className="form-control" />
              <br />
              <Field type="password" name="password" className="form-control" />
            </Form>
          )}
        </Formik>
        <div ref="number">数量：{this.state.number}</div>
        <div>
          <button onClick={this.addNumber}>＋</button>
        </div>
      </div>
    );
  }
}

export default SetStateDemo;
