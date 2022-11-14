import Link from 'next/link'
import { useState } from 'react'
import { Card } from '../Card'
import { useRouter } from 'next/router'
import { getSession, signIn } from 'next-auth/react'
import Cookies from 'js-cookie'

export const Login = () => {
  const [userInfo, setUserInfo] = useState({ username: '', password: '' })
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await signIn('credentials', { ...userInfo, redirect: false })
    if (!res.error) {
      const session = await getSession()
      Cookies.set('token', session.user.token)
      router.push('/app')
    }
  }

  return (
    <div className='col-lg-4 col-md-6 col-sm-10'>
      <Card className='p-3'>
        <h3 className='fw-bold'>Welcome back</h3>
        <form onSubmit={handleSubmit}>
          <div className='form-outline mb-4'>
            <label className='form-label fw-semibold' htmlFor='form2Example1'>
              Username
            </label>
            <input
              value={userInfo.username}
              type='text'
              id='form2Example1'
              className='form-control'
              placeholder='Username'
              onChange={({ target }) => {
                setUserInfo({ ...userInfo, username: target.value })
              }}
            />
          </div>

          <div className='form-outline mb-4'>
            <label className='form-label fw-semibold' htmlFor='form2Example2'>
              Password
            </label>
            <input
              value={userInfo.password}
              type='password'
              id='form2Example2'
              className='form-control'
              placeholder='Password'
              onChange={({ target }) => {
                setUserInfo({ ...userInfo, password: target.value })
              }}
            />
          </div>

          <div className='d-grid'>
            <button
              type='submit'
              className='btn btn-primary  mb-4 fw-bold text-white'
            >
              Sign in
            </button>
          </div>

          <div className='text-center'>
            <span className='me-1'>Not a member?</span>
            <Link href={'/register'} className='ml-3'>
              Register
            </Link>
          </div>
        </form>
      </Card>
    </div>
  )
}
