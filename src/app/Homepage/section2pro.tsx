import React from 'react'
import Image from 'next/image'

function Pro2() {
  return (
    <>


    <h2 className='font-bold text-2xl pl-24 items-center pt-5 pb-5 text-[#272343]'>Top Categories</h2>
  
<section className='flex justify-between gap-10 px-20 items-center '>



<div className='relative'>
  <Image src= '/Image (10).png' alt= 'not shown' width={400} height={400}/>
  <div className=" absolute bottom-0 left-0 w-full bg-opacity-50 bg-black text-[#FFFFFF] text-xs  px-4 py-2">
    <h2 className='font-bold text-lg'>Wing Chair</h2>
    <span className='text-sm text-[#FFFFFF]'>3,854 Products</span>
  </div>
</div>



<div className='relative'>
  <Image src= '/Image (9).png' alt= 'not shown' width={400} height={400}/>
 <div className=" absolute bottom-0 left-0 w-full bg-opacity-50 bg-black text-[#FFFFFF] text-xs  px-4 py-2">
    <h2 className='font-bold text-lg'>Wooden Chair</h2>
    <span className='text-sm text-[#FFFFFF]'>140 Products</span>
  </div>
  </div>
  

<div className='relative'>
  <Image src= '/Image (8).png' alt= 'not shown' width={400} height={400}/>
  <div className=" absolute bottom-0 left-0 w-full bg-opacity-50 bg-black text-[#FFFFFF] text-xs  px-4 py-2">
    <h2 className='font-bold text-lg'>Desk Chair</h2>
    <span className='text-sm text-[#FFFFFF]'>354 Products</span>
  </div>
  </div>
</section>



    </>
  )
}

export default Pro2