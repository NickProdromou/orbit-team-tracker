import React from 'react';
import Styled from 'styled-components';
import type from '../styles/mixins/type.js';
import colours from '../styles/colours.js';
import { spacing } from '../styles/variables.js';
import UserStatus from './UserStatus'; 
import { Link } from 'react-router-dom';

const MinimalTeamMember = ({id, imageUrl, name, role, status}) => (
  <User>
    <div className="UserInner">
      <img className="UserAvatar" src={ imageUrl } alt="User profile"></img>
      <div className="UserDetail">
        <span className="UserName">{ name }</span>
        <span className="UserRole">{ role }</span>      
        <div className="UserStatus">
          <UserStatus status={ status }/>
        </div>
      </div>
    </div>    
    <div className="UserFooter">
      <Link className="UserProfileLink" to={`employee/${id}`}>View profile</Link>
    </div>
  </User>
)

const User = Styled.div`
background: ${colours.textLight};
border: 1px solid ${colours.highlight};
:not(:last-child) {
  margin-bottom: ${spacing.small[3]}
}


.UserInner {
  display: flex;
  justify-content: space-between;
  padding: ${spacing.small[2]};
}

.UserAvatar {
  width: 60px;
  height: 60px;
}

.UserDetail {
  display: flex;
  flex-direction: column;
  text-align: right;
}

.UserName {
  ${type('ui')}
}


.UserRole {
  ${type('detail')}
}

.UserFooter {
  display: flex;  
  padding: ${spacing.small[3]} ${spacing.small[2]};
}

.UserProfileLink {
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

export default MinimalTeamMember;