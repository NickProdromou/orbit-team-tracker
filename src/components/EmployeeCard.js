import React, { Component } from 'react';
import Styled from 'styled-components';
import colours from '../styles/colours.js';
import { spacing, transparentBg } from '../styles/variables.js';
import type from '../styles/mixins/type.js';
import mediaQuery from '../styles/mixins/MediaQueryGenerator.js';
import { Link } from 'react-router-dom';

export default class EmployeeCard extends Component {

  getEmployeeMeta = (workingFromHome, sick) => (
      <span className="EmployeeMeta">
        { workingFromHome && (<span className="EmployeeWFH">Working from home</span>)}
        { sick && (<span className="EmployeeSick">Out sick</span>)}        
        { !sick && !workingFromHome && (<span className="EmployeeIn">In Office</span>) }
      </span>
    )

  render() {

    const { id,
     name, 
     team, 
     role,
     image,
     workingFromHome,
     sick,
     status,
     teams
    } = this.props;

    console.log(this.props);    

    return (
      <Employee className="EmployeeCard">
        <div className="EmployeeHeader">
          <div className="EmployeeImage">
            <img src={image} alt="" className="EmployeeProfile"/>            
          </div>
          <div className="EmployeeDetail">
            <span className="EmployeeName">{ name } { this.getEmployeeMeta(workingFromHome, sick) }</span> 
            <span className="EmployeeRole">{ role }</span>            
            <span className="EmployeeTeam">{ teams.find(team => team.id === team ) }</span>
          </div>
        </div>        
        <div className="EmployeeStatus">
          <div className="EmployeeUpdate">{ status.update }</div>
          {status.blockers 
            ? (<div className="EmployeeBlocker"> no blockers reported </div> )
            : (<div className="EmployeeBlocker"> {status.blockers && status.blockers.map(b => b)} </div> )
          }
        </div>
        <div className="EmployeeFooter">
          <button className="EmployeeProfileLink">View full profile</button>
        </div>
      </Employee>
    )
  }
}

const Employee = Styled.div`
margin: ${spacing.small[2]};
background: ${colours.whiteBackground};
border-radius: 4px;
display: flex;
flex-direction: column;
border: 2px solid ${colours.highlight};

.EmployeeHeader {
  display: flex;
  flex-direction: row;
}

.EmployeeImage {}

.EmployeeName {
  display: flex;  
  align-items: center;
}

.EmployeeDetail {
  display: flex;
  flex-direction: column;
  margin-left: ${spacing.small[5]};
}

.EmployeeMeta {  
  display: flex;
  margin-left: ${spacing.small[4]};
}

.EmployeeStatus {
  display: flex;
}

.EmployeeUpdate {
  display: flex;
  flex-direction: column;
}

.EmployeeBlocker {
  display: flex;
  flex-direction: column;
}

.EmployeeProfileLink {
  border: 1px solid #eee;
  border-radius: 4px;    
  color: ${colours.textLight};
  background: ${colours.primary};
  text-decoration: none;
  padding: ${spacing.small[1]} ${spacing.small[2]};
}

.EmployeeFooter {
  display: flex;
  justify-content: flex-start;
}

.EmployeeWFH {
  ${type('detail')}
  color: ${colours.tertiary};
}

.EmployeeSick {
  ${type('detail')}
  color: ${colours.error};
}

.EmployeeIn {
  ${type('detail')}
  color: ${colours.highlight};
}


`