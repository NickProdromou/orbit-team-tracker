import React, { Component } from 'react';
import { func, string, object } from 'prop-types';
import Styled from 'styled-components';
import { spacing, colours } from '../styles/variables.js';
import { type } from '../styles/mixins/index.js';

export default class ExpandableCard extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,      
    }
  }

  toggleExpanded = (expanded) => {
    this.setState({
      expanded: !expanded
    })
  }

  static propTypes = {
    children: object,
    renderFunc: func,
    buttonTextExpanded: string,
    buttonTextContracted: string,
  }

  render() {

    const { expanded } = this.state;
    const { renderFunc, buttonTextExpanded, buttonTextContracted } = this.props;

    return (
      <StyledExpandableCard className="ExpandableCard">
        <div className="ExpandableCardBody">
          { this.props.children }
        </div>
        <div className="ExpandableCardFooter">
          <button 
            className="ExpandableCardButton" 
            onClick={ () => this.toggleExpanded(expanded) }>
            { expanded ? buttonTextExpanded : buttonTextContracted }
          </button>
        </div>
         <div className="ExpandableCardList">
            { expanded && renderFunc() }
         </div>
      </StyledExpandableCard>
    )
  }
}

const StyledExpandableCard = Styled.div`
  margin: ${spacing.small[2]};
  background: ${colours.primary};
  border-radius: 4px;
  padding: ${spacing.small[3]};
  display: flex;
  flex-direction: column;
  border: 2px solid ${colours.highlight};

  .ExpandableCardButton {
    ${type('ui')}
    color: ${colours.textLight};
    text-decoration: underline;
    margin-left: auto;
    padding: ${spacing.small[1]} ${spacing.small[3]};  
    background: none;
    border: 0;

    &:hover {
      cursor: pointer;
    }      
  }

  .ExpandableCardFooter {
    margin-bottom: ${spacing.small[4]};
    display: flex;
    align-items: center;
  }
`