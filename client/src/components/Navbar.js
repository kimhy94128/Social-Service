import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

function Navbar() {
  const [ current, setCurrent ] = useState('mypage')
  const handleClick = (e) => {
    setCurrent(e.key)
  }
  return (
    <div>
      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="mypage">
          <Link to='/mypage'>나의 복무</Link>
        </Menu.Item>
        <Menu.Item key="test">
          <Link to='/test'>테스트</Link>
        </Menu.Item>
      </Menu>
    </div>
  )
}

export default Navbar
