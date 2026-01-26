import React from 'react';
import { Link } from 'react-router';
import RocketLaunchRoundedIcon from '@mui/icons-material/RocketLaunchRounded';
import SecurityRoundedIcon from '@mui/icons-material/SecurityRounded';
import SpeedRoundedIcon from '@mui/icons-material/SpeedRounded';

function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* --- HERO SECTION --- */}
      <section className="w-full max-w-6xl px-6 py-20 text-center flex flex-col items-center gap-8">
        <div className="animate-fade-in">
          <span className="bg-[#137fec]/10 text-[#137fec] text-sm font-bold px-4 py-2 rounded-full border border-[#137fec]/20">
            v1.0 is now live 🚀
          </span>
          <h1 className="text-5xl md:text-7xl font-black mt-6 leading-tight">
            Manage your projects <br />
            <span className="text-[#137fec]">with precision.</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mt-6 mx-auto">
            The ultimate workspace for developers. Track milestones, manage tasks, and 
            collaborate in a high-performance environment.
          </p>
        </div>

        <div className="flex gap-4 mt-4">
          <Link 
            to="/login" 
            className="bg-[#137fec] hover:bg-[#137fec]/80 px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-[#137fec]/20"
          >
            Get Started
          </Link>
          <Link 
            to="/register" 
            className="bg-gray-800 hover:bg-gray-700 border border-gray-700 px-8 py-4 rounded-xl font-bold transition-all"
          >
            Create Account
          </Link>
        </div>
      </section>

      {/* --- FEATURES SECTION --- */}
      <section className="w-full max-w-6xl px-6 py-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-8 bg-[#192633] border border-gray-700 rounded-2xl flex flex-col gap-4">
          <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-500">
            <SpeedRoundedIcon />
          </div>
          <h3 className="text-xl font-bold">Incredible Speed</h3>
          <p className="text-gray-400">Optimized with Zustand and Vite for a lag-free experience even with large data sets.</p>
        </div>

        <div className="p-8 bg-[#192633] border border-gray-700 rounded-2xl flex flex-col gap-4">
          <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center text-purple-500">
            <SecurityRoundedIcon />
          </div>
          <h3 className="text-xl font-bold">Secure by Default</h3>
          <p className="text-gray-400">JWT-based authentication and protected routes keep your project data safe.</p>
        </div>

        <div className="p-8 bg-[#192633] border border-gray-700 rounded-2xl flex flex-col gap-4">
          <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center text-green-500">
            <RocketLaunchRoundedIcon />
          </div>
          <h3 className="text-xl font-bold">Auto-Persistence</h3>
          <p className="text-gray-400">Never lose your progress. Your projects are automatically saved in real-time.</p>
        </div>
      </section>

      {/* --- FOOTER SIMPLIFICADO --- */}
      <footer className="w-full py-10 border-t border-gray-800 text-center text-gray-500 text-sm">
        © 2026 DevTracker S.A.S. - Todo a un clic de distancia.
      </footer>
    </div>
  );
}

export default Home;