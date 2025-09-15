import React from 'react'
import Section from '../ui/Section.jsx'

export default function Home() {
  return (
    <div>
      {/* Hero */}
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
            <div className="mt-6 flex items-center gap-4 text-sm text-slate-600 flex-wrap">
              <div>✓ 14-day optimization included</div>
              <div>✓ Privacy-first setup</div>
              <div>✓ Works on web & mobile</div>
            </div>
          </div>
          {/* abstract visual */}
          <div className="relative">
            <div className="card p-0 overflow-hidden">
              <div className="h-56 md:h-72 w-full" style={{background: 'radial-gradient(1200px 280px at 10% 0%, rgba(56,189,248,0.25), transparent 40%), radial-gradient(800px 260px at 90% 10%, rgba(124,58,237,0.25), transparent 45%), radial-gradient(900px 280px at 50% 100%, rgba(34,197,94,0.20), transparent 40%)'}} />
            </div>
          </div>
        </div>
      </section>

      {/* Why ChatEase */}
      <Section className="section-why" id="why" title="Why ChatEase?" subtitle="Smarter support, more leads, zero extra headcount.">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card">
            <h3 className="font-semibold text-lg">Always On</h3>
            <p className="mt-2 text-slate-600">24/7 customer support so prospects never wait.</p>
          </div>
          <div className="card">
            <h3 className="font-semibold text-lg">Feels Human</h3>
            <p className="mt-2 text-slate-600">AI answers trained on your content for accurate replies.</p>
          </div>
          <div className="card">
            <h3 className="font-semibold text-lg">Drives Sales</h3>
            <p className="mt-2 text-slate-600">Capture leads and book appointments automatically.</p>
          </div>
        </div>
      </Section>

      {/* Services preview */}
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
        <div className="mt-6">
          <a href="/services" className="btn-secondary">Explore Services</a>
        </div>
      </Section>

      {/* How it works */}
      <Section id="how" title="How it works" subtitle="From hello to booked in three simple steps.">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card">
            <h4 className="font-semibold">1) Ask</h4>
            <p className="text-slate-600 mt-2">Customers chat on your site or socials. The bot understands intent and context.</p>
          </div>
          <div className="card">
            <h4 className="font-semibold">2) Answer</h4>
            <p className="text-slate-600 mt-2">AI gives accurate replies trained on your pages, docs, and FAQs.</p>
          </div>
          <div className="card">
            <h4 className="font-semibold">3) Act</h4>
            <p className="text-slate-600 mt-2">Capture leads, send to CRM, or book meetings—automatically.</p>
          </div>
        </div>
      </Section>

      {/* CTA Banner */}
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