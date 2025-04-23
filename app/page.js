import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return <>
 <main className="bg-violet-100">
  <section className="grid grid-cols-2 h-[50vh]">
  <div className=" flex flex-col gap-4 items-center justify-center">
    <p className="text-4xl font-extrabold font-sora text-violet-600">
      The best URL shortner in the market 
      </p>
    <p className="px-16 text-center font-grotesk font-semibold text-gray-800">
      We are the most straightForward shortner in the world. Most of the URL shortner will track you or ask you  to give your detail for login.We understand your need and hence we have created this URL shortner 
      </p>
      <div className='flex gap-3 '>
           <Link href="/shorten"><button className='bg-violet-400 rounded-lg p-2 font-bold font-code'>Try now</button></Link>
           <Link href="/github"><button className='bg-violet-400 rounded-lg p-2 font-bold font-code'>Github</button></Link>
           </div>
  </div>
  <div className="  justify-start relative">
    <Image className="mix-blend-darken" alt="An image of vector"  src={'/vector.jpg'} fill={true}/>
  </div>
  </section>
  
 </main>
  </>;
}
