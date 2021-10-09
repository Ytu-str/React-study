import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {

    state = {
        hasError:'' //用于标识子组件是否存在错误
    }

    // 生命周期函数，一旦后台组件报错，就会触发
    static getDerivedStateFromError(error) {
        console.log(error);
        // 在render之前触发
        // 返回新的state
        return {
            hasError: true,
        };
    }
    componentDidCatch(error, info) {
        // 统计页面的错误。发送请求发送到后台去
        console.log(error, info);
    }

    render() {
        return (
            <div>
                <h2>我是Parent组件</h2>
                {this.state.hasError ? <h2>当前网络不稳定</h2>:<Child/>}
            </div>
        )
    }
}
