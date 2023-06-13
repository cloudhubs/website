import { Col, Row, Typography } from 'antd';

const { Text } = Typography;

const FooterContent = () => {
    return (
        <Row>
            <Col span={5}>
                <Text>Copyright© 2020 - Baylor Cloudhubs Lab</Text>
            </Col>
            <Col offset={14} span={5}>
                <Text>Developed By Cloudhubs Team</Text>
            </Col>
        </Row>
    );
};

export default FooterContent;
