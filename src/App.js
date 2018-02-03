import React, { Component } from 'react';
import { fetchInitialEmployees } from './actions/employeeActions.js';
import { fetchInitialTeams } from './actions/teamActions.js';
import { fetchInitialProjects } from './actions/projectActions.js';
import { connect } from 'react-redux';


class App extends Component { 
  render() {
    return (
      <div className="App"></div>
    );
  }
}

const mapStateToProps = state => {
  return {
    employees: state.employees,
    teams: state.teams,
    projects: state.projects,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getEmployees: () => dispatch(fetchInitialEmployees()),
    getTeams: () => dispatch(fetchInitialProjects()),
    getProjects: () => dispatch(fetchInitialTeams()),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
