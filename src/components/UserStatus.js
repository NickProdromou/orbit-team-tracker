import React from 'react';
import { string } from 'prop-types';
import Styled, { css } from 'styled-components';
import colours from '../styles/colours.js';
import type from '../styles/mixins/type.js';

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

UserStatus.propTypes = {
  status: string,
};

export default UserStatus;