import React,{Component} from 'react'
import './App.css';
import PropTypes from 'prop-types'
class PicItem extends Component{
    constructor(props){
        super(props);
    }
    static contextTypes={
        now:PropTypes.number
    }
    render(){
        console.log(this.context)
        return (
          <li className="pic-item"><img src={this.props.picName} alt=""/></li>
        )
    }
}
class SideBtn extends Component{
    constructor(props){
        super(props);
    }
    static contextTypes={
        now:PropTypes.number
    }
    render(){
        return (
            <div className={this.props.class}>{this.props.text}</div>
        )
    }
}
class BottomBtn extends Component{
    static contextTypes={
        now:PropTypes.number
    }
    render(){
        return (
          <li className='small-btn'></li>
        )
    }
}

export default PicItem;
export {SideBtn,BottomBtn}