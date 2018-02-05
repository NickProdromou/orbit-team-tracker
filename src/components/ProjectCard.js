import React, { Component } from 'react';
import Styled from 'styled-components';
import { Link } from 'react-router-dom';
import colours from '../styles/colours.js';
import { spacing } from '../styles/variables.js';
import type from '../styles/mixins/type.js';
import mediaQuery from '../styles/mixins/MediaQueryGenerator.js';

export default class ProjectCard extends Component {
  render() {
    
    const { title, description, id, issue } = this.props;

    return (
        <Project className="ProjectCard">
          <div className="ProjectCardDetail">
            <span className="ProjectTitle">{ title }</span>
            <p className="ProjectDescription">{ description }</p>
          </div>
          <div className="ProjectCardFooter">
          <Link 
            className="ProjectViewButton"
            to={`project/${id}`} >
            View Project
          </Link>
          <a className="ProjectCardButton" href={ issue } target="_new">View Ticket</a>
          </div>
        </Project>
    )
  }
}

const Project = Styled.div`
margin: ${spacing.small[2]};
background: ${colours.primary};
border-radius: 4px;
padding: ${spacing.small[2]} ${spacing.small[4]};
display: flex;
flex-direction: column;
border: 2px solid ${colours.highlight};

.ProjectCardDetail {
  width: 100%;
}

.ProjectTitle {
  ${type('heading3')}
  color: ${colours.textLight};
  border-bottom: 1px solid ${colours.tertiary};
  font-weight: lighter;
  text-decoration: none;
}

.ProjectDescription {
  color: ${colours.textLight};
}

.ProjectCardButton {
  ${type('ui')}
  color: ${colours.textLight};
  text-decoration: underline;
  padding: ${spacing.small[1]} ${spacing.small[3]};  
  background: none;
  border: 0;

  &:hover {
    cursor: pointer;
  }  
}

.ProjectViewButton {
    border: 1px solid #eee;
    border-radius: 4px;    
    color: ${colours.textLight};
    text-decoration: none;
    padding: ${spacing.small[1]} ${spacing.small[2]};
}

.ProjectCardFooter {
  border-top: 1px solid ${colours.borderColour};
  display: flex;
  justify-content: flex-start;
  padding: ${spacing.small[4]} 0;
}

`