import React from 'react'
import Section from '../ui/Section.jsx'

export default function Home() {
  return (
    <div>
      <section className="section-hero pt-12 md:pt-20 pb-12 md:pb-20">
        <div className="container grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Turn conversations into customers — automatically
            </h1>
            <p className="mt-4 text-slate-700 text-lg leading-relaxed">
              Done-for-you AI chatbots that answer questions, capture leads, and book appointments.
              Clear setup, measurable results, and ongoing optimization.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="/contact#demo" className="btn-cta">Request Free Demo</a>
              <a href="/pricing" className="btn-secondary">See Pricing</a>
            </div>
          </div>
          <div className="relative">
            <div className="card p-0 overflow-hidden">
              <div className="h-56 md:h-72 w-full" style={{background: 'radial-gradient(1200px 280px at 10% 0%, rgba(56,189,248,0.28), transparent 40%), radial-gradient(800px 260px at 90% 10%, rgba(124,58,237,0.28), transparent 45%), radial-gradient(900px 280px at 50% 100%, rgba(34,197,94,0.24), transparent 40%)'}} />
            </div>
          </div>
        </div>
      </section>

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