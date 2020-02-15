import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types'


//历史记录
export default class History extends Component{
    //全局获取
  static contextTypes={
    history:PropTypes.array,
    isX:PropTypes.bool,
    now:PropTypes.number,
    jump:PropTypes.func
  }
  render(){
    var {history,clearAll,isX,now,jump}=this.context;
    var {winner}=this.props;
    return (
      <div className="history">
        <h1>{winner==''?(now==9?'平局':`当前玩家${isX?'X':'O'}`):`获胜者${winner}`}</h1>
        {
            history.map((item,num)=>{
                return (
                    <div key={num}>
                        <button 
                        onClick={()=>{
                            jump(num)
                        }}>{num==0?'开始游戏':`跳到游戏  #${num}`}</button>
                        <br/>
                    </div>
                )
            })
        }
      </div>
    )
  }
}
