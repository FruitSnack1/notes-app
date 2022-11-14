import { apiClient } from './http-common'

export const getHabits = () => apiClient.get('/habits')

export const postHabit = (body) => apiClient.post('/habits', body)

export const editHabit = (id, body) => apiClient.put(`/habits/${id}`, body)

export const getHabit = (id) => apiClient.get(`/habits/${id}`)

export const updateFrequency = (id, body) =>
  apiClient.put(`/habits/frequency/${id}`, body)

export const updateEntry = (id, body) =>
  apiClient.put(`/habits/entry/${id}`, body)

export const deleteHabit = (id) => apiClient.delete(`/habits/${id}`)
