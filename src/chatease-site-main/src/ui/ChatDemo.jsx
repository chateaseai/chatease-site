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
    <div className="w-full max-w-md mx-auto rounded-2xl border bg-white/80 backdrop-blur shadow-sm p-4 md:p-5">
      <div className="text-xs text-slate-500 mb-3">Live Demo</div>
      <div className="space-y-3">
        {SCRIPT.slice(0, idx).map((m, i) => (
          <Bubble key={i} who={m.who} text={m.text} />
        ))}
      </div>
      <div className="mt-4 text-xs text-slate-500">
        Powered by <span className="font-medium text-violet-700">ChatEase</span>
      </div>
    </div>
  );
}

function Bubble({ who, text }) {
  const isBot = who === 'bot';
  return (
    <div className={`flex ${isBot ? 'justify-start' : 'justify-end'}`}>
      <div
        className={[
          'max-w-[80%] px-4 py-2 rounded-2xl text-sm shadow-sm',
          isBot
            ? 'bg-gradient-to-r from-sky-400 to-violet-600 text-white rounded-bl-sm'
            : 'bg-white border text-slate-900 rounded-br-sm'
        ].join(' ')}
      >
        {text}
      </div>
    </div>
  );
}
