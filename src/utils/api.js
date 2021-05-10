import { fetch, post, put } from './http'

export const login = (params) => post('/login', params)
export const menu = () => fetch('/user')
export const logout = (params) => post('/logout', params)