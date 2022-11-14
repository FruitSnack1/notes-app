import { useQuery } from '@tanstack/react-query'
import { getHabits } from '../../api/habit.api'
import { Habit } from './Habit'

export const HabitList = () => {
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
