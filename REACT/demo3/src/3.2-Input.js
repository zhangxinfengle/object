import React,{Component} from 'react'
export default class Input extends Component{
    constructor(){
        super();
        this.state={
            value:'',
            err:false
        }
    }
    check(e){
        console.log(e.target.value);
        console.log(e.nativeEvent);//原生事件
        var inputValue=e.target.value;
        if(inputValue.length>10){
            return
        }
        this.setState({
            value:inputValue
        })
        
    }
    render(){
        return (
            <input type="text" onInput={(e)=>{this.check(e)}} value={this.state.value} />
        )
    }
}