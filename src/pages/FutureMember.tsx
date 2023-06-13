import { Col, Row, Typography } from 'antd';

const { Title, Paragraph, Link, Text } = Typography;

const FutureMembers = () => {
    return (
        <Row>
            <Col span={17} style={{ paddingLeft: '15px', paddingRight: '15px' }}>
                <Title level={2}>Research Assistant</Title>
                <Paragraph>
                    Current/prospective Baylor students are encouraged to contact us for possible opportunities.{' '}
                    <Link href='https://www.ecs.baylor.edu/index.php?id=960857'>Learn more.</Link>
                </Paragraph>

                <Title level={2}>IRES Student Research</Title>
                <Paragraph>
                    The IRES project will provide six U.S. undergraduate students with an eight-week summer research
                    experience every year for three years in Brno, Czech Republic. The research experience will enable
                    the students to gain new knowledge and skills related to testing, quality assurance, and
                    code-inspection of distributed software systems used for large enterprises. The students will be
                    mentored by internationally-renowned researchers in the field.{' '}
                    <Link href='https://ires.ecs.baylor.edu/'>Learn more</Link>.
                </Paragraph>
            </Col>

            <Col span={7} style={{ paddingLeft: '15px', paddingRight: '15px' }}>
                <Title level={4}>Address</Title>
                <Paragraph>
                    <Text style={{ fontFamily: 'Times' }}>Hankamer Cashion Academic Center</Text>
                    <br />
                    Baylor University <br />
                    1428 South 5th Street <br />
                    Waco, TX 76706
                </Paragraph>

                <iframe
                    src='https://maps.google.com/maps?q=Cashion%20Academic%20Center%2C%20Waco%2C%20TX%2076706&amp;t=m&amp;z=10&amp;output=embed&amp;iwloc=near'
                    title='maps'
                    style={{ border: '0px' }}
                ></iframe>

                <Title level={4}>Contact Information</Title>
                <Title level={5}>
                    <Text strong>Call: +1 (254) 710-6838</Text>
                    <Text strong>Email: tomas_cerny@baylor.edu</Text>
                </Title>
            </Col>
        </Row>
    );
};

export default FutureMembers;
