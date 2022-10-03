import React from 'react'
import Link from 'next/link'

const Nav = () => {
  return (
    <nav>
      <ul className='flex flex-row gap-9 text-gray-600 dark:text-dm-accent'>
        <li>
          <Link href='#'>
            <a>Features</a>
          </Link>
        </li>
        <li>
          <Link href='#'>
            <a>Testimonials</a>
          </Link>
        </li>
        <li>
          <Link href='#'>
            <a>Pricing</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav