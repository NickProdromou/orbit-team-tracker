import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';
import colours from '../styles/colours.js';

export default class HamburgerTrigger extends Component { 

    static propTypes = {
      toggle: PropTypes.func.isRequired,
      open: PropTypes.bool.isRequired,
    };

    render() {

        const { open, toggle, className } = this.props;

        return (            
            <AnimatedHamburger 
                className={ className }
                onClick={ () => toggle(!open) }      
                open={ open }
            >
                <span className="HamburgerInner"></span>
            </AnimatedHamburger> 
            )
        }
}

const AnimatedHamburger = Styled.div`
    display: block;
    height: 40px;
    width: 37px;    

    .HamburgerInner, 
    .HamburgerInner:before, 
    .HamburgerInner:after {    
        cursor: pointer;    
        height: 2px;
        width: 35px;
        top: 15px;
        background: ${colours.whiteBackground};
        position: relative;
        display: block;
        content: '';
        transition: all 500ms ease-in-out;
        z-index: 500000;
    }    

    .HamburgerInner:before {
        top: ${(props) => props.open ? '1px' : '-10px'};
        ${(props) => props.open ? 'transform: rotate(45deg);' : '' };
    }
    .HamburgerInner:after {
        top: ${(props) => props.open ? '0' : '10px'};
        ${(props) => props.open ? 'transform: rotate(-45deg);' : '' };
    } 
    .HamburgerInner {    
        background-color: ${(props) => props.open ? 'transparent' : 'white'};
    }
    
`