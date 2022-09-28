import { useRouter } from 'next/router'
import { unauthenticateUser } from '../auth/auth'

export default function Layout({ children }) {
  const router = useRouter()
  const logOut = () => {
    unauthenticateUser()
    router.push('/login')
  }
  return (
    <div>
      <nav className='navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0'>
        <a className='navbar-brand col-sm-3 col-md-2 mr-0'>Good Habits</a>

        <ul className='navbar-nav px-3'>
          <li className='nav-item text-nowrap'>
            <a onClick={logOut} className='nav-link'>
              Sign out
            </a>
          </li>
        </ul>
      </nav>

      {children}
    </div>
  )
}
