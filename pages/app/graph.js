import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { getHabits } from '../../api/habit.api'
import { AppLayout } from '../../layouts/AppLayout'
import RootLayout from '../../layouts/RootLayout'

export default function Graph() {
  const { isLoading, error, data } = useQuery(['habits'], getHabits)

  const [year, setYear] = useState()
  const [month, setMonth] = useState()

  useEffect(() => {
    const date = new Date()
    setYear(date.getFullYear())
    setMonth(date.getMonth())
  }, [])

  const numberOfDays = () => new Date(year, month, 0).getDate()

  const isWeekend = (day) => {
    return (
      new Date(year, month, day).getDay() == 6 ||
      new Date(year, month, day).getDay() == 0
    )
  }

  const isDone = (habit, day) => {
    console.log(habit)
    const { entries } = habit
    const done = false
    entries.forEach((e) => {
      const date = new Date(e.date)
      if (
        date.getFullYear() == year &&
        date.getMonth() == month &&
        date.getDate() == day &&
        e.status == 1
      )
        done = true
    })
    return done
  }

  const isInFuture = (day) => {
    const today = new Date()
    const date = new Date(year, month, day)
    if (today.getFullYear() > date.getFullYear()) return false
    if (today.getMonth() > date.getMonth()) return false
    if (today.getDate() >= date.getDate()) return false
    return true
  }

  return isLoading ? (
    <p>loading</p>
  ) : (
    <>
      <h3 className='fw-bold'>Graph</h3>
      <table>
        {data.data.map((habit, i) => (
          <>
            <tr key={i}>
              <td className='fw-bold pe-3 graph-habit-title'>{habit.title}</td>
              {new Array(numberOfDays()).fill(0).map((e, i) => (
                <td className=' graph-cell' key={i}>
                  <div
                    className={`${
                      isDone(habit, i + 1) ? 'bg-success' : 'bg-secondary'
                    } w-100 h-100 rounded`}
                  ></div>
                </td>
              ))}
            </tr>
          </>
        ))}
        <tr>
          <td></td>
          {new Array(numberOfDays()).fill(0).map((e, i) => (
            <td className={` text-center graph-cell rounded`} key={i}>
              <div
                className={`${
                  isWeekend(i + 1) ? 'bg-primary bg-opacity-50 text-white' : ''
                } rounded ${isInFuture(i + 1) ? 'text-black-50' : ''}`}
              >
                {i + 1}
              </div>
            </td>
          ))}
        </tr>
      </table>
    </>
  )
}

Graph.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      <AppLayout>{page}</AppLayout>
    </RootLayout>
  )
}

export const GraphRow = () => {
  return <></>
}
