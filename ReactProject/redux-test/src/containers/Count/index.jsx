//引入Count的UI组件
import React, { Component } from 'react';
//引入connect用于链接UI组件和redux
import {connect} from 'react-redux'
import {increment,
        decrement,
        incrementAsync} 
from '../../reduxs/actions/count'

//定义UI组件
class Count extends Component {


    increment = () =>{
        const {value} = this.selectNumber
        this.props.increment(value*1)
    }
    decrement = () =>{
        const {value} = this.selectNumber
        this.props.decrement(value*1)
    }
    incrementIfOdd = () =>{
        const {value} = this.selectNumber
        if(this.props.count % 2 !==0){
            this.props.increment(value*1)
        }
    }
    incrementAsync = () =>{
        const {value} = this.selectNumber
        this.props.incrementAsync(value*1,500)
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <h1>当前求和为:{this.props.count}</h1>
                <h1>人数:{this.props.personNum}</h1>
                <select ref={c=>this.selectNumber=c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>—</button>
                <button onClick={this.incrementIfOdd}>当前求和为基数再加</button>
                <button onClick={this.incrementAsync}>异步</button>
            </div>
        );
    }
}


//使用connect()()创建一个Count的容器组件
export default connect(
    state =>({
        count:state.count,
        personNum:state.persons.length
    }), //方法一，接收state参数，返回{count:state}对象
    {
        increment,
        decrement,
        incrementAsync 
    }
)(Count)

