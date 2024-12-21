
import React from 'react'
import Image from 'next/image'

function Pro3() {
  return (
  <>
  
  
  
<section className='flex justify-between py-20 pr-20 '>

<div className="text-2xl pl-40 font-medium pt-7 ml-44 text-[#272343]">
      <h2 className="writing-mode-vertical">Explore new and popular styles</h2>
    </div>


  <Image src= '/Image (6).png' alt= 'not shown' width={1000} height={700} className='mr-8'/>

<div className="grid grid-cols-2 gap-3 mr-44 pr-44 ">
  {/* First Image */}
  <div>
    <Image
      src="/Image (7).png" 
      alt="not shown"
      width={500}
      height={500}
      className=""
    />
  </div>

  {/* Second Image */}
  <div>
    <Image
      src="/item-category-2.png"
      alt="not shown"
      width={200}
      height={200}
      className=""
    />
  </div>

  {/* Third Image */}
  <div>
    <Image
      src="/Image (4).png"
      alt="not shown"
      width={200}
      height={200}
      className=""
    />
  </div>

  {/* Fourth Image */}
  <div>
    <Image
      src="/Image (4).png"
      alt="not shown"
      width={200}
      height={200}
      className=""
    />
  </div>
</div>



</section>

</>
  )
}

export default Pro3