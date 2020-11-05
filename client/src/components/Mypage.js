import React, { useState } from 'react'
import { Progress } from 'antd'

function Mypage() {
  const [ started, setStarted ] = useState(1216)
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between'}}>
        <div>
          <span>시작일</span>
          <span> {started} </span>
        </div>
        <div>
          <span> {started} </span>
          <span>종료일</span>
        </div>
      </div>
      <Progress percent={50} status="active" />
    </div>
  )
}

export default Mypage
