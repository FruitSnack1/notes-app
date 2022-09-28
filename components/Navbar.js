import Link from 'next/link'
import React from 'react'

export const Navbar = () => {
  return (
    <nav className='col-md-2 d-none d-md-block sidebar h-100 bg-secondary'>
      <div className='sidebar-sticky'>
        <ul className='nav flex-column'>
          <li className='nav-item'>
            <a className='nav-link'>
              <Link href={'/app'}>Home</Link>
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link'>
              <Link href={'/app/settings'}>Settings</Link>
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link'>
              <Link href={'/app/trash'}>Trash</Link>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
