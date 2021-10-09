import React, { Component } from 'react'

const DetailData = [
    {id:'01',content:'hello,react'},
    {id:'02',content:'hello,vue'},
    {id:'03',content:'hello,auglar'}
]
export default class Detail extends Component {
    render() {
        const {id,title} = this.props.match.params
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
