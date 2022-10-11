import React, { useState } from 'react'

export const Weekday = ({ state, last, day, changeState, index }) => {
  const [enabled, setEnabled] = useState(0)

  return (
    <>
      <div className='d-inline-block position-relative calendar-day'>
        <div className='mt-100'></div>
        <div className='position-absolute  top-0 bottom-0 start-0 end-0'>
          <button
            onClick={() => {
              setEnabled(!enabled)
            }}
            className={`btn w-100 h-100 fw-bold ${
              enabled ? 'bg-primary' : 'bg-secondary'
            } ${enabled ? 'text-white' : 'text-dark'}`}
          >
            {day}
          </button>
        </div>
      </div>
      {!last ? <div className='calendar-gap d-inline-block'></div> : <></>}
    </>
  )
}
