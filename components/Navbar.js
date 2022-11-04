import { faCog, faHome, faTrash } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import React from 'react'
import { NavItem } from './NavItem'

export const Navbar = () => {
  return (
    <nav className='col-md-2 d-none d-md-block sidebar  border-end v100 pt-4 pe-4'>
      <div className='sidebar-sticky '>
        <ul className='nav flex-column'>
          <li className='nav-item'>
            <NavItem href={'/app'} name={'Home'} icon={faHome} />
          </li>
          <li className='nav-item'>
            <NavItem href={'/app/settings'} name={'Settings'} icon={faCog} />
          </li>
          <li className='nav-item'>
            <NavItem href={'/app/trash'} name={'Trash'} icon={faTrash} />
          </li>
        </ul>
      </div>
    </nav>
  )
}
