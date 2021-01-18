import { RegisterPayload, LoginPayload, ValidatePayload } from '@/typings/loginTypes'
import axios from './http'

const LoginApis = {
  login: <T>(data: LoginPayload) => axios.post<T, T>('/auth/login', data),
  register: <T>(data: RegisterPayload) => axios.post<T, T>('/auth/register', data),
  validate: <T>() => axios.post<T, T>('/auth/validate'),
}

export default {
  ...LoginApis,
}
