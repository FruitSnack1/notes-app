import React from 'react'
import { Card } from './Card'
import Link from 'next/link'
import { Week } from './Week'
import { Score } from './Score'

const Habit = ({ habit }) => {
  return (
    <>
      <Card className={'rounded-4 mb-4'}>
        <div className='row'>
          <div className='col-6'>
            <Link href={`/app/${habit._id}`}>
              <h3 className='mb-3 fw-bold h3'>{habit.title}</h3>
            </Link>

            <Week habit={habit} />
          </div>
          <div className='col-6 d-flex justify-content-end'>
            <Score habit={habit} />
          </div>
        </div>
      </Card>
    </>
  )
}

export default Habit
