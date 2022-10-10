import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { CalendarDay } from './CalendarDay'
import { CalendarWeek } from './CalendarWeek'

export const Calendar = () => {
  const date = new Date()
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  function getDaysInMonth() {
    return new Array(
      new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
    ).fill(0)
  }

  function weekCount() {
    var firstOfMonth = new Date(date.getFullYear(), date.getMonth() - 1, 1)
    var lastOfMonth = new Date(date.getFullYear(), date.getMonth(), 0)

    var used = firstOfMonth.getDay() + 6 + lastOfMonth.getDate()

    return new Array(Math.ceil(used / 7)).fill(0)
  }

  return (
    <>
      <div className='d-flex justify-content-center align-items-center mb-3'>
        <FontAwesomeIcon icon={faAngleLeft} />
        <span className='mx-5'>{monthNames[date.getMonth()]}</span>
        <FontAwesomeIcon icon={faAngleRight} />
      </div>
      <div className='d-flex justify-content-around mb-3'>
        <span>Mo</span>
        <span>Tu</span>
        <span>We</span>
        <span>Th</span>
        <span>Fr</span>
        <span>Sa</span>
        <span>Su</span>
      </div>
      <div>
        {weekCount().map((e, i) => (
          <CalendarWeek key={i} />
        ))}
        {getDaysInMonth().map((e, i) => (
          <CalendarDay key={i} dayNumber={i + 1} />
        ))}
      </div>
    </>
  )
}
