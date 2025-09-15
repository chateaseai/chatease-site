import React from 'react';

export default function Logo({ small = false }) {
  const size = small ? 28 : 36;
  // Always show SVG; if you add /public/logo-chatease.png later, just swap src below to "/logo-chatease.png"
  return (
    <img
      src="/logo-chatease.svg"
      alt="ChatEase logo"
      width={size}
      height={size}
      style={{ width: size, height: size, borderRadius: 8, objectFit: 'contain' }}
    />
  );
}
