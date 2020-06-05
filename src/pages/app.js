import React from 'react';
import { Layout, Menu, Breadcrumb, Button, Row, Col, Card } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import '../assets/less/index.less';

import Loding from '../components/Loading';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
let user = [
  {
    username: 'xiaoyu',
    type: '苦逼',
  },
  {
    username: 'dayu',
    type: '苦逼',
  },
  {
    username: '小于',
    type: '苦逼',
  },
  {
    username: '大于',
    type: '苦逼',
  },
];
class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      user: {
        name: 'header',
        username: '',
        password: '',
        sex: '',
        like: false,
      },
      collapsed: false,
    };
    this.handleChild = this.handleChild.bind(this);
    this.onCollapse = this.onCollapse.bind(this);
    this.handleFormValues = this.handleFormValues.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onCollapse(collapsed) {
    this.setState({ collapsed });
  }

  handleFormValues(e) {
    let { name, value } = e.target;
    let { user } = this.state;
    if (name === 'like') {
      let value = e.target.checked;
    }
    user[name] = value;
    this.setState({
      user,
    });
  }
  handleSubmit() {
    let str = '';
    let { user } = this.state;
    Object.keys(user).map((obj) => {
      str += obj + '：' + user[obj] + '\n';
    });
    alert(str);
    console.log(user);
  }
  handleChild(user) {
    // console.log(user);
    this.setState({ user });
  }
  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
          theme="light"
        >
          <div className="logo">
            <img src="../../assets/favicon.ico" />
            <span className={this.state.collapsed ? 'fade' : 'logoTitle'}>
              小于
            </span>
          </div>
          <Menu mode="inline" defaultSelectedKeys={['1']} style={{ border: 0 }}>
            <Menu.Item icon={<PieChartOutlined />}>账号</Menu.Item>
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              账号
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              监控
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="用户">
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="团队">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<FileOutlined />}>
              文档
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header
            className="site-layout-background header"
            style={{
              position: 'relative',
              zIndex: '9',
              borderLeft: '1px solid #ededed',
            }}
          >
            <Row style={{ padding: '0 16px' }}>{this.state.user.name}</Row>
          </Header>
          <Content
            style={{
              padding: '0 16px',
              boxShadow: 'inset 0 0 12px #0003',
            }}
          >
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div
              style={{ padding: 24, minHeight: '80vh' }}
              className="site-card-wrapper"
            >
              <div className="site-card-wrapper">
                <Row gutter={16}>
                  <Col span={8}>
                    <Card bordered={false}>
                      {this.state.collapsed ? (
                        <Loding
                          handleChild={this.handleChild}
                          btnTitle="登录"
                        />
                      ) : (
                        <div>
                          <form>
                            账号：
                            <input
                              name="username"
                              type="text"
                              value={this.state.user.username}
                              onChange={this.handleFormValues}
                            />
                            密码：
                            <input
                              name="password"
                              type="password"
                              value={this.state.user.password}
                              onChange={this.handleFormValues}
                            />
                            性别：
                            <input
                              name="sex"
                              type="radio"
                              value="女"
                              onChange={this.handleFormValues}
                            />
                            女
                            <input
                              name="sex"
                              type="radio"
                              value="男"
                              onChange={this.handleFormValues}
                            />
                            男 喜好：
                            <input
                              name="like"
                              type="checkbox"
                              checked={this.state.user.like}
                              onChange={this.handleFormValues}
                            />
                            <Button onClick={this.handleSubmit}>查看</Button>
                          </form>
                        </div>
                      )}
                    </Card>
                  </Col>
                </Row>
              </div>
            </div>
            <Footer style={{ textAlign: 'center' }}>
              xiaoyu ©{this.state.date.getFullYear()}
            </Footer>
          </Content>
        </Layout>
      </Layout>
    );
  }
}
export default Admin;
