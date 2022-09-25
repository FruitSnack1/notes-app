import React, { createContext, useState } from 'react'

const AuthContext = createContext()
const { Provider } = AuthContext

const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    token: '',
  })

  const setUserAuthInfo = (data) => {
    const token = localStorage.setItem('token', data)

    setAuthState({
      token: data,
    })
  }

  // checks if the user is authenticated or not
  const isUserAuthenticated = () => !!authState.token

  return (
    <Provider
      value={{
        authState,
        setAuthState: (userAuthInfo) => setUserAuthInfo(userAuthInfo),
        isUserAuthenticated,
      }}
    >
      {children}
    </Provider>
  )
}

export { AuthContext, AuthProvider }
