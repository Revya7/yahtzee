import React, { Component } from 'react';
import './RuleRow.css'

class RuleRow extends Component {
  render() {
    return (
      <tr className={`RuleRow RuleRow-${this.props.score === undefined ? 'active' : 'disabled'}`} onClick={() => { if(this.props.score === undefined) { this.props.doScore() } } }>
        <td className="RuleRow-name">{this.props.name}</td>
        {this.props.score === undefined ? <td className="RuleRow-score">{this.props.description}</td> : <td className="RuleRow-score">{this.props.score}</td>}
      </tr>
    )
  }
}

export default RuleRow;