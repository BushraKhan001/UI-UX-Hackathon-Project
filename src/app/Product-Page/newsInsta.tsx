import Image from "next/image";



const NewsletterInstagram = () => {
    return (
      <section className="py-20">
        <div className="bg-gray-100 py-20 px-4 md:px-8 ">

{/* // Newsletter Section  */}
<div className="text-center mb-12">
  <h2 className="text-2xl font-semibold mb-6 text-[#272343]">Or Subscribe To The Newsletter</h2>
  <div className="flex items-center justify-center">
    <input
      type="email" placeholder="Email Address...."
      className="border-b-2 border-gray-400 focus:outline-none focus:border-black w-2/3 md:w-1/3 px-2 py-1 bg-gray-100"
    />
    <button
      type="submit"
      className=" py-1 pt-2 w-1/6 md:1 border-gray-400 border-b-2 ml-4 focus:outline-none focus:border-black text-sm font-medium uppercase tracking-wide hover:text-gray-700"
    >
      Submit
    </button>
  </div>
</div>
{/* 
// Instagram Section */}
<div className="text-center mb-6">
  <h2 className="text-2xl font-semibold">Follow Products And Discounts On Instagram</h2>
</div>

{/* // Images  */}
<div className="grid grid-cols-2 md:grid-cols-6 gap-4 max-w-5xl mx-auto">
  <div>
    <Image src="/Image (9).png" alt="Product 1" width={100} height={100} className="w-full h-auto object-cover"
    />
  </div>
  <div>
    <Image src="/Image (10).png" alt="Product 2" width={100} height={100} className="w-full h-auto object-cover"
    />
  </div>
  <div>
    <Image src="/Image (5).png" alt="Product 4" width={100} height={100} className="w-full h-auto object-cover"
    />
  </div>
  <div>
    <Image src="/Image (4).png" alt="Product 4" width={100} height={100} className="w-full h-auto object-cover" 
    />
  </div>
  <div> 
    <Image src="/Image (6).png" alt="Product 5" width={100} height={100} className="w-full h-auto object-cover"
    />
  </div>
  <div>
    <Image src="/Image (8).png" alt="Product 6" width={100} height={100} className="w-full h-auto object-cover"
    />
  </div>
</div>
</div>
      </section>
      
      
    );
  };
  
  export default NewsletterInstagram;
  