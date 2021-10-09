import React, { Component } from 'react'
import qs from 'querystring'

const DetailData = [
    {id:'01',content:'hello,react'},
    {id:'02',content:'hello,vue'},
    {id:'03',content:'hello,auglar'}
]
export default class Detail extends Component {
    render() {
        //接收params参数
        // const {id,title} = this.props.match.params
        //接收search参数
        // const {id,title} = this.props.location.search
        const {search} = this.props.location
        const {id,title} = qs.parse(search.slice(1))
        const findResult = DetailData.find((detailObj)=>{
            return detailObj.id === id
        })
       
        return (
            <ul>
                <li>ID:{id}</li>
                <li>title:{title}</li>
                <li>CONTENT:{findResult.content}</li>
            </ul>
        )
    }
    
}
