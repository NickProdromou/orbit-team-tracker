import React, { Component } from 'react';
import Styled, { css } from 'styled-components';
import colours from '../styles/colours.js';
import { spacing, transparentBg } from '../styles/variables.js';
import type from '../styles/mixins/type.js';
import mediaQuery from '../styles/mixins/MediaQueryGenerator.js';

const UserStatus = ({ status }) => (
  <Status status={status} className="UserStatus">{ status }</Status>
)

const Status = Styled.span`
  ${type('detail')}
  ${props => props && (props.status === 'working from home') && css`
    color: ${colours.tertiary};
  `}
  ${props => props && (props.status === 'out sick') && css`
    color: ${colours.error};
  `}
  ${props => props && (props.status === 'in office') && css`
    color: ${colours.highlight};
  `}
`

export default UserStatus;