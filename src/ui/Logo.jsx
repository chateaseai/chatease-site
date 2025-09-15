import React from 'react'

export default function Logo({ small=false }) {
  const size = small ? 28 : 36
  return (
    <div className="grid place-items-center rounded-2xl bg-navy text-white" style={{width: size, height: size}} aria-label="ChatEase logo">
      <svg width={size-8} height={size-8} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="14" width="44" height="32" rx="10" fill="#38BDF8"/>
        <!-- speech tail curve -->
        <path d="M22 52c8-2 12-6 14-12" stroke="white" strokeWidth="6" strokeLinecap="round"/>
        <!-- sparkle star -->
        <path d="M52 10 l2 4 l4 2 l-4 2 l-2 4 l-2-4 l-4-2 l4-2 z" fill="#22C55E"/>
      </svg>
    </div>
  )
}