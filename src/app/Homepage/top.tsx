import Link from "next/link";
import Image from "next/image";


function Top() {
  return (


  <>
{/* Section:01 Top Bar */}

<section className=' bg-[#272343] text-gray-300 flex justify-between items-center text-sm px-4 py-2'>


<div className="pl-20"><span className='flex items-center gap-2 pl-20'><Image src="/check1.png" alt="Check Icon" width={16} height={16}></Image>Free shipping on all orders over $50</span></div>



<div>
<ul className="pr-20">

<li className='flex gap-x-4 gap-6'>
<Link href = ""><p>Eng</p></Link>
<Link href = ""><p>Faqs</p></Link>
<Link href = ""><p>Need help</p></Link>
</li>

</ul>
</div>



 </section> 
  </>


  )
}

export default Top;