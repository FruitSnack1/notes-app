import axios from 'axios'

export const apiClient = axios.create({
  baseURL: 'http://localhost:3001',
  withCredentials: true,
  headers: {
    'Content-type': 'application/json',
  },
})
