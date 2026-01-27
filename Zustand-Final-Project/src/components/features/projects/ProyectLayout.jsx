import {useProjectStore} from '../../../store/useProjectStore'
import {useEffect} from 'react'
import {Link} from 'react-router'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import ProjectSkeleton from './ProjectSkeleton';

function ProjectLayout () {
    const {getProjects, projects, deleteProject, loading} = useProjectStore()
    
    useEffect(()=>{
         async function fetchProyects(){
             await getProjects()
         }
         fetchProyects()
     },[])  
      
    if(loading){
        return (
            <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols:3 lg:grid-cols-4'>
                {[1,2,3,4].map((num)=> (
                    <ProjectSkeleton num={num}/>
                ))}
            </div>
        )
    }

    return (
        <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols:3 lg:grid-cols-4'>
            {projects && projects.map((project) =>(
                <div className=' flex flex-col gap-4 bg-gray-900 p-4 rounded-lg shadow-xl border border-gray-700 hover:border-[#137fec] duration-200' key={project.id} >
                    <div className='border-b pb-4 border-gray-500 flex flex-col  gap-4 flex-1'>
                        <div className='flex flex-row justify-between items-center'>
                            <h2 className='font-bold text-xl'>{project.title}</h2>
                            {project.completed ? <CheckBoxIcon sx={{color: '#137fec'}}/> : <CheckBoxOutlineBlankIcon  />}
                        </div>
                        <p className='text-gray-500 text-sm line-clamp-5 overflow-hidden'>{project.description}</p>
                    </div>
                    <div className='flex justify-between '>
                            <h2 className='uppercase text-sm text-gray-500'>Due Date</h2>
                            <h3 className=' text-sm'>{project.due_date}</h3>
                    </div>
                    <Link className='px-5 py-3 rounded-lg shadow-xl cursor-pointer bg-[#137fec] text-center' to={`/dashboard/projects/${project.id}`}> Ver detalles</Link>
                    <button onClick={()=> deleteProject(project.id)} className='px-5 py-3 rounded-lg shadow-xl cursor-pointer bg-red-400'>Delete Proyect</button>
                </div>
            ))}
            <Link to='create' className='border-gray-500 border-2 border-dashed p-12 rounded-lg flex flex-col items-center justify-center font-bold gap-2'> 
                <AddCircleIcon/>
                <h3>Create a New Project</h3>
            </Link>
        </div>
    )
}

export default ProjectLayout