import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types'
import Board from './Board'
import History from './History'

const checkWin=(arr)=>{
    var winArr=[
        [0,1,2],[3,4,5],[6,7,8],//横向
        [0,3,6],[1,4,7],[2,5,8],//纵向
        [0,4,8],[2,4,6]         //对角线
    ]
    for(var i=0;i<winArr.length;i++){
        let [a1,b1,c1]=winArr[i];
        if(arr[a1]!==null&&arr[a1]===arr[b1]&&arr[b1]===arr[c1]){
            return arr[a1];
        }
    }
    return false;
}
//游戏总体
export default class Game extends Component{
    constructor(props){
        super(props);
        this.state={
            isX:true,
            winner:'',
            history:[Array(9).fill(null)],
            now:0
        }
    }
    static childContextTypes={
        isX:PropTypes.bool,
        updateGame:PropTypes.func,
        winner:PropTypes.string,
        history:PropTypes.array,
        now:PropTypes.number,
        jump:PropTypes.func
    }
    getChildContext(){
        return {
            isX:this.state.isX,
            updateGame:(num)=>{
                this.updateGame(num)
            },
            winner:this.state.winner,
            history:this.state.history,
            now:this.state.now,
            jump:(i)=>{
                this.jump(i)
            }
        }
    }
    updateGame(num){
        let {isX,history,now}=this.state;

        history=history.slice(0,now+1);
        
        let game=history[now];
        //胜利了
        if(checkWin(game)){
            console.log('已经胜利')
            return;
        }
        //点击过了
        if(game[num]){
            console.log('点击过了')
            return;
        }

//引用的毛病，game没有取出history的第一项，而是直接指向第一项，所以改变game，history也变化，
//故将game复制到arr里在进行修改,这样不会改变history的值。
        var arr=game.slice();//slick(开始,结束)--->切割数组来保存成新的数组,浅复制；slice(a,b) 
        if(isX){
            arr[num]='X';
        }else{
            arr[num]='O';
        }
        isX=!isX;
        history.push(arr);
        this.setState({
            isX:isX,
            now:now+1,
            history:history
        })
    }
    jump(i){
        var isX=i%2===0?true:false;
        var now=i;
        if(i==0){
            this.setState({
                isX:true,
                winner:'',
                history:[Array(9).fill(null)],
                now:0
            })
        }else{
            this.setState({
                now:now,
                isX:isX
            })
        }
    }
    render(){
        let {history,now}=this.state;
        let game=history[now];
        return (
            <div>
                <h1>井字棋游戏</h1>
                <Board></Board>
                <History winner={checkWin(game)}></History>
            </div>
        )
    }
}

