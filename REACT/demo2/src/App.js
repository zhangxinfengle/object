import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      like:false
    }
  }
  change(){
    this.setState({
      like:!this.state.like
    })
  }
  render() {
    return (
      <button style={this.state.like?{color:"red"}:{color:"black"}} onClick={()=>{this.change()}}>
        {
          this.state.like?"已赞":"喜欢"
        }
      </button>
    );
  }
}

export default App;
