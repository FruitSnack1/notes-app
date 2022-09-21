import Link from 'next/link'
import React from 'react'
import { Card } from './Card'

export const Register = () => {
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
            />
          </div>

          <div className='d-grid'>
            <button
              type='button'
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
