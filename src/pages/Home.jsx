import React from 'react'
import Section from '../ui/Section.jsx'

export default function Home() {
  return (
    <div>
      {/* Hero (narrow, centered) */}
      <section className="section-hero pt-12 md:pt-20 pb-12 md:pb-20">
        <div className="container max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">
            Turn conversations into customers — automatically
          </h1>
          <p className="mt-4 text-slate-700 text-lg leading-relaxed measure">
            Done-for-you AI chatbots that answer questions, capture leads, and book appointments.
            Clear setup, measurable results, and ongoing optimization.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="/contact#demo" className="btn-cta">Request Free Demo</a>
            <a href="/pricing" className="btn-secondary">See Pricing</a>
          </div>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm text-slate-600">
            <div className="badge">✓ 24/7 responses</div>
            <div className="badge">✓ 14-day optimization</div>
            <div className="badge">✓ Privacy-first</div>
          </div>
        </div>
      </section>

      {/* Why ChatEase? */}
      <section className="section-why py-14 md:py-20">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Why ChatEase?</h2>
          <p className="mt-3 text-slate-700 text-lg">Smarter support, more leads, zero extra headcount.</p>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {/* Always On */}
            <div className="card">
              <div className="flex items-start gap-3">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" fill="#38BDF8" />
                  <path d="M12 6v6l4 2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div>
                  <h3 className="font-semibold text-lg">Always On</h3>
                  <p className="mt-1 text-slate-600">24/7 automated answers so prospects never wait.</p>
                </div>
              </div>
            </div>

            {/* Feels Human */}
            <div className="card">
              <div className="flex items-start gap-3">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect x="3" y="5" width="18" height="12" rx="6" fill="#7C3AED"/>
                  <path d="M8 18c4-.5 6-2.5 7-5.5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <div>
                  <h3 className="font-semibold text-lg">Feels Human</h3>
                  <p className="mt-1 text-slate-600">Trained on your docs/URLs for accurate, on-brand replies.</p>
                </div>
              </div>
            </div>

            {/* Drives Sales */}
            <div className="card">
              <div className="flex items-start gap-3">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M3 17l6-6 4 4 7-7" stroke="#22C55E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div>
                  <h3 className="font-semibold text-lg">Drives Sales</h3>
                  <p className="mt-1 text-slate-600">Capture leads, send to your CRM, and book calls automatically.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <Section className="section-services" id="services" title="Services" subtitle="Pick a package or ask for a custom setup.">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card">
            <h4 className="font-semibold text-lg">Basic Setup</h4>
            <p className="mt-2 text-slate-600">FAQ bot, lead capture, website integration.</p>
            <p className="mt-4 font-medium">From $299</p>
          </div>
          <div className="card border-2 border-sky/40">
            <h4 className="font-semibold text-lg">Advanced Automation</h4>
            <p className="mt-2 text-slate-600">AI responses + CRM/email integration + workflows.</p>
            <p className="mt-4 font-medium">From $699</p>
          </div>
          <div className="card">
            <h4 className="font-semibold text-lg">Ongoing Support</h4>
            <p className="mt-2 text-slate-600">Continuous updates, optimization, reporting.</p>
            <p className="mt-4 font-medium">From $149/mo</p>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section id="cta" className="section-cta" narrow>
        <div className="card text-center">
          <h3 className="text-2xl font-bold">Ready to grow with AI?</h3>
          <p className="mt-2 text-slate-700">Get a free demo tailored to your business.</p>
          <a href="/contact#demo" className="btn-cta mt-4 inline-block">Book a Free Demo</a>
        </div>
      </Section>
    </div>
  )
}