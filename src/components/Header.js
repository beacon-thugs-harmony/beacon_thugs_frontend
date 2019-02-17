import React, { Component } from 'react';
import styled from 'styled-components/macro';
import human from '../media/iconmonstr-user-2.svg';
import tri from '../media/triangle.svg';

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
            <img src={tri} />
            <img src={tri} />
            <img src={tri} />
          </div>
          <div>
            <div>Validators</div>
            {this.state.humans.map((v, k) => {
              return <img src={human} key={k} />;
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
