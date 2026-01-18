import React from 'react'
import { useState } from 'react'
import { useStore } from '@/store/useStore'

function ProjectList() {
    const [newTitle, setNewTitle] = useState('')

    const {projects, addProject, deleteProject, toggleFavorite} = useStore()

    function handleSubmit() {
        if(!newTitle) return; 
        addProject(newTitle)
        setNewTitle('')
    }

    console.log(projects)
    return (
        <div className='p-6'>
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

            <div className='grid gap-4'>
                {projects.map(project=>(
                    <div key={project.id} className="border p-4 rounded flex justify-between items-center bg-white shadow">
                        <span className={project.favorite ? "font-bold text-yellow-600" : ""}>
                            {project.title} {project.favorite && "⭐"}
                        </span>
                        <div className='flex gap-4'>
                            <button className='cursor-pointer p-2 rounded-lg bg-gray-200 text-sm font-bold' onClick={() => toggleFavorite(project.id) }>Favorite</button>
                            {project.favorite === false && (
                                <button className='cursor-pointer p-2 rounded-lg bg-red-500 text-sm font-bold' onClick={() => deleteProject(project.id)}>Delete</button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProjectList