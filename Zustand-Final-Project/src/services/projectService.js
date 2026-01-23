export const createProject = async (projectData) => {
    const { data, error } = await supabase.from('projects').insert([
        {
            title: projectData.title,
            description: projectData.description,
            due_date: projectData.dueDate,
            completed: false
        }
    ]).select()
    if (error) throw error

    return data
}

export const getProjects = async () => {
    const { data, error} = await supabase.from('proyects').select('*').order('created_at', {asending: false})
    if(error) throw error
    return data
}