import {create} from 'zustand'
import {createProject, getProjectsService, deleteProject} from '../services/projectService'

export const useProjectStore = create((set)=>({

    projects: [],
    error: null,
    loading: true,

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
    },

    deleteProject: async (projectId) => {
        set({loading: true})
        try{
            await deleteProject(projectId)
            set((state)=> ({projects: state.projects.filter(project => project.id !== projectId)}))
        }catch(err){
            set({error:err})
            throw err
        }finally{
            set({loading:false})
        }
    }

}))