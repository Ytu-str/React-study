import React, { Component } from 'react';
import { connect } from 'react-redux';
import { nanoid } from 'nanoid';
import {addPserson} from '../../reduxs/actions/perosn'

class Person extends Component {

    addPerson = ()=>{
        const name = this.nameNode.value
        const age = this.ageNode.value*1
        const personObj = {id:nanoid(),name,age}
        this.props.addPserson(personObj)
        this.nameNode.value = ''
        this.ageNode.value = ''
    }

    render() {
        return (
            <div>
                <h1>我是Person组件</h1>
                <input ref={c=>this.nameNode=c} type="text" placeholder="输入名字"/>
                <input ref={c=>this.ageNode=c} type="text" placeholder="输入年龄"/> 
                <button onClick={this.addPerson}>添加</button>
                <h1>和:{this.props.count}</h1>
                <ul>
                    {
                        this.props.pseronArr.map((p)=>{
                            return <li key={p.id}>名字{p.name}--年龄{p.age}</li>
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default connect(
    state =>({
        pseronArr:state.persons,
        count:state.count
    }),
    {
        addPserson
    }
)(Person)