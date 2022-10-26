import { useMutation, useQueryClient } from '@tanstack/react-query'
import React, { useState } from 'react'
import { updateFrequency } from '../api/habit.api'

export const Weekday = ({ last, day, habit }) => {
  const [enabled, setEnabled] = useState(
    habit?.frequency[day.toLowerCase()]
      ? habit.frequency[day.toLowerCase()]
      : false
  )

  const queryClient = useQueryClient()

  const mutation = useMutation(
    () =>
      updateFrequency(habit._id, {
        frequency: {
          [day.toLowerCase()]: !enabled,
        },
      }),
    {
      onSuccess: () => {
        setEnabled(!enabled)
        queryClient.invalidateQueries(['currentHabit'])
      },
    }
  )

  return (
    <>
      <div className='d-inline-block position-relative calendar-day mb-0'>
        <div className='mt-100'></div>
        <div className='position-absolute  top-0 bottom-0 start-0 end-0'>
          <button
            onClick={mutation.mutate}
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
