import React from 'react'

export const Card = ({ children, className }) => {
  return (
    <div className={`card border-0 bg-light shadow  ${className}`}>
      <div className='card-body p-4'>{children}</div>
    </div>
  )
}
