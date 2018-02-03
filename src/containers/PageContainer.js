import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class PageContainer extends Component {

    static proptypes = {
        children: PropTypes.func.isRequired
    };

    render() {
        const { children } =  this.props;
        return (
            <div>
                <div className="HEADER">
                  this will be a header eventually
                </div>
                { children }
                <div className="FOOTER">
                  this will be a footer eventually
                </div>
            </div>

        )
    }
}