import React, { Component } from 'react'
import './index.css'

const MyContext = React.createContext()
export default class A extends Component {

    state = {username:'tom',age:22}
    

    render() {
        return (
            <div className="parent">
                <h3>我是A组件</h3>
                <h4>我的用户名是:{this.state.username}</h4>
                <MyContext.Provider value={{username:this.state.username,age:this.state.age}}>
                    <B/>
                </MyContext.Provider>
            </div>
        )
    }
}
class B extends Component {
    render() {
        return (
            <div className="child">
                <h3>我是B组件</h3>
                <C/>
            </div>
        )
    }
}
// class C extends Component {
//     static contextType = MyContext
//     render() {
//         return (
//             <div className="grand">
//                 <h3>我是C组件</h3>
//                 <h4>我从B得到的用户名是:{this.context.username},年龄:{this.context.age}</h4>
//             </div>
//         )
//     }
// }

function C(){
    return (
        <div className="grand">
            <h3>我是C组件</h3>
            <h4>我从B得到的用户名是:
                <MyContext.Consumer>
                    {
                    value => { // value就是context中的value数据
                       return  `${value.username},年龄是:${value.age}`
                    }
                    }
                </MyContext.Consumer>
            </h4>
        </div>
    )
}

