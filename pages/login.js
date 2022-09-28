import Head from 'next/head'
import { Login } from '../components/Login'
import Layout from '../layouts/Layout'

export default function login() {
  return (
    <div className='container-fluid'>
      <div className='row justify-content-center'>
        <Login />
      </div>
    </div>
  )
}
login.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
