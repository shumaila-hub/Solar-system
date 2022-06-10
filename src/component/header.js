import React from 'react';

import './header.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Shop from './navbarcomponent/pages/shop';
import ContactUs from './navbarcomponent/pages/ContactUs'; 
import Home from './navbarcomponent/pages/Home';
import Navbar from './navbarcomponent/navbar';
import KnowledgeBase from './navbarcomponent/pages/knowledgebase';
import Aboutus from './navbarcomponent/pages/aboutus';
import Download from './navbarcomponent/pages/download';


function Header() {
  return (
    <div>
      
    
    <Router>
   <Navbar/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/shop' component={Shop} />
        <Route path='/download' component={Download} />
        <Route path='/contact-us' component={ContactUs} />
        <Route path='/knowledge-base' component={KnowledgeBase} />
        <Route path='/aboutus' component={Aboutus} />
      
        {/* <Route path='/consulting' component={Consulting} /> */}
      </Switch>
    </Router>
    
   
    </div>
  );
}
export default Header;