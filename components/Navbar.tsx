import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar h-18 flex items-center justify-around fixed w-full z-10 '>
      <div className='item font-jetbrains-mono mx-2'>
        <Link href={"/"} className='bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500 bg-[length:300%_300%] bg-clip-text text-transparent hover:animate-wave transition-all duration-500'>
        
        Portfolio
        </Link>
      </div>
      <div className=' center-links flex items-center justify-around md:gap-10 gap-3 mx-2'>
        <Link href={"#home"} className='item'>Home</Link>
        <Link href={"#project"} className='item'>My Work</Link>
        <Link href={"#about"} className='item'>About</Link>
        <Link href={"#contact"} className='item'>Contact</Link>
      </div>
      <div className='item mx-2'>
        <Link target='_blank' href={"https://github.com/karzkc"} >Github</Link>
      </div>
    </div>
  )
}

export default Navbar
