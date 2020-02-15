import React,{Component} from 'react'

export default class Text extends Component{
    constructor(props){
        super(props);
        console.log('constructor');
        this.state={
            
        }
    }

    //--------------加载-------------
    componentWillMount(){
        console.log('组件将要加载---componentWillMount');
    }
    componentDidMount(){
        console.log('组件加载完成---componentDidMount')
        console.log('     ____  ')
        console.log('     |  |  ')
        console.log('    _|  |_')
        console.log('    \\    /')
        console.log('     \\  / ')
        console.log('      \\/'  )


    }

    //--------------更新--------------
    componentWillReceiveProps(){
        console.log('组件将要收到继承---componentWillReceiveProps')
    }
    shouldComponentUpdate(){
        console.log('组件是否应该更新？---shouldComponentUpdate')
        return true
    }
    componentWillUpdate(){
        console.log('组件将要更新Will---componentWillUpdate')
    }
    // getSnapshotBeforeUpdate(){
    //     console.log('组件更新之前获取快照---getSnapshotbeforeUpdate')
    // }
    componentDidUpdate(){
        console.log('组件更新完成Did---componentDidUpdate')
        console.log('     ____  ')
        console.log('     |  |  ')
        console.log('    _|  |_')
        console.log('    \\    /')
        console.log('     \\  / ')
        console.log('      \\/'  )

    }

    //--------------卸载------------------
    componentWillUnmount(){
        console.log('组件将要卸载---componentWillUnmount')
        console.log('     ____  ')
        console.log('     |  |  ')
        console.log('    _|  |_')
        console.log('    \\    /')
        console.log('     \\  / ')
        console.log('      \\/'  )


    }
    render(){
        console.log('render');
        return (
            <div style={{border:"1px solid red"}}>
                <h5>测试加载</h5>
                <button onClick={()=>{this.setState({})}}>测试更新(主动)</button>
                <button onClick={()=>{this.forceUpdate()}}>测试更新(强制)</button>
            </div>
        )
    }
    
}