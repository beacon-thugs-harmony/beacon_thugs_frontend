import React, { Component } from 'react';
import styled from 'styled-components/macro';
import person from '../media/person.svg';
import shard from '../media/shard.svg';

class Header extends Component {
  state = {
    humans: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  };
  render() {
    return (
      <Inner>
        <Box>
          <Title>Shards</Title>
          <ShardSpace>
            <img src={shard} />
            <img src={shard} />
            <img src={shard} />
          </ShardSpace>
        </Box>
        <Box>
          <Title>Validators</Title>
          <UserSpace>
            {this.state.humans.map((v, k) => {
              return <UserImg src={person} key={k} />;
            })}
          </UserSpace>
        </Box>

        <Box style={{ textAlign: 'left' }}>
          <div>Simulation Genesis Constants</div>
          <div>SIMULATION_EPOCHS:{this.props.data[this.props.step].CONFIG.SIMULATION_EPOCHS}</div>
          <div>AMAX:{this.props.data[this.props.step].CONFIG.AMAX}</div>
          <div>NSHARDS:{this.props.data[this.props.step].CONFIG.NSHARDS}</div>
          <div>EPOCH_SLOTS:{this.props.data[this.props.step].CONFIG.EPOCH_SLOTS}</div>
          <div>VALIDATORS:{this.props.data[this.props.step].CONFIG.VALIDATORS}</div>
        </Box>
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
  height: 180px;
  margin-top: 20px;
  padding: 10px;
`;

const Box = styled.div`
  background-color: white;
  margin: 10px;
  margin-left: 0px;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: start;
  padding-left: 30px;
  padding-top: 30px;
`;
const Title = styled.div`
  padding-bottom: 10px;
  font-weight: bold;
`;
const ShardSpace = styled.div`
  display: flex;
  justify-content: space-between;

  width: 90px;
`;

const UserSpace = styled.div`
  display: flex;
  justify-content: space-between;

  flex-wrap: wrap;
  width: 200px;
`;

const UserImg = styled.img`
  padding: 3px;
`;
