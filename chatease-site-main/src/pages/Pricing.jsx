import React from 'react'
import Section from '../ui/Section.jsx'

export default function Pricing() {
  return (
    <div>
      <Section title="Pricing" subtitle="Transparent starting points. Request a quote for custom setups.">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card">
            <h4 className="font-semibold text-lg">Basic</h4>
            <p className="text-3xl font-bold mt-2">$299</p>
            <ul className="mt-3 list-disc ml-5 space-y-2 text-slate-600">
              <li>Chatbot install</li>
              <li>Up to 20 FAQs</li>
              <li>Lead capture to email/Sheet</li>
            </ul>
          </div>
          <div className="card border-2 border-sky/40 relative">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs bg-sky text-white px-3 py-1 rounded-full shadow">Most popular</span>
            <h4 className="font-semibold text-lg mt-2">Pro</h4>
            <p className="text-3xl font-bold mt-2">$699</p>
            <ul className="mt-3 list-disc ml-5 space-y-2 text-slate-600">
              <li>AI responses (docs/URL training)</li>
              <li>CRM + email automation</li>
              <li>Booking flow + human handoff</li>
            </ul>
          </div>
          <div className="card">
            <h4 className="font-semibold text-lg">Care Plan</h4>
            <p className="text-3xl font-bold mt-2">$149<span className="text-base font-medium">/mo</span></p>
            <ul className="mt-3 list-disc ml-5 space-y-2 text-slate-600">
              <li>Updates & improvements</li>
              <li>Monthly reporting</li>
              <li>Priority support</li>
            </ul>
          </div>
        </div>
        <div className="mt-6">
          <a href="/contact" className="btn-cta">Request a Custom Quote</a>
        </div>
      </Section>
    </div>
  )
}