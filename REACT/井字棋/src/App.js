import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types'
import Game from './Game'

class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>
        <Game></Game>
      </div>
    )
  }
}

export default App;
