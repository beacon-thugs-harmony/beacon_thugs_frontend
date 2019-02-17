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

    //if (step < this.props.data[step]) // need to handle

    return (
      <div>
        <Holder>
          <Epoc>
            <div>
              <div>Epoc {this.props.data[step].current_epoch_id}</div>
              <div>Mixing</div>
            </div>
            <TopNav>
              <div>Number</div>
              <div>Hashed</div>
              <div>Reveal</div>
            </TopNav>
            <Process>
              <div>P1</div>
              <img src={person} />
              <div>{this.props.data[step - stepMod4].validator_revealed_entropy}</div>
              <div>hash</div>
              <div>{this.props.data[step - stepMod4].validator_committed_hash_of_entropy}</div>
              <div>{this.props.data[step - stepMod4].validator_revealed_entropy}</div>
            </Process>
            <Process>
              <div>P2</div>
              <img src={person} />
              <div>{stepMod4 !== 0 && this.props.data[step - (stepMod4 - 1)].validator_revealed_entropy}</div>
              <div>hash</div>
              <div>{stepMod4 !== 0 && this.props.data[step - (stepMod4 - 1)].validator_committed_hash_of_entropy}</div>
              <div>{stepMod4 !== 0 && this.props.data[step - (stepMod4 - 1)].validator_revealed_entropy}</div>
            </Process>
            <Process>
              <div>P3</div>
              <img src={person} />
              <div>
                {stepMod4 !== 0 && stepMod4 !== 1 && this.props.data[step - (stepMod4 - 2)].validator_revealed_entropy}
              </div>
              <div>hash</div>
              <div>
                {stepMod4 !== 0 &&
                  stepMod4 !== 1 &&
                  this.props.data[step - (stepMod4 - 2)].validator_committed_hash_of_entropy}
              </div>
              <div>
                {stepMod4 !== 0 && stepMod4 !== 1 && this.props.data[step - (stepMod4 - 2)].validator_revealed_entropy}
              </div>
            </Process>
            <Process>
              <div>P4</div>
              <img src={person} />
              <div>
                {stepMod4 !== 0 &&
                  stepMod4 !== 1 &&
                  stepMod4 !== 2 &&
                  this.props.data[step - (stepMod4 - 3)].validator_revealed_entropy}
              </div>
              <div>hash</div>
              <div>
                {stepMod4 !== 0 &&
                  stepMod4 !== 1 &&
                  stepMod4 !== 2 &&
                  this.props.data[step - (stepMod4 - 3)].validator_committed_hash_of_entropy}
              </div>
              <div>
                {stepMod4 !== 0 &&
                  stepMod4 !== 1 &&
                  stepMod4 !== 2 &&
                  this.props.data[step - (stepMod4 - 3)].validator_revealed_entropy}
              </div>

              <div>
                result{' '}
                {stepMod4 !== 0 &&
                  stepMod4 !== 1 &&
                  stepMod4 !== 2 &&
                  this.props.data[step - (stepMod4 - 3)].current_entropy_e_i}
              </div>
            </Process>
          </Epoc>

          <Epoc>
            <div>
              <div>
                Epoc {this.props.data[step].current_epoch_id > 0 ? this.props.data[step].current_epoch_id - 1 : '?'}
              </div>
            </div>
            <Row>
              <div>VDF:</div>
              <div>{step > 3 ? this.props.data[step - 1 - (step % 4) - 4 * 0].vdf_input : 'Nothing'} ^2^T%N = </div>
              <div>{step > 3 ? 'Loading' : 'Nothing'}</div>
            </Row>
          </Epoc>
          <Epoc>
            <div>
              <div>
                Epoc {this.props.data[step].current_epoch_id > 1 ? this.props.data[step].current_epoch_id - 2 : '?'}
              </div>
            </div>
            <Row>
              <div>VDF:</div>
              <div>{step > 7 ? this.props.data[step - 1 - (step % 4) - 4 * 1].vdf_input : 'Nothing'} ^2^T%N = </div>
              <div>{step > 7 ? 'Loading' : 'Nothing'}</div>
            </Row>
          </Epoc>

          <Epoc>
            <div>
              <div>
                Epoc {this.props.data[step].current_epoch_id > 2 ? this.props.data[step].current_epoch_id - 3 : '?'}
              </div>
            </div>
            <Row>
              <div>VDF:</div>
              <div>{step > 11 ? this.props.data[step - 1 - (step % 4) - 4 * 2].vdf_input : 'Nothing'} ^2^T%N = </div>
              <div>{step > 11 ? this.props.data[step - 1 - (step % 4) - 4 * 2].vdf_output_r_i : 'Nothing'}</div>
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
