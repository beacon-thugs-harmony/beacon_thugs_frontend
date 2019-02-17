import React, { Component } from 'react';
import styled from 'styled-components/macro';
import person from '../media/person.svg';
import person_red from '../media/person_red.svg';
import person_green from '../media/person_green.svg';
import person_blue from '../media/person_blue.svg';
import person_grey from '../media/person_grey.svg';
import shard from '../media/shard.svg';
import shard_blue from '../media/shard_blue.svg';

class Header extends Component {
  state = {
    humans: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  };

  render() {
    var NSHARDS = this.props.data[this.props.step].CONFIG.NSHARDS;

    return (
      <Inner>
        <Box>
          <Title>Shards</Title>
          <ShardSpace>
            <img src={shard} />
            <img src={shard} />
            <img src={shard} />
          </ShardSpace>
          <div>Shard 0 Validator:{this.props.data[this.props.step].shard_validator[0]}</div>
          <div>Shard 1 Validator:{this.props.data[this.props.step].shard_validator[1]}</div>
          <div>Shard 2 Validator:{this.props.data[this.props.step].shard_validator[2]}</div>
        </Box>
        <Box>
          <Title>Validators</Title>
          <UserSpace>
            {this.state.humans.map((v, k) => {
              if (k == this.props.data[this.props.step].current_beacon_validator_id) {
                return <UserImg src={person_green} key={k} />;
              } else {
                return <UserImg src={person} key={k} />;
              }
            })}
            <div>Beacon Validator ID:{this.props.data[this.props.step].current_beacon_validator_id}</div>
          </UserSpace>
        </Box>
        <Box>
          <Title>Simulation Genesis Constants</Title>
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
