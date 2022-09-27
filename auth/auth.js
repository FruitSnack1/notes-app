import Cookies from 'js-cookie'

export const isAuthenticated = () => {
  return !!Cookies.get('token')
}

export const authenticateUser = (token) => {
  Cookies.set('token', token)
}

export const unauthenticateUser = () => {
  Cookies.remove('token')
}
