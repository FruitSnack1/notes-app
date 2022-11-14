import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { deleteHabit, editHabit, getHabit } from '../api/habit.api'
import { Calendar } from './Calendar'
import { Card } from './Card'
import { Modal } from './Modal'
import { Score } from './Score'
import { Week } from './Week'

export const HabitDetail = ({ id }) => {
  const router = useRouter()
  const queryClient = useQueryClient()
  const [deleteModal, setDeleteModal] = useState(false)
  const [editMode, setEditMode] = useState(false)
  const [title, setTitle] = useState()

  const { isLoading, error, data } = useQuery(['currentHabit'], () =>
    getHabit(id)
  )

  const mutation = useMutation(
    () =>
      editHabit(id, {
        title,
      }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['currentHabit'] })
        setEditMode(false)
      },
    }
  )

  const handleKeyEvent = (e) => {
    if (e.key === 'Enter') mutation.mutate()
  }

  if (isLoading) return <p>Loading</p>
  if (error) return <p>{error.message}</p>

  return (
    <>
      <div className='d-flex justify-content-between align-items-center '>
        <div className='d-flex align-items-start'>
          {editMode ? (
            <input
              className='edit-input'
              type='text'
              value={title}
              onChange={({ target }) => setTitle(target.value)}
              autoFocus
              onKeyDown={handleKeyEvent}
            />
          ) : (
            <span className='fw-bold h1 '>{data.data.title}</span>
          )}
          {editMode ? (
            <></>
          ) : (
            <FontAwesomeIcon
              icon={faPen}
              className='text-black-50 mt-1 ms-1 edit-button'
              onClick={() => {
                setEditMode(true)
                setTitle(data.data.title)
              }}
            />
          )}
        </div>
        <FontAwesomeIcon
          onClick={() => {
            setDeleteModal(true)
            document.body.style.overflow = 'hidden'
          }}
          icon={faTrash}
          className='text-danger'
        />
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
      <h5 className='fw-bold mt-3'>Calendar</h5>
      <div className='row'>
        <div className='col-6'>
          {data.data ? <Calendar habit={data.data} /> : <p>loading</p>}
        </div>
        <div className='col-6'>
          {data.data ? <Score habit={data.data} /> : <p>loading</p>}
        </div>
      </div>
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
    </>
  )
}
