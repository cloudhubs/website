import { Card, Col, Image, Row, Typography } from 'antd';
import { config } from '../config';
import { teams } from '../data/team';

const { Title, Link, Paragraph, Text } = Typography;

const roles = ['Supervisor', 'Team Leads', 'IRES 2020'];

const OurTeam = () => {
    return (
        <>
            {roles.map((role) => {
                return (
                    <>
                        <Title level={2}>{role}</Title>
                        <hr
                            style={{
                                height: '0.3rem',
                                backgroundColor: 'black',
                            }}
                        />

                        {teams
                            .filter((team) => team.role === role)
                            .map((team) => {
                                return (
                                    <Row>
                                        <Col span={6}>
                                            <Image width='90%' src={team.image} preview={false} />
                                            <Card
                                                style={{
                                                    backgroundColor: '#EDF2F6',
                                                    width: '90%',
                                                    marginBottom: '3rem',
                                                }}
                                            >
                                                <Title level={2}>
                                                    <Link style={{ fontSize: '1.5rem' }} href={`/our-team/${team.id}`}>
                                                        {team.name}
                                                    </Link>
                                                </Title>

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

                                                {team.links && (
                                                    <Row>
                                                        {team.links.github && (
                                                            <Col style={{ width: '28%', marginRight: '5%' }}>
                                                                <Link href={team.links.github}>
                                                                    <Image
                                                                        width='100%'
                                                                        preview={false}
                                                                        src={`${config.baseUrl}images/website/github.png`}
                                                                    />
                                                                </Link>
                                                            </Col>
                                                        )}
                                                        {team.links.linkedin && (
                                                            <Col style={{ width: '28%', marginRight: '5%' }}>
                                                                <Link href={team.links.linkedin}>
                                                                    <Image
                                                                        width='100%'
                                                                        preview={false}
                                                                        src={`${config.baseUrl}images/website/linkedin.png`}
                                                                    />
                                                                </Link>
                                                            </Col>
                                                        )}
                                                        {team.links.web && (
                                                            <Col style={{ width: '28%', marginRight: '5%' }}>
                                                                <Link href={team.links.web}>
                                                                    <Image
                                                                        width='100%'
                                                                        preview={false}
                                                                        src={`${config.baseUrl}images/website/website.png`}
                                                                    />
                                                                </Link>
                                                            </Col>
                                                        )}
                                                    </Row>
                                                )}
                                            </Card>
                                        </Col>

                                        <Col span={18} style={{ marginTop: '3rem' }}>
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
                                        </Col>
                                    </Row>
                                );
                            })}
                    </>
                );
            })}
        </>
    );
};

export default OurTeam;
