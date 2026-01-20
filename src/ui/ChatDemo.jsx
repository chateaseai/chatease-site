import React, { useEffect, useState } from 'react';

const SCRIPT = [
  { who: 'visitor', text: 'Hi! Can you help me book a demo?' },
  { who: 'bot',     text: 'Absolutely! What time works best for you this week?' },
  { who: 'visitor', text: 'Wednesday afternoon.' },
  { who: 'bot',     text: 'Done. I’ve penciled in Wednesday 14:00. Want a calendar invite?' },
  { who: 'visitor', text: 'Yes please.' },
  { who: 'bot',     text: 'Invite sent ✅ Anything else I can help with?' },
];

export default function ChatDemo() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (idx >= SCRIPT.length) return;
    const delay = idx === 0 ? 800 : (SCRIPT[idx].who === 'bot' ? 1200 : 900);
    const t = setTimeout(() => setIdx(i => i + 1), delay);
    return () => clearTimeout(t);
  }, [idx]);

  return (
    <div className="w-full max-w-md mx-auto rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-900/10 p-4 md:p-5 ring-1 ring-slate-200">
      <div className="text-xs font-semibold text-slate-700 mb-3">Live Demo</div>

      <div className="space-y-3">
        {SCRIPT.slice(0, idx).map((m, i) => (
          <Bubble key={i} who={m.who} text={m.text} />
        ))}
      </div>

      <div className="mt-4 text-xs text-slate-600">
        Powered by <span className="font-semibold text-violet-700">ChatEase</span>
      </div>
    </div>
  );
}

function Bubble({ who, text }) {
  const isBot = who === 'bot';
  return (
    <div className={isBot ? 'flex justify-start' : 'flex justify-end'}>
      <div
        className={[
          'max-w-[80%] px-4 py-2 rounded-2xl text-sm shadow-sm leading-relaxed',
          isBot
            ? 'bg-gradient-to-r from-sky-400 to-violet-600 text-white rounded-bl-sm shadow-md shadow-violet-500/20'
            : 'bg-slate-200 border border-slate-300 text-slate-900 rounded-br-sm'
        ].join(' ')}
      >
        {text}
      </div>
    </div>
  );
}