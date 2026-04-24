export function TrackingDiagram() {
  return (
    <svg
      viewBox="0 0 700 440"
      xmlns="http://www.w3.org/2000/svg"
      className="block h-auto w-full"
      role="img"
      aria-label="Tracking architecture flow: ad platforms flow through GTM client-side, into the WagerAds proprietary server-side container, then branching into Meta CAPI, TikTok Events, Kwai Events, Google Enhanced Conversions and custom postback, and converging into a first-party data layer."
    >
      <text x="70" y="30" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="8.5" fill="#C9A961" letterSpacing="2" fontWeight="500">SOURCES</text>
      <text x="200" y="30" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="8.5" fill="#C9A961" letterSpacing="2" fontWeight="500">CLIENT</text>
      <text x="340" y="30" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="8.5" fill="#C9A961" letterSpacing="2" fontWeight="500">SERVER</text>
      <text x="485" y="30" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="8.5" fill="#C9A961" letterSpacing="2" fontWeight="500">ATTRIBUTION</text>
      <text x="625" y="30" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="8.5" fill="#C9A961" letterSpacing="2" fontWeight="500">STORAGE</text>
      <line x1="60" y1="55" x2="60" y2="385" stroke="#1C2E4A" strokeWidth="0.5" />
      <line x1="190" y1="55" x2="190" y2="385" stroke="#1C2E4A" strokeWidth="0.5" />
      <line x1="330" y1="55" x2="330" y2="385" stroke="#1C2E4A" strokeWidth="0.5" />
      <line x1="475" y1="55" x2="475" y2="385" stroke="#1C2E4A" strokeWidth="0.5" />
      <line x1="615" y1="55" x2="615" y2="385" stroke="#1C2E4A" strokeWidth="0.5" />
      <line x1="70" y1="120" x2="200" y2="220" stroke="#C9A961" strokeWidth="0.6" strokeOpacity="0.4" />
      <line x1="70" y1="180" x2="200" y2="220" stroke="#C9A961" strokeWidth="0.6" strokeOpacity="0.4" />
      <line x1="70" y1="245" x2="200" y2="220" stroke="#C9A961" strokeWidth="0.6" strokeOpacity="0.4" />
      <line x1="70" y1="310" x2="200" y2="220" stroke="#C9A961" strokeWidth="0.6" strokeOpacity="0.4" />
      <line x1="200" y1="220" x2="340" y2="220" stroke="#C9A961" strokeWidth="0.8" strokeOpacity="0.6" />
      <line x1="340" y1="220" x2="485" y2="105" stroke="#C9A961" strokeWidth="0.6" strokeOpacity="0.45" />
      <line x1="340" y1="220" x2="485" y2="165" stroke="#C9A961" strokeWidth="0.6" strokeOpacity="0.45" />
      <line x1="340" y1="220" x2="485" y2="220" stroke="#C9A961" strokeWidth="0.6" strokeOpacity="0.5" />
      <line x1="340" y1="220" x2="485" y2="275" stroke="#C9A961" strokeWidth="0.6" strokeOpacity="0.45" />
      <line x1="340" y1="220" x2="485" y2="335" stroke="#C9A961" strokeWidth="0.6" strokeOpacity="0.45" />
      <line x1="485" y1="105" x2="625" y2="220" stroke="#C9A961" strokeWidth="0.5" strokeOpacity="0.35" />
      <line x1="485" y1="165" x2="625" y2="220" stroke="#C9A961" strokeWidth="0.5" strokeOpacity="0.35" />
      <line x1="485" y1="220" x2="625" y2="220" stroke="#C9A961" strokeWidth="0.6" strokeOpacity="0.5" />
      <line x1="485" y1="275" x2="625" y2="220" stroke="#C9A961" strokeWidth="0.5" strokeOpacity="0.35" />
      <line x1="485" y1="335" x2="625" y2="220" stroke="#C9A961" strokeWidth="0.5" strokeOpacity="0.35" />
      <circle cx="155" cy="170" r="1.2" fill="#C9A961" opacity="0.7" />
      <circle cx="270" cy="220" r="1.2" fill="#C9A961" opacity="0.7" />
      <circle cx="410" cy="165" r="1.2" fill="#C9A961" opacity="0.6" />
      <circle cx="410" cy="275" r="1.2" fill="#C9A961" opacity="0.6" />
      <circle cx="555" cy="165" r="1" fill="#C9A961" opacity="0.5" />
      <circle cx="555" cy="275" r="1" fill="#C9A961" opacity="0.5" />
      <g>
        <circle cx="70" cy="120" r="4" fill="#0A1628" stroke="#C9A961" strokeWidth="1" />
        <circle cx="70" cy="120" r="1.3" fill="#C9A961" />
        <text x="55" y="124" textAnchor="end" fontFamily="Inter, sans-serif" fontSize="10" fill="#F2EBD8" letterSpacing="1.2" fontWeight="500">META ADS</text>
      </g>
      <g>
        <circle cx="70" cy="180" r="4" fill="#0A1628" stroke="#C9A961" strokeWidth="1" />
        <circle cx="70" cy="180" r="1.3" fill="#C9A961" />
        <text x="55" y="184" textAnchor="end" fontFamily="Inter, sans-serif" fontSize="10" fill="#F2EBD8" letterSpacing="1.2" fontWeight="500">GOOGLE</text>
      </g>
      <g>
        <circle cx="70" cy="245" r="4" fill="#0A1628" stroke="#C9A961" strokeWidth="1" />
        <circle cx="70" cy="245" r="1.3" fill="#C9A961" />
        <text x="55" y="249" textAnchor="end" fontFamily="Inter, sans-serif" fontSize="10" fill="#F2EBD8" letterSpacing="1.2" fontWeight="500">TIKTOK</text>
      </g>
      <g>
        <circle cx="70" cy="310" r="4" fill="#0A1628" stroke="#C9A961" strokeWidth="1" />
        <circle cx="70" cy="310" r="1.3" fill="#C9A961" />
        <text x="55" y="314" textAnchor="end" fontFamily="Inter, sans-serif" fontSize="10" fill="#F2EBD8" letterSpacing="1.2" fontWeight="500">KWAI</text>
      </g>
      <g>
        <circle cx="200" cy="220" r="14" fill="#0A1628" stroke="#C9A961" strokeWidth="0.5" strokeOpacity="0.5" />
        <circle cx="200" cy="220" r="6" fill="#0A1628" stroke="#C9A961" strokeWidth="1" />
        <circle cx="200" cy="220" r="2" fill="#C9A961" />
        <text x="200" y="255" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#F2EBD8" letterSpacing="1.5" fontWeight="500">GTM</text>
        <text x="200" y="270" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="8.5" fill="#8898B2" letterSpacing="1">client-side</text>
      </g>
      <g>
        <circle cx="340" cy="220" r="32" fill="#C9A961" opacity="0.06" />
        <circle cx="340" cy="220" r="22" fill="none" stroke="#C9A961" strokeWidth="0.5" strokeOpacity="0.4" />
        <circle cx="340" cy="220" r="14" fill="none" stroke="#C9A961" strokeWidth="0.8" strokeOpacity="0.7" className="pulse-hub" />
        <circle cx="340" cy="220" r="7" fill="#C9A961" />
        <text x="340" y="270" textAnchor="middle" fontFamily="Georgia, serif" fontSize="12" fill="#F2EBD8" letterSpacing="2" fontWeight="400">WAGERADS</text>
        <text x="340" y="285" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="8.5" fill="#C9A961" letterSpacing="1.5" fontStyle="italic">server-side container</text>
      </g>
      <g>
        <circle cx="485" cy="105" r="4" fill="#0A1628" stroke="#C9A961" strokeWidth="1" />
        <circle cx="485" cy="105" r="1.3" fill="#C9A961" />
        <text x="500" y="108" fontFamily="Inter, sans-serif" fontSize="10" fill="#F2EBD8" letterSpacing="1.2" fontWeight="500">META CAPI</text>
      </g>
      <g>
        <circle cx="485" cy="165" r="4" fill="#0A1628" stroke="#C9A961" strokeWidth="1" />
        <circle cx="485" cy="165" r="1.3" fill="#C9A961" />
        <text x="500" y="168" fontFamily="Inter, sans-serif" fontSize="10" fill="#F2EBD8" letterSpacing="1.2" fontWeight="500">TIKTOK EVENTS</text>
      </g>
      <g>
        <circle cx="485" cy="220" r="4" fill="#0A1628" stroke="#C9A961" strokeWidth="1" />
        <circle cx="485" cy="220" r="1.3" fill="#C9A961" />
        <text x="500" y="223" fontFamily="Inter, sans-serif" fontSize="10" fill="#F2EBD8" letterSpacing="1.2" fontWeight="500">KWAI EVENTS</text>
      </g>
      <g>
        <circle cx="485" cy="275" r="4" fill="#0A1628" stroke="#C9A961" strokeWidth="1" />
        <circle cx="485" cy="275" r="1.3" fill="#C9A961" />
        <text x="500" y="278" fontFamily="Inter, sans-serif" fontSize="10" fill="#F2EBD8" letterSpacing="1.2" fontWeight="500">GOOGLE ENH. CONV.</text>
      </g>
      <g>
        <circle cx="485" cy="335" r="4" fill="#0A1628" stroke="#C9A961" strokeWidth="1" />
        <circle cx="485" cy="335" r="1.3" fill="#C9A961" />
        <text x="500" y="338" fontFamily="Inter, sans-serif" fontSize="10" fill="#F2EBD8" letterSpacing="1.2" fontWeight="500">CUSTOM POSTBACK</text>
      </g>
      <g>
        <circle cx="625" cy="220" r="18" fill="#C9A961" opacity="0.1" />
        <circle cx="625" cy="220" r="10" fill="none" stroke="#C9A961" strokeWidth="0.8" />
        <circle cx="625" cy="220" r="4.5" fill="#C9A961" />
        <text x="625" y="255" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#F2EBD8" letterSpacing="1.5" fontWeight="500">DATA LAYER</text>
        <text x="625" y="270" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="8.5" fill="#8898B2" letterSpacing="1">first-party</text>
      </g>
      <text x="625" y="320" textAnchor="middle" fontFamily="Georgia, serif" fontSize="10" fill="#C9A961" letterSpacing="2" fontStyle="italic">→ FTD</text>
      <text x="625" y="340" textAnchor="middle" fontFamily="Georgia, serif" fontSize="10" fill="#C9A961" letterSpacing="2" fontStyle="italic">→ LTV</text>
      <text x="625" y="360" textAnchor="middle" fontFamily="Georgia, serif" fontSize="10" fill="#C9A961" letterSpacing="2" fontStyle="italic">→ RETENTION</text>
    </svg>
  );
}
