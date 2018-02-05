import React, { Component } from 'react';
import { connect } from 'react-redux';
import PageContainer from './PageContainer.js';
import PageHeader from '../components/PageHeader.js';
import EmployeeCard from'../components/EmployeeCard.js';
import { Page, Row, Column } from 'hedron';

class Employees extends Component {
  render() {

    const { employees, teams } = this.props;

    return (
      <PageContainer>        
        <Page fluid>
          <Row fluid>
            <Column fluid>
              <PageHeader title={'Employees'}></PageHeader>
            </Column>
          </Row>
          <Row>
          { employees.map( employee => (
            <Column lg={4}>
              <EmployeeCard
                name={ employee.name }
                role={ employee.role }                      
                id={ employee.id }
                image={ employee.profileUrl }
                workingFromHome={ employee.workingFromHome }
                sick={ employee.sick }   
                status={ employee.status }
                teams={ teams }
              />
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