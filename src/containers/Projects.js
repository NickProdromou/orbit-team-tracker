import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from'react-redux';
import PageContainer from './PageContainer.js';
import PageHeader from '../components/PageHeader.js';
import ProjectCard from '../components/ProjectCard.js';
import { Page, Row, Column } from 'hedron';

class Projects extends Component {

  static propTypes = {}

  render() {

    const { projects } = this.props;

    return (
      <PageContainer>
        <Page fluid>
          <Row fluid>
            <Column fluid>
              <PageHeader 
                title={ 'Projects' }
                subtitle={ 
                `Select the a project from the list below, to find out more information.
                Projects can have multiple teams and employees working on them at once` 
              }/>
            </Column>            
          </Row>
          <Row>
          { projects.map( project => (
            <Column lg={4}>
              <ProjectCard
                title={ project.title }
                description={ project.description }                      
                id={ project.id }
                issue={ project.linkToIssue }               
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