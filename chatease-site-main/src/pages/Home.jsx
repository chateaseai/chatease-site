import React from 'react';
import { Link } from 'react-router-dom';
import ChatDemo from '../ui/ChatDemo.jsx';

export default function Home() {
  return (
    <section className="relative overflow-hidden">
      {/* Animated gradient backdrop */}
      <div className="absolute inset-0 animate-gradient opacity-25" aria-hidden="true" />

      {/* Soft glassy overlay to keep text readable */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.6),_transparent_60%)]" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-28">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          {/* LEFT: headline & CTAs */}
          <div className="text-center md:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs md:text-sm bg-white/70 backdrop-blur">
              <span className="inline-block h-2 w-2 rounded-full bg-violet-600" />
              Welcome to ChatEase
            </span>

            <h1 className="mt-5 text-4xl md:text-6xl font-bold tracking-tight text-slate-900">
              Turn conversations into customers — automatically
            </h1>

            <p className="mt-4 md:mt-5 text-slate-700 md:text-lg">
              AI chatbots and automations that answer instantly, qualify leads,
              and book meetings 24/7 — so your team can focus on what matters.
            </p>

            <div className="mt-7 flex justify-center md:justify-start gap-3">
              {/* Match header CTA gradient exactly */}
              <Link
                to="/contact"
                className="rounded-lg px-5 py-3 bg-gradient-to-r from-sky-400 to-violet-600 text-white font-medium shadow-lg shadow-violet-500/30 ring-1 ring-white/60 hover:opacity-95 transition"
              >
                Request a demo
              </Link>
              <Link
                to="/services"
                className="rounded-lg px-5 py-3 border border-slate-300 bg-white/80 backdrop-blur"
              >
                Explore services
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-4 text-sm justify-center md:justify-start text-slate-600">
              <Link to="/pricing" className="underline hover:text-slate-800">See pricing</Link>
              <span>•</span>
              <Link to="/about" className="underline hover:text-slate-800">About</Link>
              <span>•</span>
              <Link to="/contact" className="underline hover:text-slate-800">Contact</Link>
            </div>
          </div>

          {/* RIGHT: live chat demo */}
          <div className="md:pl-6">
            <ChatDemo />
          </div>
        </div>

        {/* Badge row (optional) */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <Badge>24/7</Badge>
          <Badge>GDPR-ready</Badge>
          <Badge>CRM-friendly</Badge>
          <Badge>Fast setup</Badge>
        </div>
      </div>
    </section>
  );
}

function Badge({ children }) {
  return (
    <div className="rounded-xl border bg-white/70 backdrop-blur p-4 text-center text-sm text-slate-700">
      {children}
    </div>
  );
}

