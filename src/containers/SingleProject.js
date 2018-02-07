import React, { Component } from 'react';
import PageContainer from './PageContainer';
import ExpandableCard from '../components/ExpandableCard';

export default class SingleProject extends Component {
  
  itemList = ['a', 'b', 'c', 'e', 'f']

  renderList = () => this.itemList.map((item, index) => (<div key={index}>hello {item}</div>))

  render() {
    return (
      <PageContainer>
        <ExpandableCard
          renderFunc={this.renderList}
          buttonTextExpanded={'click to expand'}
          buttonTextContracted={'click to contract'}
        >
          <p>TEST CHILDREN</p>
        </ExpandableCard>        
      </PageContainer>
    )
  }
}