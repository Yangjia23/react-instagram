import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import Cookie from 'js-cookie'

import { RegisterPayload, LoginPayload, LoginResult, ValidateResult } from '@/typings/loginTypes'
import { RootState } from './init/createStore'
import api from './data/api'

const PAGE_PREFIX = 'app'

type IUser = ValidateResult

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
  user: { id: 0, user: '' },
  loginErrorMsg: '',
  notices: [],
  notification: {
    title: '',
    content: '',
  },
}

export const login = createAsyncThunk(`${PAGE_PREFIX}/login`, async (data: LoginPayload, thunk) => {
  const { rejectWithValue, dispatch } = thunk
  try {
    const response: LoginResult = await api.login<LoginResult>(data)
    Cookie.set('token', JSON.stringify(response.token))
    return response
  } catch (error) {
    if (error?.response?.data) {
      // setTimeout(() => dispatch(resetLoginErrorMsg()), 1500);
      return rejectWithValue(error.response.data)
    }
    throw error
  }
})

export const validate = createAsyncThunk(`${PAGE_PREFIX}/validate`, async (data, thunk) => {
  const { rejectWithValue, dispatch } = thunk
  try {
    const response: ValidateResult = await api.validate<ValidateResult>()
    Cookie.set('user', JSON.stringify(response))
    return response
  } catch (error) {
    if (error?.response?.data) {
      // setTimeout(() => dispatch(resetLoginErrorMsg()), 1500);
      return rejectWithValue(error.response.data)
    }
    throw error
  }
})

export const appSlice = createSlice({
  name: PAGE_PREFIX,
  initialState,
  extraReducers: builder => {
    builder.addCase(login.fulfilled, (state, action) => ({
      ...state,
      isLogin: true,
    }))
    builder.addCase(login.rejected, (state, action) => ({
      ...state,
      isLogin: true,
    }))
    builder.addCase(validate.fulfilled, (state, action: PayloadAction<IUser>) => ({
      ...state,
      user: action.payload,
    }))
    builder.addCase(validate.rejected, (state, action) => ({
      ...state,
      isLogin: false,
    }))
  },
  reducers: {
    loginSuccess: (state, action) => ({
      ...state,
      isLogin: true,
      user: action.payload,
    }),
  },
})

export const { loginSuccess } = appSlice.actions

export const selectIsLogin = (state: RootState): boolean => state[PAGE_PREFIX].isLogin
export const selectLoginErrorMsg = (state: RootState) => state[PAGE_PREFIX].loginErrorMsg
export const selectUser = (state: RootState) => state[PAGE_PREFIX].user

export default appSlice.reducer
