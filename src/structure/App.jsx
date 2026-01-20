import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Logo from '../ui/Logo.jsx'

export default function App() {
  const [menuOpen, setMenuOpen] = React.useState(false)

  // FIXED: Added backticks for template literals
  const navItemClass = ({ isActive }) => 
    `nav-item ${isActive ? 'active' : ''}`
  
  const navItemAboutClass = ({ isActive }) => 
    `nav-item about ${isActive ? 'active' : ''}`

  // Helper to close menu when a link is clicked
  const closeMenu = () => setMenuOpen(false)

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

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-2">
            <NavLink to="/" className={navItemClass}>
              Etusivu
            </NavLink>

            <NavLink to="/services" className={navItemClass}>
              Palvelut
            </NavLink>

            <NavLink to="/pricing" className={navItemClass}>
              Hinnasto
            </NavLink>

            <NavLink to="/about" className={navItemAboutClass}>
              Tietoa
            </NavLink>

            <NavLink to="/contact" className={navItemClass}>
              Yhteystiedot
            </NavLink>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <NavLink to="/contact" className="btn-cta">
              Varaa ilmainen demo
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden rounded-xl border px-3 py-2 text-sm"
            onClick={() => setMenuOpen((s) => !s)}
          >
            {menuOpen ? 'Sulje' : 'Menu'}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white">
            <div className="container py-3 flex flex-col gap-2">
              {/* FIXED: Changed <a> to <NavLink> to prevent page reloads */}
              <NavLink to="/" className={navItemClass} onClick={closeMenu}>Etusivu</NavLink>
              <NavLink to="/services" className={navItemClass} onClick={closeMenu}>Palvelut</NavLink>
              <NavLink to="/pricing" className={navItemClass} onClick={closeMenu}>Hinnasto</NavLink>
              <NavLink to="/about" className={navItemClass} onClick={closeMenu}>Tietoa</NavLink>
              <NavLink to="/contact" className={navItemClass} onClick={closeMenu}>Yhteystiedot</NavLink>
              <NavLink to="/contact" className="btn-cta mt-2" onClick={closeMenu}>
                Varaa ilmainen demo
              </NavLink>
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
            <span>© {new Date().getFullYear()} ChatEase — fiksummat keskustelut, helpommin.</span>
          </div>

          <div className="flex gap-6">
            <NavLink to="/privacy" className="hover:text-slate-800">Tietosuoja</NavLink>
            <NavLink to="/terms" className="hover:text-slate-800">Ehdot</NavLink>
          </div>
        </div>
      </footer>
    </div>
  )
}
