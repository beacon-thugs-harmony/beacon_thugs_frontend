import React, { Component } from 'react';
import Epoc from './Epoc';
import styled from 'styled-components/macro';

class Timeline extends Component {
  state = { epocs: [1, 2, 3, 4, 5, 6] };

  render() {
    return (
      <Box>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <Title>Timeslot: {this.props.data[this.props.step].current_epoch_id}</Title>
          <Title>
            Beacon Validator ID:{' '}
            {(Number(this.props.data[this.props.step].current_random_seed_r_j) * -1).toString().substring(0, 5) + '...'}
          </Title>
          <Title>Beacon Validator ID: {this.props.data[this.props.step].current_beacon_validator_id}</Title>
          <Title>
            Current Random Seed:{' '}
            {this.props.data[this.props.step].current_random_seed_r_j.toString().substring(0, 5) + '...'}
          </Title>
        </div>

        <div>
          {this.state.epocs.map((v, k) => {
            return (
              <Slot multi={k}>
                <Epoc data={this.props.data} step={this.props.step} key={k} index={k}/>
              </Slot>
            );
          })}
        </div>

        <button
          onClick={() => {
            this.props.next();
          }}
        >
          Next
        </button>
        <div>Current slot:{this.props.step}</div>

        <button
          onClick={() => {
            this.props.next5();
          }}
        >
          Next5
        </button>

        <button
          onClick={() => {
            this.props.prev();
          }}
        >
          Previous
        </button>

        <div>Current time slot:{this.props.step}</div>
      </Box>
    );
  }
}

export default Timeline;

const Box = styled.div`
  background-color: white;
  margin: 10px;
  margin-left: 0px;
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

const Slot = styled.div`
  padding-left: ${props => props.multi * 50}px;
  /* padding-left: 50px; */
  font-weight: bold;
  margin: 20px;
`;
