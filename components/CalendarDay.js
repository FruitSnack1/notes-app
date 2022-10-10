import React, { useState } from 'react'

export const CalendarDay = ({ dayNumber }) => {
  const [status, setStatus] = useState(0)

  const changeStatus = () => {
    setStatus((status + 1) % 3)
  }

  return (
    <button
      onClick={changeStatus}
      className={`btn me-2 ${
        status == 0
          ? 'btn-secondary'
          : status == 1
          ? 'btn-success'
          : 'btn-danger'
      }`}
    >
      {dayNumber}
    </button>
  )
}
