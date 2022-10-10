import React from 'react'

export const EmptyCalendarDay = () => {
  return (
    <>
      <div className='d-inline-block position-relative calendar-day '>
        <div className='mt-100'></div>
        <div className='position-absolute  top-0 bottom-0 start-0 end-0'>
          <button className='btn btn-white'></button>
        </div>
      </div>
      <div className='calendar-gap d-inline-block'></div>
    </>
  )
}
