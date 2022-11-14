import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

export const NavItem = ({ href, name, icon }) => {
  const router = useRouter()

  return (
    <Link href={href}>
      <a
        className={` ${
          router.pathname == href ? 'text-dark bg-secondary' : 'text-muted'
        } nav-link rounded fw-bold mb-2 `}
      >
        <FontAwesomeIcon className='me-3' icon={icon} />
        {name}
      </a>
    </Link>
  )
}
