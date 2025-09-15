import React from 'react';

export default function Logo({ small = false }) {
  const size = small ? 28 : 36;
  const [src, setSrc] = React.useState('/logo-chatease.png'); // prefer your PNG
  return (
    <img
      src={src}
      onError={() => setSrc('/logo-chatease.svg')} // fallback to bundled SVG
      alt="ChatEase logo"
      width={size}
      height={size}
      style={{ width: size, height: size, borderRadius: 8, objectFit: 'contain' }}
    />
  );
}