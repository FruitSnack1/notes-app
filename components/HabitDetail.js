import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Calendar } from './Calendar'
import { Card } from './Card'
import { Week } from './Week'

export const HabitDetail = ({ id }) => {
  const [habit, setHabit] = useState([])

  const fetchHabit = async () => {
    const res = await fetch(`http://localhost:3001/habits/${id}`, {
      credentials: 'include',
    })
    const data = await res.json()
    setHabit(data)
  }

  useEffect(() => {
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
        <Week />
        <Calendar />
      </Card>
    </>
  )
}
