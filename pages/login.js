import Head from 'next/head'
import { Login } from '../components/Login'
import Layout from '../layouts/Layout'

export default function login() {
  return (
    <div className='hero d-flex justify-content-center align-items-center'>
      <div className='container-fluid'>
        <div className='row justify-content-center'>
          <Login />
        </div>
      </div>
    </div>
  )
}
login.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
