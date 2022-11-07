import { useMutation, useQueryClient } from '@tanstack/react-query'
import React, { useState } from 'react'
import { postHabit } from '../api/habit.api'
import { Card } from './Card'

export const NewHabit = () => {
  const [title, setTitle] = useState('')
  const [visible, setVisible] = useState(false)

  const queryClient = useQueryClient()

  const mutation = useMutation(() => postHabit({ title }), {
    onSuccess: () => {
      queryClient.invalidateQueries(['habits'])
      setTitle('')
      setVisible(false)
    },
  })

  return (
    <>
      <div
        className={`position-absolute h-100 w-100 top-0 start-0 backdrop ${
          visible ? 'visible' : 'invisible'
        }`}
      >
        <Card className='ms-auto me-auto w-50 mt-5'>
          <form>
            <h3 className='fw-bold'>Create new Habit</h3>
            <div className='mb-3'>
              <label className='form-label'>Habit title</label>
              <input
                type='text'
                className='form-control'
                id='exampleInputEmail1'
                placeholder='Drink water...'
                aria-describedby='emailHelp'
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
            </div>
            <div className='d-flex justify-content-end'>
              <button
                className='btn btn-secondary fw-bold me-3'
                onClick={(e) => {
                  e.preventDefault()
                  setVisible(false)
                  setTitle('')
                }}
              >
                Cancel
              </button>
              <button
                type='submit'
                className='btn btn-primary text-white '
                onClick={(e) => {
                  e.preventDefault()
                  mutation.mutate()
                }}
              >
                Create habit
              </button>
            </div>
          </form>
        </Card>
      </div>
      <div className='d-grid gap-2'>
        <btn
          onClick={(e) => {
            setVisible(true)
          }}
          className='btn btn-primary btn-block text-white fw-bold p-3 rounded-4 shadow'
        >
          Add new habit
        </btn>
      </div>
    </>
  )
}
