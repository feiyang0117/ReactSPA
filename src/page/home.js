import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import React, { Component } from "react";
import VideoItem from "../component/videoItem"
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class SiderDemo extends Component {
    constructor(props){
        super(props);
        this.state = {
            classItem: 1
        };
        this.selectItem = this.selectItem.bind(this);
    }
    selectItem = (type) => {
        this.setState({
            classItem: type.key
        })
    }
　　render(){
        let {classItem,className} = this.state;
        
        return(
            <Layout>
                <Header className="header">
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['1']}
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key="1">nav 1</Menu.Item>
                        <Menu.Item key="2">nav 2</Menu.Item>
                        <Menu.Item key="3">nav 3</Menu.Item>
                    </Menu>
                </Header>
                <Layout>
                    <Sider width={200} style={{ background: '#fff' }}>
                        <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
                        >
                            <SubMenu key="sub1" title={<span><Icon type="user"/>第一阶段初级</span>} >
                                <Menu.Item key="1" onClick={this.selectItem}>课程 一</Menu.Item>
                                <Menu.Item key="2" onClick={this.selectItem}>课程 二</Menu.Item>
                                <Menu.Item key="3" onClick={this.selectItem}>课程 三</Menu.Item>
                                <Menu.Item key="4" onClick={this.selectItem}>课程 四</Menu.Item>
                            </SubMenu>

                            <SubMenu key="sub2" title={<span><Icon type="laptop" />第二阶段中级</span>}>
                                <Menu.Item key="5" onClick={this.selectItem}>课程 一</Menu.Item>
                                <Menu.Item key="6" onClick={this.selectItem}>课程 二</Menu.Item>
                                <Menu.Item key="7" onClick={this.selectItem}>课程 三</Menu.Item>
                                <Menu.Item key="8" onClick={this.selectItem}>课程 四</Menu.Item>
                            </SubMenu>

                            <SubMenu key="sub3" title={<span><Icon type="notification" />第三阶段高级</span>}>
                                <Menu.Item key="9" onClick={this.selectItem}>课程 一</Menu.Item>
                                <Menu.Item key="10" onClick={this.selectItem}>课程 二</Menu.Item>
                                <Menu.Item key="11" onClick={this.selectItem}>课程 三</Menu.Item>
                                <Menu.Item key="12" onClick={this.selectItem}>课程 四</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>{classItem}</Breadcrumb.Item>
                        </Breadcrumb>
                        {/* 内容区域 */}
                        <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                            <VideoItem classItem={classItem}/>
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
    )}
}
export default SiderDemo;