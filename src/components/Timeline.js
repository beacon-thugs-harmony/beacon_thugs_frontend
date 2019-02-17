import React, { Component } from 'react';
import Epoc from './Epoc';
import styled from 'styled-components/macro';

class Timeline extends Component {
  state = { epocs: [1, 2, 3, 4, 5, 6] };

  render() {
    return (
      <Box>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <Title>Timeslot:{this.props.data[this.props.step].current_epoch_id}</Title>
          <Title>
            Beacon Validator ID:{' '}
            {(Number(this.props.data[this.props.step].current_random_seed_r_j) * -1).toString().substring(0, 5) + '...'}
          </Title>
          <Title>Current Random Seed: 6754…..</Title>
        </div>
        <div>
          {this.state.epocs.map((v, k) => {
            return <Epoc data={this.props.data} step={this.props.step} />;
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
