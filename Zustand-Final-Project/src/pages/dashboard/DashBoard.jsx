import { useProjectStore } from '../../store/useProjectStore'
import {useEffect} from 'react'

function DashBoard() {

    const {getProjects, projects} = useProjectStore()

    console.log(projects)

    useEffect(()=>{
        async function fetchProyects(){
            await getProjects()
        }
        fetchProyects()
    },[])

    return (
        <>
            <h2>Este es el dashboard</h2>
        </>
    )
}



export default DashBoard