import Head from 'next/head'
import Layout from '../layouts/Layout'
import bg from '../public/hero-background.svg'

export default function Index() {
  return (
    <div>
      <Head>
        <title>Good Habits</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='hero d-flex flex-column  justify-content-center align-items-center'>
        <h1 className='fw-bold'>
          Welcome to <span className='text-primary  '>Good Habits</span>
        </h1>
        <p>the best place for tracking your habits...</p>
      </div>
    </div>
  )
}

Index.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
