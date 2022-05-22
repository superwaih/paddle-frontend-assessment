import React from 'react'
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className='flex justify-between m-auto max-w-screen-2xl py-12 px-8'>
      <div className="logo  w-1/4">
        <Link to='/' >
        <img src="" alt=""  />
        <h1 className='font-bold lg:text-xl text-white' >METRICKS</h1>
        </Link>
      </div>

      <div className="burger lg:hidden block">
          <GiHamburgerMenu className='invert brightness-90 cursor-pointer ' size={32} />
      </div>
      


      <nav className='nav-links hidden md:hidden flex-end lg:block lg:w-5/12 xl:w-4/12 md:w-6/12 space-x-4  items-center md:block flex text-white uppercase' >
        <Link className='' to='/about'>
          about us
        </Link>

        <Link  className='' to='/blog'>
          blog
        </Link>
        <Link to='/github'>
          Gitub
        </Link>

        <Link  className=' p-4 duration-300 hover:bg-blue-200 hover:text-black  bg-btnColor rounded-full shadow-xl ' to='/contact'>
          Contact us
        </Link>
      </nav>
    </div>
  )
}

export default Navbar