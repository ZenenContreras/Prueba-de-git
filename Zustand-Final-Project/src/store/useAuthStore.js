import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import {signUp, logIn, logOut} from '../services/authService'


export const useAuthStore = create(persist((set)=>({

    user: null,
    loading: false,

    logIn: async (userData) => {
        set({loading: true})
        try{
            const data = await logIn(userData)
             
        }catch{

        }finally{
            set({loading: false})
        }
    },

    logOut: () => {
        set({user: null, token: null});
        localStorage.removeItem('auth-storage')
    }

    }),
    {name: 'auth-storage'}
))