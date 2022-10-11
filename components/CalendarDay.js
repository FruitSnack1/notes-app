import React, { useEffect, useState } from 'react'

export const CalendarDay = ({ last, date, currentStatus = 0 }) => {
  const [status, setStatus] = useState(currentStatus)

  const changeStatus = async () => {
    setStatus((status + 1) % 3)
  }

  useEffect(() => {
    fetch('http://localhost:3001/habits/entry/6343ca3681cb8d5b0ccf6976', {
      method: 'PUT',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        date,
        status,
      }),
    })
  }, [status])

  return (
    <>
      <div className='d-inline-block position-relative calendar-day'>
        <div className='mt-100'></div>
        <div className='position-absolute  top-0 bottom-0 start-0 end-0'>
          <button
            onClick={changeStatus}
            className={`btn w-100 h-100 ${
              status == 0
                ? 'btn-secondary'
                : status == 1
                ? 'btn-success'
                : 'btn-danger'
            }`}
          >
            {date.getDate()}
          </button>
        </div>
      </div>
      {!last ? <div className='calendar-gap d-inline-block'></div> : <></>}
    </>
  )
}
