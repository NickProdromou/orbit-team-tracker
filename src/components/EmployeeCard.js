import React, { Component } from 'react';
import { number, string, arrayOf, array } from 'prop-types';
import Team from '../types/Team.js';
import Styled from 'styled-components';
import { spacing, colours } from '../styles/variables.js';
import { type } from '../styles/mixins/index.js';
import UserStatus from './UserStatus'; 
import UserUpdate from './UserUpdate'; 

export default class EmployeeCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showChildren: false
    }
  }

  static propTypes = {
    name: string,
    profileUrl: string,
    team: number,
    role: string,
    assignedProjects: arrayOf(number),
    status: string,
    update: string,
    blockers: arrayOf(string),
    children: array,
    teams: arrayOf(Team),
  }

  toggleExpanded = (state) => {
    this.setState({
      showChildren: !state
    })
  }

  renderUpdate = (u,b) => (b.length > 0  || u !== '') ? 
    (<div className="EmployeeCardUpdate">
      <UserUpdate update={ u } blockers={ [...b] }/>
     </div>) : 
    (<div className="EmployeeCardUpdate">
      <span className="EmployeeUpdateAbsent">user has not provided an update</span>
      </div>);


  getTeam = (teams, team) => teams.find(t => t.id === team).title;

  render() {

    const { 
     name, 
     team, 
     role,
     image,     
     status,
     teams,
     children,
     update,
     blockers
    } = this.props;        

    const { showChildren } = this.state;

    return (
      <Employee className="EmployeeCard">
      <div className="EmployeeCardInner">
        <figure className="EmployeeAvatar">
          <img src={ image } alt="user profile" className="EmployeeImage"/>
          <UserStatus className="EmployeeStatus" status={ status }/>
        </figure>
        <div className="EmployeeDetail">
          <h2 className="EmployeeName">{ name }</h2>
          <h3 className="EmployeeTitle">{ role }</h3>
          <h4 className="EmployeeTeam">{ this.getTeam(teams, team) }</h4>
          <button className="EmployeeButton" onClick={ ()=>this.toggleExpanded(showChildren) }>
          { showChildren ? 'hide' : 'show' } update
          </button>
        </div>
      </div>
      <div className="EmployeeProjects">        
        { showChildren && children }        
        { showChildren && this.renderUpdate(update, blockers) }
      </div>        
      </Employee>
    )
  }
}

const Employee = Styled.div`
background: ${colours.whiteBackground};
border-radius: 4px;

justify-content: flex-start;
padding: ${spacing.small[5]};

.EmployeeCardInner {
  display: flex;  
}

.EmployeeAvatar {
  margin: 0;
  display: flex;
  flex-direction: column;
}

.EmployeeDetail {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: auto;
  text-align: right;
}

.EmployeeName {
  ${type('heading3')}
  margin: 0;
}
.EmployeeTitle {
  ${type('ui')}
  font-weight: bold;
  margin: 0;
}

.EmployeeTeam {
  ${type('detail')}
  margin-top: ${spacing.small[5]};    
}

.EmployeeStatus {
  background: ${colours.primary};
  padding: ${spacing.small[3]} ${spacing.small[2]};
}

.EmployeeCardUpdate {
  margin-top: ${spacing.small[5]};
}

.EmployeeUpdateAbsent {
  ${type('detail')}
}

.ExpandableCard {
  margin: ${spacing.small[2]} 0;
}

.EmployeeButton {
  ${type('ui')}
  margin-left: auto;
  margin-left: auto;
  padding: ${spacing.small[1]} ${spacing.small[3]};
  color: ${colours.textLight};
  background: ${colours.secondary};
  font-weight: lighter;
  border-radius: 4px;
  text-decoration: none;


  &:hover {
    cursor: pointer;
  }   
}
`