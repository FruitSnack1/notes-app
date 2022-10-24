import axios from 'axios'
import Link from 'next/link'
import { Router, useRouter } from 'next/router'
import React, { useState } from 'react'
import { Card } from './Card'

export const Register = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [passwordAgain, setPasswordAgain] = useState('')

  const router = useRouter()

  const submit = async (e) => {
    e.preventDefault()
    if (password != passwordAgain) return
    await axios.post('http://localhost:3001/register', {
      username,
      password,
      passwordAgain,
    })
    router.push('/login')
  }

  return (
    <div className='col-3 '>
      <Card>
        <h3 className='fw-bold'>Sign up for free</h3>
        <form>
          <div className='form-outline mb-4'>
            <label className='form-label fw-semibold' htmlFor='form2Example1'>
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
            <label className='form-label fw-semibold' htmlFor='form2Example2'>
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

          <div className='form-outline mb-4'>
            <label className='form-label fw-semibold' htmlFor='form2Example2'>
              Password again
            </label>
            <input
              type='password'
              id='form2Example2'
              className='form-control'
              placeholder='Password again'
              onChange={(e) => {
                setPasswordAgain(e.target.value)
              }}
            />
          </div>

          <div className='d-grid'>
            <button
              type='button'
              className='btn btn-primary  mb-4 fw-bold text-white'
              onClick={submit}
            >
              Register
            </button>
          </div>

          <div className='text-center'>
            <span className='me-1'>Already a member?</span>
            <Link href={'/login'} className='ml-3'>
              Log in
            </Link>
          </div>
        </form>
      </Card>
    </div>
  )
}
