/**
 * 该文件专门用于暴露一个store对象，整个应用只有一个
 */

import {createStore} from 'redux'
//引入为count组件服务的reducer
import countReducer from './count_reducer'

export default createStore(countReducer)
