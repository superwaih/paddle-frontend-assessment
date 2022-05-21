import React from 'react'

const CountDown = () => {
  return (
    <div className='grid p-12 m-auto md:w-3/5 w-2/5 gap-8 md:grid-cols-1 md:grid-cols-2 lg:grid-cols-4  text-center justify-center items-center'>
      <div className="box bg-white rounded p-12 ">
        <h3 className='text-5xl font-bold' >7</h3>
        <p className='text-xl' >Days</p>
      </div>
      <div className="box bg-white rounded p-12 ">
        <h3 className='text-5xl font-bold' >24</h3>
        <p className='text-xl' >Hours</p>
      </div>
      <div className="box bg-white rounded p-12 ">
        <h3 className='text-5xl font-bold' >54</h3>
        <p className='text-xl' >Minutes</p>
      </div>
      <div className="box bg-white rounded p-12 ">
        <h3 className='text-5xl font-bold' >11</h3>
        <p className='text-xl' >Seconds</p>
      </div>
    </div>
  )
}

export default CountDown