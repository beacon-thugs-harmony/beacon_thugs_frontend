import React, { Component } from 'react';
import styled from 'styled-components/macro';
import person from '../media/person.svg';
import shard from '../media/shard.svg';

class Header extends Component {
  state = {
    humans: [1, 2, 3, 4, 5, 6]
  };
  render() {
    return (
      <Inner>
        <Layout>
          <div>
            <div>Shards</div>
            <img src={shard} />
            <img src={shard} />
            <img src={shard} />
          </div>
          <div>
            <div>Validators</div>
            {this.state.humans.map((v, k) => {
              return <img src={person} key={k} />;
            })}
          </div>
        </Layout>
        <div style={{ textAlign: 'left' }}>
          <div>Simulation Genesis Constants</div>
          <div>SIMULATION_EPOCHS:{this.props.data[this.props.step].CONFIG.SIMULATION_EPOCHS}</div>
          <div>AMAX:{this.props.data[this.props.step].CONFIG.AMAX}</div>
          <div>NSHARDS:{this.props.data[this.props.step].CONFIG.NSHARDS}</div>
          <div>EPOCH_SLOTS:{this.props.data[this.props.step].CONFIG.EPOCH_SLOTS}</div>
          <div>VALIDATORS:{this.props.data[this.props.step].CONFIG.VALIDATORS}</div>
        </div>
      </Inner>
    );
  }
}

export default Header;

const Layout = styled.div`
  display: flex;
`;

const Inner = styled.div`
  display: flex;
  justify-content: space-between;
`;
