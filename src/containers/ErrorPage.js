import React, { Component } from 'react';
import PageContainer from './PageContainer';
import { Page, Column, Row } from 'hedron';
import PageHeader from '../components/PageHeader.js';
import Styled from 'styled-components';

export default class ErrorPage extends Component {
  render() {
    return (
      <PageContainer>
        <FullPageError fluid>
          <Row>
            <Column fluid>
              <PageHeader
                title={`OOPS`}
                subtitle={`Something went wrong, we don't have a page here. 
                press the back button on your browser, or select one of the options from the menu.
                `}
              />              
            </Column>
          </Row>
        </FullPageError>
      </PageContainer>
    )
  }
}

const FullPageError = Styled(Page)`
 min-height: 80vh;
`