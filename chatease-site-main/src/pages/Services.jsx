import React from 'react'
import Section from '../ui/Section.jsx'

export default function Services() {
  return (
    <div>
      <Section title="Services" subtitle="From first bot to full automation.">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card">
            <h4 className="font-semibold text-lg">Basic Chatbot Setup</h4>
            <ul className="mt-3 list-disc ml-5 space-y-2 text-slate-600">
              <li>Website chatbot install</li>
              <li>Core FAQs & greeting</li>
              <li>Lead capture to email/Sheet</li>
            </ul>
            <p className="mt-4 font-medium">From $299</p>
          </div>
          <div className="card border-2 border-sky/40">
            <h4 className="font-semibold text-lg">Advanced Automation</h4>
            <ul className="mt-3 list-disc ml-5 space-y-2 text-slate-600">
              <li>AI responses trained on your docs</li>
              <li>CRM/email integration</li>
              <li>Appointment booking workflow</li>
            </ul>
            <p className="mt-4 font-medium">From $699</p>
          </div>
          <div className="card">
            <h4 className="font-semibold text-lg">Ongoing Optimization</h4>
            <ul className="mt-3 list-disc ml-5 space-y-2 text-slate-600">
              <li>Monthly updates & improvements</li>
              <li>Reporting & insights</li>
              <li>Human handoff tuning</li>
            </ul>
            <p className="mt-4 font-medium">From $149/mo</p>
          </div>
        </div>
      </Section>
    </div>
  )
}