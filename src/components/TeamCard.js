import React, { Component } from 'react';
import { string, number, arrayOf } from 'prop-types';
import Employee from '../types/Employee.js';
import Team from '../types/Team.js';
import Styled from 'styled-components';
import PropTypes from 'prop-types';
import MinimalTeamMember from './MinimalTeamMember.js'
import colours from '../styles/colours.js';
import { spacing } from '../styles/variables.js';
import type from '../styles/mixins/type.js';
import { Link } from 'react-router-dom';

export default class TeamCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    }
  }

  static propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    description: PropTypes.string,
    members: PropTypes.arrayOf(PropTypes.number),
    employees: PropTypes.arrayOf(Employee)
  }

  toggleExpanded = () => {
    this.setState({
      expanded: !this.state.expanded
    })
  }

  showTeamMembers = (employees, id) => {
    return employees
    .filter( e => e.team === id )
    .map(e => (
      <MinimalTeamMember
        id={ e.id }
        imageUrl={ e.profileUrl }
        name={ e.name }
        role={ e.role }        
        status={ e.status }
        key={ e.id }
      />
      ))
  }

  render() {
    const { title, description, members, id, employees } = this.props;
    return (
      <TeamCardComponent className="TeamCard">
        <div className="TeamCardDetail">
          <Link to={`team/${id}`} className="TeamCardTitle">{ title }</Link>
          <p className="TeamCardDescription">{ description }</p>
          <div className="TeamCardFooter">
            <span className="TeamCardMembers">Team members: { members.length }</span>            
              <button onClick={() => this.toggleExpanded()} className="TeamCardButton">
                { this.state.expanded ? 'hide members' : 'show all members' }
              </button>              
          </div>
        </div>
        { this.state.expanded && 
          (<div className="TeamCardMemberList">
            { this.showTeamMembers(employees, id) } 
          </div>)
        }
      </TeamCardComponent>
    )
  }
}

const TeamCardComponent = Styled.div`
margin: ${spacing.small[2]};
background: ${colours.primary};
border-radius: 4px;
padding: ${spacing.small[2]} ${spacing.small[4]};
display: flex;
flex-direction: column;
border: 2px solid ${colours.highlight};

.TeamCardDetail {
  width: 100%;
}

.TeamCardTitle {
  ${type('heading3')}
  color: ${colours.textLight};
  border-bottom: 1px solid ${colours.tertiary};
  font-weight: lighter;
  text-decoration: none;
}

.TeamCardDescription {
  ${type('ui')}
  color: ${colours.textLight};
  font-weight: lighter;
}

.TeamCardFooter {
    display: flex;
    align-items: center;
}

.TeamCardMembers {
  ${type('detail')}
  color: ${colours.textLight};
}

.TeamCardButton {
  ${type('ui')}
  color: ${colours.textLight};
  text-decoration: underline;
  margin-left: auto;
  padding: ${spacing.small[1]} ${spacing.small[3]};  
  background: none;
  border: 0;

  &:hover {
    cursor: pointer;
  }  
}

.TeamCardMemberList {
  padding: ${spacing.small[3]} ${spacing.small[2]};
}
`