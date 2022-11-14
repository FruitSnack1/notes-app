import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { updateEntry } from '../../api/habit.api'

export const CalendarDay = ({ habit, last, date, currentStatus = 0 }) => {
  const [status, setStatus] = useState(currentStatus)

  const queryClient = useQueryClient()

  const mutation = useMutation(
    () =>
      updateEntry(habit._id, {
        date,
        status: (status + 1) % 3,
      }),
    {
      onSuccess: () => {
        setStatus((status + 1) % 3)
        queryClient.invalidateQueries(['currentHabit'])
      },
    }
  )

  const isToday = () => {
    const today = new Date()
    if (today.getFullYear() != date.getFullYear()) return false
    if (today.getMonth() != date.getMonth()) return false
    if (today.getDate() != date.getDate()) return false
    return true
  }

  const isInFuture = () => {
    const today = new Date()
    if (today.getFullYear() > date.getFullYear()) return false
    if (today.getMonth() > date.getMonth()) return false
    if (today.getDate() >= date.getDate()) return false
    return true
  }

  return (
    <>
      <div className='d-inline-block position-relative calendar-day '>
        <div className='mt-100'></div>
        <div className='position-absolute  top-0 bottom-0 start-0 end-0 '>
          <button
            onClick={() => {
              if (!isInFuture()) mutation.mutate()
            }}
            className={`btn w-100 h-100  ${
              status == 0
                ? 'btn-secondary'
                : status == 1
                ? 'btn-success'
                : 'btn-danger'
            } ${isInFuture() ? 'text-black-50' : ''}
            ${isToday() ? 'border border-3 border-dark' : ''}`}
          >
            {date.getDate()}
          </button>
        </div>
      </div>
      {!last ? <div className='calendar-gap d-inline-block'></div> : <></>}
    </>
  )
}
