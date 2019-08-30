import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';

class Analyse extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Row gutter={16}>
                    <Col span={6}>
                        <Card style={{ width: 243.25, height: 182 }}>
                            <p>Card content</p>
                            <p>Card content</p>
                            <p>Card content</p>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card style={{ width: 243.25, height: 182 }}>
                            <p>Card content</p>
                            <p>Card content</p>
                            <p>Card content</p>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card style={{ width: 243.25, height: 182 }}>
                            <p>Card content</p>
                            <p>Card content</p>
                            <p>Card content</p>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card style={{ width: 243.25, height: 182 }}>
                            <p>Card content</p>
                            <p>Card content</p>
                            <p>Card content</p>
                        </Card>
                    </Col>
                </Row>
                <Row gutter={16} style={{ marginTop: 30, marginBottom: 30 }}>
                    <Col className="gutter-row" span={24}>
                        <Card style={{ height: 405 }}>
                            <p>Card content</p>
                            <p>Card content</p>
                            <p>Card content</p>
                        </Card>
                    </Col>
                </Row>
                <Row gutter={26}>
                    <Col span={12}>
                        <Card style={{ height: 500 }}>
                            <p>Card content</p>
                            <p>Card content</p>
                            <p>Card content</p>
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card style={{ height: 500 }}>
                            <p>Card content</p>
                            <p>Card content</p>
                            <p>Card content</p>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Analyse;