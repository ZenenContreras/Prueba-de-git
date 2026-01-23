import {useProjectStore} from '../../../store/useProjectStore'
import {useEffect} from 'react'
import {Link} from 'react-router'
import AddCircleIcon from '@mui/icons-material/AddCircle';

function ProjectLayout () {
    const {getProjects, projects} = useProjectStore()
    
    useEffect(()=>{
         async function fetchProyects(){
             await getProjects()
         }
         fetchProyects()
     },[])   
    

    return (
        <div className='flex gap-4 flex-wrap'>
            {projects && projects.map((project) =>(
                <Link className='h-[250px] min-w-[250px] max-w-[300px] flex flex-col gap-4 bg-gray-900 p-4 rounded-lg shadow-xl border border-gray-700 hover:border-[#137fec] duration-300' key={project.id} >
                    <div className='border-b pb-4 border-gray-500 flex flex-col gap-4 flex-1'>
                        <h2 className='font-bold text-xl'>{project.title}</h2>
                        <p className='text-gray-500 text-sm line-clamp-5 overflow-hidden'>{project.description}</p>
                    </div>
                    <div className='flex justify-between '>
                            <h2 className='uppercase text-sm text-gray-500'>Due Date</h2>
                            <h3  clasName=' text-sm'>{project.due_date}</h3>
                    </div>
                </Link>
            ))}
            <Link to='create' className='border-gray-500 border-2 border-dashed p-12 rounded-lg flex flex-col items-center justify-center font-bold gap-2'> 
                <AddCircleIcon/>
                <h3>Create a New Project</h3>
            </Link>
        </div>
    )
}

export default ProjectLayout