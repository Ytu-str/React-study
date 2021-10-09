/**
 * 创建一个为count组件服务的reducer，本质是一个函数
 * preState之前的状态
 * action动作对象
 */
import {INCREMENT,DECREMENT} from '../constant'

const initState = 0
export default function countReducer(preState=initState,action){
    const {type,data} = action
    switch (type) {
        case 'INCREMENT':
            return preState + data
        case 'DECREMENT':
            return preState - data
        default:
            return preState
    }
}