import React from 'react';

export default function Logo({ small = false }) {
  const size = small ? 28 : 36;

  return (
    <picture aria-label="ChatEase logo">
      <source srcSet="/logo-chatease.png" type="image/png" />
      <img
        src="/logo-chatease.svg"
        alt="ChatEase logo"
        width={size}
        height={size}
        style={{ width: size, height: size, borderRadius: 12, objectFit: 'cover' }}
      />
    </picture>
  );
}