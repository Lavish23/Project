import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div>
      <div className=' bg-green-500 flex items-center justify-between p-10'>
        <h1>Logo</h1>
        <div className='flex gap-20'>
        <Link href="/About">About</Link>
        <Link href="/Courses">Courses</Link >
        <Link href="/Product">Product</Link>
        </div>
      </div>
    </div>
  )
}

export default Header