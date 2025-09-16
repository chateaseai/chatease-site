import React from 'react';

export default function Logo({ small = false }) {
  const size = small ? 28 : 36;
  return (
    <img
      src="/logo.png.jpeg"
      alt="ChatEase"
      width={size}
      height={size}
      style={{ borderRadius: 10 }}
    />
  );
}
