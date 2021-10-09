//引入Count的UI组件
import CountUI from '../../components/Count'

//引入connect用于链接UI组件和redux
import {connect} from 'react-redux'
import {createIncrementAction,
        createDecrementAction,
        createIncrementAsyncAction} 
from '../../components/reduxs/count_action'



//mapStateToProps函数的返回值作为状态传递给了UI组件,
//返回对象中的Key就作为传递给UI组件props的key,value作为props的value
//mapStateToProps用于传递状态
function mapStateToProps(state){  //state为redux保存的状态
    return {count:state}
}
//mapDispatchToProps函数的返回值作为状态传递给了UI组件,
//返回对象中的Key就作为传递给UI组件props的key,value作为props的value
//用于操作状态的方法
function mapDispatchToProps(dispatch){
    return {
        jia:(number)=>{
        //通知redux执行加法
            dispatch(createIncrementAction(number))
        },
        jian:(number)=>{
            dispatch(createDecrementAction(number))
        },
        jiaAsync:(number,time)=>{
            dispatch(createIncrementAsyncAction(number,time))
        }
    }
}

//使用connect()()创建一个Count的容器组件
export default connect(mapStateToProps,mapDispatchToProps)(CountUI)

