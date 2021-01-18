import axios from 'axios'
import Cookie from 'js-cookie'

import { buildConfig } from '../config/buildConfig'

axios.defaults.baseURL = `${buildConfig.apiDomain}/api`
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'

axios.interceptors.request.use(
  config => {
    const token = Cookie.get('token')
    const backupConfig = JSON.parse(JSON.stringify(config))
    if (token) {
      // 判断是否存在token，如果存在的话，则每个http header都加上token
      // Bearer是JWT的认证头部信息
      backupConfig.headers.common.Authorization = `Bearer  ${JSON.parse(token)}`
    }
    return backupConfig
  },
  error => Promise.reject(error),
)

axios.interceptors.response.use(
  response => response.data,
  error => Promise.reject(error),
)

export default axios
