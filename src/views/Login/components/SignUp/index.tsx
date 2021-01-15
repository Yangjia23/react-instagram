import React from 'react'
import { injectIntl, IntlContextProps } from '@/hocs/intlContext'
import { Form, Input, Button } from 'antd'
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons'
import './index.scss'

interface ISignUpProps {
  prefixCls?: string
  intl: IntlContextProps
}
const onFinish = () => {}
const SignUp: React.FC<ISignUpProps> = props => {
  const { intl, prefixCls = 'signUpForm' } = props

  return (
    <Form name='normal_login' className={`${prefixCls}`} initialValues={{ remember: true }} onFinish={onFinish}>
      <Form.Item
        name='email'
        className={`${prefixCls}-item`}
        rules={[
          {
            type: 'email',
            message: intl.formatMessage({ id: 'login_emailInput_validate' }),
          },
          { required: true, message: intl.formatMessage({ id: 'login_emailInput_required' }) },
        ]}
      >
        <Input prefix={<MailOutlined />} placeholder={intl.formatMessage({ id: 'login_emailInput_placeholder' })} />
      </Form.Item>
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
      <Form.Item>
        <Button type='primary' htmlType='submit' className={`${prefixCls}-button`}>
          {intl.formatMessage({ id: 'login_signUpSubmit_btn' })}
        </Button>
      </Form.Item>
    </Form>
  )
}

export default injectIntl(SignUp)
