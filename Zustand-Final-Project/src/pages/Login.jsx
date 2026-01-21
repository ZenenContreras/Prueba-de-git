import React from 'react'
import { Link } from 'react-router'

function Login() {
  return (
    <section className='flex flex-col items-center p-12 gap-6'>
        <h2 className='text-3xl text-white font-bold'>Welcome Back</h2>
        <h3 className='text-lg text-gray-400'>Manage your private projects with ease</h3>
        <form action="" className='flex flex-col text-white border-[#324d67] border p-8 rounded-lg bg-[#192633] gap-6 md:w-[440px]'>
            <div className='flex flex-col gap-4'>
                <label htmlFor="">Email Address: </label>
                <input type="text" placeholder='name@example.com' className='py-2 px-4 bg-[#111a22] rounded-lg border-slate-300 text-white'/>
            </div>
            <div className='flex flex-col gap-4'>
                <div className='flex justify-between items-center'>
                <label htmlFor="">Password</label>
                <a href="" className='text-[#137fec] text-sm '><span>Forgot?</span> </a>
                </div>
                <input type="password" name="" id="" className='py-2 px-4 bg-[#111a22] rounded-lg border-slate-300 text-white' placeholder='********'/>
            </div>
            <button className='py-2 px-4 bg-[#137fec] rounded-lg cursor-pointer'>Log In</button>
            <div className='flex items-center gap-2'>
                <span className='w-full h-px bg-gray-500'></span>
                <span className='text-gray-500 text-sm whitespace-nowrap'>PRIVATE INSTANCE</span>
                <span className='w-full h-px bg-gray-500'></span>
            </div>

            <div className='flex justify-center gap-4 items-center'> 

            <p className='text-sm'>Dont have an account?</p>
            <Link to='/register' className='text-[#137fec] text-sm font-bold'>Register here</Link>
            </div>
        </form>
        <p className='text-sm text-gray-500 text-center'>© 2024 PrivateProject. All rights reserved. <br/>
            Secure, encrypted project management for private teams.
        </p>
    </section>
  )
}

export default Login