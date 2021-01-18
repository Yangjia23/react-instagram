import React, { useEffect } from 'react'
import { History } from 'history'

interface ILoginValidate {
  isLogin: boolean
  history: History
}

const LoginValidate: React.FC<ILoginValidate> = props => {
  const { isLogin, history, children } = props
  useEffect(() => {
    !isLogin && history.push('/login')
  }, [isLogin, history])
  return <>{children}</>
}

export default LoginValidate
