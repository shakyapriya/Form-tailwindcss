import React from 'react'

const Register = () => {
  return (
    <div className='h-screen bg-gray-800 flex flex-col justify-center'>
        <form className='max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg'>
            <h2 className='text-4xl text-white font-bold text-center'>REGISTER HERE </h2>
            <div className='flex flex-col text-gray-400 py-2'>
                {/* <label >User Name</label> */}
                <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" placeholder='Enter Your Name'/>
            </div>
            <div className='flex flex-col text-gray-400 py-2'>
            {/* <label >Password</label> */}
            <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="email" placeholder='Enter Your Email Id'/>
            </div>
            <div className='flex flex-col text-gray-400 py-2'>
              
                <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="password" placeholder='Enter Password '/>
            </div>
            <div className='flex flex-col text-gray-400 py-2'>
                
                <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" placeholder='Enter Your Phone Number'/>
            </div>
            <div className='flex flex-col text-gray-400 py-2'>
                
                <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" placeholder='Enter Your Address' />
            </div>
            <div className='flex flex-col text-gray-400 py-2'>
               
                <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" placeholder='Enter Your Favourite Color'/>
            </div>
            
            <button className='w-full my-2 py-2 text-xl bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg' type="submit">Register</button>
        </form>
    </div>
  )
}

export default Register