import React, { Component } from 'react';
import styled from 'styled-components/macro';
import mixing from '../media/mixing.png';
import vdf from '../media/vdf.png';

class Stack extends Component {
  render() {
    return (
      <div>
        <Holder>
          <Epoc>
            <div>
              <div>Epoc ?</div>
            </div>
            <TopNav>
              <div>Number</div>
              <div>f(x)</div>
              <div>Hashed</div>
              <div>Reveal</div>
            </TopNav>
            <Process>
              <div>p1</div>
              <div>32</div>
              <div>hash</div>
              <div>43X22f</div>
              <div>32</div>
            </Process>
            <Process>
              <div>p2</div>
              <div>253</div>
              <div>hash</div>
              <div>xg22f</div>
              <div>253</div>
            </Process>
          </Epoc>

          <Epoc>
            <div>
              <div>Epoc ?</div>
            </div>
            <Row>
              <div>VDF</div>
              <div>Math!</div>
              <div>Loading</div>
            </Row>
          </Epoc>

          <Epoc>
            <div>
              <div>Epoc ?</div>
            </div>
            <Row>
              <div>VDF</div>
              <div>Result^2^T%N = 2313282...</div>
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
