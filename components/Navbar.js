import Link from 'next/link'
import React from 'react'

export const Navbar = () => {
  return (
    <nav className='col-md-2 d-none d-md-block sidebar'>
      <div className='sidebar-sticky'>
        <ul className='nav flex-column'>
          <li className='nav-item'>
            <Link href={'/app'}>Home</Link>
          </li>
          <li className='nav-item'>
            <Link href={'/app/settings'}>Settings</Link>
          </li>
          <li className='nav-item'>
            <Link href={'/app/trash'}>Trash</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
