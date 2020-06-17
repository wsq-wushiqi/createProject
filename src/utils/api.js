import { fetch, post, put } from './http'

export const login = (params) => post('/login', params)