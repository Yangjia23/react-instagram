import Cookie from 'js-cookie'

import { loginSuccess } from '../appSlice'

const initClient = (dispatch: any) => {
  const isLogin = !!Cookie.get('user')
  const commonActions = []
  if (isLogin) {
    const payload = JSON.parse(Cookie.get('user'))
    commonActions.push(dispatch(loginSuccess(payload)))
  }
  return commonActions
}

export default initClient
