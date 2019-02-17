import React, { Component } from 'react';
import styled from 'styled-components/macro';
import mixing from '../media/mixing.png';
import vdf from '../media/vdf.png';
import person from '../media/person.svg';
import arrow from '../media/arrow.svg';
import person_blue from '../media/person_blue.svg';

class Stack extends Component {
  render() {
    let step = this.props.step;
    let stepMod4 = step % 4;
    let stepSmallerThan4 = step < 4;

    //if (step < this.props.data[step]) // need to handle

    return (
      <Box>
        <Epoc>
          <div>
            <TitleEpoc>Epoc {this.props.data[step].current_epoch_id}</TitleEpoc>
            <div style={{ display: 'flex' }}>Mixing</div>
          </div>
          <TopNav>
            <div>Number</div>
            <div>Hashed</div>
            <div>Reveal</div>
          </TopNav>
          <Process>
            <GridHolder>Slot 1</GridHolder>
            <UserStyle src={person} />
            <ArrowStyle src={arrow} />
            <GridHolderBig>
              {this.props.data[step - stepMod4].validator_revealed_entropy.toString().substring(0, 5) + '...'}
            </GridHolderBig>
            <ArrowStyle src={arrow} />
            <GridHolderBig>
              {this.props.data[step - stepMod4].validator_committed_hash_of_entropy.toString().substring(0, 5) + '...'}
            </GridHolderBig>
            <ArrowStyle src={arrow} />
            <GridHolderBig>
              {this.props.data[step - stepMod4].validator_revealed_entropy.toString().substring(0, 5) + '...'}
            </GridHolderBig>
            <ArrowStyle src={arrow} />
            <GridHolder>XOR</GridHolder>
          </Process>

          {stepMod4 !== 0 && (
            <Process>
              <GridHolder>Slot 2</GridHolder>
              <UserStyle src={person} />
              <ArrowStyle src={arrow} />
              <GridHolderBig>
                {stepMod4 !== 0 &&
                  this.props.data[step - (stepMod4 - 1)].validator_revealed_entropy.toString().substring(0, 5) + '...'}
              </GridHolderBig>
              <ArrowStyle src={arrow} />
              <GridHolderBig>
                {stepMod4 !== 0 &&
                  this.props.data[step - (stepMod4 - 1)].validator_committed_hash_of_entropy
                    .toString()
                    .substring(0, 5) + '...'}
              </GridHolderBig>
              <ArrowStyle src={arrow} />
              <GridHolderBig>
                {stepMod4 !== 0 &&
                  this.props.data[step - (stepMod4 - 1)].validator_revealed_entropy.toString().substring(0, 5) + '...'}
              </GridHolderBig>
              <ArrowStyle src={arrow} />
              <GridHolder>XOR</GridHolder>
            </Process>
          )}

          {stepMod4 !== 0 && stepMod4 !== 1 && (
            <Process>
              <GridHolder>Slot 3</GridHolder>
              <UserStyle src={person} />
              <ArrowStyle src={arrow} />
              <GridHolderBig>
                {stepMod4 !== 0 &&
                  stepMod4 !== 1 &&
                  this.props.data[step - (stepMod4 - 2)].validator_revealed_entropy.toString().substring(0, 5) + '...'}
              </GridHolderBig>
              <ArrowStyle src={arrow} />
              <GridHolderBig>
                {stepMod4 !== 0 &&
                  stepMod4 !== 1 &&
                  this.props.data[step - (stepMod4 - 2)].validator_committed_hash_of_entropy
                    .toString()
                    .substring(0, 5) + '...'}
              </GridHolderBig>
              <ArrowStyle src={arrow} />
              <GridHolderBig>
                {stepMod4 !== 0 &&
                  stepMod4 !== 1 &&
                  this.props.data[step - (stepMod4 - 2)].validator_revealed_entropy.toString().substring(0, 5) + '...'}
              </GridHolderBig>
              <ArrowStyle src={arrow} />
              <GridHolder>XOR</GridHolder>
            </Process>
          )}
          {stepMod4 !== 0 && stepMod4 !== 1 && stepMod4 !== 2 && (
            <Process>
              <GridHolder>Slot 4</GridHolder>
              <UserStyle src={person} />
              <ArrowStyle src={arrow} />
              <GridHolderBig>
                {stepMod4 !== 0 &&
                  stepMod4 !== 1 &&
                  stepMod4 !== 2 &&
                  this.props.data[step - (stepMod4 - 3)].validator_revealed_entropy.toString().substring(0, 5) + '...'}
              </GridHolderBig>
              <ArrowStyle src={arrow} />
              <GridHolderBig>
                {stepMod4 !== 0 &&
                  stepMod4 !== 1 &&
                  stepMod4 !== 2 &&
                  this.props.data[step - (stepMod4 - 3)].validator_committed_hash_of_entropy
                    .toString()
                    .substring(0, 5) + '...'}
              </GridHolderBig>
              <ArrowStyle src={arrow} />
              <GridHolderBig>
                {stepMod4 !== 0 &&
                  stepMod4 !== 1 &&
                  stepMod4 !== 2 &&
                  this.props.data[step - (stepMod4 - 3)].validator_revealed_entropy.toString().substring(0, 5) + '...'}
              </GridHolderBig>
              <ArrowStyle src={arrow} />
              <GridHolder>XOR</GridHolder>
            </Process>
          )}
          {stepMod4 !== 0 && stepMod4 !== 1 && stepMod4 !== 2 && (
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <div>Result</div>
              <ArrowStyle src={arrow} />
              <div>
                {stepMod4 !== 0 &&
                  stepMod4 !== 1 &&
                  stepMod4 !== 2 &&
                  this.props.data[step - (stepMod4 - 3)].current_entropy_e_i.toString().substring(0, 5) + '...'}
              </div>
            </div>
          )}
        </Epoc>

        <Epoc>
          <div>
            <TitleEpoc>
              Epoc {this.props.data[step].current_epoch_id > 0 ? this.props.data[step].current_epoch_id - 1 : '?'}
            </TitleEpoc>
          </div>
          <Row>
            <div>VDF:</div>
            <div>
              {step > 3
                ? this.props.data[step - 1 - (step % 4) - 4 * 0].vdf_input.toString().substring(0, 5) + '...'
                : 'None'}{' '}
              ={' '}
            </div>
            <div>{step > 3 ? '... Calculating' : 'None'}</div>
          </Row>
        </Epoc>
        <Epoc>
          <div>
            <TitleEpoc>
              Epoc {this.props.data[step].current_epoch_id > 1 ? this.props.data[step].current_epoch_id - 2 : '?'}
            </TitleEpoc>
          </div>
          <Row>
            <div>VDF:</div>
            <div>
              {step > 7
                ? this.props.data[step - 1 - (step % 4) - 4 * 1].vdf_input.toString().substring(0, 5) + '...'
                : 'None'}{' '}
              ={' '}
            </div>
            <div>{step > 7 ? '... Calculating' : 'None'}</div>
          </Row>
        </Epoc>

        <Epoc>
          <div>
            <TitleEpoc>
              Epoc {this.props.data[step].current_epoch_id > 2 ? this.props.data[step].current_epoch_id - 3 : '?'}
            </TitleEpoc>
          </div>
          <Row>
            <div>VDF:</div>
            <div>
              {step > 11
                ? this.props.data[step - 1 - (step % 4) - 4 * 2].vdf_input.toString().substring(0, 5) + '...'
                : 'None'}{' '}
              ={' '}
            </div>
            <div>
              {step > 11
                ? this.props.data[step - 1 - (step % 4) - 4 * 2].vdf_output_r_i.toString().substring(0, 5) +
                  '... Finalized'
                : 'None'}
            </div>
          </Row>
        </Epoc>
      </Box>
    );
  }
}

export default Stack;

const Holder = styled.div`
  display: flex;
  flex-direction: column;
`;

const Epoc = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

const TopNav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-left: 110px;
  margin-right: 83px;
`;

const Process = styled.div`
  display: flex;
  flex-direction: row;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Box = styled.div`
  background-color: white;
  margin: 10px;
  margin-left: 0px;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: start;
  padding-left: 30px;
  padding-top: 30px;
  flex: 2;
`;

const TitleEpoc = styled.div`
  display: flex;
  font-weight: bold;
`;

const GridHolderBig = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const GridHolder = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ArrowStyle = styled.img`
  width: 20px;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const UserStyle = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5%;
  padding: 10px;
`;
