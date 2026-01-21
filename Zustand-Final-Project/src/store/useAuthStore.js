import { create } from 'zustand'


export const useAuthStore = create(persist((set)=>({

    user: null,
    token: null,

    logIn: (userData, token) => set({user: userData, token}),

    logOut: () => {
        set({user: null, token: null});
        localStorage.removeItem('auth-storage')
    }

    }),
    {name: 'auth-storage'}
))