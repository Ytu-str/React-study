import React, { Component } from 'react'
import { Button,DatePicker, Space } from 'antd'
import 'antd/dist/antd.less'
import {WechatOutlined} from '@ant-design/icons';

export default class App extends Component {
  render() {
    return (
      <div>
         <Button type="primary">Primary Button</Button>
         <WechatOutlined />

         <Space direction="vertical">
          <DatePicker onChange={onchange} />
        
        </Space>
      </div>
    )
  }
  
  onchange=(date, dateString)=>{
  console.log(date, dateString);
}
}
