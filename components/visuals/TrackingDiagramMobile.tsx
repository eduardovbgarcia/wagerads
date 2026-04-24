export function TrackingDiagramMobile() {
  return (
    <svg
      viewBox="0 0 400 760"
      xmlns="http://www.w3.org/2000/svg"
      className="block h-auto w-full md:hidden"
      role="img"
      aria-label="Tracking architecture, mobile view: sources flow top to bottom through GTM, the WagerAds proprietary server-side container, attribution endpoints, and a first-party data layer."
    >
      <text x="200" y="28" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#C9A961" letterSpacing="2.5" fontWeight="500">SOURCES</text>
      <g>
        <circle cx="100" cy="80" r="5" fill="#0A1628" stroke="#C9A961" strokeWidth="1" />
        <circle cx="100" cy="80" r="1.5" fill="#C9A961" />
        <text x="100" y="100" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#F2EBD8" letterSpacing="1.2" fontWeight="500">META</text>
      </g>
      <g>
        <circle cx="170" cy="80" r="5" fill="#0A1628" stroke="#C9A961" strokeWidth="1" />
        <circle cx="170" cy="80" r="1.5" fill="#C9A961" />
        <text x="170" y="100" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#F2EBD8" letterSpacing="1.2" fontWeight="500">GOOGLE</text>
      </g>
      <g>
        <circle cx="240" cy="80" r="5" fill="#0A1628" stroke="#C9A961" strokeWidth="1" />
        <circle cx="240" cy="80" r="1.5" fill="#C9A961" />
        <text x="240" y="100" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#F2EBD8" letterSpacing="1.2" fontWeight="500">TIKTOK</text>
      </g>
      <g>
        <circle cx="310" cy="80" r="5" fill="#0A1628" stroke="#C9A961" strokeWidth="1" />
        <circle cx="310" cy="80" r="1.5" fill="#C9A961" />
        <text x="310" y="100" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#F2EBD8" letterSpacing="1.2" fontWeight="500">KWAI</text>
      </g>
      <line x1="100" y1="85" x2="200" y2="160" stroke="#C9A961" strokeWidth="0.6" strokeOpacity="0.4" />
      <line x1="170" y1="85" x2="200" y2="160" stroke="#C9A961" strokeWidth="0.6" strokeOpacity="0.4" />
      <line x1="240" y1="85" x2="200" y2="160" stroke="#C9A961" strokeWidth="0.6" strokeOpacity="0.4" />
      <line x1="310" y1="85" x2="200" y2="160" stroke="#C9A961" strokeWidth="0.6" strokeOpacity="0.4" />
      <g>
        <circle cx="200" cy="170" r="14" fill="#0A1628" stroke="#C9A961" strokeWidth="0.5" strokeOpacity="0.5" />
        <circle cx="200" cy="170" r="6" fill="#0A1628" stroke="#C9A961" strokeWidth="1" />
        <circle cx="200" cy="170" r="2" fill="#C9A961" />
        <text x="200" y="205" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#F2EBD8" letterSpacing="1.5" fontWeight="500">GTM</text>
        <text x="200" y="220" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="8.5" fill="#8898B2" letterSpacing="1">client-side</text>
      </g>
      <line x1="200" y1="184" x2="200" y2="310" stroke="#C9A961" strokeWidth="0.8" strokeOpacity="0.6" />
      <g>
        <circle cx="200" cy="330" r="32" fill="#C9A961" opacity="0.06" />
        <circle cx="200" cy="330" r="22" fill="none" stroke="#C9A961" strokeWidth="0.5" strokeOpacity="0.4" />
        <circle cx="200" cy="330" r="14" fill="none" stroke="#C9A961" strokeWidth="0.8" strokeOpacity="0.7" className="pulse-hub" />
        <circle cx="200" cy="330" r="7" fill="#C9A961" />
        <text x="200" y="380" textAnchor="middle" fontFamily="Georgia, serif" fontSize="12" fill="#F2EBD8" letterSpacing="2" fontWeight="400">WAGERADS</text>
        <text x="200" y="395" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="8.5" fill="#C9A961" letterSpacing="1.5" fontStyle="italic">server-side container</text>
      </g>
      <line x1="200" y1="405" x2="80" y2="470" stroke="#C9A961" strokeWidth="0.5" strokeOpacity="0.4" />
      <line x1="200" y1="405" x2="160" y2="470" stroke="#C9A961" strokeWidth="0.5" strokeOpacity="0.45" />
      <line x1="200" y1="405" x2="240" y2="470" stroke="#C9A961" strokeWidth="0.5" strokeOpacity="0.45" />
      <line x1="200" y1="405" x2="320" y2="470" stroke="#C9A961" strokeWidth="0.5" strokeOpacity="0.4" />
      <g>
        <circle cx="80" cy="480" r="4" fill="#0A1628" stroke="#C9A961" strokeWidth="1" />
        <circle cx="80" cy="480" r="1.3" fill="#C9A961" />
        <text x="80" y="500" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#F2EBD8" letterSpacing="1">META CAPI</text>
      </g>
      <g>
        <circle cx="160" cy="480" r="4" fill="#0A1628" stroke="#C9A961" strokeWidth="1" />
        <circle cx="160" cy="480" r="1.3" fill="#C9A961" />
        <text x="160" y="500" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#F2EBD8" letterSpacing="1">TIKTOK EV.</text>
      </g>
      <g>
        <circle cx="240" cy="480" r="4" fill="#0A1628" stroke="#C9A961" strokeWidth="1" />
        <circle cx="240" cy="480" r="1.3" fill="#C9A961" />
        <text x="240" y="500" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#F2EBD8" letterSpacing="1">KWAI EV.</text>
      </g>
      <g>
        <circle cx="320" cy="480" r="4" fill="#0A1628" stroke="#C9A961" strokeWidth="1" />
        <circle cx="320" cy="480" r="1.3" fill="#C9A961" />
        <text x="320" y="500" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#F2EBD8" letterSpacing="1">POSTBACK</text>
      </g>
      <line x1="80" y1="510" x2="200" y2="600" stroke="#C9A961" strokeWidth="0.5" strokeOpacity="0.35" />
      <line x1="160" y1="510" x2="200" y2="600" stroke="#C9A961" strokeWidth="0.5" strokeOpacity="0.35" />
      <line x1="240" y1="510" x2="200" y2="600" stroke="#C9A961" strokeWidth="0.5" strokeOpacity="0.35" />
      <line x1="320" y1="510" x2="200" y2="600" stroke="#C9A961" strokeWidth="0.5" strokeOpacity="0.35" />
      <g>
        <circle cx="200" cy="620" r="18" fill="#C9A961" opacity="0.1" />
        <circle cx="200" cy="620" r="10" fill="none" stroke="#C9A961" strokeWidth="0.8" />
        <circle cx="200" cy="620" r="4.5" fill="#C9A961" />
        <text x="200" y="655" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#F2EBD8" letterSpacing="1.5" fontWeight="500">DATA LAYER</text>
        <text x="200" y="670" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="8.5" fill="#8898B2" letterSpacing="1">first-party</text>
      </g>
      <text x="120" y="720" textAnchor="middle" fontFamily="Georgia, serif" fontSize="10" fill="#C9A961" letterSpacing="2" fontStyle="italic">→ FTD</text>
      <text x="200" y="720" textAnchor="middle" fontFamily="Georgia, serif" fontSize="10" fill="#C9A961" letterSpacing="2" fontStyle="italic">→ LTV</text>
      <text x="290" y="720" textAnchor="middle" fontFamily="Georgia, serif" fontSize="10" fill="#C9A961" letterSpacing="2" fontStyle="italic">→ RETENTION</text>
    </svg>
  );
}
