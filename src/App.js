import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/Main'
import './App.css';

function App() {
  return (
  <div className='demo-big-content'>
    <Layout /*style={{background: 'url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover'}}*/>
        <Header className='header-color' transparent title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">MyPortfolio</Link>} style={{color: 'white'}} scroll>
            <Navigation>
                <Link to="/about">About Me</Link>
                <Link to="/projects">Projects</Link>
            </Navigation>
        </Header>
        <Drawer title="Oluwafemi Anjorin">
        <Navigation>
                <Link to="/">Home</Link>
                <Link to="/about">About Me</Link>
                <Link to="/projects">Projects</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main />
        </Content>
    </Layout>

  </div>)
}

export default App;
