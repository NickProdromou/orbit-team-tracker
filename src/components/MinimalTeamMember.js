import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';
import type from '../styles/mixins/type.js';
import colours from '../styles/colours.js';
import { spacing } from '../styles/variables.js';
import { Link } from 'react-router-dom';

const MinimalTeamMember = ({id, imageUrl, name, role, wfh, sick}) => (
  <User>
    <div className="UserInner">
      <img className="UserAvatar" src={ imageUrl }></img>
      <div className="UserDetail">
        <span className="UserName">{ name }</span>
        <span className="UserRole">{ role }</span>      
        <div className="UserStatus">
          { wfh 
            && (<span className="UserStatusWFH">working from home</span>) 
          }
          { sick 
            && (<span className="UserStatusSick">sick</span>) 
          }
          {!wfh && !sick &&
            (<span className="UserStatusInOffice">In Office</span>) 
          }
        </div>
      </div>
    </div>    
    <div className="UserFooter">
      <Link className="UserProfileLink" to={`employee/${id}`}>View profile</Link>
    </div>
  </User>
)

MinimalTeamMember.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  wfh: PropTypes.bool.isRequired,
  sick: PropTypes.bool.isRequired
}

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

.UserStatusWFH {
  ${type('detail')}
  color: ${colours.tertiary};
}

.UserStatusSick {
  ${type('detail')}
  color: ${colours.error};
} 

.UserStatusInOffice {
  ${type('detail')};
  color: ${colours.highlight};
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