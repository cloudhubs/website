import { Col, Menu, Row, Typography, type MenuProps } from 'antd';

const { Link, Title } = Typography;

interface HeaderContentProps {
    pages: Array<{ name: string; link: string }>;
}

const HeaderContent = ({ pages }: HeaderContentProps) => {
    console.log(window.location);
    const items: NonNullable<MenuProps['items']> = pages.map(({ name, link }) => ({
        label: (
            <Link href={link} strong>
                {name}
            </Link>
        ),
        key: link,
    }));
    return (
        <>
            <Row>
                <Col offset={1}>
                    <Title level={2}>Baylor Cloudhubs Lab</Title>
                </Col>
            </Row>
            <Row>
                <Col offset={13} span={11}>
                    <Menu mode='horizontal' selectedKeys={[window.location.pathname]} items={items} />
                </Col>
            </Row>
        </>
    );
};

export default HeaderContent;
