import React, { useEffect, useState } from 'react'

export const Weekday = ({ last, day, habit }) => {
  const [enabled, setEnabled] = useState(
    habit?.frequency[day.toLowerCase()]
      ? habit.frequency[day.toLowerCase()]
      : false
  )

  const updateEnabled = () => {
    setEnabled(!enabled)
    fetch(`http://localhost:3001/habits/${habit._id}`, {
      method: 'PUT',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        frequency: {
          [day.toLowerCase()]: !enabled,
        },
      }),
    })
  }

  return (
    <>
      <div className='d-inline-block position-relative calendar-day'>
        <div className='mt-100'></div>
        <div className='position-absolute  top-0 bottom-0 start-0 end-0'>
          <button
            onClick={updateEnabled}
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
