/**
 * 该文件专门用于暴露一个store对象，整个应用只有一个
 */

import {createStore,applyMiddleware,combineReducers} from 'redux'
//引入为count组件服务的reducer
import countReducer from '../reduxs/reducers/count'
import personReducer from '../reduxs/reducers/person'
//引入redux-thunk，支持异步action
import thunk from 'redux-thunk'

const allReducer = combineReducers({
    he:countReducer,
    rens:personReducer
})

export default createStore(allReducer,applyMiddleware(thunk))
