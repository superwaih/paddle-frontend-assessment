import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between m-auto p-16'>
      <div className="logo  w-1/4">
        <Link to='/' >
        <img src="" alt="" srcset="" />
        <h1 className='font-bold text-xl text-white' >METRICKS</h1>
        </Link>
      </div>
      


      <nav className='nav-links w-1/4 items-center flex gap-12 text-white uppercase' >
        <Link className='' to='/about'>
          about us
        </Link>

        <Link  className='' to='/blog'>
          blog
        </Link>

        <Link  className='p-4 duration-300 hover:bg-blue-200 hover:text-black  bg-blue-800 rounded-full shadow-xl ' to='/about'>
          Contact us
        </Link>
      </nav>
    </div>
  )
}

export default Navbar