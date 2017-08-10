import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './LifeCounter.css';

export default class App extends Component {
  static propTypes = {
    life: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
  }

  render() {
    return (
      <div className="LifeButton">
        <div className="Life">
          <div>{this.props.life}</div>
        </div>
        <button onClick={this.props.increment}>+</button>
        <button onClick={this.props.decrement}>-</button>
      </div>
    );
  }  
}