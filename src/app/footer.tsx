import React from 'react'
import Image from 'next/image'



function Footer() {
  return (
    

<>

{/* Footer Section */}

<footer className="w-full bg-white py-12 border-t p-0">
    <div className="max-w-6xl mx-auto px-4 md:px-16 grid grid-cols-1 md:grid-cols-4 gap-8">
      {/* Footer Logo and About section*/}
        <div>
        <div className="flex items-center gap-2">
          <Image src="/Logo-Icon.png" alt="Logo" className="w-6 h-6" />
          <h3 className="font-semibold text-xl text-[#272343]">Comforty</h3>
            </div>
              <p className="mt-4 text-sm text-gray-500 leading-relaxed">
              Vivamus tristique odio sit amet velit
              <p> semper, eu posuere turpis inter.</p>
              <p>Cras egestas purus</p>
                
              </p>
              <div className="flex gap-4 mt-4">
                <a href="#" aria-label="" className="text-gray-500 hover:text-gray-800">
                  
                  <i><Image src="/Group 44.png" alt="" className="h-5" /> </i>
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-800">
                  <i>
                  
                  <Image src="/Group (3).png" alt="" className="h-4" /></i>
                </a>
                <a href="#"  className="text-gray-500 hover:text-gray-800">

                  <i ><Image src="/Group.png" alt="" className="h-4"/></i>
                </a>

                <a href="#"  className="text-gray-500 hover:text-gray-800">
                  <i > 
                  <Image src="/Group (1).png" alt="" className="h-4"/></i>
                </a>

                <a href="#"  className="text-gray-500 hover:text-gray-800">
                  <i> 
                  <Image src="/Group (2).png" alt="" className="h-4"/></i>
                </a>
              </div>
            </div>
  
            {/* //Category  */}
            <div>
              <h4 className="font-semibold text-base text-[#9A9CAA] mb-4">Category</h4>
              <ul className="text-gray-500 text-sm space-y-2">
                <li><a href="#" className="hover:text-gray-800">Sofa</a></li>
                <li><a href="#" className="hover:text-gray-800">Armchair</a></li>
                <li><a href="#" className="hover:text-gray-800">Wing Chair</a></li>
                <li><a href="#" className="hover:text-gray-800">Desk Chair</a></li>
                <li><a href="#" className="hover:text-gray-800">Outdoor Chair</a></li>
                <li><a href="#" className="hover:text-gray-800">Park Bench</a></li>
              </ul>
            </div>
  
            {/* //Support */}
            <div>
              <h4 className="font-semibold text-base text-[#9A9CAA] mb-4">Support</h4>
              <ul className="text-gray-500 text-sm space-y-2">
                <li><a href="#" className="hover:text-gray-800">Help & Support</a></li>
                <li><a href="#" className="hover:text-gray-800">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-gray-800">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-gray-800">FAQs</a></li>
              </ul>
            </div>
  
            {/* //Newsletter */}
            <div>
              <h4 className="font-semibold text-base text-[#9A9CAA] mb-4">Newsletter</h4>
              
              <div className="flex items-center gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-96 px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring focus:ring-gray-300"
                />
                <button className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded text-sm w-full">
                  Subscribe
                </button>
                
              </div>
              <p className="text-gray-500 text-sm mb-4 mt-3">
               Lorem ipsum dolor sit amet 
              <p>consectetur adipisicing.</p>
              </p>
              
            </div>
          </div>
  
          {/* Copright*/}
          <div className="border-t border-gray-200 mt-8 pt-6 text-center text-sm text-gray-500">
            
            <div className="flex justify-center space-x-2">
              <span>&copy; 2021 Comforty</span>
              <span>&middot;</span>
              <span>Designed & Developed by <a href="#" className="text-teal-500 hover:underline">Bushra Khan</a></span>
            </div>

            <div className="mt-2 flex justify-center space-x-4">

            <Image src="/Group 11.png" alt="" className="h-5"/>
            <Image src="/Group 12.png" alt="" className="h-4"/>
            <Image src="/Vector (1).png" alt="" className="h-4"/>
            <Image src="/Union.png" alt="" className="h-4"/>

            </div>
          </div>
        </footer>
</>


  )
}

export default Footer