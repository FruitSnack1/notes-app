import React from 'react'
import { Card } from './Card'

const Habit = ({ habit }) => {
  return (
    <>
      <Card className={'rounded-4 mb-3'}>
        <div className="row">
          <div className="col-6">
            <h3>{habit.title}</h3>
            <div className="d-flex justify-content-start align-items-center ">
              <button className="btn btn-secondary me-2">M</button>
              <button className="btn btn-secondary me-2">T</button>
              <button className="btn btn-secondary me-2">W</button>
              <button className="btn btn-secondary me-2">T</button>
              <button className="btn btn-secondary me-2">F</button>
              <button className="btn btn-primary text-white me-2">S</button>
              <button className="btn btn-primary text-white me-2">S</button>
            </div>
          </div>
          <div className="col-6">
            {/* <button className="btn btn-success">Done</button> */}
            <div className="h-100 d-flex align-items-end justify-content-end ">
              <div className="h-100 w-25 filler bg-secondary position-relative rounded-4 ">
                <div className="w-100 filler bg-success position-absolute bottom-0 "></div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </>
  )
}

export default Habit
