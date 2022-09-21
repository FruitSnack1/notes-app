import React from 'react'

export const Card = ({ children }) => {
  return (
    <div className='card border-0 bg-secondary shadow'>
      <div className='card-body '>{children}</div>
    </div>
  )
}
