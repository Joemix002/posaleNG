import { useId } from 'react';

// Posale NG brand logo, recreated as SVG: blue->cyan gradient tile with a
// white P, plus the wordmark. `dark` switches the wordmark to white for use
// on dark-teal bands (footer).
export function LogoIcon({ size = 38 }) {
  const gradientId = useId();
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true" style={{ flexShrink: 0 }}>
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#2E9BF0" />
          <stop offset="1" stopColor="#12D1E6" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="15" fill={`url(#${gradientId})`} />
      <text
        x="32"
        y="46"
        textAnchor="middle"
        fontFamily="'Plus Jakarta Sans', 'Segoe UI', sans-serif"
        fontWeight="800"
        fontSize="40"
        fill="#ffffff"
      >
        P
      </text>
    </svg>
  );
}

export default function Logo({ dark = false, size = 38 }) {
  return (
    <span className={`logo ${dark ? 'logo-dark' : ''}`}>
      <LogoIcon size={size} />
      <span className="logo-text">
        <span className="logo-word">
          Posale<sup className="logo-ng">NG</sup>
        </span>
        <span className="logo-sub">Business POS</span>
      </span>
    </span>
  );
}
