import { apiClient } from './http-common'

export const login = (user) => apiClient.post('/login', user)

export const register = (user) => apiClient.post('/register', user)
