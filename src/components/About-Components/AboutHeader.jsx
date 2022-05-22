import React from 'react'

const AboutHeader = () => {
  return (
    <div className='flex md:flex-row text-textWhite relative h-[35rem] flex-col ' >
        <h1 className='absolute z-50 top-[40%] text-6xl left-[30%] text-left leading-12'>Built for Saas and E-commerce </h1>
        
        <div className="box1 w-2/4 ">
            <h2 className='p-12'>About us</h2>
        </div>
        <div className="box-2 w-2/5 p-12 flex justify-end pt-12 items-end">
        <p>Our tools are easy to set up and use with a user friendly dashboard that enables you to set up, launch, automate and manage multi-affiliate campaigns in 5 minutes.</p>
        </div>


    </div>
  )
}

export default AboutHeader