import React, { useState } from 'react'

export const Score = ({ habit }) => {
  const days = ['mo', 'tu', 'we', 'th', 'fr', 'sa', 'su']

  const getDays = () => {
    return Math.ceil(
      (new Date() - new Date(habit.created)) / (1000 * 3600 * 24)
    )
  }

  const getDoneDays = () => {
    let d = 0
    for (let i = 0; i < getDays(); i++) {
      const dayName = (new Date(habit.created).getDay() + i) % 7
      if (habit.frequency[days[dayName]]) d++
    }
    return d
  }

  const getScore = () => {
    const doneCount = 0
    habit.entries.forEach((e) => {
      const dayName = days[new Date(e.date).getDay()]
      if (
        e.status == 1 &&
        habit.frequency[dayName] &&
        new Date(e.date) >= new Date(habit.created)
      ) {
        doneCount++
      }
    })
    return doneCount
  }

  return (
    <>
      <div>Score</div>
      <div>{(getScore() * 100) / getDoneDays()}%</div>
    </>
  )
}
