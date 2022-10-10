import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { CalendarWeek } from './CalendarWeek'

export const Calendar = () => {
  const [month, setMonth] = useState(new Date().getMonth())
  const [year, setYear] = useState(new Date().getFullYear())
  const [numberOfWeeks, setNumberOfWeeks] = useState(0)
  const [offset, setOffset] = useState(new Date(year, month, 1).getDay() - 1)
  const [weekCount, setWeekCount] = useState([])

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

  useEffect(() => {
    console.log('month changed')
    setWeekCount(getWeekCount())
    setOffset(new Date(year, month, 1).getDay() - 1)
  }, [month])

  function getDaysInMonth() {
    return new Array(
      new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
    ).fill(0)
  }

  function getWeekCount() {
    var firstOfMonth = new Date(date.getFullYear(), date.getMonth() - 1, 1)
    var lastOfMonth = new Date(date.getFullYear(), date.getMonth(), 0)

    var used = firstOfMonth.getDay() + 6 + lastOfMonth.getDate()

    return new Array(Math.ceil(used / 7)).fill(0)
  }

  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()

  const changeMonth = (direction) => {
    if (month + direction == -1) setMonth(11)
    else setMonth((month + direction) % 12)

    setWeekCount(getWeekCount())
  }

  return (
    <>
      <div className='d-flex justify-content-center align-items-center mb-3'>
        <FontAwesomeIcon onClick={() => changeMonth(-1)} icon={faAngleLeft} />
        <span className='mx-3'>{monthNames[month]}</span>
        <span className='mx-3'>{date.getFullYear()}</span>
        <FontAwesomeIcon onClick={() => changeMonth(1)} icon={faAngleRight} />
      </div>
      <div className='d-flex justify-content-between mb-3 mx-5'>
        <span>Mo</span>
        <span>Tu</span>
        <span>We</span>
        <span>Th</span>
        <span>Fr</span>
        <span>Sa</span>
        <span>Su</span>
      </div>
      <div>
        {weekCount.map((e, i) => (
          <CalendarWeek
            key={i}
            startDay={7 * i + 1 - (i ? offset : 0)}
            endDay={Math.min(7 * (i + 1) - offset, lastDay)}
          />
        ))}
      </div>
    </>
  )
}
