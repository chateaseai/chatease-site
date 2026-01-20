import React from 'react';
import { Link } from 'react-router-dom';
import ChatDemo from '../ui/ChatDemo.jsx';

export default function Home() {
  return (
    <section className="relative overflow-hidden">
      {/* Background (soft, not overpowering) */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-sky-100 via-white to-violet-100"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -z-10 left-[-120px] top-[-120px] h-[360px] w-[360px] rounded-full bg-sky-300/30 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -z-10 right-[-140px] top-[40px] h-[420px] w-[420px] rounded-full bg-violet-400/25 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-20 md:py-28">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          {/* LEFT */}
          <div className="text-center md:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-xs md:text-sm bg-white shadow-sm">
              <span className="inline-block h-2 w-2 rounded-full bg-violet-600" />
              Tervetuloa ChatEaseen
            </span>

            <h1 className="mt-5 text-4xl md:text-6xl font-bold tracking-tight text-slate-900">
              Muuta keskustelut asiakkaiksi — automaattisesti
            </h1>

            <p className="mt-4 md:mt-5 text-slate-700 md:text-lg">
              AI-chatbotit ja automaatiot, jotka vastaavat heti, kvalifioivat liidit ja varaavat
              tapaamisia 24/7 — jotta sinä voit keskittyä olennaiseen.
            </p>

            <div className="mt-7 flex justify-center md:justify-start gap-3">
              {/* Primary CTA */}
              <Link to="/contact" className="btn-cta">
                Varaa demo
              </Link>

              <Link
                to="/services"
                className="rounded-2xl px-5 py-3 border border-slate-300 bg-white text-slate-900 font-medium shadow-sm hover:bg-slate-50 transition"
              >
                Tutustu palveluihin
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-4 text-sm justify-center md:justify-start text-slate-600">
              <Link to="/pricing" className="underline hover:text-slate-800">Katso hinnasto</Link>
              <span>•</span>
              <Link to="/about" className="underline hover:text-slate-800">Tietoa</Link>
              <span>•</span>
              <Link to="/contact" className="underline hover:text-slate-800">Ota yhteyttä</Link>
            </div>
          </div>

          {/* RIGHT */}
          <div className="md:pl-6">
            <ChatDemo />
          </div>
        </div>

        {/* Badges */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <Badge>24/7</Badge>
          <Badge>GDPR-valmis</Badge>
          <Badge>CRM-yhteensopiva</Badge>
          <Badge>Nopea käyttöönotto</Badge>
        </div>
      </div>
    </section>
  );
}

function Badge({ children }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 text-center text-sm text-slate-700 shadow-sm">
      {children}
    </div>
  );
}