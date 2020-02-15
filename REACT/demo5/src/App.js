import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types'
import Title from './5.1-默认+类型检查'
import Demo,{Btn} from './5.2-context'
import Change from './5.3-change'


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      color:''
    }
  }
  static childContextTypes={
    title:PropTypes.string,
    // ----------------切换主题----------------------
    color:PropTypes.string,
    changeColor:PropTypes.func
  }
  getChildContext(){
    return {
      title:'context的标题',
      // ----------------切换主题----------------------
      color:this.state.color,
      changeColor:(color)=>{
        this.setState({
          color:color
        })
      }
    }
  }
  render() {
    return (
      <div>
        ----------------5.1----------------------<br/>
        <Title></Title>
        ----------------5.2----------------------<br/>
        <Demo></Demo>
        ----------------切换主题----------------------<br/>
        <Change></Change>
      </div>
    );
  }
}

export default App;
