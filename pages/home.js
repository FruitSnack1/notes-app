import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../src/context/authContext'

export default function Home() {
  const authContext = useContext(AuthContext)
  const router = useRouter()
  useEffect(() => {
    // checks if the user is authenticated
    if (!authContext.isUserAuthenticated()) router.push('/login')
  })
  return (
    <React.Fragment>
      <Head>
        <title>Notes</title>
      </Head>
      <div>
        <h2>Home</h2>
      </div>
    </React.Fragment>
  )
}
