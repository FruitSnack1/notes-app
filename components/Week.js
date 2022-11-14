import { Weekday } from './Weekday'

export const Week = ({ habit }) => {
  const days = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']

  return (
    <div>
      {days.map((e, i) => (
        <Weekday
          key={i}
          last={i == days.length - 1}
          day={days[i]}
          habit={habit}
        />
      ))}
    </div>
  )
}
