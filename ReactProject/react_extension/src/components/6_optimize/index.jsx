import React, { PureComponent } from 'react'
import './index.css'
export default class Parent extends PureComponent {

    state = {carName:"宝马"}

    // shouldComponentUpdate(nextProps,nextState){
    //     if(nextState.carName === this.setState.carName){
    //         return false
    //     }
    //     return true
    // }

    changeCar = ()=>{
        this.setState({carName:"奔驰"})
    }
    
    render() {
        console.log("Parent---reder")
        const {carName} = this.state
        return (
            <div className="parent">
                <h3>我是Parent组件</h3>
                <h5>我的车名:{carName}<br/></h5>
                <button onClick={this.changeCar}>点我换车</button>
                <Child carName={carName}/>
                {/* <Child/> */}
            </div>
        )
    }
}
class Child extends PureComponent {

    // shouldComponentUpdate(nextProps){
    //     if(nextProps.carName === this.props.carName){
    //         return false
    //     }
    //     return true
    // }

    render() {
        console.log("Child---reder")
        return (
            <div className="child">
                 <h3>我是Child组件</h3>
                 <span>我接到的车是:{this.props.carName}</span>
            </div>
        )
    }
}
