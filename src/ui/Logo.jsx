import React from 'react'

export default function Logo({ small=false }) {
  const size = small ? 28 : 36
  return (
    <div className="grid place-items-center rounded-2xl bg-navy text-white" style={{width: size, height: size}}>
      {/* Chat bubble with a 4-point spark */}
      <svg width={size-8} height={size-8} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="14" width="44" height="32" rx="10" fill="#38BDF8"/>
        <path d="M22 52c8-2 12-6 14-12" stroke="white" strokeWidth="6" strokeLinecap="round"/>
        <path d="M48 14 L52 8" stroke="white" strokeWidth="4" strokeLinecap="round"/>
        <path d="M56 20 L62 18" stroke="white" strokeWidth="4" strokeLinecap="round"/>
        <path d="M50 26 L54 30" stroke="white" strokeWidth="4" strokeLinecap="round"/>
      </svg>
    </div>
  )
}