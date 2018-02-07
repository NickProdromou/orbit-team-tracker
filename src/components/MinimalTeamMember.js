import React from 'react';
import { number, string } from 'prop-types';
import Styled from 'styled-components';
import { type, mediaQuery } from '../styles/mixins/index.js';
import { spacing, colours } from '../styles/variables.js';
import UserStatus from './UserStatus'; 

const MinimalTeamMember = ({className, id, imageUrl, name, role, status}) => (
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
  </User>
)

MinimalTeamMember.propTypes = {
  id: number,
  imageUrl: string,
  name: string,
  role: string,
  status: string,
}

const User = Styled.div`
background: ${colours.textLight};
border: 1px solid ${colours.highlight};
:not(:last-child) {
  margin-bottom: ${spacing.small[5]}
}


.UserInner {
  display: flex;
  justify-content: space-between;
  padding: ${spacing.small[2]};
}

.UserAvatar {
  width: 60px;
  height: 60px;

  ${mediaQuery('small',`
    height: auto;
    width: auto;
    max-height: 128px;
    max-width: 128px;
  `)}
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
`

export default MinimalTeamMember;