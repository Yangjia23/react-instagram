import React from 'react'
import { injectIntl, IntlContextProps } from '@/hocs/intlContext'
import { Form, Input, Button } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import './index.scss'

interface ILogInProps {
  prefixCls?: string
  intl: IntlContextProps
}
const onFinish = () => {}
const LogIn: React.FC<ILogInProps> = props => {
  const { intl, prefixCls = 'logInForm' } = props

  return (
    <Form name='logInForm' className={`${prefixCls}`} initialValues={{ remember: true }} onFinish={onFinish}>
      <Form.Item
        className={`${prefixCls}-item`}
        name='username'
        rules={[{ required: true, message: intl.formatMessage({ id: 'login_usernameInput_required' }) }]}
      >
        <Input prefix={<UserOutlined />} placeholder={intl.formatMessage({ id: 'login_usernameInput_placeholder' })} />
      </Form.Item>
      <Form.Item
        className={`${prefixCls}-item`}
        name='password'
        rules={[{ required: true, message: intl.formatMessage({ id: 'login_passwordInput_required' }) }]}
      >
        <Input
          prefix={<LockOutlined />}
          type='password'
          placeholder={intl.formatMessage({
            id: 'login_passwordInput_placeholder',
          })}
        />
      </Form.Item>
      <Form.Item className={`${prefixCls}-item`}>
        <Button type='primary' htmlType='submit' className={`${prefixCls}-button`}>
          {intl.formatMessage({ id: 'login_logInSubmit_btn' })}
        </Button>
      </Form.Item>
    </Form>
  )
}

export default injectIntl(LogIn)
