import React from 'react'

const Form = () => {
  return (
    <div class="w-2/4 form-container shadow p-8">
      <h1 className='text-textWhite text-3xl mb-8 mt-8 text-center' >Hey, we are still in the works, but you can send us a message! </h1>
  <form class="shadow-md mt-4 w-4/5 m-auto  rounded">
    <div class="mb-8">
      <label className="block text-textWhite text-sm font-bold mb-2" for="username">
        First Name
      </label>
      <input placeholder="Enter your First name" className="shadow appearance-none border rounded w-full py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" />
    </div>
    <div class="mb-8">
      <label className="block text-textWhite text-sm font-bold mb-2" for="username">
        Last Name
      </label>
      <input placeholder="Enter your Last name" className="shadow appearance-none border rounded w-full py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" />
    </div>

    <div class="mb-8">
      <label className="block text-textWhite text-sm font-bold mb-2" for="username">
        Email Address
      </label>
      <input placeholder="Enter your Email Address" className="shadow appearance-none border rounded w-full py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" />
    </div>


    <div class="mb-8">
      <label className="block text-textWhite text-sm font-bold mb-2" for="username">
        Tell us what you need help with
      </label>
      <textarea placeholder='Enter a topic, like " channel problem... "' className="shadow appearance-none border rounded w-full py-8 px-3 text-gray-700 leading-tight focus:outine-none focus:shadow-outline"  type="text" />
    </div>

    <button className='p-4 text-textWhite duration-300 hover:bg-blue-200 hover:text-black  bg-btnColor rounded-full shadow-xl'  >Send Now</button>
    
    
  </form>
  
</div>
  )
}

export default Form