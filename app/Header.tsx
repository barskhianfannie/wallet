import Link from 'next/link'
import React from 'react';

function Header() {
  return (
    <header className='p-2 bg-white flex justify-center m-1'>
      <Link href={'/'} className='font-semibold underline text-gray m-5 mb-0 hover:text-red-100'>Home</Link>
      <Link href={'/'} className='font-semibold underline text-gray m-5 mb-0 hover:text-red-100'>Connect</Link>
      <Link href={'/import'} className='font-semibold underline text-gray m-5 mb-0 hover:text-red-100'>Import</Link>
    </header>
  )
}

export default Header