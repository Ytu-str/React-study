/**
 * 创建一个为count组件服务的reducer，本质是一个函数
 * preState之前的状态
 * action动作对象
 */
const initState = 0
export default function countReducer(preState=initState,action){
    const {type,data} = action
    switch (type) {
        case 'increment':
            return preState + data
        case 'decrement':
            return preState - data
        default:
            return preState
    }
}