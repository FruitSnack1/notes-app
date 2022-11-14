import axios from 'axios'

export const apiClient = axios.create({
  baseURL: 'http://localhost:3001',
  // baseURL: 'https://good-habits.fly.dev',
  withCredentials: true,
  headers: {
    'Content-type': 'application/json',
  },
})
