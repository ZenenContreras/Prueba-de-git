import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import Person4RoundedIcon from '@mui/icons-material/Person4Rounded';
import SettingsIcon from '@mui/icons-material/Settings';
import {useAuthStore} from '../../store/useAuthStore'
import LogoutIcon from '@mui/icons-material/Logout';
import {Link} from 'react-router'

function DashboardNavbar () {

    const user = useAuthStore((state) => state.user)
    const logOut = useAuthStore((state)=> state.logOut)
    return (
        <aside className='min-h-screen flex flex-col w-64 items-center border-r border-gray-700'>
            <div className='w-full flex-1'>
                <div className='flex gap-4 items-center mb-8 py-6 px-4 text-[#137fec] '>
                    <DashboardRoundedIcon fontSize='large' />
                    <Link to='/dashboard' className='font-bold text-2xl'>Focus</Link>
                </div>

                <ul className='flex flex-col gap-4 '>
                    <Link to='/dashboard/projects' className='text-md flex items-center gap-2 hover:text-[#137fec] hover:bg-[#137fec10] py-3 px-4 rounded-lg hover:cursor-pointer'><GridViewRoundedIcon/> Projects</Link>
                    <li className=' text-md flex items-center gap-2 hover:text-[#137fec] hover:bg-[#137fec10] py-2 px-4 rounded-lg hover:cursor-pointer'><Person4RoundedIcon/> Profile</li>
                    <li className=' text-md flex items-center gap-2 hover:text-[#137fec] hover:bg-[#137fec10] py-2 px-4 rounded-lg hover:cursor-pointer'><SettingsIcon/> Settings</li>
                </ul>
            </div>

            <div className='py-6 px-4 w-full flex gap-4'>
                <div>
                    <h2>{user.email}</h2>
                </div>
                <button onClick={logOut} className='cursor-pointer text-[#137fec] '> 
                    <LogoutIcon />
                </button>
            </div>
        </aside>
    )
}

export default DashboardNavbar