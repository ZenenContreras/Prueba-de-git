import supabase from '../lib/supabase'

export const createProject = async (projectData) => {
    const { data, error } = await supabase.from('projects').insert([
        {
            title: projectData.title,
            description: projectData.description,
            due_date: projectData.due_date,
            completed: projectData.completed
        }
    ]).select()
    if (error) throw error

    return data
}

export const getProjectsService = async () => {
    const { data, error} = await supabase.from('projects').select('*').order('created_at', {asending: false})
    if(error) throw error
    return data
}

export const deleteProject = async (proyectId) => {
    const {data, error} = await supabase.from('projects').delete().eq('id', proyectId)
    if(error) throw error
    return data
}