import React from 'react'
import { Link } from 'react-router'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function NotFound() {
  return (
    <div className='h-full w-full flex justify-center items-center '>
      <img src="/404.svg" alt="404 image" className='h-82 '/>
      <div className='flex flex-col gap-4 items-center animate-fade-in'>
        <h2 className='font-black text-6xl text-white'>Oops</h2>
        <h3 className='text-gray-500 text-xl '>We couldn't find the page you were looking for</h3>
        <Link to='/dashboard' className='px-5 py-3 rounded-lg shadow-xl cursor-pointer bg-[#137fec] text-center hover:animate-bouncing'><ArrowBackIcon/> Go to Home</Link>
      </div>
    </div>
  )
}

export default NotFound