import React, { useState, useEffect } from 'react'
import { Button } from 'antd'
import { injectIntl, IntlContextProps } from '@/hocs/intlContext'
import logo from '@/assets/images/logo.png'
import { LogIn, SignUp } from './components'
import './index.scss'

interface ILoginProps {
  intl: IntlContextProps
}

const Login: React.FC<ILoginProps> = props => {
  const { intl } = props
  const prefixCls = 'loginView'
  const [isSignUp, setIsSignUp] = useState(false)
  useEffect(() => {}, [isSignUp])
  return (
    <article className={`${prefixCls}`}>
      <section className={`${prefixCls}-left-panel`}>
        <div className={`${prefixCls}-photo-wall`} />
      </section>
      <section className={`${prefixCls}-right-panel`}>
        <div className={`${prefixCls}-main-section`}>
          <div className={`${prefixCls}-logo-wrap`}>
            <img className='logo' src={logo} alt='logo' />
          </div>
          {isSignUp ? <SignUp /> : <LogIn />}
        </div>
        <div className={`${prefixCls}-toggle-section`}>
          <span>
            {intl.formatMessage({
              id: isSignUp ? 'login_have_account' : 'login_no_account',
            })}
          </span>
          <Button type='link' onClick={() => setIsSignUp(!isSignUp)}>
            {intl.formatMessage({
              id: isSignUp ? 'login_log_in_switch' : 'login_sign_up_switch',
            })}
          </Button>
        </div>
      </section>
    </article>
  )
}

export default injectIntl(Login)
