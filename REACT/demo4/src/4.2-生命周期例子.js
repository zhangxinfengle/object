import React,{Component} from 'react'

export default class Time extends Component{
    constructor(props){
        super(props);
        console.log('constructor');
        this.state={
            time:new Date().getSeconds()
        }
    }

    //--------------加载-------------
    componentWillMount(){
        console.log('组件将要加载---componentWillMount');
        this.getSec=setInterval(() => {
            this.setState({
                time:new Date().getSeconds()
            })
        }, 500);
    }
    componentDidMount(){
        console.log('组件加载完成---componentDidMount')

        console.log('------------------------------------')
    }

    //--------------更新--------------
    componentWillReceiveProps(){
        console.log('组件将要收到继承---componentWillReceiveProps')
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log('组件是否应该更新？---shouldComponentUpdate')
        console.log(nextState)
        if(nextState.time%2==0){
            return true
        }else{
            return false
        }
    }
    componentWillUpdate(nextProps,nextState){
        console.log('组件将要更新Will---componentWillUpdate')
    }
    // getSnapshotBeforeUpdate(){
    //     console.log('组件更新之前获取快照---getSnapshotbeforeUpdate')
    // }
    componentDidUpdate(){
        console.log('组件更新完成Did---componentDidUpdate')
        console.log('------------------------------------')
    }

    //--------------卸载------------------
    componentWillUnmount(){
        console.log('组件将要卸载---componentWillUnmount')
        console.log('------------------------------------')
        clearInterval(this.getSec)

    }
    render(){
        console.log('render');
        return (
            <div style={{border:"1px solid red"}}>
                {this.state.time}
            </div>
        )
    }
    
}