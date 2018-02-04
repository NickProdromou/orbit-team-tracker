import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';
import colours from '../styles/colours.js';
import { spacing } from '../styles/variables.js';
import { Page } from 'hedron';
import HamburgerTrigger from './HamburgerTrigger.js';

import type from '../styles/mixins/type.js';

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
            <div>
              <h1 className="HeadingTitle">Orbit</h1>
              <h2 className="HeadingSub">A team tracker for small teams</h2>
            </div>
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
  padding: ${spacing.small[2]} ${spacing.mid[0]};

  .HeaderInner {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
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

  .HeadingMenuTrigger {
    margin-left: auto;    
  }
`