import { createContext } from 'react'
import { IConfig, IVariables } from './utils/formatMessage'

export interface IntlContextProps {
  locale: string
  messages: {
    [propsName: string]: string
  }
  formatMessage: (config: IConfig, variables?: IVariables) => string
  updateLocale: (locale: string) => void
}

const { Provider, Consumer } = createContext({})
export { Provider, Consumer }
