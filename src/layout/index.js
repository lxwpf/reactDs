import React, { Component } from 'react';
import './layout.css';
import { Layout, Menu, Icon } from 'antd';
import ContentBase from '../menu/ContentBase';
import {Link} from 'react-router-dom';
import store from '../store';
import { getBreadcrumbTags } from '../store/actionCreators';

const { Sider } = Layout;
const SubMenu = Menu.SubMenu;

class Home extends Component {

    onCollapse = (collapsed) => {
        this.setState({ collapsed });
    }

    constructor(props) {
        super(props);
        this.state = store.getState();
        this.onCollapse = this.onCollapse.bind(this);
    }

    render() {
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider
                    collapsible
                    collapsed={this.state.collapsed}
                    onCollapse={this.onCollapse}
                >
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        defaultSelectedKeys={['7']}
                        mode="inline"
                        defaultOpenKeys={['1']}
                    >
                        {
                            this.state.menuList.map((item) => {
                                return (
                                    <SubMenu
                                        key={item.parentId}
                                        title={<span><Icon type={item.icon} /><span>{item.name}</span></span>}
                                    >
                                        {item.child.map((childItem) => {
                                            return (
                                                <Menu.Item
                                                    key={childItem.childId}
                                                    onClick={this.menuItemClick.bind(this,item.name,childItem.name)}
                                                >
                                                    <Link to={childItem.url}>{childItem.name}</Link>
                                                </Menu.Item>
                                            )
                                        })}
                                    </SubMenu>
                                )
                            })
                        }
                    </Menu>
                </Sider>
                <ContentBase />
            </Layout>
        )
    }

    // menu child click
    menuItemClick(parentName, childName) {
        const action = getBreadcrumbTags(parentName, childName);
        store.dispatch(action);
    }
}

export default Home;