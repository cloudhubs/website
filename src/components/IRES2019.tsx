import { Typography } from 'antd';

const { Paragraph, Link } = Typography;

const IRES2019 = () => {
    return (
        <>
            <Paragraph>
                This IRES 2019 project will advance knowledge of code-inspection techniques to improve module testing
                and quality assurance processes in distributed systems. It will also help with the automation of model
                construction for model-based testing approaches that will lead to improved test generation, test
                coverage validation, verification of module information compliance, and more in this field. Student’s
                individual open-source projects created during their research experience will directly contribute to
                improved testing and quality assurance in distributed software systems. The results will, in the end,
                help reduce efforts and costs related to testing and improve quality assurance of future software
                products, leading to fewer defects and bugs in products before customer release.
            </Paragraph>

            <Paragraph>
                Projects:{' '}
                <Link href='https://ires.ecs.baylor.edu/2019/projects'>https://ires.ecs.baylor.edu/2019/projects</Link>
            </Paragraph>

            <Paragraph>
                Students:{' '}
                <Link href='https://ires.ecs.baylor.edu/2019/students'>https://ires.ecs.baylor.edu/2019/students</Link>
            </Paragraph>
        </>
    );
};

export default IRES2019;
