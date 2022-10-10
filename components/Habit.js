import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Card } from './Card'
import { faEdit, faEllipsis, faPen } from '@fortawesome/free-solid-svg-icons'

const Habit = ({ habit }) => {
  return (
    <>
      <Card className={'rounded-4 mb-3'}>
        <div className='row'>
          <div className='col-6'>
            <span className='mb-3 fw-bold h3'>{habit.title}</span>
            {/* <FontAwesomeIcon
              icon={faPen}
              className='text-black-50'
            ></FontAwesomeIcon> */}
            <div className='d-flex justify-content-start align-items-center '>
              <button className='btn btn-secondary me-2'>Mo</button>
              <button className='btn btn-secondary me-2'>Tu</button>
              <button className='btn btn-secondary me-2'>We</button>
              <button className='btn btn-secondary me-2'>Th</button>
              <button className='btn btn-secondary me-2'>Fr</button>
              <button className='btn btn-primary text-white me-2'>Sa</button>
              <button className='btn btn-primary text-white me-2'>Su</button>
            </div>
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
