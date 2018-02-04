import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleMenu } from '../actions/uiActions.js'
import PropTypes from 'prop-types';
import AppHeader from '../components/AppHeader.js'
import MobileOffCanvas from '../components/MobileOffCanvas.js'
import Styled from 'styled-components';
import colours from '../styles/colours.js';
import { spacing } from '../styles/variables.js';

class PageContainer extends Component {    

    static propTypes = {
        children: PropTypes.object,
        menuOpen: PropTypes.bool,
        toggleMenu: PropTypes.func.isRequired,
    };    

    render() {
        const { children, routerProps, menuOpen, toggleMenu } =  this.props;

        return (
            <Page>
                <MobileOffCanvas
                    toggle={ toggleMenu }
                    visible={ menuOpen }
                ></MobileOffCanvas>
                <AppHeader 
                    routerProps={ routerProps }
                    menuOpen={ menuOpen }
                    toggleMenuOpen={ toggleMenu }
                />
                { children }
                <div className="FOOTER">
                  this will be a footer eventually
                </div>
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

