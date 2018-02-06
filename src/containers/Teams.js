import React, { Component } from 'react';
import { connect } from 'react-redux';
import { arrayOf } from 'prop-types'
import Employee from '../types/Employee.js'
import Team from '../types/Team.js';
import PageContainer from './PageContainer';
import PageHeader from '../components/PageHeader.js'
import TeamCard from '../components/TeamCard.js';
import { Page, Row, Column } from 'hedron';

class Teams extends Component {    

  static propTypes = {
    employees: arrayOf(Employee),
    teams: arrayOf(Team),
  }

  render() {    

    const { members, teams } = this.props

    return (
      <PageContainer>        
        <Page fluid>
            <Row>
              <Column fluid>
                <PageHeader 
                  title={ 'Teams' }
                  subtitle={ 
                    `Select the a team from the list below, teams are functional teams across the company. 
                    Click view more to see the members on a team` 
                }/>
              </Column>            
            </Row>
          </Page>          
            <Page>
              <Row>
                { teams.map( (team, i) => (
                  <Column key={i} md={6} lg={6}>
                    <TeamCard
                      title={ team.title }
                      description={ team.description }
                      members={ team.members }
                      employees={ members }
                      id={ team.id }
                      key={ team.id }
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
    members: state.employees,
  }
};

export default connect(mapStateToProps)(Teams)