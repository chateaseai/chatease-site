import React from 'react'
import Section from '../ui/Section.jsx'

export default function Contact() {
  return (
    <div>
      <Section
        title="Ota yhteyttä"
        subtitle="Kerro lyhyesti tilanteestasi — sovitaan ilmainen demo ja katsotaan, mitä ChatEase voi automatisoida."
        narrow
      >
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          action="/thank-you"
          className="card"
          id="demo"
        >
          <input type="hidden" name="form-name" value="contact" />

          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-sm text-slate-600">Nimi</label>
              <input
                required
                name="name"
                className="rounded-xl border border-slate-300 px-3 py-2"
                placeholder="Etunimi Sukunimi"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm text-slate-600">Sähköposti</label>
              <input
                required
                name="email"
                type="email"
                className="rounded-xl border border-slate-300 px-3 py-2"
                placeholder="sinä@yritys.fi"
              />
            </div>

            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="text-sm text-slate-600">Verkkosivu (valinnainen)</label>
              <input
                name="website"
                className="rounded-xl border border-slate-300 px-3 py-2"
                placeholder="https://esimerkki.fi"
              />
            </div>

            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="text-sm text-slate-600">Mitä tarvitset?</label>
              <textarea
                required
                name="message"
                className="rounded-xl border border-slate-300 px-3 py-2 min-h-[120px]"
                placeholder="Kerro lyhyesti: mitä myyt, kenelle, ja mitä haluaisit automatisoida (esim. kysymykset, liidit, ajanvaraus, CRM, sähköpostit)."
              />
            </div>
          </div>

          <div className="mt-4 flex flex-col md:flex-row md:items-center gap-3">
            <button className="btn-cta" type="submit">Varaa ilmainen demo</button>
            <span className="text-sm text-slate-500">Vastaamme yleensä 24 tunnin kuluessa.</span>
          </div>
        </form>

        <div className="mt-10 card">
          <h3 className="text-lg font-semibold">Haluatko laittaa sähköpostia?</h3>
          <p className="text-slate-600">
            Ota yhteyttä:{" "}
            <a className="text-sky underline" href="mailto:chatease.ai@gmail.com">
              chatease.ai@gmail.com
            </a>
          </p>
        </div>
      </Section>
    </div>
  )
}