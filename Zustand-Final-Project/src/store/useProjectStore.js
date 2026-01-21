import {create} from 'zustand'

export const useProjectStore = create((set)=>({

    projects: [],

    loading: false,

    fetchProjects: async() =>{
        set({loading: true})

        try{


        }catch{error}{
            
        }
    }

}))