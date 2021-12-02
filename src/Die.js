import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  static defaultProps = {
    // valToString: {
    //   "1": "one",
    //   "2": "two",
    //   "3": "three",
    //   "4": "four",
    //   "5": "five",
    //   "6": "six",
    // }

    valToString: ['one', 'two', 'three', 'four', 'five', 'six']
  }

  render() {
    const { rolling } = this.props;
    return (
      <i
        className={`Die fa-4x fas fa-dice-${this.props.val ? this.props.valToString[this.props.val - 1] : 'one'} ${this.props.locked ? 'Die-locked' : ''} 
          ${rolling ? 'Die-rolling' : ''}`}
        onClick={() => { if(!this.props.disabled) { this.props.handleClick(this.props.idx) }}}
        disabled={this.props.disabled}
      >
      </i>
    );
  }
}

export default Die;
