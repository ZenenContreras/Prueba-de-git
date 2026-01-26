import { BrowserRouter, Routes, Route } from "react-router";
import PublicLayout from './components/layout/PublicLayout.jsx';
import Login from './pages/auth/Login.jsx';
import Register from './pages/auth/Register.jsx';
import ProtetedLayout from './components/layout/ProtetedLayout.jsx'
import DashBoard from './pages/dashboard/DashBoard.jsx';
import Projects from './pages/projects/Projects.jsx'
import ProjectDetail from './pages/projects/ProjectDetail.jsx'
import CreateProject from './pages/projects/CreateProject.jsx'
import NotFound from './pages/NotFound.jsx';
import {Toaster} from 'react-hot-toast'
import Home from "./pages/Home.jsx";
function App() {

  return (
    <BrowserRouter>
        <Toaster 
          position="bottom-right"
          reverseOrder={false}
          toastOptions={{
            // Puedes personalizar los colores para que peguen con tu estilo oscuro
            style: {
              background: '#192633',
              color: '#fff',
              border: '1px solid #4b5563'
            },
          }}
        />
      <div className='bg-[#1a2a37] min-h-screen text-white'>
        
        <Routes>
          {/* Rutas Publicas */}
          <Route element={<PublicLayout />}>
            <Route index element={<Home />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/register' element={<Register />}></Route>
          </Route>

          {/* Rutas Privadas */}
          <Route element={<ProtetedLayout />}>
            <Route path='/dashboard' element={<DashBoard />}></Route>
            <Route path='/dashboard/projects' element={<Projects />}></Route>
            <Route path='/dashboard/projects/create' element={<CreateProject />}></Route>
            <Route path='/dashboard/projects/:id' element={<ProjectDetail />}></Route>
            <Route path='*' element={<NotFound/>}></Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App