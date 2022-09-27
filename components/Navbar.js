import React from 'react'

export const Navbar = () => {
  return (
    <nav className='col-md-2 d-none d-md-block sidebar'>
      <div className='sidebar-sticky'>
        <ul className='nav flex-column'>
          <li className='nav-item'>
            <a className='nav-link active' href='#'>
              <span data-feather='home'></span>
              Dashboard <span className='sr-only'>(current)</span>
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              <span data-feather='file'></span>
              Orders
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
