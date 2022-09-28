import React from 'react'
import { Navbar } from '../components/Navbar'

export const AppLayout = ({ children }) => {
  return (
    <>
      <div className='container-fluid v100'>
        <div className='row h-100'>
          <Navbar />

          <main
            role='main'
            className='col-md-9 ml-sm-auto col-lg-10 pt-3 px-4 bg-secondary'
          >
            {children}
          </main>
        </div>
      </div>
    </>
  )
}
