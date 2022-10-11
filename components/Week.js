import React, { useState } from 'react'
import { Weekday } from './Weekday'

export const Week = ({ habit }) => {
  const [enabled, setEnabled] = useState(new Array(7).fill(false))
  const days = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']

  const changeState = (index) => {
    console.log('changing state')
    let newArray = enabled
    newArray[index] = !newArray[index]
    console.log(newArray)
    setEnabled(newArray)
  }

  return (
    <div>
      {enabled.map((e, i) => (
        <Weekday
          key={i}
          last={i == days.length - 1}
          day={days[i]}
          index={i}
          changeState={changeState}
          state={e}
        />
      ))}
    </div>
  )
}
