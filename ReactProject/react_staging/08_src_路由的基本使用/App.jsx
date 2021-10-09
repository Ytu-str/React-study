import React, { Component } from 'react'
import {Link, HashRouter,BrowserRouter,Route} from 'react-router-dom'
import About from './component/About'
import Home from './component/Home'

export default class App extends Component {

    render() {
        return (
            <div>
            <div className="row">
              <div className="col-xs-offset-2 col-xs-8">
                <div className="page-header"><h2>React Router Demo</h2></div>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-2 col-xs-offset-2">
                <div className="list-group">
                    {/* 原生html,靠<a></a>跳转页面 */}
                  {/* <a className="list-group-item active" href="./about.html">About</a>
                  <a className="list-group-item" href="./home.html">Home</a> */}

                  {/* 在react靠路由链接实现切换组件 */}
                 
                    <Link className="list-group-item active" to="/about">About</Link>
                    <Link className="list-group-item" to="/home">Home</Link>
                  
                </div>
              </div>
              <div className="col-xs-6">
                <div className="panel">
                  <div className="panel-body">
                      {/* 注册路由 */}
                      
                        <Route path="/about" component={About}/>
                        <Route path="/home" component={Home}/>
                      
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }
}
