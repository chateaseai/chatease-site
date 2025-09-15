import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Logo from '../ui/Logo.jsx'
import MobileMenu from './MobileMenu.jsx'

export default function App() {
  const [open, setOpen] = React.useState(false)
  return (
    <div className="min-h-screen subtle-bg">
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-slate-200">
        <div className="container h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Logo />
            <div className="flex flex-col">
              <span className="text-lg font-semibold tracking-tight">ChatEase</span>
              <span className="text-[11px] text-slate-500 -mt-1">AI Chatbots & Automation</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <NavLink to="/" className="nav-link">Home</NavLink>
            <NavLink to="/services" className="nav-link">Services</NavLink>
            <NavLink to="/pricing" className="nav-link">Pricing</NavLink>
            <NavLink to="/about" className="nav-link">About</NavLink>
            <NavLink to="/contact" className="nav-link">Contact</NavLink>
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <a href="/contact#demo" className="btn-primary">Request Free Demo</a>
          </div>
          <button className="md:hidden rounded-xl border px-3 py-2 text-sm" onClick={() => setOpen(true)}>Menu</button>
        </div>
      </header>
      <MobileMenu open={open} onClose={() => setOpen(false)} />
      <main>
        <Outlet />
      </main>
      <footer className="mt-16 border-t border-slate-200">
        <div className="container py-10 text-sm text-slate-600 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          <div className="flex items-center gap-2">
            <Logo small />
            <span>© {new Date().getFullYear()} ChatEase. All rights reserved.</span>
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