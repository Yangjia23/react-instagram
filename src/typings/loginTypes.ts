export interface LoginPayload {
  name: string
  password: string
}

export interface LoginResult {
  token: string
}

export interface RegisterPayload {
  email: string
  name: string
  password: string
}

export interface ValidateResult {
  id: number
  user: string
  email?: string
  authorities?: string[]
}
