import React from 'react'
import Section from '../ui/Section.jsx'

export default function ThankYou() {
  return (
    <Section
      title="Kiitos! 🎉"
      subtitle="Viestisi on vastaanotettu — palaamme sinulle yleensä 24 tunnin kuluessa."
      narrow
    >
      <a href="/" className="btn-secondary mt-6 inline-block">
        Takaisin etusivulle
      </a>
    </Section>
  )
}