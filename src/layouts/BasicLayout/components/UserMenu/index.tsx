import React, { FunctionComponent } from 'react'
import { Menu } from 'antd'
import Icon from '@ant-design/icons'
import './index.scss'

interface IUserMenu {
  path: string
  icon: FunctionComponent
  label: string
  disabled?: boolean
}

interface IUserMenuProps {
  logoutLabel: string
  menuList: IUserMenu[]
}

const UserMenu: React.FC<IUserMenuProps> = props => {
  const { logoutLabel, menuList } = props
  return (
    <Menu className='user-menu'>
      {menuList.map(menuItem => (
        <Menu.Item className='user-menu-item' key={menuItem.path}>
          <Icon className='user-menu-icon' component={menuItem.icon} />
          <span>{menuItem.label}</span>
        </Menu.Item>
      ))}
      <Menu.Divider />
      <Menu.Item className='user-menu-item'>
        <div role='presentation'>
          <span>{logoutLabel}</span>
        </div>
      </Menu.Item>
    </Menu>
  )
}

export default UserMenu
