import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';
import { spacing, colours } from '../styles/variables.js';
import { Page } from 'hedron';
import AppLinks from './AppLinks.js'
import HamburgerTrigger from './HamburgerTrigger.js';
import { type, mediaQuery } from '../styles/mixins/index.js';

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
              <span className="HeaderSubtitle">team tracker</span>
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

  .HeaderInfo {
    display: flex;
    align-items: flex-end;
  }

  .HeadingTitle {
    ${type('heading1')}
    color: ${colours.textLight};
    margin-top: 0;
    margin-bottom: ${spacing.small[0]}
  }

  .HeaderSubtitle {
    ${type('detail')}
    color: ${colours.textLight};
    margin: 0;
    font-weight: lighter;
    margin-bottom: ${spacing.small[3]};
    margin-left: ${spacing.small[3]};
    font-style: italic;
    font-weight: bold;
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
    color: ${colours.textLight};
    border-bottom: 1px solid transparent;

    :hover {
      cursor: pointer;      
    }

    &.active {
      color: ${colours.textDark};
      border-bottom: 1px solid ${colours.tertiary};
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