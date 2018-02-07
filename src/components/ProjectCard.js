import React, { Component } from 'react';
import { number, string, arrayOf } from 'prop-types'
import Employee from '../types/Employee.js'
import ExpandableCard from '../components/ExpandableCard';
import MinimalTeamMember from '../components/MinimalTeamMember';
import Styled from 'styled-components';
import { Link } from 'react-router-dom';
import colours from '../styles/colours.js';
import { spacing } from '../styles/variables.js';
import type from '../styles/mixins/type.js';

class ProjectCard extends Component {

  static propTypes = {
    title: string,
    description: string,
    storyPoints: number,
    id: number,
    issue: string,
    employees: arrayOf(Employee)
  }

  showTeamMembers = () => {
    return this.props.employees.reduce((assigned,val) => {        
      if (this.props.assignedMembers.includes(val.id)) {        
        assigned.push(val);        
      }
      return assigned;
    },[]).map(m => {
      return (
      <MinimalTeamMember        
        id={ m.id }
        imageUrl={ m.profileUrl }
        name={ m.name }
        role={ m.role }        
        status={ m.status }
        key={ m.id }
      />)
    })
}

  render() {
    const { title, description, id, issue, storyPoints, assignedMembers } = this.props;
    return (
      <ExpandableCard
        renderFunc={this.showTeamMembers}
        buttonTextExpanded={'hide employees working on task'}
        buttonTextContracted={'show employees working on task'}        
      >
          <Project className="ProjectCard">
            <div className="ProjectCardDetail">
              <span className="ProjectTitle">{ title }</span>
              <div className="ProjectStoryPoints">
                <span><strong>{ storyPoints }</strong> story points</span>
              </div>
            <p className="ProjectDescription">{ description }</p>
            </div>
        </Project>
      </ExpandableCard>
    )
  }
}
const Project = Styled.div`

.ProjectCardDetail {
  width: 100%;
}

.ProjectTitle {
  ${type('heading3')}
  color: ${colours.textLight};
  border-bottom: 1px solid ${colours.tertiary};
  font-weight: lighter;
  text-decoration: none;
}

.ProjectDescription {
  color: ${colours.textLight};
}

.ProjectStoryPoints {
  ${type('detail')}
  color: ${colours.textLight};
  margin-top: ${spacing.small[3]};
}

`
export default ProjectCard;