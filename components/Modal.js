import React from 'react'

export const Modal = ({ visible, children }) => {
  return (
    <div
      className={`position-fixed h-100 w-100 top-0 start-0 backdrop ${
        visible ? 'visible' : 'invisible'
      }`}
    >
      {children}
    </div>
  )
}
