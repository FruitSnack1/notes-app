import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { deleteHabit, getHabit } from '../api/habit.api'
import { Calendar } from './Calendar'
import { Card } from './Card'
import { Modal } from './Modal'
import { Score } from './Score'
import { Week } from './Week'

export const HabitDetail = ({ id }) => {
  const router = useRouter()
  const [deleteModal, setDeleteModal] = useState(false)

  const { isLoading, error, data } = useQuery(['currentHabit'], () =>
    getHabit(id)
  )

  if (isLoading) return <p>Loading</p>
  if (error) return <p>{error.message}</p>

  return (
    <>
      <Modal visible={deleteModal}>
        <Card className='ms-auto me-auto w-50 mt-5'>
          <h3 className='fw-bold'>Delete habit {`"${data.data.title}"`}?</h3>

          <div className='d-flex justify-content-end'>
            <button
              className='btn btn-secondary fw-bold me-3'
              onClick={() => {
                document.body.style.overflow = 'inherit'
                setDeleteModal(false)
              }}
            >
              Cancel
            </button>
            <button
              className='btn btn-danger text-white '
              onClick={async () => {
                document.body.style.overflow = 'inherit'
                setDeleteModal(false)
                await deleteHabit(id)
                router.push('/app')
              }}
            >
              Delete habit
            </button>
          </div>
        </Card>
      </Modal>
      <div className='d-flex justify-content-between align-items-center '>
        <span className='fw-bold h1 '>{data.data.title}</span>
        <div>
          <FontAwesomeIcon icon={faPen} className='text-black-50 me-3' />
          <FontAwesomeIcon
            onClick={() => {
              setDeleteModal(true)
              document.body.style.overflow = 'hidden'
            }}
            icon={faTrash}
            className='text-danger'
          />
        </div>
      </div>
      <p className='mb-3'>
        Started on {new Date(data.data.created).getDate()}/
        {new Date(data.data.created).getMonth() + 1}/
        {new Date(data.data.created).getFullYear()}
      </p>
      <h5 className='fw-bold'>Frequency</h5>
      <div className='w-50'>
        {data.data ? <Week habit={data.data} /> : <p>loading</p>}
      </div>
      <h5 className='fw-bold'>Calendar</h5>
      <div className='row'>
        <div className='col-6'>
          {data.data ? <Calendar habit={data.data} /> : <p>loading</p>}
        </div>
        <div className='col-6'>
          {data.data ? <Score habit={data.data} /> : <p>loading</p>}
        </div>
      </div>
    </>
  )
}
