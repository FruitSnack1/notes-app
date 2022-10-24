import Link from 'next/link'
import { useRouter } from 'next/router'
import { isAuthenticated, unauthenticateUser } from '../auth/auth'
import { Footer } from '../components/Footer'

export default function Layout({ children }) {
  const router = useRouter()
  const logOut = () => {
    unauthenticateUser()
    router.push('/login')
  }
  const logIn = () => {
    router.push('/login')
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
                <Link href='/login'>
                  <button className='btn fw-bold me-3'>Login</button>
                </Link>
                <Link href='/register'>
                  <button className='btn btn-primary text-white fw-bold'>
                    Sign up
                  </button>
                </Link>
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
