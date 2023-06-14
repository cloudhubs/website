import { Layout } from 'antd';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import CarouselHeader, { CarouselHeaderProps } from './components/CarouselHeader';
import FooterContent from './components/FooterContent';
import HeaderContent from './components/HeaderContent';
import { homeCarouselItems } from './data/home';
import FutureMembers from './pages/FutureMember';
import Home from './pages/Home';
import IRES from './pages/IRES';
import OurTeam from './pages/OurTeam';
import OurTeamMember from './pages/OurTeamMember';
import Publications from './pages/Publications';
import Research from './pages/Research';

const { Header, Footer, Content } = Layout;

const pages: Array<{
    name: string;
    link: string;
    component: JSX.Element;
    componentHeaderProps?: CarouselHeaderProps;
    inHeader: boolean;
}> = [
    {
        name: 'Home',
        link: '/',
        component: <Home />,
        componentHeaderProps: {
            autoplay: true,
            items: homeCarouselItems,
        },
        inHeader: true,
    },
    {
        name: 'Our Team',
        link: '/our-team',
        component: <OurTeam />,
        componentHeaderProps: {
            autoplay: false,
            backgroundOpacity: 0,
            items: [
                {
                    title: 'OUR TEAM',
                    description: 'CLOUDHUBS TEAM',
                    image: '/images/header/bear_habitat.jpg',
                },
            ],
        },
        inHeader: true,
    },
    {
        name: 'Our Team',
        link: '/our-team/:id',
        component: <OurTeamMember />,
        componentHeaderProps: {
            autoplay: false,
            backgroundOpacity: 0,
            items: [
                {
                    title: '​',
                    description: '',
                    image: '/images/header/fun-fact-bg.jpg',
                },
            ],
        },
        inHeader: false,
    },
    {
        name: 'Research',
        link: '/research',
        component: <Research />,
        componentHeaderProps: {
            autoplay: false,
            backgroundOpacity: 0,
            items: [
                {
                    title: 'RESEARCH',
                    description: '',
                    image: '/images/header/fun-fact-bg.jpg',
                },
            ],
        },
        inHeader: true,
    },
    {
        name: 'Publications',
        link: '/publications',
        component: <Publications />,
        componentHeaderProps: {
            autoplay: false,
            backgroundOpacity: 0,
            items: [
                {
                    title: 'PUBLICATIONS',
                    description: '',
                    image: '/images/header/fun-fact-bg.jpg',
                },
            ],
        },
        inHeader: true,
    },
    {
        name: 'IRES',
        link: '/ires',
        component: <IRES />,
        componentHeaderProps: {
            autoplay: false,
            backgroundOpacity: 0,
            items: [
                {
                    title: 'IRES',
                    description: '',
                    image: '/images/header/ires-2019.jpg',
                },
            ],
        },
        inHeader: true,
    },
    {
        name: 'Future Member',
        link: '/future-member',
        component: <FutureMembers />,
        componentHeaderProps: {
            autoplay: false,
            backgroundOpacity: 0,
            items: [
                {
                    title: 'FUTURE MEMBER',
                    description: 'JOIN CLOUDHUBS',
                    image: '/images/header/fun-fact-bg.jpg',
                },
            ],
        },
        inHeader: true,
    },
];

const headerStyle: React.CSSProperties = {
    textAlign: 'left',
    height: 120,
    paddingInline: 50,
    lineHeight: '64px',
    backgroundColor: '#ffffff',
    borderBottom: '1px solid #e8e8e8',
    position: 'sticky',
    top: 0,
    zIndex: 1,
};

const contentHeaderStyle: React.CSSProperties = {
    textAlign: 'left',
    minHeight: 120,
    lineHeight: '120px',
    backgroundColor: '#ffffff',
    paddingTop: '0rem',
    paddingBottom: '3rem',
};

const contentStyle: React.CSSProperties = {
    textAlign: 'left',
    minHeight: 120,
    lineHeight: '120px',
    paddingLeft: '10%',
    paddingRight: '10%',
    backgroundColor: '#ffffff',
    paddingBottom: '6rem',
};

const footerStyle: React.CSSProperties = {
    textAlign: 'left',
    height: 85,
};

function App() {
    return (
        <Router>
            <Layout>
                <Header style={headerStyle}>
                    <HeaderContent pages={pages.filter((page) => page.inHeader)} />
                </Header>
                <Content style={contentHeaderStyle}>
                    <Routes>
                        {pages
                            .filter(
                                (p): p is typeof p & { componentHeaderProps: CarouselHeaderProps } =>
                                    !!p.componentHeaderProps
                            )
                            .map((page) => (
                                <Route
                                    key={page.link}
                                    path={page.link}
                                    element={
                                        <CarouselHeader
                                            autoplay={page.componentHeaderProps.autoplay}
                                            backgroundOpacity={page.componentHeaderProps.backgroundOpacity}
                                            items={page.componentHeaderProps.items}
                                        ></CarouselHeader>
                                    }
                                />
                            ))}
                    </Routes>
                </Content>
                <Content style={contentStyle}>
                    <Routes>
                        {pages.map((page) => (
                            <Route key={page.link} path={page.link} element={page.component} />
                        ))}
                    </Routes>
                </Content>
                <Footer style={footerStyle}>
                    <FooterContent />
                </Footer>
            </Layout>
        </Router>
    );
}

export default App;
