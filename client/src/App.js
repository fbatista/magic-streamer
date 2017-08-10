import React, { Component } from 'react';
import LifeCounter from './LifeCounter.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player1: { life: 20 },
      player2: { life: 20 },
    };
  }

  life(player, change) {
    const life = this.state[player].life + change;
    fetch(`/update?what=${player}&to=${life}`, {
      accept: 'application/json',
    });
    this.setState({ [player]: { life } });
  }

  render() {
    return (
      <div className="App">
        <LifeCounter
          life={this.state.player1.life}
          increment={() => this.life('player1', +1)}
          decrement={() => this.life('player1', -1)} />
        <LifeCounter 
          life={this.state.player2.life}
          increment={() => this.life('player2', +1)}
          decrement={() => this.life('player2', -1)} />
      </div>
    );
  }
}

export default App;
