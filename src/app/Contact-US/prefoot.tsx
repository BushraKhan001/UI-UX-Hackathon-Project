import Image from "next/image";





export default function Prefoot() {
    return (
      <div className="w-full bg-white">
        {/* Features Section */}
        <section className="w-full bg-gray-100 py-8 px-4 md:px-16 ">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 max-w-6xl mx-auto">
            {/* picture 1 */}
            <div className="flex items-center gap-4 text-center md:text-left">
            <Image src="/Group (4).png" alt="Imahe is nt shown" className="w-10 h-10"/> 
              <div>
                <h3 className="font-semibold text-gray-800 text-lg">High Quality</h3>
                <p className="text-gray-500 text-sm">Crafted from top materials</p>
              </div>
            </div>
  
            {/* picture 2 */}
            <div className="flex items-center gap-4 text-center md:text-left">
            <Image src="/Group (5).png" alt="Image is not shown" className="w-10 h-10"/> 
              <div>
                <h3 className="font-semibold text-gray-800 text-lg">Warranty Protection</h3>
                <p className="text-gray-500 text-sm">Over 2 years</p>
              </div>
            </div>
  
            {/* picture 3 */}
            <div className="flex items-center gap-4 text-center md:text-left">
            <Image src="/Vector.png" alt="Image is not shown" className="w-10 h-10"/>   
              <div>
                <h3 className="font-semibold text-gray-800 text-lg">24 / 7 Support</h3>
                <p className="text-gray-500 text-sm">Dedicated support</p>
              </div>
            </div>
          </div>
        </section>
  
        
      </div>
    );
  }
  