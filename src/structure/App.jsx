import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Logo from '../ui/Logo.jsx'

export default function App() {
  const [menuOpen, setMenuOpen] = React.useState(false)
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-40 backdrop-blur bg-white/85 border-b border-slate-200">
        <div className="container h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Logo />
            <div className="flex flex-col leading-tight">
              <span className="text-lg font-semibold tracking-tight">ChatEase</span>
              <span className="text-[11px] text-slate-600 tracking-wide mt-0.5">AI Chatbots · Automation</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-2">
            <NavLink to="/"        className={({isActive}) => `nav-item ${isActive ? 'active' : ''}`}>Home</NavLink>
            <NavLink to="/services" className={({isActive}) => `nav-item ${isActive ? 'active' : ''}`}>Services</NavLink>
            <NavLink to="/pricing"  className={({isActive}) => `nav-item ${isActive ? 'active' : ''}`}>Pricing</NavLink>
            <NavLink to="/about"    className={({isActive}) => `nav-item about ${isActive ? 'active' : ''}`}>About</NavLink>
            <NavLink to="/contact"  className={({isActive}) => `nav-item ${isActive ? 'active' : ''}`}>Contact</NavLink>
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <a href="/contact#demo" className="btn-cta">Request Free Demo</a>
          </div>
          <button className="md:hidden rounded-xl border px-3 py-2 text-sm" onClick={() => setMenuOpen(s => !s)}>Menu</button>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white">
            <div className="container py-3 flex flex-col gap-2">
              <a href="/" className="nav-item">Home</a>
              <a href="/services" className="nav-item">Services</a>
              <a href="/pricing" className="nav-item">Pricing</a>
              <a href="/about" className="nav-item">About</a>
              <a href="/contact" className="nav-item">Contact</a>
              <a href="/contact#demo" className="btn-cta mt-2">Request Free Demo</a>
            </div>
          </div>
        )}
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="mt-16 border-t border-slate-200">
        <div className="container py-10 text-sm text-slate-600 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          <div className="flex items-center gap-2">
            <Logo small />
            <span>© {new Date().getFullYear()} ChatEase — Smarter conversations, simplified.</span>
          </div>
          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-slate-800">Privacy</a>
            <a href="/terms" className="hover:text-slate-800">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  )
}