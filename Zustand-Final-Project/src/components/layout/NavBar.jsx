import {Link} from 'react-router'
import FlagRounded from '@mui/icons-material/Flag';

export const NavBar = () => {
    return (
        <nav className="flex justify-between items-center py-4 px-6 text-white border-b border-gray-500">
            <h2 className="font-bold flex items-center gap-2 text-lg md:text-xl"> <FlagRounded sx={{color: '#137fec'}}/> PrivateProyect</h2>
            <Link to='/register' className="bg-[#137fec] px-5 py-3 rounded-lg shadow-xl cursor-pointer text-sm md:text-base active:scale-102">Request Access</Link>
        </nav>
    )
}