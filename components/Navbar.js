import Link from 'next/link'
import React from 'react'

export const Navbar = () => {
  return (
    <nav className='col-md-2 d-none d-md-block sidebar h-100 '>
      <div className='sidebar-sticky'>
        <ul className='nav flex-column'>
          <li className='nav-item'>
            <Link href={'/app'}>
              <a className='nav-link'>Home</a>
            </Link>
          </li>
          <li className='nav-item'>
            <Link href={'/app/settings'}>
              <a className='nav-link'>Settings</a>
            </Link>
          </li>
          <li className='nav-item'>
            <Link href={'/app/trash'}>
              <a className='nav-link'>Trash</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
