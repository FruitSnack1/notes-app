import React from 'react'
import { Card } from './Card'
import Link from 'next/link'
import { Week } from './Week'

const Habit = ({ habit }) => {
  return (
    <>
      <Card className={'rounded-4 mb-3'}>
        <div className='row'>
          <div className='col-6'>
            <Link href={`/app/${habit._id}`}>
              <span className='mb-3 fw-bold h3'>{habit.title}</span>
            </Link>
            {/* <FontAwesomeIcon
              icon={faPen}
              className='text-black-50'
            ></FontAwesomeIcon> */}
            <Week habit={habit} />
          </div>
          <div className='col-5'>
            {/* <button className="btn btn-success">Done</button> */}
            <div className='h-100 d-flex align-items-end justify-content-end '>
              <div className='h-100 w-25 filler bg-secondary position-relative rounded-4 '>
                <div className='w-100 filler bg-success position-absolute bottom-0 '></div>
              </div>
            </div>
          </div>
          {/* <div className='col-1 d-flex justify-content-center align-items-center'>
            <FontAwesomeIcon icon={faEllipsis} />
          </div> */}
        </div>
      </Card>
    </>
  )
}

export default Habit
