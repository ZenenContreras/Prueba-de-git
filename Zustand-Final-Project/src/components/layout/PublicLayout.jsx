import React from 'react'
import { NavBar } from './NavBar'
import { Outlet } from 'react-router'

function PublicLayout() {
    return (
        <div className='flex flex-col'>
            <NavBar />
            <Outlet />
        </div>
    )
}

export default PublicLayout