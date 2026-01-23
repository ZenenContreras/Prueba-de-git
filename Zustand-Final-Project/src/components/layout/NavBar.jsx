import {Link} from 'react-router'
import FlagRounded from '@mui/icons-material/Flag';

export const NavBar = () => {
    return (
        <nav className="flex justify-between items-center py-4 px-6 text-white border-b border-gray-500">
            <h2 className="font-bold flex items-center gap-2 text-lg md:text-xl"> <FlagRounded sx={{color: '#137fec'}}/> PrivateProyect</h2>
            <Link to='/register' className="px-4 py-2 rounded-lg bg-[#137fec] cursor-pointer text-xs md:text-md active:scale-102">Request Access</Link>
        </nav>
    )
}