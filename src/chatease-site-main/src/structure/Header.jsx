import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from '../ui/Logo.jsx'

export default function Header() {
  const { pathname } = useLocation()

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <nav className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Logo />
          <span className="sr-only">ChatEase</span>
        </Link>

        <div className="flex items-center gap-4 text-sm">
          <Link to="/services" className={navClass(pathname, '/services')}>Services</Link>
          <Link to="/pricing" className={navClass(pathname, '/pricing')}>Pricing</Link>
          <Link to="/about" className={navClass(pathname, '/about')}>About</Link>
          <Link to="/contact" className={navClass(pathname, '/contact')}>Contact</Link>

          <Link to="/privacy" className={navClass(pathname, '/privacy')}>Privacy</Link>
          <Link to="/terms" className={navClass(pathname, '/terms')}>Terms</Link>

          <Link
            to="/contact"
            className="ml-2 rounded-lg px-3 py-2 bg-gradient-to-r from-sky-400 to-violet-600 text-white font-medium"
          >
            Request demo
          </Link>
        </div>
      </nav>
    </header>
  )
}

function navClass(pathname, href) {
  const active = pathname === href
  return [
    "hover:underline",
    active ? "text-violet-700 font-medium" : "text-slate-700"
  ].join(" ")
}