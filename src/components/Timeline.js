import React, { Component } from 'react';
import Epoc from './Epoc';

class Timeline extends Component {
  state = { epocs: [1, 2, 3, 4, 5, 6] };

  render() {
    return (
      <div>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div>Timeslot:{this.props.data[this.props.step].current_epoch_id}</div>
          <div>Beacon Validator ID: {this.props.data[this.props.step].current_beacon_validator_id}</div>
          <div>Current Random Seed: {this.props.data[this.props.step].current_random_seed_r_j} </div>
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

        <div>Current slot:{this.props.step}</div>
      </div>
    );
  }
}

export default Timeline;
