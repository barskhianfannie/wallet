import React from 'react';

import logo from '../public/puzzle.png'
import Image from 'next/image';

function Logo() {
  return (
    <div className='flex justify-center mt-11'> 
    <Image alt='logo' src={logo} height={100} width={100}/>
    <span className='font-bold self-center text-8xl ml-3'>Fracty Wallet</span>
    </div>
  )
}

export default Logo;