import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

export const useStore = create(
        devtools((set)=>({
    //Estado usuario

    user:{
        name:'Developer',
        avatar: 'https://via.placeholder.com/150',
    },

    //Estado proyectos
    projects: [
        {id: 1111, title: 'Mi primera app de zustand' , favorite: false},
    ],

    loading: false,

    //Acciones
    updateName: (newName) =>
        set((state)=> ({
            user: {...state.user, name: newName}
        })),
    
    addProject: (title) => 
        set((state) => ({
            projects: [...state.projects , {id: Date.now(), title, favorite: false}]
        })),  

    deleteProject: (id) =>
        set((state)=> ({
            projects: state.projects.filter(p => p.id !== id)
        })),
    
    toggleFavorite: (id) =>
        set((state)=> ({
            projects: state.projects.map(p => p.id === id ? {...p, favorite: !p.favorite}: p)
        })),
    clearProjects: () => 
        set(()=>({
            projects: []
        })),

    fetchUsers: async () => {
        set({loading: true})

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await response.json()

            set((state)=>({
                projects: [...state.projects, ...data.map(user => ({id: user.id, title: user.name, favorite: false}))]
            }))
            
        } catch (error) {
            console.error('Error Fetching data: ', error)
             
        }finally{
            set({loading: false})
        }
    }
})))