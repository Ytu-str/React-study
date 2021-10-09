import React, { Component } from 'react'
import PropsTypes from 'prop-types'
import Item from '../Item'
import './index.css'


export default class index extends Component {

    static propsTypes ={
        todos:PropsTypes.array.isRequired,
        updateTodoDone:PropsTypes.func.isRequired,
        deleteTodo:PropsTypes.func.isRequired
    }
    render() {
        const {todos, updateTodoDone,deleteTodo} = this.props
        return (
            <ul className="todo-main">
                {
                    todos.map((todo)=>{
                        return  <Item key={todo.id} {...todo} updateTodoDone={updateTodoDone} deleteTodo={deleteTodo}/>
                    })
                }
               
          </ul>
        )
    }
}
