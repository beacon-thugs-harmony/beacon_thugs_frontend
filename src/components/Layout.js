import React, { Component } from 'react';
import styled from 'styled-components/macro';
import Timeline from './Timeline';
import Header from './Header';
import Stack from './Stack';

import { data } from '../data';

class Layout extends Component {
  state = { data: data, step: 0, MAXSTEPS: 0 };

  componentWillMount() {
    console.log(this.state.data);
    var MAXSTEPS = this.state.data[0].CONFIG.SIMULATION_EPOCHS * this.state.data[0].CONFIG.EPOCH_SLOTS;
    this.setState({ MAXSTEPS });
  }

  next = () => {
    let max = this.state.data[0].CONFIG.SIMULATION_EPOCHS * this.state.data[0].CONFIG.EPOCH_SLOTS;
    console.log(this.state.MAXSTEPS - 1);
    let s = Math.min(this.state.step + 1, this.state.MAXSTEPS - 1);
    if (this.state.step < max) {
      this.setState({ step: s });
    }
  };

  next5 = () => {
    console.log(this.state.MAXSTEPS - 1);
    let s = Math.min(this.state.step + 5, this.state.MAXSTEPS - 1);
    this.setState({ step: s });
  };

  prev = () => {
    let s = Math.max(this.state.step - 1, 0);
    this.setState({ step: s });
  };

  render() {
    return (
      <OutterLayout>
        <Header data={this.state.data} step={this.state.step} />
        <Row>
          <Timeline
            next5={this.next5}
            prev={this.prev}
            next={this.next}
            data={this.state.data}
            step={this.state.step}
          />
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
  background-color: #faf9f9;
  padding-left: 15px;
  padding-right: 40px;
`;
const Row = styled.div`
  display: flex;
`;
