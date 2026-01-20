import React from "react";
import Section from "../ui/Section.jsx";

export default function Terms() {
  return (
    <Section title="Terms of Service" subtitle="The rules for using ChatEase." narrow>
      <div className="prose prose-slate max-w-none">
        <p><strong>Last updated:</strong> 16 September 2025</p>

        <h3>Agreement</h3>
        <p>
          By using ChatEase (“we”, “us”, “our”) and our site, you agree to these Terms.
          If you’re entering into this agreement on behalf of a company, you represent you have authority to do so.
        </p>

        <h3>Services</h3>
        <p>
          We provide AI chatbot setup and automation services as described on our site or in an order/statement of work (SOW).
          Custom scopes prevail over website copy where they conflict.
        </p>

        <h3>Your responsibilities</h3>
        <ul>
          <li>Provide accurate info, timely access, and approvals we need to deliver.</li>
          <li>Ensure you have rights to any content you supply (FAQs, docs, brand assets, data).</li>
          <li>Use our services lawfully and in accordance with applicable policies and laws.</li>
        </ul>

        <h3>Fees & payment</h3>
        <p>
          Fees are as listed on the site or in an agreed SOW/quote. Invoices are due upon receipt unless otherwise stated.
          Late or unpaid invoices may result in suspension.
        </p>

        <h3>Intellectual property</h3>
        <ul>
          <li>You keep rights to your content and brand assets.</li>
          <li>We keep rights to our pre-existing materials, methods, and templates.</li>
          <li>Upon full payment, you receive a non-exclusive license to deliverables identified in the SOW.</li>
        </ul>

        <h3>Acceptable use</h3>
        <p>
          You must not use the services to violate laws, infringe IP, distribute malware, or process prohibited data.
          We may suspend for suspected abuse or security risk.
        </p>

        <h3>Confidentiality</h3>
        <p>
          Each party will protect the other’s confidential info with reasonable care and use it only for the project.
        </p>

        <h3>Privacy</h3>
        <p>
          Our handling of personal data is described in the <a href="/privacy">Privacy Policy</a>.
        </p>

        <h3>Warranties & disclaimers</h3>
        <p>
          Services are provided “as is.” We disclaim implied warranties to the extent permitted by law.
          We do not guarantee specific business outcomes (e.g., sales volume).
        </p>

        <h3>Limitation of liability</h3>
        <p>
          To the maximum extent permitted by law, neither party is liable for indirect, incidental, or consequential damages.
          Our aggregate liability is limited to fees paid to us in the 3 months preceding the claim.
        </p>

        <h3>Termination</h3>
        <p>
          Either party may terminate for material breach (with reasonable cure period) or for convenience as defined in the SOW.
          Fees for completed or in-progress work to date remain due.
        </p>

        <h3>Governing law</h3>
        <p>
          These Terms are governed by your local consumer laws where mandatory; otherwise, by the law specified in the SOW/quote.
        </p>

        <h3>Changes</h3>
        <p>
          We may update these Terms; material changes will be posted on this page with a new “Last updated” date.
        </p>

        <h3>Contact</h3>
        <p>
          Questions: <a href="mailto:hello@chatease.ai">hello@chatease.ai</a>
        </p>

        <p className="text-xs text-slate-500 mt-6">
          This template is informational and not legal advice. Consider having counsel review for your jurisdiction and business model.
        </p>
      </div>
    </Section>
  );
}
