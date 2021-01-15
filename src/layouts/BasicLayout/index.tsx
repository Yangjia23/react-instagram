import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Dropdown, Popover } from 'antd'
import Icon, {
  HomeOutlined,
  MessageOutlined,
  CompassOutlined,
  HeartOutlined,
  UserOutlined,
  SettingOutlined,
} from '@ant-design/icons'
import { injectIntl, IntlContextProps } from '@/hocs/intlContext/index'
import { LocaleSelect } from '@/components'
import logo from '@/assets/images/logo.png'
import { FollowNotice, GlobalSearch, UserMenu } from './components'
import './index.scss'

interface IProps {
  className: string
  appBaseUrl?: string
  prefixCls?: string
  intl: IntlContextProps
}

const BasicLayout: React.FC<IProps> = props => {
  const { appBaseUrl = '/', prefixCls = 'basic-layout', intl, children } = props
  const [locale] = useState('en-us')

  const LogoWrap = () => (
    <Link className='logo-wrap' to={appBaseUrl} href={appBaseUrl}>
      <img className='logo' src={logo} alt='logo' />
    </Link>
  )

  const NavigationWrap = () => {
    const iconStyle = { color: '#262626', fontSize: '22px' }

    const renderMenuNav = () => {
      const menuList = [
        // error  Component definition is missing display name  react/display-name
        // so: icon: () => <HomeOutlined />  to  icon() {return <HomeOutlined />},
        {
          icon() {
            return <HomeOutlined />
          },
          path: '/',
        },
        {
          icon() {
            return <MessageOutlined />
          },
          path: '/chart',
        },
        {
          icon() {
            return <CompassOutlined />
          },
          path: '/explore',
        },
      ]
      return menuList.map(menu => (
        <div className='navigation-item' key={menu.path}>
          <Link to={menu.path}>
            <Icon className='navigation-item-icon' style={iconStyle} component={menu.icon} />
          </Link>
        </div>
      ))
    }

    const followNotice = () => {
      const notices = [{ id: 12, title: 'title', message: 'message' }]
      const emptyMsg = intl.formatMessage({ id: 'basicLayout_readAll_notice' })
      return <FollowNotice emptyMsg={emptyMsg} notices={notices} />
    }

    const userMenu = () => {
      const logoutLabel = intl.formatMessage({ id: 'basicLayout_logout' })
      const menuList = [
        {
          path: '/profile',
          icon() {
            return <UserOutlined />
          },
          label: intl.formatMessage({ id: 'basicLayout_profile' }),
        },
        {
          path: '/saved',
          icon() {
            return <SettingOutlined />
          },
          label: intl.formatMessage({ id: 'basicLayout_saved' }),
        },
        {
          path: '/setting',
          icon() {
            return <SettingOutlined />
          },
          label: intl.formatMessage({ id: 'basicLayout_setting' }),
        },
      ]
      return <UserMenu logoutLabel={logoutLabel} menuList={menuList} />
    }

    return (
      <div className='navigation-wrap'>
        {renderMenuNav()}
        <div className='navigation-item'>
          <Popover placement='bottomRight' arrowPointAtCenter trigger='click' content={followNotice}>
            <HeartOutlined style={iconStyle} />
          </Popover>
        </div>
        <Dropdown overlay={userMenu} placement='bottomRight'>
          <div className='navigation-item'>
            <UserOutlined style={iconStyle} />
          </div>
        </Dropdown>
      </div>
    )
  }

  const renderHeader = () => (
    <header className={`${prefixCls}-header`}>
      <div className={`${prefixCls}-header-container`}>
        <div className={`${prefixCls}-logo`}>
          <LogoWrap />
        </div>
        <div className={`${prefixCls}-search`}>
          <GlobalSearch placeholder={intl.formatMessage({ id: 'globalSearch_placeholder' })} />
        </div>
        <div className={`${prefixCls}-nav`}>
          <NavigationWrap />
        </div>
      </div>
    </header>
  )

  const renderFooter = () => (
    <footer className={`${prefixCls}-footer`}>
      <div className='footer-container'>
        <LocaleSelect locale={locale} updateLocale={val => intl.updateLocale(val)} />
        <div className='copyright'>{intl.formatMessage({ id: 'basicLayout_copyright' })}</div>
      </div>
    </footer>
  )

  return (
    <div className={`${prefixCls}`}>
      {renderHeader()}
      <main className={`${prefixCls}-main`}>{children}</main>
      {renderFooter()}
    </div>
  )
}

export default injectIntl(BasicLayout)
