interface Project {
    title: string;
    description: string;
    liveDemo?: string;
    repositories: Array<{ link: string; objective?: string }>;
}

const projects: Array<Project> = [
    {
        title: 'RAD',
        description:
            'The RAD (REST API Discovery) project can detect inter-microservice REST communications using static code analysis. This project works as a backbone of several other projects to provide a centralized perspective using Software Architecture Reconstruction (SAR) approach. It utilizes [Javassist](https://www.javassist.org/) and [JavaParser](https://javaparser.org/) libraries to support both source code and bytecode as input. It can automatically generate a REST-call graph which can be visualized using [GraphViz](https://graphviz.org/).',
        repositories: [
            {
                link: 'https://github.com/cloudhubs/rad',
                objective: 'Bytecode analysis',
            },
            {
                link: 'https://github.com/cloudhubs/rad-source ',
                objective: 'Source code analysis',
            },
        ],
    },
    {
        title: 'RBAC Analysis',
        description:
            'An automated Role-Based Access Control (RBAC) inconsistency detection tool for microservice mesh. It can detect RBAC violations for both intra and inter microservice REST communications. It utilizes the RAD project to extract metadata and generate REST communication graph.',
        repositories: [
            {
                link: ' https://github.com/cloudhubs/rad-analysis',
            },
        ],
    },

    {
        title: 'Prophet',
        description:
            'Prophet takes as input a GitHub repository containing the microservices and generates a centralized perspective for the microservice mesh.  It operates in three phases: source selection, context map generation, and communication diagram generation. It utilizes graph database to represent the complete architecture of an application. ',
        liveDemo: 'https://cloudhubs.ecs.baylor.edu/prophet.',
        repositories: [
            {
                link: 'https://github.com/cloudhubs/prophet',
            },
            {
                link: 'https://github.com/cloudhubs/prophet-app',
            },
            {
                link: 'https://github.com/cloudhubs/prophet-web',
            },
        ],
    },

    {
        title: 'ACM SAC',
        description: 'Open source virtual conference management system for ACM SAC 2020.',
        repositories: [
            {
                link: 'https://github.com/cloudhubs/acmsac',
            },
        ],
    },

    {
        title: 'StackOversight',
        description: 'Code clone detection by scrapping StackOverflow code blocks.',
        repositories: [
            {
                link: 'https://github.com/walker76-research/stackoversight',
            },
        ],
    },

    {
        title: 'MSA Nose',
        description: 'Detects code smells within microservices.',
        repositories: [
            {
                link: ' https://github.com/walker76-research/stackoversight',
            },
        ],
    },
];

export { projects };
