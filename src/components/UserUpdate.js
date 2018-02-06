import React from 'react';
import Styled from 'styled-components';
import colours from '../styles/colours.js';
import { spacing } from '../styles/variables.js';
import type from '../styles/mixins/type.js';


const UserUpdate = ({ update, blockers }) => (
  <Update className="UserUpdate">
    <div className="UserTodayUpdate">
      <span className="UserUpdateTitle">Update:</span>
          <span className="UserUpdateText">{update}</span>
    </div>
    <div className="UserTodayBlockers">
      <span className="UserBlockerTitle">Blockers:</span>
        <ul className="UserBlockersText">
          { blockers.map((b,i) => (
            <li className="UserBlockersTextItem" key={ i }>{b}</li>
            )) 
          }
        </ul>      
    </div>
  </Update>
)
  

const Update = Styled.div`
  display: flex;
  justify-content: space-between;

  ul {
    margin: 0;
    padding: 0;
  }

  .UserTodayUpdate {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    flex: 0 0 50%;    
    padding-right: ${spacing.small[3]};
  }

  .UserUpdateTitle {
    border-bottom: 2px solid ${colours.highlight};
    font-weight: bold;
  }

  .UserUpdateText {
    ${type('detail')}
    padding: ${spacing.small[3]} 0;
  }

  .UserBlockerTitle {
    border-bottom: 2px solid ${colours.error};
    font-weight: bold;
  }

  .UserTodayBlockers {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    flex: 0 0 50%;
  }

  .UserBlockersText {
    ${type('detail')}
    padding: ${spacing.small[3]} 0;
    list-style-type: none;
  }

`

export default UserUpdate;