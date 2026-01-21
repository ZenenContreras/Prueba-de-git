import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router";
import { PublicLayout } from './pages/PublicLayout.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <div className='bg-[#1a2a37] h-screen'>
        <Routes>
            {/* Rutas Publicas */}
            <Route element={<PublicLayout/>}> 
              <Route path='/' element={<App />}></Route>
              <Route path='/login' element={<Login />}></Route>
              <Route path='/register' element={<Register />}></Route>
            </Route>

            {/* Rutas Privadas */}

            
        </Routes>
      </div>
  </BrowserRouter>
)
