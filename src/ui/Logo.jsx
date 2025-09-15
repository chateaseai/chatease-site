import React from 'react';

export default function Logo({ small = false }) {
  const size = small ? 28 : 36;
  return (
    <img
      src="/logo-chatease.png"
      alt="ChatEase logo"
      width={size}
      height={size}
      style={{ width: size, height: size, borderRadius: 8, objectFit: 'contain' }}
    />
  );
}