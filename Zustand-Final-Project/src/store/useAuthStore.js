import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import {signUp, logIn, logOut} from '../services/authService'


export const useAuthStore = create(persist((set)=>({

    user: null,
    loading: false,
    error: null,
    token: null,

    signUp: async (email, password) => {
        set({loading: true, error: null})

        try{
            const data = await signUp(email, password)
        }catch(error){
            set({error: error.message})
            throw error
        }finally{
            set({loading: false})
        }
    },

    logIn: async (email, password) => {
        set({loading: true, error: null})

        try{
            const data = await logIn(email, password)
            set({ user: data.user, token: data.session?.access_token || null})
        }catch(error){
            set({error: error.message})
            throw error
        }finally{
            set({loading: false})
        }
    },

    logOut: async () => {
        set({user: null, token: null, error: null, loading: false});
        try{
            const error = await logOut()
        }catch(error){
            throw error
        }finally{
            localStorage.removeItem('auth-storage')
        }
    }

    }),
    {name: 'auth-storage'}
))