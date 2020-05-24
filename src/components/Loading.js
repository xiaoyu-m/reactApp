import React, { Component } from 'react';
import { Spin, Alert, Button, Input } from 'antd';
import { UserOutlined, LoadingOutlined } from '@ant-design/icons';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        name: '',
      },
      date: new Date(),
      isSpin: false,
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleNameInput = this.handleNameInput.bind(this);
  }
  componentDidMount() {
    setInterval(() => {
      this.click();
    }, 1000);
  }

  click() {
    this.setState({
      date: new Date(),
    });
  }

  handleLogin() {
    this.setState({
      isSpin: !this.state.isSpin,
    });
    this.props.handleChild(this.state.form);
  }

  handleNameInput(e) {
    this.setState({
      form: {
        name: e.target.value,
      },
    });
    console.log(e.target.value);
  }
  render() {
    const antIcon = <LoadingOutlined style={{ fontSize: 34 }} spin />;
    return (
      <div>
        <div
          id="loging"
          style={{
            display: 'block',
            width: '100px',
            position: 'absolute',
            margin: '150px auto',
          }}
        >
          <div className="loging">
            <Spin
              indicator={antIcon}
              spinning={this.state.isSpin}
              tip="登录中"
            />
          </div>
        </div>

        <div style={{ padding: '4px 0', fontWeight: '800' }}>
          {this.state.date.toLocaleTimeString()}
        </div>
        <Input
          size="large"
          placeholder="large size"
          maxLength="20"
          prefix={<UserOutlined />}
          onChange={this.handleNameInput}
        />
        <Button type="primary" onClick={this.handleLogin}>
          {this.props.btnTitle}
        </Button>
      </div>
    );
  }
}
export default Login;
