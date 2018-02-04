import React, { Component } from 'react';
import PageContainer from './PageContainer';

export default class Teams extends Component {
  render() {
    console.log(this.props)
    return (
      <PageContainer>
        <div>TEAMS</div>
      </PageContainer>      
    )
  }
}