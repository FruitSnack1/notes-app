import React, { useState } from 'react'

export const NewHabit = () => {
  const [title, setTitle] = useState('')

  const createHabit = async (e) => {
    e.preventDefault()
    const res = await fetch('http://localhost:3001/habits', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title }),
    })
  }

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
          />
        </div>

        <button
          type='submit'
          className='btn btn-primary text-white'
          onClick={createHabit}
        >
          Create habit
        </button>
      </form>
    </>
  )
}
