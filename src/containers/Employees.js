import React, { Component } from 'react';
import { connect } from 'react-redux';
import PageContainer from './PageContainer.js';
import PageHeader from '../components/PageHeader.js';
import EmployeeCard from'../components/EmployeeCard.js';
import ProjectCard from '../components/ProjectCard.js';
import { Page, Row, Column } from 'hedron';

class Employees extends Component {

  renderProjects = ( assignedProjects, projects) => {
    const currentProjects = assignedProjects.map( project => {
      return projects.find( p => p.id === project) || [];
    })  

    return currentProjects.length > 0 && currentProjects.map( cp => (
      <ProjectCard
        title={ cp.title }
        description={ cp.description }
        id={ cp.id }
        issue={ cp.linkToTicket }
        key={`project-${cp.id}}`}
      />      
    ));
  }


  render() {

    const { employees, teams, projects } = this.props;    

    return (
      <PageContainer>        
              <PageHeader 
                title={'Employees'} 
                subtitle={`Listed here are the current employees, 
                          their status and what they're working on.`}>
               </PageHeader>
          <Page>
            <Row>
          { employees.map( employee => (
            <Column lg={6} key={ employee.id }>
              <EmployeeCard
                name={ employee.name }
                role={ employee.role }                      
                id={ employee.id }                
                team={ employee.team }                
                image={ employee.profileUrl }                
                status={ employee.status }
                teams={ teams }
                update={ employee.update }
                blockers={ employee.blockers }>
                  { this.renderProjects( employee.assignedProjects, projects) }
                </EmployeeCard>
            </Column>
          )) }
          </Row>    
          </Page>
      </PageContainer>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    teams: state.teams,
    employees: state.employees,
    projects: state.projects,
  }
};

export default connect(mapStateToProps)(Employees)