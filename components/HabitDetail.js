import React, { useEffect } from 'react'

export const HabitDetail = ({ id }) => {
  const fetchHabit = async () => {
    fetch('http://localhost:3001/habits')
  }

  return <div>HabitDetail {id}</div>
}
