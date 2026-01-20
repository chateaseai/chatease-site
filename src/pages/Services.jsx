import React from 'react'
import Section from '../ui/Section.jsx'

export default function Services() {
  return (
    <div>
      <Section
        title="Palvelut"
        subtitle="Chatbotista täyteen automaatioon — helposti ja nopeasti."
      >
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card">
            <h4 className="font-semibold text-lg">Chatbotin perusasennus</h4>
            <ul className="mt-3 list-disc ml-5 space-y-2 text-slate-600">
              <li>Chatbotin asennus verkkosivulle</li>
              <li>Perus-FAQ:t ja tervetuloviesti</li>
              <li>Liidien keräys sähköpostiin tai Google Sheetiin</li>
            </ul>
            <p className="mt-4 font-medium">Alkaen €499 (kertamaksu)</p>
          </div>

          <div className="card border-2 border-sky/40">
            <h4 className="font-semibold text-lg">Automaatio & integraatiot</h4>
            <ul className="mt-3 list-disc ml-5 space-y-2 text-slate-600">
              <li>AI-vastaukset yrityksesi sisällön pohjalta (docs/URL)</li>
              <li>CRM- ja sähköposti-integraatiot</li>
              <li>Ajanvarauspolku + ohjaus ihmiselle tarvittaessa</li>
            </ul>
            <p className="mt-4 font-medium">Alkaen €999 (kertamaksu)</p>
          </div>

          <div className="card">
            <h4 className="font-semibold text-lg">Jatkuva optimointi</h4>
            <ul className="mt-3 list-disc ml-5 space-y-2 text-slate-600">
              <li>Kuukausittaiset päivitykset ja parannukset</li>
              <li>Raportointi ja kehitysehdotukset</li>
              <li>Ohjaus ihmiselle -tuning ja liidien laadun parantaminen</li>
            </ul>
            <p className="mt-4 font-medium">Alkaen €99 / kk</p>
          </div>
        </div>
      </Section>
    </div>
  )
}