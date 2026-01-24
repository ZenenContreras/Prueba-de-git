import React from 'react'
import { Link } from 'react-router'
import EnhancedEncryptionRoundedIcon from '@mui/icons-material/EnhancedEncryptionRounded';
import CloudDoneRoundedIcon from '@mui/icons-material/CloudDoneRounded';
import ElectricBoltRoundedIcon from '@mui/icons-material/ElectricBoltRounded';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {useState} from 'react'
import {useProjectStore} from '../../store/useProjectStore'
import {useNavigate} from 'react-router'
import confetti from 'canvas-confetti'

function CreateProject() {

    const [projectData, setProjectData] = useState(
        {
            title: '',
            description: '',
            due_date: null,
            completed: false
        }
    )
    const navigate = useNavigate()

    const {createProject, error, loading} = useProjectStore()

    console.log(projectData )

    async function handleSubmit (e) {
        e.preventDefault()

        try{
            await createProject(projectData)
            confetti()
            setProjectData( {title: '', description: '', due_Date: '', completed: false })
            navigate('/dashboard/projects')
        }catch(err){
            console.error('Error enviando el form: ', err)
        }


    }

  return (
    <div className='p-6 flex flex-col items-center '>
        <div className='flex flex-col gap-6 w-[50%] animate-fade-in '>
            <span className='text-sm '><Link className='text-gray-500' to='/dashboard/projects'>Projects </Link>/ <strong>New Project</strong></span>
            <div>
                <h2 className='text-4xl md:text-5xl font-black'>Add New Project</h2>
                <p className='text-lg text-gray-500 font-normal'>Define tyour next milestone with clarity and purpose.</p>
            </div>
            <form onSubmit={handleSubmit} className='bg-[#192633] rounded-xl border-gray-600 shadow-xl p-8 flex flex-col gap-3'>
                <div className='flex flex-col gap-4'>
                    <label className='font-semibold uppercase text-gray-300 text-sm'>Project Name</label>
                    <input required className='w-full rounded-lg border border-gray-700 bg-gray-900 px-5 py-3 text-lg font-medium' placeholder='e.g., Global Expasion 2025' onChange={(e)=>setProjectData({...projectData, title: e.target.value})}></input>
                </div>
                <div className='flex flex-col gap-3'>
                    <label className='font-semibold uppercase text-gray-300 text-sm'>Project Description</label>
                    <textarea required className='w-full rounded-lg border border-gray-700 bg-gray-900 px-5 py-3 font-medium min-h-[160px] resize-none text-base' placeholder='Briefly describe the cision and high-level goals for this project...' onChange={(e)=>setProjectData({...projectData, description: e.target.value})}></textarea>
                </div>
                <div className='flex justify-between mb-4 pb-8 border-b border-gray-700'>
                    <div className='flex flex-col gap-3'>
                        <label className='font-semibold uppercase text-gray-300 text-sm'>Due Date</label>
                        <div className='flex justify-between rounded-lg border border-gray-700 bg-gray-900 px-5 py-3 '>
                            <input required type='date' className='text-white' onChange={(e)=>setProjectData({...projectData, due_date: e.target.value})}></input>
                        </div>
                    </div>
                    <div className='flex flex-col gap-3 mr-4 items-center'>
                        <label className='font-semibold uppercase text-gray-300 text-sm'>Completed</label>
                        <div className="flex items-center ">
                            <input id="cb1-6" type="checkbox" className="peer hidden" onChange={(e)=>setProjectData({...projectData, completed: e.target.checked})}/>
                            
                            <label 
                                htmlFor="cb1-6" 
                                className="relative h-8 w-16 cursor-pointer rounded-full bg-gray-200 p-1 transition-all duration-300 ease-in-out 
                                    peer-checked:bg-[#137fec] 
                                    after:block after:h-full after:w-1/2 after:rounded-full after:bg-white after:transition-all after:duration-200 after:content-[''] 
                                    peer-checked:after:translate-x-full">
                            </label>
                        </div>
                    </div>
                </div>
                <div className='flex gap-8 items-center '>

                    <button type='submit' className='relative flex justify-center gap-2 items-center group bg-[#137fec] px-5 py-3 rounded-lg shadow-xl cursor-pointer w-[80%]'>
                        {loading ?  'Loading...' : 'Create Project'}
                        {loading ? <div className='absolute top-[35%] right-4 animate-spin rounded-full h-4 w-4 border-t-3 border-white'></div> : <div className='group-hover:translate-x-2 duration-200'><ArrowForwardIcon/></div>}
                    </button>

                    <Link to='/dashboard/projects' className='mr-4'> Cancel</Link>
                </div>
            </form>
            <div className='flex gap-4 justify-center items-center '>
                <div className='text-xs text-gray-500 uppercase flex items-center gap-2'><EnhancedEncryptionRoundedIcon fontSize='small'/>Encrypted</div>

                <div className='text-xs text-gray-500 uppercase flex items-center gap-2'><CloudDoneRoundedIcon fontSize='small'/>Auto-save</div>

                <div className='text-xs text-gray-500 uppercase flex items-center gap-2'><ElectricBoltRoundedIcon fontSize='small'/>quickaction</div>
            </div>
        </div>
    </div>
  )
}


export default CreateProject