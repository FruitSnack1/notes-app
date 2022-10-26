import { useMutation, useQueryClient } from '@tanstack/react-query'
import React, { useState } from 'react'
import { postHabit } from '../api/habit.api'

export const NewHabit = () => {
  const [title, setTitle] = useState('')

  const queryClient = useQueryClient()

  const mutation = useMutation(() => postHabit({ title }), {
    onSuccess: () => {
      queryClient.invalidateQueries(['habits'])
      setTitle('')
    },
  })

  return (
    <>
      <form>
        <h3>Create new Habit</h3>
        <div className='mb-3'>
          <label className='form-label'>Habit title</label>
          <input
            type='text'
            className='form-control'
            id='exampleInputEmail1'
            aria-describedby='emailHelp'
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>

        <button
          type='submit'
          className='btn btn-primary text-white'
          onClick={(e) => {
            e.preventDefault()
            mutation.mutate()
          }}
        >
          Create habit
        </button>
      </form>
    </>
  )
}
