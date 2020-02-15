import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types'

//游戏玩区
export default class Board extends Component{
  static contextTypes={
    updateGame:PropTypes.func,
    history:PropTypes.array,
    now:PropTypes.number,
    jump:PropTypes.func


  }
  render(){
    let {history,updateGame,now}=this.context;
    let game=history[now]
    return (
        <div className="box-wrap">
            {
            game.map((i,num)=>{
                return (
                <Square 
                    //渲染此模块
                    key={num} 
                    num={num} 
                    updateGame={(num)=>{updateGame(num);}}
                >{i}</Square>
                )
            })
            }
        </div>
    )
  }
}
//游戏格子
class Square extends Component{
    render(){
        var {num,updateGame,children}=this.props;
      return (
        <div className="box" onClick={()=>{
          updateGame(num);
        }}>{children}</div>
      )
    }
  }
