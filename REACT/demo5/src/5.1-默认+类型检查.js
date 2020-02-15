import React,{Component} from 'react'
import PropTypes from 'prop-types'
export default class Title extends Component{
    static defaultProps={
        title:'默认的 '
    }
    static propTypes={
        title:PropTypes.string
    }
    render(){
        return (
        <h1>{this.props.title}</h1>
        )
    }
}