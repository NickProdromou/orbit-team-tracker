import React, { Component } from 'react';
import Styled from 'styled-components';
import PropTypes from 'prop-types';
import colours from '../styles/colours.js';
import { spacing } from '../styles/variables.js';
import AppLinks from './AppLinks.js'
import type from '../styles/mixins/type.js';
import mediaQuery from '../styles/mixins/MediaQueryGenerator.js';

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
    employees: PropTypes.array,
  }

  toggleExpanded = () => {
    this.setState({
      expanded: !this.state.expanded
    })
  }

  showTeamMembers = () => {
    return this.props.employees.filter( e => e.team === this.props.id ).map(e => (<div><p>{e.name}</p></div>))
  }

  render() {
    console.log(this.props)
    const { title, description, members } = this.props;
    return (
      <Team className="TeamCard">
        <div className="TeamCardDetail">
          <span className="TeamCardTitle">{ title }</span>
          <p className="TeamCardDescription">{ description }</p>
          <div className="TeamCardFooter">
            <span className="TeamCardMembers">Team members: { members.length }</span>            
              <button onClick={() => this.toggleExpanded()} className="TeamCardButton">
                { this.state.expanded ? 'hide members' : 'show all members' }
              </button>              
          </div>
        </div>
        { this.state.expanded && this.showTeamMembers()}
      </Team>
    )
  }
}

const Team = Styled.div`
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
  color: ${colours.textLight};
}

.TeamCardButton {
  margin-left: auto;
  padding: ${spacing.small[1]} ${spacing.small[3]};
  ${type('ui')}
  color: ${colours.textLight};
  background: ${colours.secondary};
  font-weight: lighter;
  border-radius: 4px;

  &:hover {
    cursor: pointer;
  }
}
`