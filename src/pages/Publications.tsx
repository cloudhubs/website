import { Col, Row, Tabs, Typography, type TabsProps } from 'antd';
import { publications, type Publication } from '../data/publications';

const { Title, Link, Paragraph, Text } = Typography;

const publicationsByYear = publications.reduce((acc, publication) => {
    if (!acc[publication.year]) {
        acc[publication.year] = [];
    }
    acc[publication.year].push(publication);

    return acc;
}, {} as Record<number, Publication[]>);

console.log(publicationsByYear);

const Publications = () => {
    const tabItems: TabsProps['items'] = Object.entries(publicationsByYear)
        .sort(([year1], [year2]) => (+year1 < +year2 ? 1 : -1))
        .map(([year, publications]) => ({
            label: year,
            key: year,
            children: (
                <>
                    <Title level={3}>{year}</Title>
                    {publications.map((publication, i) => (
                        <Row style={{ backgroundColor: i % 2 === 0 ? '#edf2f6' : '#f9f9f9' }}>
                            <Col
                                style={{
                                    width: '25%',
                                    paddingLeft: '15px',
                                    paddingRight: '15px',
                                    borderRight: '1px solid #fff',
                                }}
                            >
                                <Paragraph strong>{publication.authors.join(', ')}</Paragraph>
                            </Col>
                            <Col
                                style={{
                                    width: '50%',
                                    paddingLeft: '15px',
                                    paddingRight: '15px',
                                    borderRight: '1px solid #fff',
                                }}
                            >
                                <Paragraph>
                                    {publication.title}
                                    &nbsp;&nbsp;&nbsp;
                                    {publication.publisher}
                                </Paragraph>
                            </Col>
                            <Col style={{ width: '25%', paddingLeft: '15px', paddingRight: '15px' }}>
                                <Paragraph>
                                    <Text strong>DOI:</Text>{' '}
                                    <Link href={`https://doi.org/${publication.doi}`} target='_blank'>
                                        {publication.doi}
                                    </Link>
                                </Paragraph>
                            </Col>
                        </Row>
                    ))}
                </>
            ),
        }));

    return (
        <>
            <Row justify={'center'} align={'top'}>
                <Col span={10}>
                    <Title level={2}>Publications, Conference Papers, and Journal Articles</Title>
                </Col>
                <Col span={14}>
                    <Paragraph>
                        This page shows a list of publications of Cloudhubs lab. More information can be found on{' '}
                        <Link href='https://www.researchgate.net/profile/Tom_Cerny'>Researchgate</Link> and{' '}
                        <Link href='https://scholar.google.com/citations?hl=en&user=iBX2zM4AAAAJ&view_op=list_works&sortby=pubdate'>
                            Google Scholar
                        </Link>
                        .
                    </Paragraph>
                </Col>
            </Row>

            <Tabs items={tabItems} defaultActiveKey={tabItems[0].key} centered />
        </>
    );
};

export default Publications;
