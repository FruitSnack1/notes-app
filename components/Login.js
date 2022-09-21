import React from 'react'
import { Card } from './Card'

export const Login = () => {
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

          {/* <div className='row mb-4'>
          <div className='col d-flex justify-content-center'>
            <div className='form-check'>
              <input
                className='form-check-input'
                type='checkbox'
                value=''
                id='form2Example31'
                defaultChecked
              />
              <label className='form-check-label' htmlFor='form2Example31'>
                {' '}
                Remember me{' '}
              </label>
            </div>
          </div>

          <div className='col'>
            <a href='#!'>Forgot password?</a>
          </div>
        </div> */}
          <div className='d-grid'>
            <button
              type='button'
              className='btn btn-primary  mb-4 fw-bold text-white'
            >
              Sign in
            </button>
          </div>

          <div className='text-center'>
            <p>
              Not a member? <a href='#!'>Register</a>
            </p>
          </div>
        </form>
      </Card>
    </div>
  )
}
