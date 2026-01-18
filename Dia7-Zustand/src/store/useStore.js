import { create } from 'zustand'

export const useStore = create((set)=>({
    //Estado usuario

    user:{
        name:'Developer',
        avatar: 'https://via.placeholder.com/150',
    },

    //Estado proyectos
    projects: [
        {id: 1, title: 'Mi primera app de zustand' , favorite: false},
    ],

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
        }))
}))