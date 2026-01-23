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
        <aside className='min-h-screen flex flex-col items-center border-r border-gray-700'>
            <div className='w-full flex-1'>
                <div className='flex gap-4 items-center mb-4 py-6 px-4 text-white '>
                    <div className='bg-[#137fec] p-1 rounded-lg'>
                        <DashboardRoundedIcon fontSize='large' />
                    </div>
                    <Link to='/dashboard' className='font-bold text-xl text-white'>Focus</Link>
                </div>

                <ul className='flex flex-col font-medium'>
                    <Link to='/dashboard/projects' className='text-md flex items-center gap-2 hover:text-[#137fec] hover:bg-[#137fec10] py-4 px-4 rounded-lg hover:cursor-pointer'><GridViewRoundedIcon/> Projects</Link>

                    <li className=' text-md flex items-center gap-2 hover:text-[#137fec] hover:bg-[#137fec10] py-4 px-4 rounded-lg hover:cursor-pointer'><Person4RoundedIcon/> Profile</li>

                    <li className=' text-md flex items-center gap-2 hover:text-[#137fec] hover:bg-[#137fec10] py-4 px-4 rounded-lg hover:cursor-pointer'><SettingsIcon/> Settings</li>
                </ul>
            </div>

            <div className='py-6 px-6 w-full flex gap-4 justify-center border-t border-gray-700 items-center'>
                <img
                    src="https://api.dicebear.com/9.x/big-ears-neutral/svg?seed=Destiny"
                    alt="avatar" 
                    className='w-6 '    
                />
                <div className='flex flex-col items-center'>
                    <h2 className='text-xs font-bold'>{user.user_metadata.full_name.split(' ',[2])}</h2>
                    
                </div>
                <button onClick={logOut} className='cursor-pointer text-[#137fec] '> 
                    <LogoutIcon />
                </button>
            </div>
        </aside>
    )
}

export default DashboardNavbar