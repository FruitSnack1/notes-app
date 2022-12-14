import React, { useState } from 'react'

export const Score = ({ habit }) => {
  const days = ['mo', 'tu', 'we', 'th', 'fr', 'sa', 'su']

  const getDaysSinceCreated = () => {
    return (
      Math.ceil((new Date() - new Date(habit.created)) / (1000 * 3600 * 24)) + 1
    )
  }

  const getWantedDays = () => {
    let daysWanted = 0
    for (let i = 0; i <= getDaysSinceCreated(); i++) {
      const dayName =
        (new Date(habit.created).getUTCDay() -
          (new Date(habit.created).getUTCDay() == 0 ? -6 : 1) +
          i) %
        7
      if (habit.frequency[days[dayName]]) {
        daysWanted++
      }
    }
    return daysWanted
  }

  const getDoneDays = () => {
    const doneCount = 0
    habit.entries.forEach((e) => {
      const dayName =
        new Date(e.date).getDay() - (new Date(e.date).getDay() == 0 ? -6 : 1)
      if (
        e.status == 1 &&
        habit.frequency[days[dayName]] &&
        new Date(e.date) >=
          new Date(habit.created).setDate(new Date(habit.created).getDate() - 1)
      ) {
        doneCount++
      }
    })
    return doneCount
  }

  return (
    <>
      <div className='d-inline-block position-relative w-25 bg-dark'>
        <div className='mt-100'></div>
        <div
          style={{
            height: `${
              (getDoneDays() * 100) / (getWantedDays() ? getWantedDays() : 1)
            }%`,
          }}
          className='position-absolute  bottom-0 start-0 end-0 w-100 score bg-success'
        ></div>
        <div className='position-absolute  top-0 bottom-0 start-0 end-0  text-white d-flex justify-content-center align-items-center fw-bold'>
          {(getDoneDays() * 100) / (getWantedDays() ? getWantedDays() : 1)}%
        </div>
      </div>
    </>
  )
}
