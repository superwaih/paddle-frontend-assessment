import React from 'react'

const AboutHeader = () => {
  return (
    <div className='flex md:flex-row text-textWhite relative h-96 flex-col ' >
        <h1 className='absolute top-[50%] text-6xl left-[30%] w-1/2'>Built for Saas and E-commerce </h1>
        
        <div className="box1 w-2/4 ">
            <h2 className='p-12'>About us</h2>
        </div>
        <div className="box-2 w-2/5 p-12 flex justify-end items-end">
            <p>Our tools are easy to set up and use with a user friendly dashboard that enables you to set up, launch, automate and manage multi-affiliate campaigns in 5 minutes.</p>
        </div>


    </div>
  )
}

export default AboutHeader