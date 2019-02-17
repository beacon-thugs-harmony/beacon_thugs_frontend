import React, { Component } from 'react';
import Epoc from './Epoc';
import styled from 'styled-components/macro';

class Timeline extends Component {
  state = { epocs: [1, 2, 3, 4, 5, 6] };

  render() {
    return (
      <div>
        <Box>
          <div>
            <TheLine multi={this.props.step} />
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
              <Title>Timeslot: {this.props.data[this.props.step].current_epoch_id}</Title>
              <Title>Beacon Validator ID: {this.props.data[this.props.step].current_beacon_validator_id}</Title>
              <Title>
                Current Random Seed:{' '}
                {this.props.data[this.props.step].current_random_seed_r_j.toString().substring(0, 5) + '...'}
              </Title>
            </div>

            <div>
              {/* {this.state.epocs.map((v, k) => {
                return (
                  <Slot multi={k}>
                    <Epoc data={this.props.data} step={this.props.step} key={k} index={k} />
                  </Slot>
                );
              })} */}
              <Slot multi={0}>
                <Epoc data={this.props.data} step={this.props.step} key={0} index={0} />
              </Slot>
              <Slot multi={1}>
                <Epoc data={this.props.data} step={this.props.step} key={1} index={1} />
              </Slot>
              <Slot multi={2} style={{ paddingLeft: '195px' }}>
                <Epoc data={this.props.data} step={this.props.step} key={2} index={2} />
              </Slot>
              <Slot multi={3} style={{ paddingLeft: '290px' }}>
                <Epoc data={this.props.data} step={this.props.step} key={3} index={3} />
              </Slot>
              <Slot multi={4} style={{ paddingLeft: '386px' }}>
                <Epoc data={this.props.data} step={this.props.step} key={4} index={4} />
              </Slot>
              <Slot multi={5} style={{ paddingLeft: '485px' }}>
                <Epoc data={this.props.data} step={this.props.step} key={5} index={5} />
              </Slot>
            </div>
          </div>
          <ButtonHolder>
            <ButtonStyle
              onClick={() => {
                this.props.prev();
              }}
            >
              Previous
            </ButtonStyle>
            <ButtonStyle
              onClick={() => {
                this.props.next();
              }}
            >
              Next >
            </ButtonStyle>

            <ButtonStyle
              onClick={() => {
                this.props.next5();
              }}
            >
              Next >>
            </ButtonStyle>
          </ButtonHolder>
          <div>Current time slot:{this.props.step}</div>
        </Box>
      </div>
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
  padding-left: ${props => props.multi * 100}px;
  /* padding-left: 50px; */
  font-weight: bold;
  margin: 20px;
`;

const TheLine = styled.div`
  height: 340px;
  width: 0px;
  border: solid 1px red;
  position: absolute;
  top: 308px;
  left: ${props => props.multi * 24.1 + 138}px;
`;

const ButtonStyle = styled.button`
  color: white;
  background-color: #4a90e2;
  /* width: 60px; */
  padding-left: 20px;
  padding-right: 20px;
  height: 33px;
  border: none;
  font-size: 14px;
  border-radius: 2px;
  margin-left: 5px;
  margin-right: 5px;
`;

const ButtonHolder = styled.div`
  display: flex;
  flex-direction: row;
`;
