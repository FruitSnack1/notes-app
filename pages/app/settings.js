import { useSession } from 'next-auth/react'
import { useState } from 'react'
import { AppLayout } from '../../layouts/AppLayout'
import RootLayout from '../../layouts/RootLayout'

export default function Settings() {
  const session = useSession()
  const [username, setUsername] = useState(session?.data?.user?.username)

  return (
    <div>
      <form>
        <h3 className='fw-bold'>Create new Habit</h3>
        <div className='mb-3'>
          <label className='form-label'>Username</label>
          <input
            type='text'
            className='form-control'
            id='exampleInputEmail1'
            aria-describedby='emailHelp'
            value={
              session.status === 'authenticated'
                ? session.data.user.username
                : ''
            }
          />
        </div>
        <button
          type='submit'
          className='btn btn-primary text-white '
          onClick={(e) => {
            e.preventDefault()
          }}
        >
          Update
        </button>
      </form>
    </div>
  )
}
Settings.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      <AppLayout>{page}</AppLayout>
    </RootLayout>
  )
}
