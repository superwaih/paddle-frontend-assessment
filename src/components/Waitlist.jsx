import React from 'react'


const Waitlist = () => {
  return (
    <div className='flex text-center w-2/4 m-auto justify-center items-center flex-col'>
        <div className="details-input w-4/5  mt-10 flex flex-col lg:flex-row  justify-between">
        <input className='wait-input p-4 text-gray-800 p-4'  placeholder='First Name..' />

        <input className='text-gray-800 p-4 wait-input outline-none'  placeholder='Last Name...' />

        </div>

        <div className='email-input mt-8 lg:relative flex-col lg:flex-row flex'>
            <input className='p-4 md:w-[30rem] lg:w-[45rem] rounded-full outline-none' placeholder='Enter your email address' type="text" />
            <button className='uppercase m-4 lg:m-0 lg:w-[20rem] text-white  lg:-right-20 rounded-full text-center p-2 md:pr-4 md:py-4 bg-blue-700 rounded lg:absolute'>Join our waiting list</button>
        </div>
    </div>
  )
}

export default Waitlist