import React from 'react'
import Image from 'next/image';

function Header() {
  return (
   <>
    {/* Hero section */}
    <section className="flex justify-between items-center bg-gray-100 ml-24 mr-24 px-24 py-20">
        {/* Left side Section */}
        <div>
          <span className="uppercase text-xs text-gray-500 tracking-widest">
            Welcome to charity
          </span>
          <h1 className="text-5xl font-semibold text-gray-800 mt-4">
            Best Furniture <br />
            Collection For Your <br />
            Interior.
          </h1>
          <button className="mt-6 bg-[#029FAE] text-white py-3 px-6 rounded hover:bg-teal-500">
            Shop Now →
          </button>
        </div>

        {/* Right side Section */}
        <div className="relative">
          <Image src="/forheader.png" alt="Chair" width={400} height={400} className="object-contain" />
         
        </div>
      </section>


   </>

)
}

export default Header;



















