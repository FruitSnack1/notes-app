import Link from 'next/link'
import { useRouter } from 'next/router'
import { isAuthenticated, unauthenticateUser } from '../auth/auth'

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
    <div>
      <nav className='navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0'>
        <Link href={'/'}>
          <a className='navbar-brand col-sm-3 col-md-2 mr-0'>Good Habits</a>
        </Link>

        <ul className='navbar-nav px-3'>
          <li className='nav-item text-nowrap'>
            {isAuthenticated() ? (
              <a onClick={logOut} className='nav-link'>
                Sign out
              </a>
            ) : (
              <button onClick={logIn} className='btn btn-light'>
                Login
              </button>
            )}
          </li>
        </ul>
      </nav>

      {children}
    </div>
  )
}
