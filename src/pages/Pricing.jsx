import React from 'react'
import Section from '../ui/Section.jsx'

export default function Pricing() {
  return (
    <div>
      <Section
        title="Hinnasto"
        subtitle="Selkeät lähtöhinnat. Pyydä tarjous, jos tarvitset räätälöityjä integraatioita tai laajempaa automaatiota."
      >
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card">
            <h4 className="font-semibold text-lg">Basic</h4>
            <p className="text-3xl font-bold mt-2">
              €499 <span className="text-base font-medium text-slate-600">kertamaksu</span>
            </p>
            <ul className="mt-3 list-disc ml-5 space-y-2 text-slate-600">
              <li>Chatbotin asennus verkkosivulle</li>
              <li>Jopa 20 FAQ-vastausta</li>
              <li>Liidien keräys sähköpostiin tai Google Sheetiin</li>
            </ul>
          </div>

          <div className="card border-2 border-sky/40 relative">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs bg-sky text-white px-3 py-1 rounded-full shadow">
              Suosituin
            </span>
            <h4 className="font-semibold text-lg mt-2">Pro</h4>
            <p className="text-3xl font-bold mt-2">
              €999 <span className="text-base font-medium text-slate-600">kertamaksu</span>
            </p>
            <ul className="mt-3 list-disc ml-5 space-y-2 text-slate-600">
              <li>AI-vastaukset (dokumentit/URL-sisältö)</li>
              <li>CRM + sähköposti-automaatio</li>
              <li>Ajanvarauspolku + ohjaus ihmiselle tarvittaessa</li>
            </ul>
          </div>

          <div className="card">
            <h4 className="font-semibold text-lg">Care Plan</h4>
            <p className="text-3xl font-bold mt-2">
              €99 <span className="text-base font-medium text-slate-600">/kk</span>
            </p>
            <ul className="mt-3 list-disc ml-5 space-y-2 text-slate-600">
              <li>Päivitykset & pienkehitys</li>
              <li>Kuukausiraportti (liidit, keskustelut, varaukset)</li>
              <li>Prioriteettituki</li>
            </ul>
          </div>
        </div>

        <div className="mt-6">
          <a href="/contact" className="btn-cta">Pyydä tarjous</a>
        </div>
      </Section>
    </div>
  )
}