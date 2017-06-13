import React, { Component } from 'react';

import './App.css';

import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class App extends Component {
  state = {
    collapsed: false,
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    return (
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px'}}
          >
            <Menu.Item key="1">系统</Menu.Item>
            <Menu.Item key="2">基础档案</Menu.Item>
            <Menu.Item key="3">规则管理</Menu.Item>
            <Menu.Item key="4">收货管理</Menu.Item>
            <Menu.Item key="5">库存管理</Menu.Item>
            <Menu.Item key="6">发货管理</Menu.Item>
            <Menu.Item key="7">作业管理</Menu.Item>
            <Menu.Item key="8">预警</Menu.Item>
            <Menu.Item key="9">KPI</Menu.Item>
            <Menu.Item key="10">报表</Menu.Item>
            <Menu.Item key="11">异常处理</Menu.Item>
            <Menu.Item key="12">行业插件</Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Sider width={200} style={{ background: '#fff' }}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%' }}
            >
              <SubMenu key="sub1" title={<span><Icon type="user" />基础档案</span>}>
                <Menu.Item key="1">客户档案</Menu.Item>
                <Menu.Item key="2">产品档案</Menu.Item>
                <Menu.Item key="3">批次属性</Menu.Item>
                <Menu.Item key="4">包装</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '12px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
              Content
            </Content>
          </Layout>
        </Layout>
      </Layout>
    )
  }
}

export default App;
