import React, { Component } from 'react';
import styled from 'styled-components/macro';
import Timeline from './Timeline';
import Header from './Header';
import Stack from './Stack';

import { data } from '../data';

class Layout extends Component {
  state = { data: data, step: 0 };

  next = () => {
    let s = this.state.step + 1;
    this.setState({ step: s });
  };

  next5 = () => {
    let s = this.state.step + 5;
    this.setState({ step: s });
  };

  prev = () => {
    let s = this.state.step - 1;
    this.setState({ step: s });
  };

  render() {
    return (
      <OutterLayout>
        <Header data={this.state.data} step={this.state.step} />
        <Row>
          <Timeline next5={this.next5} prev={this.prev} next={this.next} data={this.state.data} step={this.state.step} />
          <Stack data={this.state.data} step={this.state.step} />
        </Row>
      </OutterLayout>
    );
  }
}

export default Layout;

const OutterLayout = styled.div`
  display: flex;
  flex-direction: column;
`;
const Row = styled.div`
  display: flex;
`;
