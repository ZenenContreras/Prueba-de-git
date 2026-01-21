import { useAuthStore } from '../../store/useAuthStore'
import DashboardNavbar from '../../components/layout/DashboardNavbar'
import Projects from '../projects/Projects'

function DashBoard() {

    const { logOut } = useAuthStore()

    return (
        <>
            <h2>Este es el dashboard</h2>
        </>
    )
}



export default DashBoard