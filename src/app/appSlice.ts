import { createSlice } from '@reduxjs/toolkit'
import { RootState } from './init/createStore'

const PAGE_PREFIX = 'app'

interface IUser {
  authorities: string[]
}

interface IAppState {
  isLogin: boolean
  loginErrorMsg: string
  user: IUser
  notices: []
  notification: {
    title: string
    content: string
  }
}

const initialState: IAppState = {
  isLogin: false,
  user: {
    authorities: [],
  },
  loginErrorMsg: '',
  notices: [],
  notification: {
    title: '',
    content: '',
  },
}

export const appSlice = createSlice({
  name: PAGE_PREFIX,
  initialState,
  extraReducers: {},
  reducers: {},
})

export const selectIsLogin = (state: RootState): boolean => state[PAGE_PREFIX].isLogin
export const selectUser = (state: RootState) => state[PAGE_PREFIX].user

export default appSlice.reducer
