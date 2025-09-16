import React from "react";
import Section from "../ui/Section.jsx";

export default function Privacy() {
  return (
    <Section
      title="Privacy Policy"
      subtitle="How ChatEase collects, uses, and protects your information."
      narrow
    >
      <div className="prose prose-slate max-w-none">
        <p><strong>Last updated:</strong> 16 September 2025</p>

        <h3>Who we are</h3>
        <p>
          “ChatEase” (“we”, “us”, “our”) provides AI chatbot setup and automation services.
          Contact: <a href="mailto:hello@chatease.ai">hello@chatease.ai</a>
        </p>

        <h3>Information we collect</h3>
        <ul>
          <li><strong>Contact data</strong>: name, email, company, website, messages you send us.</li>
          <li><strong>Usage data</strong>: page visits, interactions, device & browser info (via analytics/cookies).</li>
          <li><strong>Client content</strong>: FAQs, docs, or URLs you provide to train your bot.</li>
        </ul>

        <h3>How we use information</h3>
        <ul>
          <li>Respond to enquiries, provide demos, fulfill service contracts.</li>
          <li>Improve and support our services, detect abuse or errors.</li>
          <li>Legal/compliance obligations (e.g., invoices, records).</li>
        </ul>

        <h3>Legal bases (GDPR)</h3>
        <ul>
          <li><strong>Contract</strong>: to deliver requested services.</li>
          <li><strong>Legitimate interests</strong>: to operate, secure, and improve ChatEase.</li>
          <li><strong>Consent</strong>: where required (e.g., marketing emails, optional cookies).</li>
        </ul>

        <h3>Sharing & processors</h3>
        <p>
          We use trusted sub-processors (e.g., hosting, analytics, email) strictly to provide our services.
          They process data under contract and only as instructed by ChatEase.
        </p>

        <h3>Data retention</h3>
        <p>
          We retain personal data only as long as necessary for the purposes above or as required by law.
          You can request deletion—see “Your rights”.
        </p>

        <h3>International transfers</h3>
        <p>
          If data is transferred internationally, we rely on appropriate safeguards (e.g., SCCs or equivalent).
        </p>

        <h3>Your rights</h3>
        <ul>
          <li>Access, correction, deletion, portability, restriction, and objection (where applicable).</li>
          <li>Withdraw consent at any time (where processing is based on consent).</li>
          <li>Complain to your local data protection authority.</li>
        </ul>

        <h3>Cookies & analytics</h3>
        <p>
          We may use necessary cookies and optional analytics cookies. You can manage preferences via your browser or
          a cookie banner (if enabled).
        </p>

        <h3>Security</h3>
        <p>
          We apply reasonable technical and organizational measures to protect personal data. No method is 100% secure.
        </p>

        <h3>Contact</h3>
        <p>
          Questions or requests: <a href="mailto:hello@chatease.ai">hello@chatease.ai</a>
        </p>

        <p className="text-xs text-slate-500 mt-6">
          This page is provided for general information and is not legal advice. Consider reviewing with counsel for your jurisdiction.
        </p>
      </div>
    </Section>
  );
}
