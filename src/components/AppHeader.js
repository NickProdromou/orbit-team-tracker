import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';
import colours from '../styles/colours.js';
import { spacing } from '../styles/variables.js';
import { Page } from 'hedron';
import AppLinks from './AppLinks.js'
import HamburgerTrigger from './HamburgerTrigger.js';


import type from '../styles/mixins/type.js';
import mediaQuery from '../styles/mixins/MediaQueryGenerator.js';

export default class AppHeader extends Component {    

  static propTypes = {
    menuOpen: PropTypes.bool,
    toggleMenuOpen: PropTypes.func.isRequired,
  }

  render() {
    const { menuOpen, toggleMenuOpen } = this.props;    
    return (      
      <Header>
        <Page className="HeaderInner">
            <div className="HeaderInfo">
              <h1 className="HeadingTitle">Orbit</h1>

            </div>
            <nav className="HeaderNav">
              <ul className="HeaderNavList">
                <AppLinks/>
              </ul>
            </nav>
            <HamburgerTrigger 
              className="HeadingMenuTrigger"
              open={ menuOpen }
              toggle={ toggleMenuOpen }
            />
        </Page>          
      </Header>
    )
  }
}

const Header = Styled.header`  
  background: ${colours.primary};
  padding: 0 ${spacing.mid[0]};
  border-bottom: 1px solid ${colours.borderColour};

  .HeaderInner {
    display: flex;
    padding-top: ${spacing.small[1]};
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }  

  .HeadingTitle {
    ${type('heading2')}
    color: ${colours.textLight};
    margin-top: 0;
    margin-bottom: ${spacing.small[0]}
  }

  .HeadingSub {
    ${type('ui')}
    color: ${colours.textLight};
    margin: 0;
    font-weight: lighter;
  }

  .HeaderNav {
    display: none;
    ${mediaQuery('medium',`
      display: block;
      align-self: flex-end;      
    `)}
  }

  .HeaderNavList {
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: row;    
    margin-left: auto;
  }

  .AppLink {
    margin-right: ${spacing.small[5]};
    padding: ${spacing.small[5]} 0;
    text-decoration: none;
    color: ${colours.secondary};
    border-bottom: 1px solid transparent;

    :hover {
      cursor: pointer;      
    }

    &.active {
      border-bottom: 1px solid ${colours.tertiary};
      color: ${colours.textLight};
    }
  }

  .HeadingMenuTrigger {
      display: block;
      margin-left: auto;    
      ${mediaQuery('medium',`
        display: none;
    `)}
  }
`