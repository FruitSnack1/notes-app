import {
  faCog,
  faHome,
  faRightFromBracket,
  faTrash,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { signOut } from 'next-auth/react'
import React from 'react'
import { NavItem } from './NavItem'

export const Navbar = () => {
  return (
    <nav className='col-md-2 d-none d-md-block sidebar  border-end v100 py-4 pe-4'>
      <div className='sidebar-sticky '>
        <ul className='nav flex-column j '>
          <li className='nav-item'>
            <NavItem href={'/app'} name={'Home'} icon={faHome} />
          </li>
          <li className='nav-item'>
            <NavItem href={'/app/settings'} name={'Settings'} icon={faCog} />
          </li>
          <li className='nav-item'>
            <NavItem href={'/app/trash'} name={'Trash'} icon={faTrash} />
          </li>
          <li className='nav-item'>
            <button
              onClick={() => {
                signOut()
              }}
              className='btn btn-dark fw-bold ps-3 w-100 text-start'
            >
              <FontAwesomeIcon
                icon={faRightFromBracket}
                className='text-white me-3'
              />
              Sign out
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}
