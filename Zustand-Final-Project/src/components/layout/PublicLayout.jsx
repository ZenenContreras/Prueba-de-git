import React from 'react'
import { NavBar } from './NavBar'
import { Outlet } from 'react-router'

function PublicLayout() {
    return (
        <div className='flex flex-col h-full'>
            <NavBar />
            <div className='pt-16'>
                <Outlet />

            </div>
        </div>
    )
}

export default PublicLayout