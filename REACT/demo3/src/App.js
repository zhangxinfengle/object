import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Button,{Ha} from './3.1-btn'
// import Input from './3.2-Input'
// import Nav,{Fun} from './3.3-props'
import Button,{Title} from './3.4-changeColor'
//-------------------3.1------------------------
// class Btn extends Component{
//   constructor(){
//     super();
//   }
//   render(){
//     return (
//       <button>123123</button>
//     )
//   }
// }
// const Nav=()=>{
//   return (
//     <nav>Nav</nav>
//   )
// }

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      // like:false
      color:''
    }
  }
  // change(){
  //   this.setState({
  //     like:!this.state.like
  //   })
  // }
  changeColor(color){
    this.setState({
      color:color
    })
  }
  render() {
    return (
      <div>
        {/* ---------------------3.1---------------------
        <Btn/>
        <Btn/>
        <Btn/>
        <Nav/>
        <Button></Button>
        <Ha/>
        <button style={this.state.like?{color:"red"}:{color:"black"}} onClick={()=>{this.change()}}>
          {
            this.state.like?"已赞":"喜欢"
          }
        </button> */}
        {/* ---------------------3.2---------------------
        <Input></Input> 
        <Input></Input>  */}
        {/* ---------------------3.3---------------------
        <Nav title="123123123">
          <h1>hahaha</h1>
          <h2>jadhwagdj</h2>
          <Fun title="喜欢1111"></Fun>
          <Fun title="喜欢2222"></Fun>
        </Nav> */}
        ---------------------3.4---------------------
        <hr/>
        <h1>App</h1>
        <Button color={this.state.color} changeColor={(color)=>{this.changeColor(color)}}></Button>
        <Title color={this.state.color}></Title>
       
      </div>
    );
  }
}

export default App;
