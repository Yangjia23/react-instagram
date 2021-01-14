import React from 'react'
import { Consumer } from './IntlContext'

// 范形 React.ComponentType<P> 是 React.FunctionComponent<P> | React.ClassComponent<P>的别名
// 表示 WrappedComponent 组件可以是类组件或者是函数组件
const injectIntl = <P extends Record<string, unknown>>(WrappedComponent: React.ComponentType<P>) => {
  const InjectIntl: React.FC<P> = props => <Consumer>{value => <WrappedComponent {...props} intl={value} />}</Consumer>
  return InjectIntl
}

export default injectIntl
