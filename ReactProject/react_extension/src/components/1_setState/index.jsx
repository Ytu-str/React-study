import React, { Component } from 'react'

export default class Demo extends Component {

    state = {count:0}

    increment = ()=>{
        //对象式的setState
        // const {count} = this.state
        // this.setState({count:count+1},()=>{
        //     console.log(this.state.count)
        // })
        //函数式的setState
        this.setState((state,props)=>{
            console.log(props)
            return {count:state.count+1}
        })
    }

    render() {
        return (
            <div>
                <h1>当前求和为:{this.state.count}</h1>
                <button onClick={this.increment}>点我+1</button>
            </div>
        )
    }
}
