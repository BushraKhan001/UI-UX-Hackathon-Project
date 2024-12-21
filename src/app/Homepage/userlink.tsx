import Link from 'next/link';
import React from 'react'
  
function Linkly() {
  return (

<>
<div className='flex justify-between'>
  <div className ="pl-24">

  <ul className="hidden md:flex gap-x-10 px-6 pl-20 pt-4 pb-3 text-sm text-[#636270]">
            <li>
              <Link href="#" className="">Home</Link>
            </li>

            <li>
              <Link href="#" className="">Shop</Link>
            </li>

            <li>
              <Link href="#" className="">Product</Link>
            </li>

            <li>
              <Link href="#" className="">Pages</Link>
            </li>

            <li>
              <Link href="#" className="">About</Link>
            </li>
          </ul>

  </div>

          
      <span className='pr-20 pt-4 pb-3'><span className='text-sm text-[#636270]'>Contact: </span>0310 2030400</span>

</div>

<div className="border-b border-gray-200 mt-2" ></div>

</>


  )
}

export default Linkly;