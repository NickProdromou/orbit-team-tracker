import React, { Component } from 'react';
import Styled from 'styled-components';
import colours from '../styles/colours.js';
import { spacing, transparentBg } from '../styles/variables.js';
import type from '../styles/mixins/type.js';
import mediaQuery from '../styles/mixins/MediaQueryGenerator.js';
import { Link } from 'react-router-dom';
import UserStatus from './UserStatus'; 

export default class EmployeeCard extends Component {

  render() {

    const { id,
     name, 
     team, 
     role,
     image,
     workingFromHome,
     sick,
     status,
     teams,
     teamId
    } = this.props;    

    return (
      <Employee className="UserCard">
        <figure className="UserAvatar">
          <img src={ image } className="UserImage"/>
          <UserStatus status={ status }/>
        </figure>
        <div className="UserDetail">
          <h2 className="UserName">{ name }</h2>
          <h3 className="UserTitle">{ role }</h3>
          <h4 className="UserTeam">Team</h4>
          <button className="UserButton">Working on</button>
        </div>
      </Employee>
    )
  }
}

const Employee = Styled.div`
background: ${colours.whiteBackground};
border-radius: 4px;
display: flex;
justify-content: flex-start;
padding: ${spacing.small[5]};

.UserAvatar {
  margin: 0;
  display: flex;
  flex-direction: column;
}

.UserDetail {
  margin-left: ${spacing.small[5]}
}

.UserName {
  ${type('heading3')}
  margin: 0;
}
.UserTitle {
  ${type('ui')}
  font-weight: bold;
  margin: 0;
}

.UserTeam {
  margin-top: ${spacing.small[5]};    
}

.UserStatus {
  margin-top: ${spacing.small[4]}  
}

.UserButton {
  margin-left: auto;
  margin-left: auto;
  padding: ${spacing.small[1]} ${spacing.small[3]};
  ${type('ui')}
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