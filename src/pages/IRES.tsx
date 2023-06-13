import { Tabs, Typography, type TabsProps } from 'antd';
import IRES2019 from '../components/IRES2019';
import IRES2020 from '../components/IRES2020';

const { Paragraph } = Typography;

const IRES = () => {
    const tabItems: TabsProps['items'] = [
        {
            label: 'IRES 2020',
            key: 'ires-2020',
            children: <IRES2020 />,
        },
        {
            label: 'IRES 2019',
            key: 'ires-2019',
            children: <IRES2019 />,
        },
    ];

    return (
        <>
            <Paragraph>
                This IRES project provides U.S. undergraduate students with an eight-week summer research experience
                every year in Prague and Brno, Czech Republic. The research experience enables the students to gain new
                knowledge and skills related to testing, quality assurance, and code-inspection of distributed software
                systems used for enterprises. The students are mentored by internationally-renowned researchers in the
                field. The student projects are in the field of testing and quality assurance led by researchers from
                the Czech Technical University and experts from Red Hat, the world’s leading provider of open-source
                enterprise software solutions.
            </Paragraph>

            <Paragraph>
                The student research and experiments are performed at the Software Testing IntelLigent Lab at the Czech
                Technical University in Prague and at the Red Hat research facility located in Brno, Czech Republic.
                Students gain complete knowledge of the test development cycle, modern testing toolkits,
                production-level development, and research skills. Students research novel code-inspection techniques,
                further enabling knowledge advancements in this field. The remote sites selected for the research
                experiences will provide students with a unique opportunity to work with an internationally-renowned
                research team that has extensive expertise in model-based testing. These experiences enable
                participating students to start their research or academic careers. The students will bring their new
                expertise and skills back to the U.S.
            </Paragraph>

            <Tabs
                type='card'
                items={tabItems}
                defaultActiveKey={tabItems[0].key}
                centered
                style={{ paddingTop: '1rem' }}
            />
        </>
    );
};

export default IRES;
