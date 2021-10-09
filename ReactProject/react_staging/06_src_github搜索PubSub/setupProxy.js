 const proxy = require('http-proxy-middleware')

 module.exports = function(app){
    app.use(
        proxy('/api1',{//遇见/api1的前缀，就会触发该代理配置
            target:'http://localhost:5000',
            changeOrigin:true,  //控制服务器收到响应头中Host字段的值
            pathRewrite:{'^/api1':''} //重写请求路径
        })
    )
 }