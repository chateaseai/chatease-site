import React from 'react';

export default function Logo({ small = false }) {
  const size = small ? 28 : 36;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="ChatEase"
      style={{ borderRadius: 10 }}
    >
      <defs>
        <linearGradient id="ce-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#38BDF8"/>
          <stop offset="100%" stopColor="#7C3AED"/>
        </linearGradient>
        <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="4" floodOpacity="0.18"/>
        </filter>
      </defs>
      <rect x="8" y="12" width="46" height="30" rx="12" fill="url(#ce-grad)" filter="url(#soft)"/>
      <path d="M27 44c6-1 9-4 11-9 0 0-4 9-14 11z" fill="url(#ce-grad)"/>
    </svg>
  );
}