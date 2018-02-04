import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Teams from './Teams.js';
import SingleTeam from './SingleTeam.js';
import Employees from './Employees.js';
import SingleEmployee from './SingleEmployee.js';
import Projects from './Projects.js';
import SingleProject from './SingleProject.js';
import ErrorPage from './ErrorPage.js';


export default class AppRouter extends Component {
  render() {    
    return (
      <Router> 
          <Switch>        
          <Route exact path="/" component={ Teams } ></Route>
          <Route exact path="/teams" component={ Teams } />
          <Route exact path="/team/:id" component={ SingleTeam } />
          <Route exact path="/employees" component={ Employees } />
          <Route exact path="/employee/:id" component={ SingleEmployee } />
          <Route exact path="/projects" component={ Projects }/>
          <Route exact path="/project/:id" component={ SingleProject } />
          <Route exact path="*" component={ ErrorPage } />
        </Switch>
      </Router>
    )
  }
}