import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';

class Monitoring extends Component {
    render() {
        return (
            <div>
                <Row gutter={25}>
                    <Col span={16}>
                        <Card title="Card title" bordered={false} style={{ height: 619 }}>
                            <p>Card content</p>
                            <p>Card content</p>
                            <p>Card content</p>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Row gutter={25}>
                            <Card title="Card title" bordered={false} style={{ marginBottom: 25 }}>
                                <p>Card content</p>
                                <p>Card content</p>
                                <p>Card content</p>
                            </Card>
                            <Card title="Card title" bordered={false} style={{  }}>
                                <p>Card content</p>
                                <p>Card content</p>
                                <p>Card content</p>
                            </Card>
                        </Row>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Monitoring;