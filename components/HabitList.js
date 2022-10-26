import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { getHabits } from '../api/habit.api'
import Habit from './Habit'

const HabitList = () => {
  const { isLoading, error, data } = useQuery(['habits'], getHabits)

  if (isLoading) return <p>Loading</p>

  if (error) return <p>{error.message}</p>

  return (
    <div>
      {data.data.map((habit, index) => (
        <Habit key={index} habit={habit}></Habit>
      ))}
    </div>
  )
}

export default HabitList
