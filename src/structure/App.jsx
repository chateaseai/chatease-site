import React from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import Logo from '../ui/Logo.jsx'

export default function App() {
  const [menuOpen, setMenuOpen] = React.useState(false)
  const { pathname } = useLocation()
  return (
    <div className="min-h-screen bg-surface">
      <header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b border-slate-200">
        <div className="container h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Logo />
            <div className="flex flex-col leading-tight">
              <span className="text-lg font-semibold tracking-tight">ChatEase</span>
              <span className="text-[11px] text-slate-500 -mt-0.5">AI Chatbots · Automation</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-2">
            {['Home','Services','Pricing','About','Contact'].map((label) => {
              const path = label === 'Home' ? '/' : '/' + label.toLowerCase()
              const active = pathname === path
              return (
                <NavLink key={label} to={path} className={`nav-link ${active ? 'active' : ''}`}>
                  {label}
                </NavLink>
              )
            })}
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <a href="/contact#demo" className="btn-cta">Request Free Demo</a>
          </div>
          <button className="md:hidden rounded-xl border px-3 py-2 text-sm" onClick={() => setMenuOpen(s => !s)}>Menu</button>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white">
            <div className="container py-3 flex flex-col gap-2">
              <a href="/" className="nav-link">Home</a>
              <a href="/services" className="nav-link">Services</a>
              <a href="/pricing" className="nav-link">Pricing</a>
              <a href="/about" className="nav-link">About</a>
              <a href="/contact" className="nav-link">Contact</a>
              <a href="/contact#demo" className="btn-cta mt-2">Request Free Demo</a>
            </div>
          </div>
        )}
      </header>
      <main>
        <Outlet />
      </main>
      <div className="sticky-cta">
        <div className="sticky-cta-inner">
          <a href="/contact#demo" className="btn-cta">Request Free Demo</a>
        </div>
      </div>
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