import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import axios from 'axios'


export default class index extends Component {
    search = ()=>{
        //获取用户输入
        const {value} = this.keyWordElement
        //发送请求前通知List更新状态
        // this.props.updateAppState({isFirst:false,isLoading:true})
        PubSub.publish('tututu',{isFirst:false,isLoading:true})
        //发送网络请求
        axios.get(`/api1/search/users?q=${value}`).then(
            response => {
                // this.props.updateAppState({isLoading:false,users:response.data.items})
                PubSub.publish('tututu',{isLoading:false,users:response.data.items})
            },
            //失败后通知List更新状态
            error => {
                // this.props.updateAppState({isLoading:false,err:error.message})
                PubSub.publish('tututu',{isLoading:false,err:error.message})
            }
        )

        
    }
    render() {
        return (
            <section className="jumbotron">
                    <h3 className="jumbotron-heading">搜索github用户</h3>
                <div>
                    <input ref={c => this.keyWordElement = c} type="text" placeholder="输入关键词点击搜索"/>&nbsp;
                    <button onClick={this.search}>Search</button>
                </div>
            </section>
        )
    }
}
