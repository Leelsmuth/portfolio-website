import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './Landing';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';

function Main() {
return(
  <Switch>
    <Route exact path='/' component={LandingPage} />
    <Route path='/about' component={About} />
    <Route path='/contact' component={Contact} />
    <Route path='/projects' component={Projects} />
  </Switch>
)
}

export default Main;