import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {

    getStudentData = ()=>{
        axios.get('http://localhost:3000/api1/test/hello').then(function(data){
                console.log(data.data)
            }
        )
    }

    render() {
        return (
            <div>
               <button onClick={this.getStudentData}>点我获取数据</button>
            </div>
        )
    }
}
