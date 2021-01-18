interface IBuild {
  locale: string
  apiDomain: string
}

interface IMessageMap {
  [key: string]: {
    [key: string]: string
  }
}

declare let process: {
  env: {
    BUILD_CONFIG: IBuild
    BUILD_LOCALE_MESSAGES: IMessageMap
  }
}

const buildConfig = process.env.BUILD_CONFIG
const messageMap = process.env.BUILD_LOCALE_MESSAGES

export { buildConfig, messageMap }
