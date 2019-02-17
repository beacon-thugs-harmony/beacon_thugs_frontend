import React, { Component } from 'react';
import Epoc from './Epoc';

class Timeline extends Component {
  state = { epocs: [1, 2, 3, 4, 5, 6] };

  render() {
    return (
      <div>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div>Timeslot:{this.props.data[this.props.step].current_epoch_id}</div>
          <div>Beacon Validator ID: {Number(this.props.data[this.props.step].current_random_seed_r_j) * -1}</div>
          <div>Current Random Seed: 6754…..</div>
        </div>
        <div>
          {this.state.epocs.map((v, k) => {
            return <Epoc />;
          })}
        </div>
        <button
          onClick={() => {
            this.props.next();
          }}
        >
          Next
        </button>
        {this.props.step}
      </div>
    );
  }
}

export default Timeline;
