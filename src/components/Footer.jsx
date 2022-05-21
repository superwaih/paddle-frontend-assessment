import React from 'react'
import { AiFillGithub, AiFillYoutube, AiFillFacebook, AiFillLinkedin, AiFillInstagram, AiFillTwitterSquare } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className='foot-container  flex flex-col mt-20 flex justify-center mb-20 items-center m-auto'>
      <div className="icons flex gap-8">
        <AiFillYoutube className='brightness-90 invert' size={32} />
        <AiFillFacebook className='brightness-90 invert' size={32}/>
        <AiFillInstagram className='brightness-90 invert' size={32} />
        <AiFillLinkedin className='brightness-90 invert'  size={32} />
        <AiFillTwitterSquare className='brightness-90 invert' size={32} />
      </div>
      <div className="terms text-gray-400 flex text-xl justify-between" >
            <h4 className='p-4'>
              Terms of services
            </h4>

            <h4 className='p-4' >
             Privacy Policy
            </h4>
      </div>
      <div className="copyright text-center text-gray-400 text-xl">
          <p>Copyright 2021 @ Peddle Technologies. All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer