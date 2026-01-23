import {create} from 'zustand'
import {createProject, getProjectsService} from '../services/projectService'

export const useProjectStore = create((set)=>({

    projects: [],
    error: null,
    loading: false,

    getProjects: async () =>{
        set({loading: true})
        try{
            const data = await getProjectsService()
            set({projects: data})
        }catch(error){
            set({error: error})
            throw error
        }finally{
            set({loading: false})
        }
    },

    createProject: async (projectData) => {
        set({loading: true})
        try{
            const data = await createProject(projectData)
            set((state)=>({projects: [data[0], ...state.projects]}))
        }catch(error){
            set({error: error})
            throw error
        }finally{
            set({loading: false})
        }
    }

}))