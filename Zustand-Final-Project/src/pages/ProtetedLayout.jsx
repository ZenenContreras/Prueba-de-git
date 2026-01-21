import {Outlet, Navigate, Outlet} from 'react-router'

function ProtetedLayout () {
    const token = useAuthStore((state) => state.token )

    if(!token){
        return <Navigate to='/login' replace/>
    }
    return <Outlet />
}

export default ProtetedLayout