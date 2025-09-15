import React from 'react'
export default function Section({ id, title, subtitle, children, narrow=false }) {
  return (
    <section id={id} className="py-14 md:py-20">
      <div className={`container ${narrow ? 'max-w-3xl' : ''}`}>
        {title && <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>}
        {subtitle && <p className="mt-3 text-slate-600 text-lg">{subtitle}</p>}
        <div className="mt-8">
          {children}
        </div>
      </div>
    </section>
  )
}