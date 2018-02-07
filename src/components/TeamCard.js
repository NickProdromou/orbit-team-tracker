import React, { Component } from 'react';
import { string, number, arrayOf } from 'prop-types';
import Employee from '../types/Employee.js';
import Styled from 'styled-components';
import ExpandableCard from '../components/ExpandableCard';
import MinimalTeamMember from './MinimalTeamMember.js'
import { spacing, colours } from '../styles/variables.js';
import { type } from '../styles/mixins/index.js';
import { Link } from 'react-router-dom';

export default class TeamCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    }
  }

  static propTypes = {
    title: string.isRequired,
    id: number.isRequired,
    description: string,
    members: arrayOf(number),
    employees: arrayOf(Employee)
  }

  showTeamMembers = () => {
    return this.props.employees
    .filter( e => e.team === this.props.id )
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
    const { title, description, members, id } = this.props;
    return (
      <ExpandableCard
        renderFunc={ this.showTeamMembers }
        buttonTextExpanded={'hide members'}
        buttonTextContracted={ 'show members' }
      >
          <TeamCardComponent className="TeamCard">
          <div className="TeamCardDetail">
            <Link to={`team/${id}`} className="TeamCardTitle">{ title }</Link>
            <p className="TeamCardDescription">{ description }</p>
              <span className="TeamCardMembers">Team members: { members.length }</span>                            
          </div>          
        </TeamCardComponent>
      </ExpandableCard>
    )
  }
}

const TeamCardComponent = Styled.div`

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

.TeamCardMemberList {
  padding: ${spacing.small[3]} ${spacing.small[2]};
}
`