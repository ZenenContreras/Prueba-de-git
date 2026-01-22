import React from 'react'
import { Link, useNavigate } from 'react-router'
import { useAuthStore } from '../../store/useAuthStore'
import { useState } from 'react'

function Login() {
    const [emailInput, setUserEmail] = useState('')
    const [passwordInput, setUserPassword] = useState('')
    const { logIn } = useAuthStore()
    const error = useAuthStore((state)=> state.error)
    const loading = useAuthStore((state)=> state.loading)
    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()

        if (emailInput && passwordInput) {
            try{
                await logIn(emailInput, passwordInput)
                navigate('/dashboard')
            }catch(err){
                console.err('Fallo el login')
            }
        } else {
            alert('Fill in all fields')
        }
    }

    return (
        <section className='flex flex-col items-center p-12 gap-4'>
            <h2 className='text-3xl text-white font-bold'>Welcome Back</h2>
            <h3 className='text-lg text-gray-400'>Manage your private projects with ease</h3>
            <form onSubmit={handleSubmit} className='flex flex-col text-white border-[#324d67] border p-8 rounded-lg bg-[#192633] gap-6 md:w-[440px]'>

                <div className='flex flex-col gap-4'>
                    <label htmlFor="">Email Address: </label>
                    <input type="text" placeholder='name@example.com' className='py-2 px-4 bg-[#111a22] rounded-lg border-slate-300 text-white' onChange={(e) => setUserEmail(e.target.value)} required />
                </div>

                <div className='flex flex-col gap-4'>
                    <div className='flex justify-between items-center'>
                        <label htmlFor="">Password</label>
                        <a href="" className='text-[#137fec] text-sm '><span>Forgot?</span> </a>
                    </div>
                    <input type="password" required className='py-2 px-4 bg-[#111a22] rounded-lg border-slate-300 text-white' placeholder='********' onChange={(e) => setUserPassword(e.target.value)} />
                </div>

                <button 
                type='submit' 
                className='relative py-2 px-4 bg-[#137fec] rounded-lg cursor-pointer'
                disabled={loading}
                >
                {loading ? 'Loading...' : 'Log In '}
                {loading && <div className='absolute top-3 right-3 animate-spin rounded-full h-4 w-4 border-t-3 border-white'></div>} 
                </button>

                {error && (
                    <p className='text-red-600 text-center text-xs'>{error}</p>
                )}

        
                <div className='flex items-center gap-2'>
                    <span className='w-full h-px bg-gray-500'></span>
                    <span className='text-gray-500 text-sm whitespace-nowrap'>PRIVATE INSTANCE</span>
                    <span className='w-full h-px bg-gray-500'></span>
                </div>

                <div className='flex justify-center gap-4 items-center'>

                    <p className='text-xs md:text-sm'>Dont have an account?</p>
                    <Link to='/register' className='text-[#137fec] text-xs md:text-sm font-bold'>Register here</Link>
                </div>
            </form>

            <p className='text-sm text-gray-500 text-center'>© 2026 PrivateProject. All rights reserved. <br />
                Secure, encrypted project management for private teams.
            </p>
        </section>
    )
}

export default Login