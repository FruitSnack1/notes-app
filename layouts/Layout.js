import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Cookies from 'js-cookie'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { isAuthenticated, unauthenticateUser } from '../auth/auth'
import { Footer } from '../components/Footer'
import cookie from 'cookie'
import { useSession } from 'next-auth/react'

export default function Layout({ children, token, data }) {
  const router = useRouter()

  const signOut = () => {
    Cookies.remove('token')
    router.push('/')
  }

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
                {!token ? (
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
                ) : (
                  <button
                    onClick={signOut}
                    className='btn btn-secondary fw-bold'
                  >
                    <FontAwesomeIcon
                      icon={faRightFromBracket}
                      className='text-black-50 me-3'
                    />
                    Sign out
                  </button>
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
