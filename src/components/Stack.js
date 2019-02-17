import React, { Component } from 'react';
import styled from 'styled-components/macro';
import mixing from '../media/mixing.png';
import vdf from '../media/vdf.png';
import person from '../media/person.svg';

class Stack extends Component {
  render() {
    let step = this.props.step;
    let stepMod4 = step % 4;
    let stepSmallerThan4 = step < 4;

    return (
      <div>
        <Holder>
          <Epoc>
            <div>
              <div>Epoc ?</div>
              <div>Mixing</div>
            </div>
            <TopNav>
              <div>Number</div>
              <div>Hashed</div>
              <div>Reveal</div>
            </TopNav>
            <Process>
              <div>P1</div>
              <img src={person}/>
              <div>{this.props.data[step - stepMod4].validator_revealed_entropy.toString().substring(0, 5) + '...'}</div>
              <div>hash</div>
              <div>{this.props.data[step - stepMod4].validator_committed_hash_of_entropy.toString().substring(0, 5) + '...'}</div>
              <div>{this.props.data[step - stepMod4].validator_revealed_entropy.toString().substring(0, 5) + '...'}</div>
            </Process>
            <Process>
              <div>P2</div>
              <img src={person}/>
              <div>{stepMod4 !== 0 && this.props.data[step - (stepMod4 - 1)].validator_revealed_entropy.toString().substring(0, 5) + '...'}</div>
              <div>hash</div>
              <div>{stepMod4 !== 0 && this.props.data[step - (stepMod4 - 1)].validator_committed_hash_of_entropy.toString().substring(0, 5) + '...'}</div>
              <div>{stepMod4 !== 0 && this.props.data[step - (stepMod4 - 1)].validator_revealed_entropy.toString().substring(0, 5) + '...'}</div>
            </Process>
            <Process>
              <div>P3</div>
              <img src={person}/>
              <div>
                {stepMod4 !== 0 && stepMod4 !== 1 && this.props.data[step - (stepMod4 - 2)].validator_revealed_entropy.toString().substring(0, 5) + '...'}
              </div>
              <div>hash</div>
              <div>
                {stepMod4 !== 0 &&
                  stepMod4 !== 1 &&
                  this.props.data[step - (stepMod4 - 2)].validator_committed_hash_of_entropy.toString().substring(0, 5) + '...'}
              </div>
              <div>
                {stepMod4 !== 0 && stepMod4 !== 1 && this.props.data[step - (stepMod4 - 2)].validator_revealed_entropy.toString().substring(0, 5) + '...'}
              </div>
            </Process>
            <Process>
              <div>P4</div>
              <img src={person}/>
              <div>
                {stepMod4 !== 0 &&
                  stepMod4 !== 1 &&
                  stepMod4 !== 2 &&
                  this.props.data[step - (stepMod4 - 3)].validator_revealed_entropy.toString().substring(0, 5) + '...'}
              </div>
              <div>hash</div>
              <div>
                {stepMod4 !== 0 &&
                  stepMod4 !== 1 &&
                  stepMod4 !== 2 &&
                  this.props.data[step - (stepMod4 - 3)].validator_committed_hash_of_entropy.toString().substring(0, 5) + '...'}
              </div>
              <div>
                {stepMod4 !== 0 &&
                  stepMod4 !== 1 &&
                  stepMod4 !== 2 &&
                  this.props.data[step - (stepMod4 - 3)].validator_revealed_entropy.toString().substring(0, 5) + '...'}
              </div>

              <div>
                result{' '}
                {stepMod4 !== 0 &&
                  stepMod4 !== 1 &&
                  stepMod4 !== 2 &&
                  this.props.data[step - (stepMod4 - 3)].current_entropy_e_i.toString().substring(0, 5) + '...'}
              </div>
            </Process>
          </Epoc>

          <Epoc>
            <div>
              <div>Epoc ?</div>
            </div>
            <Row>
              <div>VDF</div>
              <div>Math! - {!(step < 4) && this.props.data[step - (stepMod4 - 3)].current_entropy_e_i.toString().substring(0, 5) + '...'}}}</div>
              <div>Loading</div>
            </Row>
          </Epoc>
          <Epoc>
            <div>
              <div>Epoc ?</div>
            </div>
            <Row>
              <div>VDF</div>
              <div>Math! - {!(step < 8) && this.props.data[step - (step % 4) - 8].current_entropy_e_i.toString().substring(0, 5) + '...'}}</div>
              <div>Loading</div>
            </Row>
          </Epoc>

          <Epoc>
            <div>
              <div>Epoc ?</div>
            </div>
            <Row>
              <div>VDF</div>
              <div>Result^2^T%N = {!(step < 12) && this.props.data[step - (step % 4) - 12].current_entropy_e_i.toString().substring(0, 5) + '...'}}</div>
            </Row>
          </Epoc>
        </Holder>
      </div>
    );
  }
}

export default Stack;

const Holder = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
`;

const Epoc = styled.div`
  display: flex;
  flex-direction: column;
`;

const TopNav = styled.div`
  display: flex;
  flex-direction: row;
`;

const Process = styled.div`
  display: flex;
  flex-direction: row;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;
