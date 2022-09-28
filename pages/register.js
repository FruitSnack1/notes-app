import React from 'react'
import { Register } from '../components/Register'
import Layout from '../layouts/Layout'

export default function register() {
  return (
    <div className='row justify-content-center'>
      <Register />
    </div>
  )
}

register.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
