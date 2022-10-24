import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { CalendarDay } from './CalendarDay'
import { EmptyCalendarDay } from './EmptyCalendarDay'

export const Calendar = ({ habit }) => {
  const [month, setMonth] = useState(new Date().getMonth())
  const [year, setYear] = useState(new Date().getFullYear())
  const [offset, setOffset] = useState(0)
  const [lastDay, setLastDay] = useState(0)

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
    setOffset(getOffset())
    setLastDay(new Date(year, month + 1, 0).getDate())
  }, [month, year])

  const getOffset = () => {
    return (
      new Date(year, month, 1).getDay() -
      (new Date(year, month, 1).getDay() == 0 ? -5 : 2)
    )
  }

  const changeMonth = (direction) => {
    if (month + direction == -1) setMonth(11)
    else setMonth((month + direction) % 12)
    if (month + direction == -1) setYear(year - 1)
    if (month + direction == 12) setYear(year + 1)
  }

  const getCurrentStatus = (date) => {
    if (!habit) return 0
    return habit.entries.find((e) => e.date == date.toISOString())?.status
  }

  return (
    <>
      <div className='d-flex justify-content-center align-items-center mb-3'>
        <FontAwesomeIcon onClick={() => changeMonth(-1)} icon={faAngleLeft} />
        <div className='w-25 d-flex justify-content-center mx-2'>
          <span className='me-3'>{monthNames[month]}</span>
          <span className=''>{year}</span>
        </div>
        <FontAwesomeIcon onClick={() => changeMonth(1)} icon={faAngleRight} />
      </div>
      <div className='d-flex justify-content-between mb-3  '>
        <span className='flex-fill text-center'>Mo</span>
        <div className='calendar-gap'></div>
        <span className='flex-fill text-center'>Tu</span>
        <div className='calendar-gap'></div>
        <span className='flex-fill text-center'>We</span>
        <div className='calendar-gap'></div>
        <span className='flex-fill text-center'>Th</span>
        <div className='calendar-gap'></div>
        <span className='flex-fill text-center'>Fr</span>
        <div className='calendar-gap'></div>
        <span className='flex-fill text-center'>Sa</span>
        <div className='calendar-gap'></div>
        <span className='flex-fill text-center'>Su</span>
      </div>
      <div>
        {new Array(6 * 7)
          .fill(0)
          .map((e, i) =>
            (i > offset) & (i <= lastDay + offset) ? (
              <CalendarDay
                habit={habit}
                key={new Date(year, month, i - offset)}
                date={new Date(year, month, i - offset)}
                last={(i + 1) % 7 == 0}
                currentStatus={getCurrentStatus(
                  new Date(year, month, i - offset)
                )}
              />
            ) : (
              <EmptyCalendarDay key={i} />
            )
          )}
      </div>
    </>
  )
}
