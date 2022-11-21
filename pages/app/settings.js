import { useSession } from 'next-auth/react'
import { useState } from 'react'
import { updateUser } from '../../api/user.api'
import { AppLayout } from '../../layouts/AppLayout'
import RootLayout from '../../layouts/RootLayout'

export default function Settings() {
  const session = useSession()
  console.log(session)

  const [username, setUsername] = useState('')

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
            value={username}
            onChange={({ target }) => setUsername(target.value)}
          />
        </div>
        <button
          type='submit'
          className='btn btn-primary text-white '
          onClick={async (e) => {
            e.preventDefault()
            const { data } = await updateUser({ username })
            session.data.user.name = data.username
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
