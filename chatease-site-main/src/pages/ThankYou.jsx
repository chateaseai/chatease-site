import React from 'react'
import Section from '../ui/Section.jsx'

export default function ThankYou() {
  return (
    <Section title="Thanks! 🎉" subtitle="We've received your message and will reply within 24 hours." narrow>
      <a href="/" className="btn-secondary mt-6 inline-block">Back to Home</a>
    </Section>
  )
}