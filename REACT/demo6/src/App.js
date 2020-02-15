import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import pic1 from './image/5.jpg'
import pic2 from './image/6.jpg'
import pic3 from './image/7.jpg'
import pic4 from './image/8.png'
import pic5 from './image/9.png'

var image=[pic1,pic2,pic3,pic4,pic5,pic1,pic5]
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      now:0
    }
    this.autoGo();
  }
  add(){
    var {now}=this.state; //var now=this.state.now;
    now++;
    if(now>=image.length){
      now=0;
    }
    this.setState({
      now:now
    })
  }
  befo(){
    var {now}=this.state; //var now=this.state.now;
    now--;
    if(now<0){
      now=image.length-1;
    }
    this.setState({
      now:now
    })
  }
  one(num){
    this.setState({
      now:num
    })
  }
  autoGo(){
    this.timer=setInterval(() => {
      this.add();
    }, 2000);
  }
  render() {
    return (
      <div className="wrap" 
        onMouseOver={()=>{clearInterval(this.timer);console.log('stop')}} 
        onMouseOut={()=>{this.autoGo();console.log('start')}}
      >
        <ul>
          {
            image.map((i,num)=>{
              return(
                <li className={`pic-item ${this.state.now===num?'pic-active':''}`} key={num}><img src={i} /></li>
              )
            })
          }
        </ul>
        <div className='left btn' onClick={()=>{this.befo()}}>{'<'}</div>
        <div className='right btn' onClick={()=>{this.add()}}>{'>'}</div>
        <ul className='small-btn-list'>
          {
            image.map((i,num)=>{
              return(
                <li className={`small-btn ${this.state.now===num?'small-btn-active':''}`} key={num} onClick={()=>{this.one(num)}}></li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default App;
