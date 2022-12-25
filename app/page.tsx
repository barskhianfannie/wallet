import React from 'react';
import  Link  from 'next/link';


function Home(){
  return (
  <Link href={'/create'}  className='p-3 rounded-lg mt-7 bg-stone-400 hover:bg-stone-600 hover:text-white'>Create Wallet</Link>
  )
}

export default Home;
