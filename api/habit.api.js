import { apiClient } from './http-common'

export const getHabits = () => apiClient.get('/habits')
export const postHabit = (body) => apiClient.post('/habits', body)
export const getHabit = (id) => apiClient.get(`/habits/${id}`)
