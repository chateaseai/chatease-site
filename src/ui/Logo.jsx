import React from 'react';

export default function Logo({ small = false }) {
  const size = small ? 28 : 36;
  const inner = size - 8;

  return (
    <div
      className="grid place-items-center rounded-2xl bg-navy text-white"
      style={{ width: size, height: size }}
      aria-label="ChatEase logo"
    >
      <svg
        width={inner}
        height={inner}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Chat bubble */}
        <rect x="10" y="14" width="44" height="32" rx="10" fill="#38BDF8" />
        {/* Tail curve */}
        <path
          d="M22 52c8-2 12-6 14-12"
          stroke="white"
          strokeWidth="6"
          strokeLinecap="round"
        />
        {/* Spark */}
        <path
          d="M52 10 l2 4 4 2 -4 2 -2 4 -2 -4 -4 -2 4 -2 2 -4z"
          fill="#22C55E"
        />
      </svg>
    </div>
  );
}