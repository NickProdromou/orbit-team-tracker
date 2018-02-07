import React, { Component } from 'react';
import { connect } from'react-redux';
import { arrayOf } from 'prop-types'
import Employee from '../types/Employee.js'
import Team from '../types/Team.js';
import Project from '../types/Project.js';
import PageContainer from './PageContainer.js';
import PageHeader from '../components/PageHeader.js';
import ProjectCard from '../components/ProjectCard.js';
import { Page, Row, Column } from 'hedron';

class Projects extends Component {

    static propTypes = {
      employees: arrayOf(Employee),
      teams: arrayOf(Team),
      projects: arrayOf(Project),
    }

  render() {

    const { projects, employees } = this.props;

    return (
      <PageContainer>        
          <Page fluid>
            <Row>
              <Column fluid>
                <PageHeader title={ 'Projects' }subtitle={ 
                  `Select the a project from the list below, to find out more information.
                  Projects can have multiple teams and employees working on them at once` 
                  }/>        
              </Column>
            </Row>
          </Page>
          <Page>
            <Row>
          { projects.map( (project, i) => (
            <Column lg={6} key={i}>
              <ProjectCard
                title={ project.title }
                description={ project.description }                      
                id={ project.id }
                issue={ project.linkToIssue }         
                storyPoints={ project.storyPoints }      
                employees={employees}
                assignedMembers={ project.assignedMembers }
              />
            </Column>
          )) }
            </Row>
          </Page>
      </PageContainer>
    )
  }
}

const mapStateToProps = state => ({
  projects: state.projects,
  employees: state.employees,  
  teams: state.teams,  
})

export default connect(mapStateToProps)(Projects)
