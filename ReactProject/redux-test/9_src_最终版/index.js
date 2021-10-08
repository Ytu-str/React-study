import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import store from './reduxs/store'


ReactDOM.render(
    // Provider,目的是让APP所有后代容器组件都能接收到store
    <Provider store={store}>
        <App/>
    </Provider>,
document.getElementById("root"))
