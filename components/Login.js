import Link from 'next/link'
import React, { useContext, useState } from 'react'
import { Card } from './Card'
import axios from 'axios'
import { useRouter } from 'next/router'
import { authenticateUser } from '../auth/auth'

export const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const submit = async () => {
    const res = await axios.post('http://localhost:3001/login', {
      username,
      password,
    })
    const { token } = res.data
    authenticateUser(token)
    router.push('/home')
  }

  return (
    <div className='col-3 mt-5'>
      <Card>
        <form>
          <div className='form-outline mb-4'>
            <label className='form-label' htmlFor='form2Example1'>
              Username
            </label>
            <input
              type='email'
              id='form2Example1'
              className='form-control'
              placeholder='Username'
              onChange={(e) => {
                setUsername(e.target.value)
              }}
            />
          </div>

          <div className='form-outline mb-4'>
            <label className='form-label' htmlFor='form2Example2'>
              Password
            </label>
            <input
              type='password'
              id='form2Example2'
              className='form-control'
              placeholder='Password'
              onChange={(e) => {
                setPassword(e.target.value)
              }}
            />
          </div>

          <div className='d-grid'>
            <button
              type='button'
              className='btn btn-primary  mb-4 fw-bold text-white'
              onClick={(e) => {
                e.preventDefault()
                submit()
              }}
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
