import { useEffect, useState } from 'react'
import Habit from './Habit'

const HabitList = () => {
  const [habits, setHabits] = useState([])

  useEffect(() => {
    fetchHabits()
  }, [])

  const fetchHabits = async () => {
    const res = await fetch('http://localhost:3001/habits', {
      credentials: 'include',
    })
    const data = await res.json()
    if (res.status != 200) return
    setHabits(data)
  }

  return (
    <div>
      {habits.map((habit, index) => (
        <Habit key={index} habit={habit}></Habit>
      ))}
    </div>
  )
}

export default HabitList
