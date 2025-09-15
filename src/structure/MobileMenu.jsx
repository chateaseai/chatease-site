import React from 'react'
import { NavLink } from 'react-router-dom'

export default function MobileMenu({ open, onClose }) {
  return (
    <div className={`fixed inset-0 z-50 ${open ? '' : 'pointer-events-none'}`} aria-hidden={!open}>
      <div className={`absolute inset-0 bg-black/30 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`} onClick={onClose} />
      <div className={`absolute right-0 top-0 h-full w-72 bg-white border-l border-slate-200 p-6 transition-transform ${open ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between mb-6">
          <span className="text-lg font-semibold">Menu</span>
          <button className="rounded-xl border px-3 py-1 text-sm" onClick={onClose}>Close</button>
        </div>
        <nav className="flex flex-col gap-4 text-slate-800">
          <NavLink to="/" onClick={onClose}>Home</NavLink>
          <NavLink to="/services" onClick={onClose}>Services</NavLink>
          <NavLink to="/pricing" onClick={onClose}>Pricing</NavLink>
          <NavLink to="/about" onClick={onClose}>About</NavLink>
          <NavLink to="/contact" onClick={onClose}>Contact</NavLink>
        </nav>
      </div>
    </div>
  )
}