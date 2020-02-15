import React,{Component} from 'react'
import PropTypes from 'prop-types'

class Change extends Component{
    constructor(props){
        super(props);
        this.state={
            
        }
    }
    static contextTypes={
        color:PropTypes.string,
        changeColor:PropTypes.func
    }
    render(){
        console.log('change:',this.context)
        return (
            <div>
                <h1 style={{color:this.context.color,border:`5px solid ${this.context.color}`}}>这是change的标题</h1>
                <Button name="红色" color="red"></Button>
                <Button name="绿色" color="green"></Button>
            </div>
        )
    }
}
class Button extends Component{
    constructor(props){
        super(props);
        this.state={
        }
    }
    static contextTypes={
        color:PropTypes.string,
        changeColor:PropTypes.func

    }
    render(){
        console.log('Button:',this.context)
        return (
            <button style={{color:this.context.color}} onClick={()=>{this.context.changeColor(this.props.color)}}>来自Button的{this.props.name}</button>
        )
    }
}

export default Change 
export {Button}