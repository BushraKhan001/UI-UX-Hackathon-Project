import React from 'react'
import Image from 'next/image';

function Middle() {
  return (



<>
<section>

<div className="flex justify-between items-center bg-gray-100 p-4 ">

      {/* Left Section: Logo */}
<div className='pl-20'>
<div className="flex items-center gap-2 pl-20 ">
        <Image src="/Logo-Icon.png" width={38} height={38} alt="Logo"/>
        <span className="text-3xl font-normal text-gray-800 pl-15">Comforty</span>
      </div>
</div>
    

      {/* Right Section: Cart */}

      <div className='pr-20'>
      <div className="flex items-center gap-2 bg-white p-2 px-5 rounded-lg shadow-md ">
        <Image src="/cart-Icon.png" alt="Cart" width={24} height={24} />
        <span className="text-gray-800">Cart</span>
        <div className="flex items-center bg-teal-600 text-sm w-5 h-5 justify-center rounded-full text-white">
          2
        </div>
      </div>
      </div>
     
    </div>


</section>


  
  </>


  )
}

export default Middle;