import { func } from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';


const links = [
  {title: 'Teams', href: '/teams'},
  {title: 'Projects', href: '/projects'},
  {title: 'Employees', href: '/employees'},  
];

const linkComponents = links.map((l, i) => (
  <NavLink 
    to={ l.href } 
    key={ i }
    className={'AppLink'}>
      { l.title }    
    </NavLink>
));

linkComponents.propTypes = {
  callback: func
}

const AppLinks = () => linkComponents

export default AppLinks;
