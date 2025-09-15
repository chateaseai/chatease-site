import React from 'react'
import Section from '../ui/Section.jsx'

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-10 md:pt-16 pb-10 md:pb-16">
        <div className="container grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="badge">AI chatbots that work while you sleep</div>
            <h1 className="mt-5 text-4xl md:text-5xl font-bold tracking-tight">
              Turn chats into customers with <span className="text-navy">ChatEase</span>
            </h1>
            <p className="mt-4 text-slate-600 text-lg leading-relaxed">
              We design, build, and optimize AI chatbots that answer questions, capture leads, and
              book appointments—so your business grows 24/7 without extra headcount.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="/contact#demo" className="btn-primary">Request Free Demo</a>
              <a href="/pricing" className="btn-outline">See Pricing</a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm text-slate-500">
              <div className="flex items-center gap-2">✓ 14‑day optimization included</div>
              <div className="flex items-center gap-2">✓ Privacy‑first setup</div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full card">
              <div className="grid grid-cols-3 gap-4 h-full">
                <div className="col-span-2 flex flex-col gap-3">
                  <div className="card p-4 flex items-center gap-3 shadow-none">
                    <div className="font-medium">Visitor</div>
                    <div className="text-sm text-slate-500">Do you ship internationally?</div>
                  </div>
                  <div className="card p-4 flex items-center gap-3 shadow-none">
                    <div className="font-medium">ChatEase Bot</div>
                    <div className="text-sm text-slate-500">Yes! Free shipping over $50. Want 10% off?</div>
                  </div>
                  <div className="card p-4 flex items-center gap-3 shadow-none">
                    <div className="font-medium">Visitor</div>
                    <div className="text-sm text-slate-500">Book me a 15-min demo.</div>
                  </div>
                </div>
                <div className="col-span-1 flex flex-col gap-3">
                  <div className="h-full rounded-2xl border border-slate-200 p-4 text-sm text-slate-600">
                    <div className="font-semibold">Automation Flow</div>
                    <ul className="list-disc ml-5 mt-2 space-y-2">
                      <li>FAQ answers</li>
                      <li>Collect email</li>
                      <li>Send to CRM</li>
                      <li>Book meeting</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why ChatEase */}
      <Section id="why" title="Why ChatEase?" subtitle="Smarter support, more leads, zero extra headcount.">
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
      <Section id="services" title="Services" subtitle="Pick a package or ask for a custom setup.">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card">
            <h4 className="font-semibold text-lg">Basic Setup</h4>
            <p className="mt-2 text-slate-600">FAQ bot, lead capture, website integration.</p>
            <p className="mt-4 font-medium">From $299</p>
          </div>
          <div className="card">
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
          <a href="/services" className="btn-outline">Explore Services</a>
        </div>
      </Section>

      {/* CTA Banner */}
      <Section id="cta" narrow>
        <div className="card text-center">
          <h3 className="text-2xl font-bold">Ready to grow with AI?</h3>
          <p className="mt-2 text-slate-600">Get a free demo tailored to your business.</p>
          <a href="/contact#demo" className="btn-primary mt-4">Book a Free Demo</a>
        </div>
      </Section>
    </div>
  )
}