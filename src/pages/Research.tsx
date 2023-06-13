import { Collapse, Typography, type CollapseProps } from 'antd';
import { projects } from '../data/projects';
import { researchTopics } from '../data/research-topics';

const { Title, Paragraph, Link } = Typography;

const Research = () => {
    const researchTopicItems: CollapseProps['items'] = researchTopics.map((research, i) => ({
        key: i,
        label: research.topic,
        children: <Paragraph>{research.description}</Paragraph>,
    }));

    const projectItems: CollapseProps['items'] = projects.map((project, i) => ({
        key: i,
        label: project.title,
        children: (
            <>
                <Paragraph>{project.description}</Paragraph>
                {project.liveDemo && (
                    <Paragraph>
                        Live Demo: <Link href={project.liveDemo}>{project.liveDemo}</Link>.
                    </Paragraph>
                )}
                <Paragraph>Repositories: </Paragraph>
                {project.repositories.map((repo, i) => (
                    <Paragraph>
                        <Link href={repo.link}>{repo.link}</Link> {repo.objective && `(${repo.objective})`}
                    </Paragraph>
                ))}
            </>
        ),
    }));

    return (
        <>
            <Title level={2}>Research Topics</Title>
            <Collapse accordion items={researchTopicItems}></Collapse>

            <Title level={2} style={{ marginTop: '2rem' }}>
                Projects
            </Title>
            <Collapse accordion items={projectItems}></Collapse>
        </>
    );
};

export default Research;
