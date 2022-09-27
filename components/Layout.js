import { Navbar } from './Navbar'

export default function Layout({ children }) {
  return (
    <div>
      <nav className='navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0'>
        <a className='navbar-brand col-sm-3 col-md-2 mr-0' href='#'>
          Company name
        </a>

        <ul className='navbar-nav px-3'>
          <li className='nav-item text-nowrap'>
            <a className='nav-link' href='#'>
              Sign out
            </a>
          </li>
        </ul>
      </nav>

      <div className='container-fluid'>
        <div className='row'>
          <Navbar />

          <main
            role='main'
            className='col-md-9 ml-sm-auto col-lg-10 pt-3 px-4 bg-secondary'
          ></main>
        </div>
      </div>
    </div>
  )
}
