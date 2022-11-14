import { useMutation, useQueryClient } from '@tanstack/react-query'
import React, { useState } from 'react'
import { postHabit } from '../../api/habit.api'
import { Card } from '../Card'
import { Modal } from '../Modal'

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
      <Modal visible={visible}>
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
                  document.body.style.overflow = 'inherit'
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
                  document.body.style.overflow = 'inherit'
                }}
              >
                Create habit
              </button>
            </div>
          </form>
        </Card>
      </Modal>
      <div className='d-grid gap-2'>
        <button
          onClick={(e) => {
            setVisible(true)
            document.body.style.overflow = 'hidden'
          }}
          className='btn btn-primary btn-block text-white fw-bold p-3 rounded-4 shadow'
        >
          Add new habit
        </button>
      </div>
    </>
  )
}
