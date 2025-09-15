import React from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import Logo from '../ui/Logo.jsx'

const navItems = [
  { label: 'Home', path: '/', chip: 'chip-home' },
  { label: 'Services', path: '/services', chip: 'chip-services' },
  { label: 'Pricing', path: '/pricing', chip: 'chip-pricing' },
  { label: 'About', path: '/about', chip: 'chip-about' },
  { label: 'Contact', path: '/contact', chip: 'chip-contact' },
];

export default function App() {
  const [menuOpen, setMenuOpen] = React.useState(false)
  const { pathname } = useLocation()
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
            {navItems.map(({label, path, chip}) => {
              const active = pathname === path
              const classes = `nav-chip ${chip} ${active ? 'active' : ''}`
              return (
                <NavLink key={label} to={path} className={classes}>
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
              {navItems.map(({label, path, chip}) => (
                <a key={label} href={path} className={`nav-chip ${chip}`}>{label}</a>
              ))}
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