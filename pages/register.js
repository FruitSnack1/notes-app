import React from 'react'
import { Register } from '../components/Register'
import Layout from '../layouts/Layout'

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
  return <Layout>{page}</Layout>
}
