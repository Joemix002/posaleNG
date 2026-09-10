// Posale brand mark: two overlapping rounded squares (green over gold) with a
// hard-edged intersection. Drawn as SVG so it stays crisp at any size.
// Geometry matches the official lockup — a 146 canvas, 89 squares at offsets
// 1 and 56, corner radius 0.30 of the square side.
export function LogoIcon({ size = 38 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 146 146"
      aria-hidden="true"
      style={{ flexShrink: 0, display: 'block' }}
    >
      <rect x="1" y="1" width="89" height="89" rx="26.7" fill="#10b981" />
      <rect x="56" y="56" width="89" height="89" rx="26.7" fill="#d4a548" />
      <rect x="56" y="56" width="34" height="34" fill="#0b7a5a" />
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
        <span className="logo-sub">Trade, tracked</span>
      </span>
    </span>
  );
}
