import React, { Component } from 'react';

class Epoc extends Component {
  render() {
    return (
      <div style={{ display: 'flex' }}>
        <div>Epoch {this.props.data[this.props.step].current_epoch_id} </div>
        <div>  Mix  </div>
        <div>  VDF  </div>
        <div>  Proof Buffer  </div>
      </div>
    );
  }
}

export default Epoc;
