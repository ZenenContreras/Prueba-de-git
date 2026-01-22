import React from 'react'
import { NavBar } from '../../components/layout/NavBar'
import {useNavigate, Link} from 'react-router'
import {useState} from 'react'
import {useAuthStore} from '../../store/useAuthStore'

function Register() {
    const [emailInput, setUserEmail] = useState('')
    const [passwordInput, setUserPassword] = useState('')
    const { signUp } = useAuthStore()
    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()

        if (emailInput && passwordInput) {
            signUp(emailInput, passwordInput)
            navigate('/login')
        } else {
            alert('Fill in all fields')
        }
    }

    return (
        <section className='flex flex-col items-center p-12 gap-6'>
            <h2 className='text-3xl text-white font-bold'>Register</h2>
            <h3 className='text-lg text-gray-400'>Manage your private projects with ease</h3>
            <form onSubmit={handleSubmit} className='flex flex-col text-white border-[#324d67] border p-8 rounded-lg bg-[#192633] gap-6 md:w-[440px]'>

                <div className='flex flex-col gap-4'>
                    <label htmlFor="">Email Address: </label>
                    <input type="text" placeholder='name@example.com' className='py-2 px-4 bg-[#111a22] rounded-lg border-slate-300 text-white' onChange={(e) => setUserEmail(e.target.value)} required />
                </div>

                <div className='flex flex-col gap-4'>
                    <div className='flex justify-between items-center'>
                        <label htmlFor="">Password</label>
                    </div>
                    <input type="password" required className='py-2 px-4 bg-[#111a22] rounded-lg border-slate-300 text-white' placeholder='********' onChange={(e) => setUserPassword(e.target.value)} />
                </div>

                <button type='submit' className='py-2 px-4 bg-[#137fec] rounded-lg cursor-pointer'> Sign Up </button>

                <div className='flex items-center gap-2'>
                    <span className='w-full h-px bg-gray-500'></span>
                    <span className='text-gray-500 text-sm whitespace-nowrap'>PRIVATE INSTANCE</span>
                    <span className='w-full h-px bg-gray-500'></span>
                </div>

                <div className='flex justify-center gap-4 items-center'>

                    <p className='text-sm'>Already have an account?</p>
                    <Link to='/login' className='text-[#137fec] text-sm font-bold'>Log In here</Link>
                </div>
            </form>

            <p className='text-sm text-gray-500 text-center'>© 2024 PrivateProject. All rights reserved. <br />
                Secure, encrypted project management for private teams.
            </p>
        </section>
    )
}

export default Register