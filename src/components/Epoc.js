import React, { Component } from 'react';
import styled from 'styled-components/macro';

class Epoc extends Component {
  render() {
    return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div>Epoch {this.props.data[this.props.step].current_epoch_id} </div>
        <Box>
          <MinBox>Mix</MinBox>
          <MinBox>VDF</MinBox>
          <MinBox>Proof Buffer</MinBox>
        </Box>
      </div>
    );
  }
}

export default Epoc;

const Box = styled.div`
  display: flex;
  width: 340px;
  justify-content: space-around;
  height: 40px;
  background-color: #a2dbac;
  align-items: center;
  margin-left: 10px;
  /* border-radius: 4px; */
`;

const MinBox = styled.div`
  border: solid 1px black;
  /* width: 20%; */
  height: 100%;
  justify-content: center;
  align-items: center;
  flex: 1;
  display: flex;
`;
