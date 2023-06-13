import { Card, Col, Image, Row, Timeline, Typography } from 'antd';
import { Navigate, useParams } from 'react-router-dom';
import { teams } from '../data/team';

const { Title, Paragraph, Text } = Typography;

const OurTeamMember = () => {
    const { id } = useParams();

    const team = teams.filter((team) => team.id === id)?.[0];
    return team ? (
        <Row>
            <Col span={9}>
                <Image width='90%' src={team.image} preview={false} />
                <Card
                    style={{
                        width: '90%',
                        marginBottom: '3rem',
                    }}
                >
                    <Title level={4}>Address</Title>
                    {team.address?.length &&
                        team.address.map((line) => <Paragraph style={{ marginBottom: 0 }}>{line}</Paragraph>)}

                    <Title level={4}>Contact Information</Title>
                    {team.phone && (
                        <Paragraph style={{ marginBottom: 0 }}>
                            <Text strong>Call: </Text> {team.phone}
                        </Paragraph>
                    )}
                    {team.email && (
                        <Paragraph>
                            <Text strong>Email: </Text> {team.email}
                        </Paragraph>
                    )}
                </Card>
            </Col>

            <Col span={15} style={{ marginTop: '3rem' }}>
                {team.name && <Title level={2}>{team.name}</Title>}
                {team.title && (
                    <Paragraph style={{ marginBottom: 0 }} strong>
                        {team.title}
                    </Paragraph>
                )}
                {team.origin && <Paragraph strong>{team.origin}</Paragraph>}

                {team?.biography?.length && (
                    <>
                        <Title level={3}>Biography</Title>
                        {team.biography.map((paragraph) => (
                            <Paragraph>{paragraph}</Paragraph>
                        ))}
                    </>
                )}

                {team?.education?.length && (
                    <>
                        <Title level={4}>Education</Title>
                        <Timeline
                            mode='left'
                            items={team.education.map((edu) => ({
                                label: <Text strong>{edu.date}</Text>,
                                color: 'gray',
                                children: (
                                    <>
                                        <Title level={4} style={{ marginBottom: 0 }}>
                                            {edu.title}
                                        </Title>
                                        <Text>{edu.location}</Text>
                                    </>
                                ),
                            }))}
                        />
                    </>
                )}

                {team?.experience?.length && (
                    <>
                        <Title level={4}>Professional Experience</Title>
                        {team.experience.map((exp) => (
                            <Row>
                                <Col span={16}>
                                    <Card
                                        style={{
                                            backgroundColor: '#EDF2F6',
                                            borderRadius: '3rem',
                                            overflow: 'hidden',
                                            marginBottom: '2rem',
                                        }}
                                        bodyStyle={{
                                            padding: '0.5rem',
                                        }}
                                    >
                                        <Row justify={'center'} align={'middle'}>
                                            <Col span={2}>
                                                <Text style={{ marginRight: '0.5rem' }}>{exp.date}</Text>
                                            </Col>
                                            <Col
                                                style={{ borderLeft: '1px solid #dcdee0', paddingLeft: '1rem' }}
                                                span={18}
                                            >
                                                <Title level={5}>{exp.role}</Title>
                                                <Text>{exp.location}</Text>
                                            </Col>
                                        </Row>
                                    </Card>
                                </Col>
                            </Row>
                        ))}
                    </>
                )}

                {team?.awards?.length && (
                    <>
                        <Title level={4}>Awards & Prizes</Title>
                        {team.awards.map((award) => (
                            <>
                                <Paragraph style={{ width: '50%' }}>
                                    <Text>{award.date}</Text>
                                    <br />
                                    <Text strong>{award.name}</Text>
                                    <br />
                                    <Text>{award.location}</Text>
                                </Paragraph>
                            </>
                        ))}
                    </>
                )}
            </Col>
        </Row>
    ) : (
        <Navigate to='/404' />
    );
};

export default OurTeamMember;
