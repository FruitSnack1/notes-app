import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { Footer } from '../components/Footer'
import { useSession } from 'next-auth/react'

export default function Layout({ children, token, data }) {
  const session = useSession()

  return (
    <>
      <div>
        <nav
          className='navbar sticky-top flex-md-nowrap p-3 shadow-sm'
          style={{ height: '70px' }}
        >
          <div className='container'>
            <Link href={'/'}>
              <h3 className='fw-bold m-0'>Good Habits</h3>
            </Link>
            <ul className='navbar-nav px-3'>
              <li className='nav-item '>
                {session.status === 'authenticated' ? (
                  <Link href={'/app/settings'}>
                    <button className='btn btn-secondary fw-bold'>
                      <FontAwesomeIcon
                        icon={faUser}
                        className='text-black-50 me-3'
                      />
                      {session.data.user.username}
                    </button>
                  </Link>
                ) : (
                  <>
                    <Link href='/login'>
                      <button className='btn fw-bold me-3'>Login</button>
                    </Link>
                    <Link href='/register'>
                      <button className='btn btn-primary text-white fw-bold'>
                        Sign up
                      </button>
                    </Link>
                  </>
                )}
              </li>
            </ul>
          </div>
        </nav>
      </div>
      {children}
      <Footer />
    </>
  )
}
