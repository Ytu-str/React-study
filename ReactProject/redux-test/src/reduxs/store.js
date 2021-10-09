/**
 * 该文件专门用于暴露一个store对象，整个应用只有一个
 */

import {createStore,applyMiddleware} from 'redux'
//引入汇总之后 的reducer
import allReducer from './reducers/index'

//引入redux-thunk，支持异步action
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'



export default createStore(allReducer,composeWithDevTools(applyMiddleware(thunk)))
