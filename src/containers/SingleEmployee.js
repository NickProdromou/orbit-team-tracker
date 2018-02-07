import React, { Component } from 'react';
import { connect } from 'react-redux'
import PageContainer from './PageContainer';
import EmployeeCard from'../components/EmployeeCard.js';
import ProjectCard from'../components/ProjectCard.js';
import { Page, Row, Column } from 'hedron';

class SingleEmployee extends Component {  

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
    const { employees, teams, match, projects } = this.props;
    console.log(employees)
    const selectedEmployee = employees.find(e => e.id === parseInt(match.params.id) )
    console.log(match.params)
    console.log(selectedEmployee);
    return (
      <PageContainer>
        <Page>
          <Row>
            <Column>
              { selectedEmployee && 
                  <EmployeeCard
                    name={ selectedEmployee.name }
                    role={ selectedEmployee.role }                      
                    id={ selectedEmployee.id }                
                    team={ selectedEmployee.team }        
                    teams={ teams }        
                    image={ selectedEmployee.profileUrl }                
                    status={ selectedEmployee.status }
                    update={ selectedEmployee.update }
                    blockers={ selectedEmployee.blockers }
                  >
                  { this.renderProjects(selectedEmployee.assignedProjects, projects) }
                  </EmployeeCard>
                }
            </Column>
          </Row>
        </Page>
      </PageContainer>    
    )
  }
}

const mapStateToProps = (state) => {
  return {   
    employees: state.employees,
    teams: state.teams,
    projects: state.projects,
  }
};

export default connect(mapStateToProps)(SingleEmployee)