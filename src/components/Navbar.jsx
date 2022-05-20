import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between m-auto p-8 lg:p-16'>
      <div className="logo  w-1/4">
        <Link to='/' >
        <img src="" alt="" srcset="" />
        <h1 className='font-bold lg:text-xl text-white' >METRICKS</h1>
        </Link>
      </div>
      


      <nav className='nav-links hidden lg:w-2/5 md:w-3/5 space-x-6  items-center md:block flex gap-8 lg:gap-12 text-white uppercase' >
        <Link className='' to='/about'>
          about us
        </Link>

        <Link  className='md:px-6' to='/blog'>
          blog
        </Link>

        <Link  className=' p-4 duration-300 hover:bg-blue-200 hover:text-black  bg-blue-700 rounded-full shadow-xl ' to='/contact'>
          Contact us
        </Link>
      </nav>
    </div>
  )
}

export default Navbar