import React from 'react'
import { Card } from './Card'
import Link from 'next/link'
import { Week } from './Week'
import { Score } from './Score'

const Habit = ({ habit }) => {
  return (
    <>
      <Link href={`/app/${habit._id}`}>
        <div className='position-relative'>
          <div className='position-absolute w-100 h-100 top-0 left-0 habit-link'></div>
          <Card className={'rounded-4 mb-4'}>
            <div className='row'>
              <div className='col-6'>
                <h3 className='mb-3 fw-bold h3'>{habit.title}</h3>

                <Week habit={habit} />
              </div>
              <div className='col-6 d-flex justify-content-end'>
                <Score habit={habit} />
              </div>
            </div>
          </Card>
        </div>
      </Link>
    </>
  )
}

export default Habit
