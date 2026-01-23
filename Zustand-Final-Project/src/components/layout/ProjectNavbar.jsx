import AddRoundedIcon from '@mui/icons-material/AddRounded';
import NotificationsActiveRoundedIcon from '@mui/icons-material/NotificationsActiveRounded';
import {Link} from 'react-router' 

function ProjectNavbar () {
    return (
        <nav className='max-w-screen flex justify-between p-6'>
            <div className='flex flex-col '>
                <h2 className='text-2xl font-bold'>Active Projects</h2>
                <h3 className='text-sm text-gray-500'>Managing x ongoing proyects</h3>
            </div>
            <div className='flex gap-6 items-center'>
            <button className=' cursor-pointer '><NotificationsActiveRoundedIcon sx={{color: '#6a7282'}}/></button>
            <Link to='/dashboard/projects/create' className='flex gap-4 items-center px-4 py-2.5 rounded-lg font-semibold text-sm bg-[#137fec] cursor-pointer '><AddRoundedIcon/>  Add New Project</Link>
            </div>
        </nav>
    )
}

export default ProjectNavbar