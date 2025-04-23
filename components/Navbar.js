import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='h-14 bg-violet-500 flex justify-between text-white px-3 '>
      <div className="logo font-sora font-bold  flex items-center text-2xl ">
      <Link  href="/">Bitlinks</Link>
      </div>
        <ul className='flex items-center gap-7 font-grotesk font-semibold'>
            <Link  href="/"><li>Home</li></Link>
           <Link href="/about"><li>About</li></Link>
           <Link href="/shorten "><li>Shorten</li></Link>
           <Link href="/contact"><li>Contact</li></Link>
           <li className='flex gap-3'>
           <Link href="/shorten"><button className='bg-violet-400 rounded-lg p-2 font-bold font-code'>Try now</button></Link>
           <Link href="/github"><button className='bg-violet-400 rounded-lg p-2 font-bold font-code'>Github</button></Link>
           </li>
        </ul>
    </nav>
  )
}

export default Navbar
