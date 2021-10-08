/**
 * 专门为count组件生成action对象
 */
import {INCREMENT,DECREMENT} from '../constant'
import store from '../store'



export const createIncrementAction = data =>({type:'INCREMENT',data})
export const createDecrementAction = (data) =>{
    return {type:'DECREMENT',data}
}
//异步action，指action的值为函数,异步action一般都会调用同步action
export const createIncrementAsyncAction = (data,time) =>{
    return ()=>{
        setTimeout(()=>{
            store.dispatch(createIncrementAction(data))
        },time)
    }
}