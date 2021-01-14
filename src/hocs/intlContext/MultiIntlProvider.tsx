import React, { useState } from 'react'
import { Provider, IntlContextProps } from './IntlContext'
import { formatMessage, IConfig, IVariables } from './utils/formatMessage'

interface messageObject {
  [propsName: string]: string
}

interface IProps {
  defaultLocale: string
  messageMap: {
    [propsName: string]: messageObject
  }
}

const MultiIntlProvider: React.FC<IProps> = props => {
  const { defaultLocale, messageMap, children } = props
  const messages = messageMap[defaultLocale]

  const [value, setValue] = useState({
    locale: defaultLocale,
    messages,
    formatMessage: (config: IConfig, variables?: IVariables) => formatMessage(config, messages, variables),
  })

  const updateLocale = (locale: string) => {
    const newMessages = messageMap[locale]
    setValue({
      ...value,
      locale,
      messages: newMessages,
      formatMessage: (config: IConfig, variables?: IVariables) => formatMessage(config, newMessages, variables),
    })
  }

  return (
    <>
      <Provider value={{ ...value, updateLocale } as IntlContextProps}>{children}</Provider>
    </>
  )
}

export default MultiIntlProvider
