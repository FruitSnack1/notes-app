import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Calendar } from './Calendar'
import { Card } from './Card'
import { Score } from './Score'
import { Week } from './Week'

export const HabitDetail = ({ id }) => {
  const [habit, setHabit] = useState(false)

  const fetchHabit = async () => {
    const res = await fetch(`http://localhost:3001/habits/${id}`, {
      credentials: 'include',
    })
    const data = await res.json()
    setHabit(data)
  }

  useEffect(() => {
    console.log('fetching habit')
    fetchHabit()
  }, [])

  return (
    <>
      <Card>
        <div className='d-flex justify-content-between align-items-center '>
          <span className='fw-bold h1 '>{habit.title}</span>
          <div>
            <FontAwesomeIcon icon={faPen} className='text-black-50 me-3' />
            <FontAwesomeIcon icon={faTrash} className='text-danger' />
          </div>
        </div>
        <p className='mb-3'>
          Started on {new Date(habit.created).getDate()}/
          {new Date(habit.created).getMonth() + 1}/
          {new Date(habit.created).getFullYear()}
        </p>
        <h5 className='fw-bold'>Frequency</h5>
        <div className='w-50'>
          {habit ? <Week habit={habit} /> : <p>loading</p>}
        </div>
        <h5 className='fw-bold'>Calendar</h5>
        <div className='row'>
          <div className='col-6'>
            {habit ? <Calendar habit={habit} /> : <p>loading</p>}
          </div>
          <div className='col-6'>
            {habit ? <Score habit={habit} /> : <p>loading</p>}
          </div>
        </div>
      </Card>
    </>
  )
}
