import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router";
import PublicLayout from './components/layout/PublicLayout.jsx';
import Login from './pages/auth/Login.jsx';
import Register from './pages/auth/Register.jsx';
import ProtetedLayout from './components/layout/ProtetedLayout.jsx'
import DashBoard from './pages/dashboard/DashBoard.jsx';
import Projects from './pages/projects/Projects.jsx'
import Project from './pages/projects/Project.jsx'
import CreateProject from './pages/projects/CreateProject.jsx'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <div className='bg-[#1a2a37] min-h-screen text-white'>
      <Routes>
        {/* Rutas Publicas */}
        <Route element={<PublicLayout />}>
          <Route index element={<App />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
        </Route>

        {/* Rutas Privadas */}

        <Route element={<ProtetedLayout />}>
          <Route path='/dashboard' element={<DashBoard />}></Route>
          <Route path='/dashboard/projects' element={<Projects />}></Route>
          <Route path='/dashboard/projects/create' element={<CreateProject />}></Route>
          <Route path='/dashboard/projects/:id' element={<Project />}></Route>
        </Route>

      </Routes>
    </div>
  </BrowserRouter>
)
