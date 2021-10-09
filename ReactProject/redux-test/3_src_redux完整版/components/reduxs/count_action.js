/**
 * 专门为count组件生成action对象
 */
 import {INCREMENT,DECREMENT} from './constant'


export const createIncrementAction = data =>({type:'INCREMENT',data})
export const createDecrementAction = (data) =>{
    return {type:'DECREMENT',data}
}