import React from 'react'
import { Card } from './Card'

const Habit = ({ habit }) => {
  return (
    <>
      <Card>
        <h3>{habit.title}</h3>
      </Card>
    </>
  )
}

export default Habit
