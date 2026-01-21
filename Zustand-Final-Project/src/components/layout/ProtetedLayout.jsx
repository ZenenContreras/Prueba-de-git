import { Navigate, Outlet } from 'react-router'
import { useAuthStore } from '../../store/useAuthStore'
import DashboardNavbar from './DashboardNavbar'

function ProtetedLayout() {
    const token = useAuthStore((state) => state.token)

    if (!token) {
        return <Navigate to='/login' replace />
    }
    return (
        <div className='flex'>
            <DashboardNavbar />
            <Outlet />
        </div>
    )
}

export default ProtetedLayout