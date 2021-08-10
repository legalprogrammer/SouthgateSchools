import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './home';
import Easy from './easy';
import Junior from './junior';
import Mid from './mid';
import Senior from './senior';
import Error from './error';
import Enrolpage from './enrolpage';
import Boarding from './boarding';
import Studentlife from './studentlife';
import Music from '../studentlife/music';
import Apply from '../enrolment/applypage';
import Mainform from '../enrolment/mainform';
import Scholarship from './scholarship';
import Abroadstudents from './abroadstudents';
import Pageone from './news/pageone';
import PageTwo from './news/pagetwo';
import PageThree from './news/pagethree';
import Pagefour from './news/pagefour';
import Pagefive from './news/pagefive';
import Contact from './contact';
import Christian from './other pages/chrstian';
import Outdoor from './other pages/outdoor';
import Grace from './other pages/grace';
import Global from './other pages/global';
import Service from './other pages/service';
import Tech from './other pages/tech';
const Index = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/enrolpage'>
          <Enrolpage />
        </Route>
        <Route path='/news-2020-linda-dalton'>
          <Pageone />
        </Route>
        <Route path='/news-2020-aquatic'>
          <PageTwo />
        </Route>
        <Route path='/news-2020-GCSG'>
          <PageThree />
        </Route>
        <Route path='/news-2020-hary-saudling'>
          <Pagefour />
        </Route>
        <Route path='/news-2021-applied-learning'>
          <Pagefive />
        </Route>
        <Route path='/Junior'>
          <Junior />
        </Route>
        <Route path='/scholarship'>
          <Scholarship />
        </Route>
        <Route path='/abroad-students'>
          <Abroadstudents />
        </Route>
        <Route path='/Senior'>
          <Senior />
        </Route>
        <Route path='/mid'>
          <Mid />
        </Route>
        <Route path='/easy'>
          <Easy />
        </Route>
        <Route path='/boarding'>
          <Boarding />
        </Route>
        <Route path='/student-life'>
          <Studentlife />
        </Route>
        <Route path='/music'>
          <Music />
        </Route>
        <Route path='/how-to-apply'>
          <Apply />
        </Route>
        <Route path='/application-form'>
          <Mainform />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
        <Route path='/christian'>
          <Christian />
        </Route>
        <Route path='/outdoor'>
          <Outdoor />
        </Route>
        <Route path='/grace'>
          <Grace />
        </Route>
        <Route path='/global'>
          <Global />
        </Route>
        <Route path='/service-learning'>
          <Service />
        </Route>
        <Route path='/tech'>
          <Tech />
        </Route>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
    </Router>
  );
};

export default Index;
