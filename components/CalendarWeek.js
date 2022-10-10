import React from 'react'
import { CalendarDay } from './CalendarDay'
import { EmptyCalendarDay } from './EmptyCalendarDay'

export const CalendarWeek = ({ startDay, endDay }) => {
  const days = new Array(7).fill(0)

  return (
    <div className='mb-3'>
      {startDay == 1
        ? days.map((e, i) =>
            i < 7 - endDay ? (
              <EmptyCalendarDay key={i} last={i == days.length - 1} />
            ) : (
              <CalendarDay
                key={i}
                dayNumber={startDay + i - (7 - endDay)}
                last={i == days.length - 1}
              />
            )
          )
        : days.map((e, i) =>
            i > endDay - startDay ? (
              <EmptyCalendarDay key={i} last={i == days.length - 1} />
            ) : (
              <CalendarDay
                key={i}
                dayNumber={startDay + i}
                last={i == days.length - 1}
              />
            )
          )}
    </div>
  )
}
