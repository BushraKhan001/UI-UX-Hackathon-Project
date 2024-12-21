import React from 'react'
import Image from 'next/image'

function Pro1() {
  return (

  <>
<section className='flex justify-between px-20 py-5 text-[#272343]'>

<div className='relative'>
<div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
    New
  </div>
<Image src="/Image (4).png" alt= "image not sHows" width={300} height={300}/>

<div className='p-2' >
<span className='flex justify-between'>
    Library Stool Chair
    <span><Image src="/cart-Icon.png" alt= "image not sHows" width={30} height={30} className='bg-gray-200'/></span> 
</span>
<span className='font-bold text-gray-800 '>20$</span>
</div>

</div>

<div className='relative'>
<div className="absolute top-2 left-2 bg-orange-400 text-white text-xs font-bold px-2 py-1 rounded">
    Sales
  </div>
<Image src="/Image (5).png" alt= "image not sHows" width={300} height={300}/>
<div className='p-2'>
<span className='flex justify-between'>
    Library Stool Chair
    <span><Image src="/cart-Icon.png" alt= "image not sHows" width={30} height={30} className='bg-gray-200'/></span> 
</span>
<span className='font-bold text-gray-800 '>20$</span>
</div>
</div>

<div>
<Image src="/Image (6).png" alt= "image not sHows" width={300} height={300}/>
<div className='p-2'>
<span className='flex justify-between'>
    Library Stool Chair
    <span className=''><Image src="/cart-Icon.png" alt= "image not sHows" width={30} height={30} className='bg-gray-200'/></span> 
</span>
<span className='font-bold text-gray-800 '>20$</span>
</div>

</div>

<div>
<Image src="/Image (7).png" alt= "image not sHows" width={300} height={300}/>
<div className='p-2'>
<span className='flex justify-between'>
    Library Stool Chair
    <span><Image src="/cart-Icon.png" alt= "image not sHows" width={30} height={30} className='bg-gray-200'/></span> 
</span>
<span className='font-bold text-gray-800 '>20$</span>
</div>

</div>
</section>


  </>  
  )
};

export default Pro1