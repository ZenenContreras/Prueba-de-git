import React from 'react'
import { useStore } from '@/store/useStore'
import { useState } from 'react'

function ProfileSettings() {
    const [nameChange, setnameChange] = useState('')
    const {updateName} = useStore()

    function handleChange () {
        if(!nameChange) return

        updateName(nameChange)
        setnameChange('')
    }

    return (
        <div className='flex p-4 gap-4'>
            <input type="text" onChange={(e)=> setnameChange(e.target.value)} className='border p-2 rounded-lg text-white' placeholder='Change name'/>
            <button onClick={handleChange} className=' rounded-lg px-4 py-2 border cursor-pointer'>Change</button>
        </div>
    )
}

export default ProfileSettings