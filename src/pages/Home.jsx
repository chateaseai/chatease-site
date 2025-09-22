import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section className="relative overflow-hidden">
      {/* Decorative gradient blobs */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-tr from-sky-300 to-violet-500 opacity-30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-gradient-to-tr from-violet-500 to-sky-300 opacity-30 blur-3xl" />

      <div className="mx-auto max-w-6xl px-4 py-24 md:py-36 relative">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs md:text-sm bg-white/70 backdrop-blur">
            <span className="inline-block h-2 w-2 rounded-full bg-violet-600" />
            Welcome to ChatEase
          </span>

          <h1 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight">
            AI chat & automations that feel effortless
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-slate-600 md:text-lg">
            We build chatbots and workflows that answer instantly, qualify leads,
            and move work forward — so you can focus on what matters.
          </p>

          <div className="mt-8 flex justify-center gap-3">
            <Link
              to="/contact"
              className="rounded-lg px-5 py-3 bg-gradient-to-r from-sky-400 to-violet-600 text-white font-medium"

            >
              Request a demo
            </Link>
            <Link
              to="/services"
              className="rounded-lg px-5 py-3 border border-slate-300 bg-white/70 backdrop-blur"
            >
              Explore services
            </Link>
          </div>

          {/* Quick links row */}
          <div className="mt-10 flex flex-wrap justify-center gap-4 text-sm text-slate-600">
            <Link to="/pricing" className="underline hover:text-slate-800">See pricing</Link>
            <span>•</span>
            <Link to="/about" className="underline hover:text-slate-800">About us</Link>
            <span>•</span>
            <Link to="/contact" className="underline hover:text-slate-800">Contact</Link>
          </div>
        </div>

        {/* Optional mini badges row */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 opacity-80">
          <div className="rounded-xl border bg-white/60 p-4 text-center">24/7</div>
          <div className="rounded-xl border bg-white/60 p-4 text-center">GDPR-ready</div>
          <div className="rounded-xl border bg-white/60 p-4 text-center">CRM-friendly</div>
          <div className="rounded-xl border bg-white/60 p-4 text-center">Fast setup</div>
        </div>
      </div>
    </section>
  )
}
