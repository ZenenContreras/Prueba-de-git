import React from 'react'
import { useState } from 'react'
import { useStore } from '@/store/useStore'

function ProjectList() {
    const [newTitle, setNewTitle] = useState('')
    const [projectSearch, setProjectSearch] = useState('')

    const {projects, addProject, deleteProject, toggleFavorite, fetchUsers, loading} = useStore()

    function handleSubmit() {
        if(!newTitle) return; 
        addProject(newTitle)
        setNewTitle('')
    }

    const filteredProjects = projects.filter(project => project.title.toLowerCase().includes(projectSearch.toLowerCase())) 
  
    console.log(projects)
    return (
        <div className='p-6 flex flex-col'>
            <div className='flex gap-2 mb-6'>
                <input 
                type="text" 
                className="border p-2 rounded flex-1"
                onChange={(e)=> setNewTitle(e.target.value)}
                value={newTitle}
                placeholder='Add A new Project'
                />
                <button onClick={handleSubmit} type='submit' className="bg-green-600 text-white px-4 rounded cursor-pointer"> Añadir</button>
            </div>

            <button onClick={fetchUsers} className="bg-blue-600 text-white px-4 rounded cursor-pointer mb-6 py-2"> {loading ? 'Cargando...' : 'Fetch Users'}</button>

            <input 
                type="text" 
                className="border p-2 rounded flex-1 mb-4"
                onChange={(e)=> setProjectSearch(e.target.value)}
                value={projectSearch}
                placeholder='Search A project'
            />

            <div className='grid gap-4'>
                {filteredProjects.map(project=>(
                    <div key={project.id} className="p-4 rounded flex flex-col md:flex-row gap-4 justify-between items-center bg-gray-200 shadow-lg">
                        <h2 className='text-sm  text-white bg-gray-400 p-2 rounded'>ID: {project.id}</h2>
                        <span className={`text-black font-semibold text-lg ${project.favorite ? "text-yellow-600" : ""}`}>
                            {project.title} {project.favorite && "⭐"}
                        </span>
                        <div className='flex gap-4'>
                            <button className='cursor-pointer p-2 rounded-lg bg-blue-500 text-sm text-white font-semibold hover:bg-blue-600' onClick={() => toggleFavorite(project.id) }>Favorite</button>
                            {project.favorite === false && (
                                <button className='cursor-pointer p-2 rounded-lg bg-red-500 text-sm text-white font-semibold hover:bg-red-600' onClick={() => deleteProject(project.id)}>Delete</button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProjectList