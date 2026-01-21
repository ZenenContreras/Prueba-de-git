import {Link} from 'react-router'

export const NavBar = () => {
    return (
        <nav className="flex justify-between items-center py-4 px-8 text-white border-b border-gray-500">
            <h2 className="font-bold"> 🚩 Private Proyect</h2>
            <Link to='/login' className="px-4 py-2 rounded-lg bg-[#137fec] cursor-pointer active:scale-102">Login</Link>
        </nav>
    )
}