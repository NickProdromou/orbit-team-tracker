import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import PageContainer from './PageContainer';
import PageHeader from '../components/PageHeader.js'
import TeamCard from '../components/TeamCard.js';
import { Page, Row, Column } from 'hedron';
import Styled from 'styled-components';
import colours from '../styles/colours.js';
import { fetchInitialTeams } from '../actions/teamActions.js';
import { fetchInitialEmployees } from '../actions/employeeActions.js';

class Teams extends Component {

  componentWillMount() {
    this.props.getEmployees();
    this.props.getTeams();
  }
  
  static propTypes = {

  }

  render() {    

    const { members, teams } = this.props

    return (
      <PageContainer>        
        <Page fluid={'true'}>
            <Row fluid={'true'}>
              <Column fluid={'true'}>
                <PageHeader 
                  title={ 'Teams' }
                  subtitle={ 
                    `Select the a team from the list below, teams are functional teams across the company. 
                    Click view more to see the members on a team` 
                }/>
              </Column>            
            </Row>
            <TeamList>
                { teams.map( team => (
                  <Column lg={4}>
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
            </TeamList>
        </Page>          
      </PageContainer>      
    )
  }
}

const TeamList = Styled(Row)`
  background: ${colours.secondary};
`

const mapStateToProps = (state) => {
  return {
    teams: state.teams,
    members: state.employees,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getEmployees: () => dispatch(fetchInitialEmployees()),
    getTeams: () => dispatch(fetchInitialTeams()),    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Teams)