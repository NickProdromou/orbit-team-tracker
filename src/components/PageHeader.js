import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';
import colours from '../styles/colours.js';
import { spacing } from '../styles/variables.js';
import type from '../styles/mixins/type.js';
import mediaQuery from '../styles/mixins/MediaQueryGenerator.js';


const PageHeader = ({title, subtitle}) => (
    <Header>
      <h3 className="HeaderText">{title}</h3>
      <p className="HeaderSubtitle">{subtitle}</p>
    </Header>
)

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
}

const Header = Styled.div`  
  padding: ${spacing.mid[2]} ${spacing.mid[0]};   
  background: ${colours.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .HeaderText {
    ${type('heading3')}
    color: ${colours.textLight};
    border-bottom: 1px solid ${colours.tertiary};
    text-align: center;    
  }

  .HeaderSubtitle {
    ${type('ui')};
    color: ${colours.textLight};
    font-weight: lighter;
    text-align: center;
  }
`

export default PageHeader;