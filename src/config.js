const proxyConfig = {
  // 接口代理1
  '/api/': {
    target: 'http://198.168.111.111:3001',
    changeOrigin: true,
  },
  // 接口代理2
  '/api-2/': {
    target: 'http://198.168.111.111:3002',
    changeOrigin: true,
    pathRewrite: {
      '^/api-2': '',
    },
  },
  // .....
}

const buildConfig = {
  'PROD-US': {
    locale: 'en-us',
    apiDomain: '',
  },
  'PROD-CN': {
    locale: 'zh-cn',
    apiDomain: '',
  },
  localhost: {
    locale: 'en-us',
    apiDomain: 'http://localhost:3000',
  },
}

module.exports = {
  proxyConfig,
  buildConfig,
}
