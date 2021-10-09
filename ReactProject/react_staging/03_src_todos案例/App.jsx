import React, { Component } from 'react'
import './App.css'

import Header from './components/Header'
import Footer from './components/Footer'
import List from './components/List'

export default class App extends Component {
    //状态在哪里，操作状态的方法就在哪里
    //初始化状态
    state = {todos:[
        {id:'001',name:'吃饭',done:true},
        {id:'002',name:'睡觉',done:true},
        {id:'003',name:'打代码',done:false},
    ]}
    //用于添加一个todo,接收的参数时todo对象
    addTodo = (todoObj)=>{
        const {todos} =this.state //获取原todos
        const newTodos = [todoObj,...todos]//追加一个todo
        this.setState({todos:newTodos}) //更新状态
    }
    //用于更新一个todo对象
    updateTodoDone = (id,done)=>{
        const {todos} =this.state  //获取状态中的todos
        const newTodos = todos.map((todoObj)=>{  //匹配处理数据
            if(todoObj.id === id) return {...todoObj,done}
            else return todoObj
        })
        this.setState({todos:newTodos})
    }
    //用于删除一个todo对象
    deleteTodo = (id)=>{
        //获取原来的todos
        const {todos} =this.state 
        //从数组里删除指定id的todo对象
        const newTodos = todos.filter((todoObj)=>{
            return todoObj.id !==id
        })
        this.setState({todos:newTodos})
    }
    checkAllTodo = (done)=>{
        //获取原来的todos
        const {todos} =this.state 
        const newTodos = todos.map((todoObj)=>{
            return {...todoObj,done}
        })
        this.setState({todos:newTodos})
    }
    //清除所有已经完成的
    clearAllDone = ()=>{
        //获取原来的todos
        const {todos} =this.state 
        const newTodos = todos.filter((todoObj)=>{
            return !todoObj.done
        })
        this.setState({todos:newTodos})
    }
    render() {
        return (
            <div className="todo-container">
            <div className="todo-wrap">
            <Header addTodo={this.addTodo}/>
            <List todos={this.state.todos}  updateTodoDone={this.updateTodoDone} deleteTodo={this.deleteTodo}/>
            <Footer todos={this.state.todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone}/>
            </div>
          </div>
        )
    }
}
