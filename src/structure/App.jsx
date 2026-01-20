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
              <span className="text-[11px] text-slate-600 tracking-wide mt-0.5">
                AI-chatbotit · Automaatio
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-2">
            <NavLink to="/" className={({ isActive }) => nav-item ${isActive ? 'active' : ''}}>
              Etusivu
            </NavLink>
            <NavLink to="/services" className={({ isActive }) => nav-item ${isActive ? 'active' : ''}}>
              Palvelut
            </NavLink>
            <NavLink to="/pricing" className={({ isActive }) => nav-item ${isActive ? 'active' : ''}}>
              Hinnasto
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => nav-item about ${isActive ? 'active' : ''}}>
              Tietoa
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => nav-item ${isActive ? 'active' : ''}}>
              Ota yhteyttä
            </NavLink>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="/contact#demo" className="btn-cta">
              Varaa ilmainen demo
            </a>
          </div>

          <button
            className="md:hidden rounded-xl border px-3 py-2 text-sm"
            onClick={() => setMenuOpen((s) => !s)}
          >
            Valikko
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white">
            <div className="container py-3 flex flex-col gap-2">
              <a href="/" className="nav-item">Etusivu</a>
              <a href="/services" className="nav-item">Palvelut</a>
              <a href="/pricing" className="nav-item">Hinnasto</a>
              <a href="/about" className="nav-item">Tietoa</a>
              <a href="/contact" className="nav-item">Ota yhteyttä</a>
              <a href="/contact#demo" className="btn-cta mt-2">Varaa ilmainen demo</a>
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
            <span>
              ©️ {new Date().getFullYear()} ChatEase — fiksummat keskustelut, helpompi arki.
            </span>
          </div>

          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-slate-800">Tietosuoja</a>
            <a href="/terms" className="hover:text-slate-800">Käyttöehdot</a>
          </div>
        </div>
      </footer>
    </div>
  )
}