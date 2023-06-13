import { FileTextTwoTone } from '@ant-design/icons';
import { Card, Col, Row, Typography } from 'antd';
import { publications } from '../data/publications';

const { Paragraph, Title, Link } = Typography;

const cardStyle: React.CSSProperties = {
    marginTop: '0.5rem',
    marginBottom: '0.5rem',
};

const Home = () => {
    return (
        <>
            <Paragraph strong>
                Cloudhubs is the software engineering lab at the Computer Science department of Baylor University. Our
                research focuses are code analysis, microservice architecture, enterprise software development, and
                software security. This site provides a basic route map to projects, publications, and involved
                students.
            </Paragraph>

            <Title level={2}>Featured Projects</Title>

            <Row style={{ backgroundColor: '#edf2f6' }} justify={'center'} align={'top'}>
                <Col span={6} style={{ paddingLeft: '15px', paddingRight: '15px' }}>
                    <Card title={<Title level={2}>Prophet</Title>} bordered={false} style={cardStyle}>
                        <Paragraph>
                            The prophet analyzes microservice-based systems and generates a centralized perspective for
                            the microservice mesh. This allows developers and operators to assess systems holistically.
                            This can provide certain perspectives for Software Architecture Reconstruction (SAR).
                        </Paragraph>
                        <Link href='/research' underline>
                            READ MORE
                        </Link>
                    </Card>
                </Col>

                <Col span={6} style={{ paddingLeft: '15px', paddingRight: '15px' }}>
                    <Card title={<Title level={2}>RAD</Title>} bordered={false} style={cardStyle}>
                        <Paragraph>
                            The RAD (REST API Discovery) project can detect inter-microservice REST communications to
                            facilitate Software Architecture Reconstruction (SAR).
                        </Paragraph>
                        <Link href='/research' underline>
                            READ MORE
                        </Link>
                    </Card>
                </Col>

                <Col span={6} style={{ paddingLeft: '15px', paddingRight: '15px' }}>
                    <Card title={<Title level={2}>ACM SAC</Title>} bordered={false} style={cardStyle}>
                        <Paragraph>
                            Open source virtual conference management system for ACM SAC 2020. It enables participants
                            to easily share their talks and involve in discussions.
                        </Paragraph>
                        <Link href='/research' underline>
                            READ MORE
                        </Link>
                    </Card>
                </Col>
            </Row>

            <Title level={2} style={{ marginTop: '2rem' }}>
                Recent Publications
            </Title>

            <Card style={{ backgroundColor: '#edf2f6' }}>
                {publications.slice(0, 5).map((publication, i) => (
                    <>
                        <Row style={{ paddingBottom: '1rem' }}>
                            <Col span={1}>
                                <FileTextTwoTone style={{ paddingTop: '1rem', fontSize: '1.5rem' }} />
                            </Col>
                            <Col>
                                <Paragraph strong>{publication.title}</Paragraph>
                                <Paragraph>{publication.authors.join(', ')}</Paragraph>
                            </Col>
                        </Row>
                    </>
                ))}
                <Row style={{ paddingBottom: '1rem' }}>
                    <Col span={2}>
                        <Link href='/publications/'>View All</Link>
                    </Col>
                </Row>
            </Card>

            <Title level={2} style={{ marginTop: '2rem' }}>
                Grants and Collaborators
            </Title>
            {/* TODO: use antd */}
            <ul>
                <li style={{ height: '1.5rem' }}>
                    Funding from National Science Foundation (NSF) under grant no. 1854049.
                </li>
                <li style={{ height: '1.5rem' }}>
                    Funding from <Link href='https://research.redhat.com/'>Red Hat Research</Link>.
                </li>
            </ul>
        </>
    );
};

export default Home;
