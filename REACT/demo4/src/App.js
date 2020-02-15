import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Text from './4.1-生命周期'
import Time from './4.2-生命周期例子'
import Demo3 from './4.3-生命周期新版'

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      renderText:true,
      renderTime:true,
      renderDemo3:true
    }
  }
  render() {
    return (
      <div>
        <h1>app</h1>
        {/* ----------------------4.1-------------------------<br/>
        {this.state.renderText?<Text></Text>:''}
        <button onClick={()=>{this.setState({})}}>app主动更新</button>
        <button onClick={()=>{this.setState({renderText:!this.state.renderText})}}>{this.state.renderText?'让text消失':'显示text'}</button>
        <br/><br/> */}
        {/* ----------------------4.2-------------------------<br/>
        <p>Time</p>
        {this.state.renderTime?<Time></Time>:''}
        <button onClick={()=>{this.setState({renderTime:!this.state.renderTime})}}>{this.state.renderTime?'让Time消失':'显示Time'}</button> */}
        ----------------------4.3-------------------------<br/>
        {this.state.renderDemo3?<Demo3></Demo3>:''}
        <button onClick={()=>{this.setState({renderDemo3:!this.state.renderDemo3})}}>{this.state.renderDemo3?'让Demo3消失':'显示Demo3'}</button>
        <button onClick={()=>{this.setState({})}}>app主动更新</button>
      </div>
    );
  }
}

export default App;
