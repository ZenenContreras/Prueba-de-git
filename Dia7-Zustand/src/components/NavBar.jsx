import React from 'react'
import { useStore } from '@/store/useStore'
import ProfileSettings from './ProfileSettings'

function NavBar() {
    const name = useStore((state)=> state.user.name)
    console.log(name)

  return (
    <nav className='p-4 bg-blue-900 text-white flex flex-col gap-2 md:flex-row justify-between items-center'>
        <h1 className='font-bold text-xl'>DevTracker</h1>
        <span>Bienvenido, <span className='font-bold'>{name}</span></span>
        <ProfileSettings />
    </nav>
  )
}

export default NavBar