import React from 'react'
import Section from '../ui/Section.jsx'

export default function About() {
  return (
    <div>
      <Section title="Tietoa ChatEasesta" subtitle="Fiksummat keskustelut, helpompi arki.">
        <div className="prose prose-slate max-w-none">
          <p>
            ChatEase auttaa yrityksiä ottamaan käyttöön AI-chatbotteja, jotka vastaavat kysymyksiin,
            keräävät liidejä ja varaavat tapaamisia — 24/7.
          </p>
          <p>
            Yhdistämme käytännöllisen automaation ja inhimillisen käyttökokemuksen, jotta asiakkaasi
            saavat nopeaa palvelua ja sinä säästät aikaa.
          </p>
          <p>
            Olitpa vasta aloittamassa tai kasvattamassa liiketoimintaasi, rakennamme chatbotin ja
            työnkulun, joka tukee tavoitteitasi ja sopii juuri sinun tarpeisiin.
          </p>
        </div>
      </Section>
    </div>
  )
}