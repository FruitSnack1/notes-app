import React from 'react'
import { Register } from '../components/auth/Register'
import RootLayout from '../layouts/RootLayout'

export default function register() {
  return (
    <div className='hero d-flex justify-content-center align-items-center'>
      <div className='container-fluid'>
        <div className='row justify-content-center'>
          <Register />
        </div>
      </div>
    </div>
  )
}

register.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>
}
