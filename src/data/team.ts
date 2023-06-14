import { config } from '../config';

interface Education {
    date: string;
    title: string;
    location: string;
}

interface Experience {
    date: string;
    role: string;
    location: string;
}

interface Awards {
    date: string;
    name: string;
    location: string;
}

interface TeamMember {
    id: string;
    address?: string[];
    education?: Education[];
    experience?: Experience[];
    awards?: Awards[];
    researchInterest?: string[];
    name: string;
    role: string;
    title?: string;
    origin?: string;
    biography?: string[];
    phone?: string;
    email?: string;
    image: string;
    links?: {
        github?: string;
        linkedin?: string;
        web?: string;
    };
}

const teams: Array<TeamMember> = [
    {
        id: 'dr-tomas-cerny',
        name: 'Dr. Tomas Cerny',
        role: 'Supervisor',
        title: 'Assistant Professor',
        origin: 'Baylor University',
        biography: [
            'He received his Bachelor and Engineer degrees from the Czech Technical University, FEE, in addition, he received M.S. degree from Baylor University. He received his Ph.D. in Information Science and Computer Engineering from the Czech Technical University, FEE in 2016. Soon after graduation, he returned to Baylor University to join the faculty of the School of Engineering and Computer Science.',
        ],
        phone: '+1 (254) 710-6838',
        email: 'tomas_cerny@baylor.edu',
        image: `${config.baseUrl}images/team/cerny.jpg`,
        links: {
            web: 'http://cs.baylor.edu/~cerny/',
        },
    },
    {
        id: 'jan-svacina',
        address: [
            'School of Engineering and Computer Science, Baylor University,',
            'Hankamer Academic Building,',
            '105 Baylor Ave, Suite H266, Waco, TX 76706,',
            'Waco, TX',
        ],
        education: [
            {
                date: 'August 2020',
                title: 'Master of Science',
                location: 'Baylor University, Waco, TX',
            },
            {
                date: 'June 2018',
                title: 'Bachelor of Science',
                location: 'Czech Technical University, Prague',
            },
        ],
        experience: [
            {
                date: '2016-2018',
                role: 'Developer',
                location: 'Monet+, Zlín-Štípa',
            },
        ],
        awards: [
            {
                date: '2020',
                name: 'Computer Science - Outstanding Graduate Student',
                location: 'Baylor University',
            },
        ],
        name: 'Jan Svacina',
        role: 'Team Leads',
        title: 'Log Scraper Lead',
        origin: 'Baylor University, Waco, TX',
        biography: [
            'He received the bachelor’s degree in software engineering from the Faculty of Electrical Engineering, Czech Technical University in Prague, Prague, Czech Republic, in 2018.',
            'He is currently a Research Assistant with the Department of Computer Science, Baylor University, Waco, TX, USA. His research interests include security in Internet of Things using event-driven programming and program code analysis for quality assurance and testing.',
        ],
        phone: '+1 (254)214 2983',
        image: `${config.baseUrl}images/team/svacina.jpg`,
        email: 'jan_svacina2@baylor.edu',
        links: {
            github: 'https://github.com/svacina',
        },
    },
    {
        id: 'dipta-das',
        researchInterest: ['Code Analysis', 'Machine Learning', 'Software Engineering'],
        name: 'Dipta Das',
        role: 'Team Leads',
        title: 'Log Errors Lead',
        origin: 'Baylor University',
        biography: [
            'Graduate student of Computer Science at Baylor University. He received his Bachelor’s degree from the Department of Computer Science and Engineering at the Chittagong University of Engineering and Technology in Chittagong, Bangladesh. His research focus is on software engineering, microservice security and code analysis.',
        ],
        image: `${config.baseUrl}images/team/dipta.jpg`,
        email: 'dipta_das1@baylor.edu',
        links: {
            github: 'https://github.com/diptadas',
            linkedin: 'https://www.linkedin.com/in/diptadas/',
            web: 'https://diptadas.com/',
        },
    },
    {
        id: 'vincent-bushong',
        name: 'Vincent Bushong',
        role: 'Team Leads',
        title: 'Source Crawler Lead',
        origin: 'Baylor University',
        image: `${config.baseUrl}images/team/bushong.png`,
        links: {
            github: 'https://github.com/vinbush',
        },
    },
    {
        id: 'andrew-walker',
        name: 'Andrew Walker',
        role: 'Team Leads',
        image: `${config.baseUrl}images/team/walker.png`,
        links: {
            github: 'https://github.com/walker76',
        },
    },
    {
        id: 'elizabeth-brighton',
        address: ['Baylor University,', '1311 S 5th St, Waco, TX 76706'],
        education: [
            {
                date: '2020',
                title: 'Bachelor of Computer Science',
                location: 'Baylor University',
            },
        ],
        name: 'Elizabeth Brighton',
        role: 'IRES 2020',
        title: 'Log Errors',
        origin: 'Baylor University',
        biography: [
            'I am a Senior Computer Science student studying at Baylor University. I plan to graduate in December of 2020 with a Bachelors in Computer Science, Software Engineering concentration.  I am currently doing  research under Baylor University, Red Hat, and Czech Tech University.',
            '',
        ],
        image: `${config.baseUrl}images/team/brighton.jpg`,
        email: 'Elizabeth_Brighton@Baylor.edu',
        links: {
            github: 'https://github.com/egbrighton',
        },
    },
    {
        id: 'jacob-curtis',
        name: 'Jacob Curtis',
        role: 'IRES 2020',
        title: 'Source Crawler',
        origin: 'Baylor University',
        image: `${config.baseUrl}images/team/baylor-bear.png`,
        links: {
            github: 'https://github.com/nnazo',
        },
    },
    {
        id: 'mark-du',
        name: 'Mark Du',
        role: 'IRES 2020',
        title: 'Source Crawler',
        origin: 'Baylor University',
        image: `${config.baseUrl}images/team/baylor-bear.png`,
        links: {
            github: 'https://github.com/mdu2017',
        },
    },
    {
        id: 'mark-fuller',
        education: [
            {
                date: '2021',
                title: 'Computer Science',
                location: 'Baylor University',
            },
        ],
        name: 'Mark Fuller',
        role: 'IRES 2020',
        title: 'Log Errors',
        origin: 'Baylor University',
        biography: [
            'Mark will receive a Bachelors degree in the fall of 2021 in Computer Science. </br>',
            'He is currently a Research Assistant with the Department of Computer Science, Baylor University, Waco, TX, USA. His research interests include big data, pattern matching, and computer graphics.',
        ],
        phone: '(805)390-9939',
        image: `${config.baseUrl}images/team/fuller.jpg`,
        email: 'Mark_Fuller1@baylor.edu',
        links: {
            github: 'http://github.com/MarkFuller1',
            linkedin: 'https://www.linkedin.com/in/mark-fuller-01586a174/',
        },
    },
    {
        id: 'raffety-jackson',
        education: [
            {
                date: 'May 2021 (ongoing)',
                title: 'Bachelors',
                location: 'Baylor University',
            },
        ],
        name: 'Jackson Raffety',
        role: 'IRES 2020',
        title: 'Log Scraper',
        origin: 'Baylor University',
        biography: [
            'I am an incoming Senior Computer Science student with a concentration in Software Engineering attending Baylor University. I plan to graduate with a Bachelors in May 2021. Areas of interest include Machine learning and algorithms',
            '',
        ],
        image: `${config.baseUrl}images/team/raffety.jpg`,
        email: 'Jackson_Raffety1@baylor.edu',
        links: {
            github: 'https://github.com/JacksonRaffety',
        },
    },
    {
        id: 'russel-sanders',
        name: 'Russel Sanders',
        role: 'IRES 2020',
        title: 'Source Crawler',
        origin: 'Baylor University',
        image: `${config.baseUrl}images/team/baylor-bear.png`,
        links: {
            github: 'https://github.com/RussellSanders1',
        },
    },
    {
        id: 'mica-schiewe',
        name: 'Micah Schiewe',
        role: 'IRES 2020',
        title: 'Log Errors',
        origin: 'Baylor University',
        biography: [
            'I am an incoming Computer Science Junior at Baylor University, anticipating to earn my bachelors in Spring 2022. I have worked with multiple programming languages, specifically C++, Javascript, Python, and Java. I have experience ranging from development with React for SIL International during Summer 2019 to touching on machine learning while working as an undergraduate research assistant for Baylor University and Red Hat in Summer 2020.',
        ],
        phone: '(512) 431-5981',
        image: `${config.baseUrl}images/team/schiewe.jpg`,
        email: 'Micah_Schiewe1@baylor.edu',
        links: {
            github: 'https://github.com/MicahSchiewe',
        },
    },
    {
        id: 'brooklynnstone',
        address: ['Austin, TX 78730'],
        education: [
            {
                date: 'May 2018',
                title: 'Computer Science',
                location: 'Baylor University',
            },
            {
                date: 'August 2014',
                title: 'Computer Science',
                location: 'Vandegrift High School',
            },
        ],
        experience: [
            {
                date: '2019',
                role: 'Information Security Intern',
                location: 'Baylor University',
            },
            {
                date: '2020',
                role: 'Undergraduate Research Assistant',
                location: 'Baylor University',
            },
        ],
        awards: [
            {
                date: '2018-2022',
                name: "Pursuing Bachelor's degree at Baylor University, studying computer science",
                location: 'Baylor University',
            },
        ],
        name: 'Brooklynn Stone',
        role: 'IRES 2020',
        title: 'Log Scraper',
        origin: 'Baylor University',
        biography: [
            'I am currently enrolled full time at Baylor University studying computer science. I am interested in learning more about AI and software development as well as gaining more experience programming alongside others. I currently have experience with Java, Python, and C++.',
            'I have experience in IT from working with the Baylor IT department on security in 2019 as well as experience in research during the summer of 2020 as an undergraduate research assistant.',
        ],
        phone: '(512) 968-3711',
        image: `${config.baseUrl}images/team/stone.png`,
        email: 'brooklynn_stone1@baylor.edu',
        links: {
            github: 'https://github.com/brooklynnStone1',
        },
    },
    {
        id: 'connor-woodahl',
        address: ['Baylor University,', '1311 S 5th St, Waco, TX 76706'],
        education: [
            {
                date: '2021',
                title: 'Bachelor of Science, Computer Science',
                location: 'Baylor University',
            },
        ],
        experience: [
            {
                date: '2020',
                role: 'Undergraduate Research',
                location: 'Baylor University, Red Hat',
            },
        ],
        awards: [
            {
                date: '2017',
                name: 'Provost Gold Scholarship',
                location: 'Baylor',
            },
        ],
        name: 'Connor Woodahl',
        role: 'IRES 2020',
        title: 'Log Scraper',
        origin: 'Baylor University 1311 S 5th St, Waco, TX 76706',
        biography: [
            'Senior year computer science student studying at Baylor University. Currently researching under Dr. Cerny for Baylor University, Red Hat, and Czech Tech University. My topics of interest within cs are databases, data structures, software engineering, and Java.',
            '',
        ],
        phone: '(123)-456-7890',
        image: `${config.baseUrl}images/team/woodahl.jpg`,
        email: 'Connor_woodahl1@baylor.edu',
        links: {
            github: 'https://github.com/Connor-woodahl',
        },
    },
];

export { teams };
