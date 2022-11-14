import Cookies from 'js-cookie'
import nextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { login } from '../../../api/user.api'

export default nextAuth({
  session: {
    strategy: 'jwt',
  },
  providers: [
    Credentials({
      type: 'credentials',
      credentials: {
        username: { label: 'username', type: 'text' },
      },
      async authorize(credentials, req) {
        const { username, password } = credentials
        const { data, status } = await login({ username, password })
        console.log(data)
        Cookies.set('token', data.token)
        if (status === 200)
          return { username: data.username, token: data.token }
        return null
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async session({ session, token }) {
      session.user = token.user
      return session
    },
    async jwt({ token, user }) {
      if (user) {
        token.user = user
      }
      return token
    },
  },
})
