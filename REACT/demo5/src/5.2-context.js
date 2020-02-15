import React,{Component} from 'react'
import PropTypes from 'prop-types'

class Demo extends Component{
    static contextTypes={
        title:PropTypes.string
    }
    render(){
      return (
        <div>
          <h2>{this.context.title}</h2>
          <Btn></Btn>
        </div>
      )
    }
}
class Btn extends Component{
    static contextTypes={
        title:PropTypes.string
    }
    render(){
        console.log(this.props)
        console.log(this.context)
        return(
            <button>{this.context.title}</button>
        )
    }
}

export default Demo
export {Btn}