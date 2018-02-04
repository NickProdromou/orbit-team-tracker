import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';
import colours from '../styles/colours.js';
import { spacing } from '../styles/variables.js';
import AppLinks from './AppLinks.js'
import type from '../styles/mixins/type.js';
import mediaQuery from '../styles/mixins/MediaQueryGenerator.js';

export default class MobileOffCanvas extends Component {
  static propTypes = {
    visible: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired,
  }

  render() {

    const { visible } = this.props;

    return (
      <MobileMenu visible={visible}>
        <div className="MobileMenuContainer">
          <nav className="MobileMenuNav">
            <ul className="MobileMenuList">
              <AppLinks/>
            </ul>
          </nav>
        </div>
        <div className="MobileMenuOverlay"></div>
      </MobileMenu>
      
    )
  }
}

const MobileMenu = Styled.div`

  ${mediaQuery('medium',`
    display: none;
  `)}

  .MobileMenuContainer {
    background: ${colours.primary}; 
    height: 100vh;
    width: 160px;
    padding: ${spacing.mid[1]} ${spacing.small[5]};
    position: fixed;
    box-shadow: 1px 1px 9px 5px rgba(0,0,0,0.32);
    transition: transform 0.5s ease-in-out;
    ${(props) => props.visible 
      ? `transform: translateX(0px);` 
      : `transform: translateX(-170px);`
    }
    z-index: 1100;
  }   

  .MobileMenuOverlay {
    ${(props) => props.visible ? `
       opacity: 1;`: 
      `opacity: 0;
       display: none;
    `}
    transition: opacity 1s ease-out;
    background: rgba(0,0,0,.8);
    top: 0;
    width: calc(100vw + 170px);          
    height: 100vh;
    position: fixed;
  }

  .MobileMenuList {
    display: flex;
    flex-direction: column;
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  .AppLink {
    ${type('ui')}
    color: ${colours.textLight};
    border-bottom: 1px solid ${colours.secondary};
    padding: ${spacing.small[5]} 0;
    text-decoration: none;

      &:hover {
        cursor: pointer;       
      }


      &.active {
        color: ${colours.secondary};  
        border-bottom-color: ${colours.tertiary};
      }
  }
}
`
  