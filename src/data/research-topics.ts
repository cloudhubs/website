interface ReserchTopic {
    topic: string;
    description: string;
}

const researchTopics: Array<ReserchTopic> = [
    {
        topic: 'Bytecode Analysis',
        description:
            'Discover and analyze end-points, authorization policies, control-flow, method calls, and Abstract Syntax Trees (AST).',
    },
    {
        topic: 'Source Code Analysis',
        description: 'Extract metadata for both compiled and interpreted languages.',
    },
    {
        topic: 'Access to Containers',
        description: 'Analyze containerized applications e.g. Docker image',
    },
    {
        topic: 'Software Architecture Reconstruction',
        description: 'Reconstruct centralized perspective for microservice mesh.',
    },
    {
        topic: 'Log Analysis',
        description: 'Finding inconsistencies, source code to log mapping, finding solutions from external sources.',
    },
    {
        topic: 'Code Clone Detection',
        description: 'Detect code clones from external sources e.g. StackOverflow, Github, etc.',
    },
    {
        topic: 'Security Analysis',
        description: 'Finding RBAC inconsistencies, permission exploitations, code smells.',
    },
];

export { researchTopics };
