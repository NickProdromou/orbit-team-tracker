import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Teams from './Teams.js';
import Employees from './Employees.js';
import Projects from './Projects.js';
import ErrorPage from './ErrorPage.js';


export default class AppRouter extends Component {
  render() {    
    return (
      <Router> 
          <Switch>        
          <Route exact path="/" component={ Teams } ></Route>
          <Route exact path="/teams" component={ Teams } />
          <Route exact path="/employees" component={ Employees } />
          <Route exact path="/projects" component={ Projects }/>
          <Route exact path="*" component={ ErrorPage } />
        </Switch>
      </Router>
    )
  }
}