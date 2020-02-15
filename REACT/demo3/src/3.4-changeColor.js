import React,{Component} from 'react'

class Button extends Component{
    constructor(props){
        super(props);
        this.state={
            color:''
        }
    }
    // changeColor(color){
    //     console.log(color);
    //     this.setState({
    //         color:color
    //     })
    // }
    render(){
        return (
            <div>
                <button style={{color:this.props.color}} onClick={()=>{this.props.changeColor('red')}}>红色</button>
                <button style={{color:this.props.color}} onClick={()=>{this.props.changeColor('green')}}>绿色</button>
            </div>
        )
    }
}
class Title extends Component{
    constructor(props){
        super(props);
        this.state={
            color:''
        }

    }
    render(){
        return (
            <h2 style={{color:this.props.color}}>这是3.4标题</h2>
        )
    }
}

export default Button
export {Title}