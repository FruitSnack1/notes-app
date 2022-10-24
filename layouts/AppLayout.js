import React from 'react'
import { Navbar } from '../components/Navbar'

export const AppLayout = ({ children }) => {
  return (
    <>
      <div className='container v100'>
        <div className='row '>
          <Navbar />

          <main
            role='main'
            className='col-md-9 ml-sm-auto col-lg-10 pt-3 px-4 '
          >
            {children}
          </main>
        </div>
      </div>
    </>
  )
}
