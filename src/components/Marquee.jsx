const INDUSTRIES = [
  'Supermarkets', 'Pharmacies', 'Boutiques', 'Restaurants & Lounges',
  'Electronics Shops', 'Cosmetics Stores', 'Provision Stores', 'Wine Shops',
  'Phone & Accessories', 'Bakeries',
];

export default function Marquee() {
  const track = (ariaHidden) => (
    <div className="marquee-track" aria-hidden={ariaHidden}>
      {INDUSTRIES.map((name) => <span key={name}>{name}</span>)}
    </div>
  );

  return (
    <div className="marquee-band">
      <p>Built for every kind of Nigerian business</p>
      <div className="marquee">
        {track(false)}
        {track(true)}
      </div>
    </div>
  );
}
