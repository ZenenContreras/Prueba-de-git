import React from 'react'
import { useParams } from 'react-router'
import { useProjectStore } from '../../store/useProjectStore'
import { Link } from 'react-router'

function ProjectDetail() {

    const {id} = useParams()

    const project = useProjectStore((state) => state.projects.find((project) => project.id.toString() === id))

    if(!project){
        return (
            <div className='h-full w-full flex justify-center p-10'>
                <h2 className='text-red-500 font-black text-2xl'>Projecto No encontrado</h2>
            </div>

        )
    }   

    return (
        <div className='h-full flex flex-col justify-center items-center animate-fade-in'>
            <Link to='/dashboard/projects' className='px-5 py-3 rounded-lg shadow-xl cursor-pointer bg-[#137fec] text-center'> Return to Projects</Link>
            <h2 className='font-black text-2xl'>{project.title}</h2>
        </div>
    )
}

export default ProjectDetail