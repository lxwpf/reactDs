import React, { Component } from 'react';
import { Layout, Breadcrumb } from 'antd';
import BaseRouter from '../BaseRouter';
import store from '../store';

const { Header, Content, Footer } = Layout;
class ContentBase extends Component {

    constructor(props) {
        super(props)
        this.state = store.getState();
        store.subscribe(this.handleStoreChange.bind(this));
    }

    render() {
        return (
            <Layout>
                <Header style={{ background: '#fff', padding: 0, height: "64px" }} />
                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        {
                            this.state.breadcrumbTags.map((item) => {
                                return (
                                    <Breadcrumb.Item key={item}>{item}</Breadcrumb.Item>
                                )
                            })
                        }
                    </Breadcrumb>
                    <div style={{ padding: 24, background: 'rgb(240, 242, 245)', minHeight: 360, paddingTop: 0 }}>
                        <BaseRouter />
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    My Web ©2018 Created by Li Sir
                </Footer>
            </Layout>
        )
    }

    handleStoreChange() {
        this.setState(store.getState());
    }
}

export default ContentBase;