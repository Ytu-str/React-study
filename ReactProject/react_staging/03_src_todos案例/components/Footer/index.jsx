import React, { Component } from 'react'
import './index.css'

export default class index extends Component {

    handleCheckAll = (event)=>{
        this.props.checkAllTodo(event.target.checked)
    }
    //清除所有已经完成的
    handleClearAllDone = ()=>{
        this.props.clearAllDone()
    }

    render() {
        const {todos} = this.props
        //计算已完成的
        const downCount = todos.reduce((pre,todo)=>{
            return pre + (todo.done ? 1:0)
        },0)
        //总数
        const total = todos.reduce((pre)=>{
            return pre+1
        },0)

        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" checked={downCount === total&&total!==0 ? true : false} onChange={this.handleCheckAll}/>
                </label>
                <span>
                    <span>已完成{downCount}</span> / 全部{total}
                </span>
                    <button onClick={this.handleClearAllDone} className="btn btn-danger">清除已完成任务</button>
          </div>
        )
    }
}
