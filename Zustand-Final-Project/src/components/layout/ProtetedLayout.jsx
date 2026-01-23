import { Navigate, Outlet } from 'react-router'
import { useAuthStore } from '../../store/useAuthStore'
import DashboardNavbar from './DashboardNavbar'
import ProjectNavbar from './ProjectNavbar'

function ProtetedLayout() {
    const token = useAuthStore((state) => state.token)

    if (!token) {
        return <Navigate to='/login' replace />
    }
    return (
        <div className='flex'>
            <DashboardNavbar />
            <div className='flex flex-col w-full '>
                <ProjectNavbar />
                <Outlet />
            </div>
        </div>
    )
}

export default ProtetedLayout