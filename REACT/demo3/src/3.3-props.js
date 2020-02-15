import React,{Component} from 'react'

class Nav extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                {this.props.title}
                {this.props.children}
            </div>
        )
    }
}
const Fun=function (props) {  
    return (
        <button>
            {props.title}
        </button>
    )
}
export default Nav
export {Fun}