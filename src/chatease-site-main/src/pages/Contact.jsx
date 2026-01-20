import React from 'react'
import Section from '../ui/Section.jsx'

export default function Contact() {
  return (
    <div>
      <Section title="Contact" subtitle="Tell us about your business and we'll set up a free demo." narrow>
        <form name="contact" method="POST" data-netlify="true" action="/thank-you" className="card" id="demo">
          <input type="hidden" name="form-name" value="contact" />
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-sm text-slate-600">Name</label>
              <input required name="name" className="rounded-xl border border-slate-300 px-3 py-2" placeholder="Your name" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm text-slate-600">Email</label>
              <input required name="email" type="email" className="rounded-xl border border-slate-300 px-3 py-2" placeholder="you@company.com" />
            </div>
            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="text-sm text-slate-600">Website (optional)</label>
              <input name="website" className="rounded-xl border border-slate-300 px-3 py-2" placeholder="https://example.com" />
            </div>
            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="text-sm text-slate-600">What do you need?</label>
              <textarea required name="message" className="rounded-xl border border-slate-300 px-3 py-2 min-h-[120px]" placeholder="Tell us about your business and goals" />
            </div>
          </div>
          <div className="mt-4 flex items-center gap-3">
            <button className="btn-cta" type="submit">Request Free Demo</button>
            <span className="text-sm text-slate-500">We respond within 24 hours.</span>
          </div>
        </form>

        <div className="mt-10 card">
          <h3 className="text-lg font-semibold">Prefer email?</h3>
          <p className="text-slate-600">Reach us at <a className="text-sky underline" href="mailto:hello@chatease.ai">hello@chatease.ai</a></p>
        </div>
      </Section>
    </div>
  )
}