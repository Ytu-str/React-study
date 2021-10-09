//该文件汇总所有reudcer
import {combineReducers} from 'redux'
//引入为count组件服务的reducer
import countReducer from './count'
import personReducer from './person'


export default  combineReducers({
    count:countReducer,
    persons:personReducer
})
