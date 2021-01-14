type IConfig = {
  id: string
  defaultMessage?: string
}

type IMessage = {
  [key: string]: string
}

type IVariables = {
  [key: string]: any
}

const replaceVariables = (string: string, variables: IVariables): string => {
  let newString = string
  Object.keys(variables).forEach(key => {
    const value = variables[key]
    const regex = new RegExp(`{${key}}`, 'g')
    newString = newString.replace(regex, value)
  })
  return newString
}

const formatMessage = (config: IConfig, messages: IMessage, variables?: IVariables) => {
  const { id, defaultMessage } = config
  let message = messages[id]
  if (message === undefined) {
    if (defaultMessage !== undefined) {
      return defaultMessage
    }
    console.warn(`[react-intl-context]: Message key ${id} is undefined. Fallback to empty string.`)
    return ''
  }
  if (variables !== undefined) {
    message = replaceVariables(message, variables)
  }
  return message
}

export { formatMessage, IConfig, IVariables }
