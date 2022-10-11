import React from 'react'

export const EmptyCalendarDay = ({ last }) => {
  return (
    <>
      <div className='d-inline-block position-relative calendar-day '>
        <div className='mt-100'></div>
        <div className='position-absolute  top-0 bottom-0 start-0 end-0'></div>
      </div>
      {!last ? <div className='calendar-gap d-inline-block'></div> : <></>}
    </>
  )
}
