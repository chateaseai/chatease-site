import React from 'react'
import Section from '../ui/Section.jsx'

export default function About() {
  return (
    <div>
      <Section title="About ChatEase" subtitle="Smarter conversations, simplified.">
        <div className="prose prose-slate max-w-none">
          <p>
            ChatEase helps small businesses and startups deploy AI chatbots that answer questions,
            capture leads, and book appointments—24/7.
          </p>
          <p>
            We combine practical automation with a human touch so your customers feel heard while
            your team saves time.
          </p>
          <p>
            Whether you're just getting started or scaling, we'll design a chatbot and workflow
            that fits your goals.
          </p>
        </div>
      </Section>
    </div>
  )
}