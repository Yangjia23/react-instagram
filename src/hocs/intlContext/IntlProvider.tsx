import React, { useState } from 'react'
import { Provider } from './IntlContext'

interface IProps {
  locale: string
  messages: any
}

const IntlProvider: React.FC<IProps> = props => {
  const { locale, messages, children } = props
  const [value] = useState({
    locale,
    messages,
    formatMessage: () => {},
  })
  return (
    <>
      <Provider value={value}>{children}</Provider>
    </>
  )
}

export default IntlProvider
