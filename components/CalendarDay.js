import React, { useState } from 'react'

export const CalendarDay = ({ dayNumber, last }) => {
  const [status, setStatus] = useState(0)

  const changeStatus = () => {
    setStatus((status + 1) % 3)
  }

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
            {dayNumber}
          </button>
        </div>
      </div>
      {!last ? <div className='calendar-gap d-inline-block'></div> : <></>}
    </>
  )
}
