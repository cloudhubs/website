import { Layout } from 'antd';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import FooterContent from './components/FooterContent';
import HeaderContent from './components/HeaderContent';
import FutureMembers from './pages/FutureMember';
import Home from './pages/Home';
import IRES from './pages/IRES';
import OurTeam from './pages/OurTeam';
import OurTeamMember from './pages/OurTeamMember';
import Publications from './pages/Publications';
import Research from './pages/Research';

const { Header, Footer, Content } = Layout;

const pages: Array<{ name: string; link: string; component: JSX.Element; inHeader: boolean }> = [
    {
        name: 'Home',
        link: '/',
        component: <Home />,
        inHeader: true,
    },
    {
        name: 'Our Team',
        link: '/our-team',
        component: <OurTeam />,
        inHeader: true,
    },
    {
        name: 'Our Team',
        link: '/our-team/:id',
        component: <OurTeamMember />,
        inHeader: false,
    },
    {
        name: 'Research',
        link: '/research',
        component: <Research />,
        inHeader: true,
    },
    {
        name: 'Publications',
        link: '/publications',
        component: <Publications />,
        inHeader: true,
    },
    {
        name: 'IRES',
        link: '/ires',
        component: <IRES />,
        inHeader: true,
    },
    {
        name: 'Future Member',
        link: '/future-member',
        component: <FutureMembers />,
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

const contentStyle: React.CSSProperties = {
    textAlign: 'left',
    minHeight: 120,
    lineHeight: '120px',
    paddingLeft: '10%',
    paddingRight: '10%',
    backgroundColor: '#ffffff',
    paddingBottom: '6rem',
    paddingTop: '3rem',
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
