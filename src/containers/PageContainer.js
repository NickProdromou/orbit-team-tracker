import React, { Component } from 'react';
import { array, bool, func } from 'prop-types';
import { connect } from 'react-redux';
import { toggleMenu } from '../actions/uiActions.js'
import AppHeader from '../components/AppHeader.js'
import MobileOffCanvas from '../components/MobileOffCanvas.js'
import Styled from 'styled-components';
import { colours } from '../styles/variables.js';

class PageContainer extends Component {    

    static propTypes = {
        children: array,
        menuOpen: bool,
        toggleMenu: func.isRequired,
        children: array,
    };    

    render() {
        const { children, routerProps, menuOpen, toggleMenu } =  this.props;
        return (
            <Page>
                <MobileOffCanvas 
                    toggle={ toggleMenu } 
                    visible={ menuOpen }
                />
                <AppHeader 
                    routerProps={ routerProps }
                    menuOpen={ menuOpen }
                    toggleMenuOpen={ toggleMenu }
                />
                { children }                            
            </Page>

        )
    }
}

const Page = Styled.div`
    background: ${colours.secondary}
`

const mapStateToProps = (state) => {
    return {
        menuOpen: state.ui.menuOpen
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleMenu: (isOpen) => {
            dispatch(toggleMenu(isOpen))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(PageContainer)

