/**
 * NlpDocAiHeroIllustration — inline SVG for the NLP & Document AI hero right column.
 *
 * Visual concept: messy document source nodes (top) flowing into a central
 * processing hub that extracts, classifies, and validates — outputting clean
 * structured data nodes (bottom). The transformation from unstructured to
 * structured is the visual argument.
 *
 * Color strategy: all fills/strokes resolve through CSS custom properties
 * (--brand-*, --accent-*, --text-subtle) so the illustration inherits the
 * active data-theme automatically. No hardcoded hex values.
 */

export const NlpDocAiHeroIllustration = () => (
  <div
    className="w-full max-w-md mx-auto"
    role="img"
    aria-label="Document AI pipeline showing messy documents flowing through extraction and classification into clean structured data outputs"
  >
    <svg
      viewBox="0 0 400 340"
      className="w-full h-auto"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="false"
    >
      <title>NLP &amp; Document AI Pipeline Illustration</title>
      <desc>
        Document source nodes at the top (PDFs, scans, forms) connect through
        flow lines to a central processing hub labeled Extract, Classify,
        Validate. Below the hub, structured output nodes (JSON, Search, API)
        receive the processed data — representing the transformation from
        unstructured documents to actionable structured data.
      </desc>

      {/* ─── Defs: gradients ─── */}
      <defs>
        <linearGradient id="ndaHubGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--brand-500)" stopOpacity="0.25" />
          <stop offset="100%" stopColor="var(--accent-500)" stopOpacity="0.2" />
        </linearGradient>

        <linearGradient id="ndaSourceGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--brand-400)" stopOpacity="0.12" />
          <stop offset="100%" stopColor="var(--brand-500)" stopOpacity="0.2" />
        </linearGradient>

        <linearGradient id="ndaOutputGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--accent-400)" stopOpacity="0.12" />
          <stop offset="100%" stopColor="var(--accent-500)" stopOpacity="0.2" />
        </linearGradient>

        <radialGradient id="ndaGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--brand-400)" stopOpacity="0.12" />
          <stop offset="100%" stopColor="var(--brand-400)" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* ─── Background glow ─── */}
      <ellipse cx="200" cy="170" rx="180" ry="150" fill="url(#ndaGlow)" />

      {/* ─── Decorative particles ─── */}
      <circle cx="50" cy="30" r="1.5" fill="var(--brand-300)" fillOpacity="0.3" />
      <circle cx="350" cy="45" r="1" fill="var(--accent-300)" fillOpacity="0.25" />
      <circle cx="40" cy="290" r="1.5" fill="var(--brand-400)" fillOpacity="0.2" />
      <circle cx="360" cy="285" r="1" fill="var(--accent-400)" fillOpacity="0.25" />
      <circle cx="180" cy="10" r="1" fill="var(--brand-300)" fillOpacity="0.3" />
      <circle cx="230" cy="328" r="1.5" fill="var(--accent-300)" fillOpacity="0.2" />

      {/* ─── Flow lines: sources → hub ─── */}
      <line x1="120" y1="62" x2="170" y2="130" stroke="var(--brand-400)" strokeOpacity="0.25" strokeWidth="1.5" strokeDasharray="4 3" />
      <line x1="200" y1="55" x2="200" y2="125" stroke="var(--brand-400)" strokeOpacity="0.25" strokeWidth="1.5" strokeDasharray="4 3" />
      <line x1="280" y1="62" x2="230" y2="130" stroke="var(--brand-400)" strokeOpacity="0.25" strokeWidth="1.5" strokeDasharray="4 3" />

      {/* ─── Flow lines: hub → side processes ─── */}
      <line x1="160" y1="170" x2="75" y2="170" stroke="var(--accent-400)" strokeOpacity="0.2" strokeWidth="1.2" strokeDasharray="3 4" />
      <line x1="240" y1="170" x2="325" y2="170" stroke="var(--accent-400)" strokeOpacity="0.2" strokeWidth="1.2" strokeDasharray="3 4" />

      {/* ─── Flow lines: hub → outputs ─── */}
      <line x1="175" y1="210" x2="120" y2="268" stroke="var(--brand-400)" strokeOpacity="0.25" strokeWidth="1.5" strokeDasharray="4 3" />
      <line x1="200" y1="215" x2="200" y2="268" stroke="var(--brand-400)" strokeOpacity="0.25" strokeWidth="1.5" strokeDasharray="4 3" />
      <line x1="225" y1="210" x2="280" y2="268" stroke="var(--brand-400)" strokeOpacity="0.25" strokeWidth="1.5" strokeDasharray="4 3" />

      {/* ─── Document source nodes (top row) ─── */}
      {/* PDFs */}
      <rect x="80" y="28" width="78" height="34" rx="8" fill="url(#ndaSourceGrad)" stroke="var(--brand-400)" strokeOpacity="0.35" strokeWidth="1" />
      {/* Page icon */}
      <rect x="93" y="37" width="10" height="14" rx="1.5" fill="none" stroke="var(--brand-400)" strokeOpacity="0.6" strokeWidth="0.8" />
      <path d="M99,37 L103,41 L99,41 Z" fill="var(--brand-400)" fillOpacity="0.3" />
      <line x1="96" y1="44" x2="101" y2="44" stroke="var(--brand-400)" strokeOpacity="0.4" strokeWidth="0.5" />
      <line x1="96" y1="47" x2="100" y2="47" stroke="var(--brand-400)" strokeOpacity="0.4" strokeWidth="0.5" />
      <text x="131" y="49" textAnchor="middle" fontSize="7" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.06em" fill="var(--text-subtle)" fillOpacity="0.85">PDFs</text>

      {/* Scans */}
      <rect x="161" y="22" width="78" height="34" rx="8" fill="url(#ndaSourceGrad)" stroke="var(--brand-400)" strokeOpacity="0.35" strokeWidth="1" />
      {/* Camera/scan icon */}
      <rect x="174" y="33" width="14" height="10" rx="2" fill="none" stroke="var(--brand-400)" strokeOpacity="0.6" strokeWidth="0.8" />
      <circle cx="181" cy="38" r="3" fill="none" stroke="var(--brand-400)" strokeOpacity="0.5" strokeWidth="0.6" />
      <text x="215" y="43" textAnchor="middle" fontSize="7" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.06em" fill="var(--text-subtle)" fillOpacity="0.85">SCANS</text>

      {/* Forms */}
      <rect x="242" y="28" width="78" height="34" rx="8" fill="url(#ndaSourceGrad)" stroke="var(--brand-400)" strokeOpacity="0.35" strokeWidth="1" />
      {/* Form/checkbox icon */}
      <rect x="255" y="37" width="10" height="14" rx="1" fill="none" stroke="var(--brand-400)" strokeOpacity="0.6" strokeWidth="0.8" />
      <rect x="257" y="39" width="3" height="3" rx="0.5" fill="var(--brand-400)" fillOpacity="0.4" />
      <line x1="262" y1="41" x2="264" y2="41" stroke="var(--brand-400)" strokeOpacity="0.4" strokeWidth="0.5" />
      <rect x="257" y="44" width="3" height="3" rx="0.5" fill="var(--brand-400)" fillOpacity="0.3" />
      <line x1="262" y1="46" x2="264" y2="46" stroke="var(--brand-400)" strokeOpacity="0.4" strokeWidth="0.5" />
      <text x="296" y="49" textAnchor="middle" fontSize="7" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.06em" fill="var(--text-subtle)" fillOpacity="0.85">FORMS</text>

      {/* ─── Central processing hub ─── */}
      {/* Octagonal shape for "processing" feel */}
      <path
        d="M200,125 L240,145 L240,195 L200,215 L160,195 L160,145 Z"
        fill="url(#ndaHubGrad)"
        stroke="var(--brand-400)"
        strokeOpacity="0.45"
        strokeWidth="1.2"
      />
      {/* Inner shape */}
      <path
        d="M200,138 L228,152 L228,188 L200,202 L172,188 L172,152 Z"
        fill="var(--brand-400)"
        fillOpacity="0.06"
        stroke="none"
      />
      {/* Hub label */}
      <text
        x="200"
        y="165"
        textAnchor="middle"
        fontSize="8"
        fontWeight="700"
        fontFamily="system-ui, sans-serif"
        letterSpacing="0.1em"
        fill="var(--text-subtle)"
        fillOpacity="0.9"
      >
        PROCESS
      </text>
      <text
        x="200"
        y="179"
        textAnchor="middle"
        fontSize="6.5"
        fontWeight="600"
        fontFamily="system-ui, sans-serif"
        letterSpacing="0.06em"
        fill="var(--text-subtle)"
        fillOpacity="0.5"
      >
        EXTRACT · CLASSIFY · VALIDATE
      </text>

      {/* ─── Side process nodes ─── */}
      {/* Left: OCR */}
      <rect x="18" y="153" width="58" height="34" rx="8" fill="url(#ndaOutputGrad)" stroke="var(--accent-400)" strokeOpacity="0.35" strokeWidth="1" />
      {/* Eye/scan icon */}
      <ellipse cx="36" cy="170" rx="7" ry="4.5" fill="none" stroke="var(--accent-400)" strokeOpacity="0.5" strokeWidth="0.8" />
      <circle cx="36" cy="170" r="2" fill="var(--accent-400)" fillOpacity="0.35" />
      <text x="55" y="174" textAnchor="middle" fontSize="6.5" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.06em" fill="var(--text-subtle)" fillOpacity="0.8">OCR</text>

      {/* Right: NLP */}
      <rect x="324" y="153" width="58" height="34" rx="8" fill="url(#ndaOutputGrad)" stroke="var(--accent-400)" strokeOpacity="0.35" strokeWidth="1" />
      {/* Text analysis icon — A with underline */}
      <text x="340" y="175" fontSize="11" fontWeight="700" fontFamily="system-ui, serif" fill="var(--accent-400)" fillOpacity="0.45">A</text>
      <line x1="337" y1="178" x2="347" y2="178" stroke="var(--accent-400)" strokeOpacity="0.35" strokeWidth="0.8" />
      <text x="367" y="174" textAnchor="middle" fontSize="6.5" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.06em" fill="var(--text-subtle)" fillOpacity="0.8">NLP</text>

      {/* ─── Output nodes (bottom row) ─── */}
      {/* JSON */}
      <rect x="80" y="268" width="78" height="34" rx="8" fill="url(#ndaOutputGrad)" stroke="var(--accent-400)" strokeOpacity="0.35" strokeWidth="1" />
      <text x="97" y="290" fontSize="8" fontWeight="700" fontFamily="system-ui, monospace" fill="var(--accent-400)" fillOpacity="0.6">{'{ }'}</text>
      <text x="131" y="289" textAnchor="middle" fontSize="7" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.06em" fill="var(--text-subtle)" fillOpacity="0.85">JSON</text>

      {/* Search Index */}
      <rect x="161" y="274" width="78" height="34" rx="8" fill="url(#ndaOutputGrad)" stroke="var(--accent-400)" strokeOpacity="0.35" strokeWidth="1" />
      {/* Magnifier icon */}
      <circle cx="177" cy="290" r="4" fill="none" stroke="var(--accent-400)" strokeOpacity="0.5" strokeWidth="0.8" />
      <line x1="180" y1="293" x2="184" y2="297" stroke="var(--accent-400)" strokeOpacity="0.5" strokeWidth="0.8" />
      <text x="215" y="295" textAnchor="middle" fontSize="6" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.06em" fill="var(--text-subtle)" fillOpacity="0.85">SEARCH</text>

      {/* API/Systems */}
      <rect x="242" y="268" width="78" height="34" rx="8" fill="url(#ndaOutputGrad)" stroke="var(--accent-400)" strokeOpacity="0.35" strokeWidth="1" />
      {/* Plug icon */}
      <line x1="259" y1="280" x2="259" y2="290" stroke="var(--accent-400)" strokeOpacity="0.5" strokeWidth="0.8" />
      <line x1="264" y1="280" x2="264" y2="290" stroke="var(--accent-400)" strokeOpacity="0.5" strokeWidth="0.8" />
      <rect x="256" y="288" width="11" height="4" rx="1" fill="var(--accent-400)" fillOpacity="0.25" />
      <text x="296" y="289" textAnchor="middle" fontSize="6.5" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.06em" fill="var(--text-subtle)" fillOpacity="0.85">SYSTEMS</text>

      {/* ─── Confidence scoring indicators ─── */}
      <line x1="145" y1="90" x2="145" y2="250" stroke="var(--accent-400)" strokeOpacity="0.08" strokeWidth="1" strokeDasharray="2 6" />
      <line x1="255" y1="90" x2="255" y2="250" stroke="var(--accent-400)" strokeOpacity="0.08" strokeWidth="1" strokeDasharray="2 6" />

      {/* ─── Corner labels ─── */}
      <text x="50" y="110" fontSize="5.5" fontWeight="600" fontFamily="system-ui, sans-serif" fill="var(--brand-300)" fillOpacity="0.35">LAYOUT</text>
      <text x="50" y="120" fontSize="5.5" fontWeight="600" fontFamily="system-ui, sans-serif" fill="var(--brand-300)" fillOpacity="0.3">ANALYSIS</text>

      <text x="330" y="110" fontSize="5.5" fontWeight="600" fontFamily="system-ui, sans-serif" fill="var(--accent-300)" fillOpacity="0.35">CONFIDENCE</text>
      <text x="330" y="120" fontSize="5.5" fontWeight="600" fontFamily="system-ui, sans-serif" fill="var(--accent-300)" fillOpacity="0.3">SCORING</text>

      <text x="50" y="240" fontSize="5.5" fontWeight="600" fontFamily="system-ui, sans-serif" fill="var(--brand-300)" fillOpacity="0.35">ENTITIES</text>
      <text x="50" y="250" fontSize="5.5" fontWeight="600" fontFamily="system-ui, sans-serif" fill="var(--brand-300)" fillOpacity="0.3">FIELDS</text>

      <text x="330" y="240" fontSize="5.5" fontWeight="600" fontFamily="system-ui, sans-serif" fill="var(--accent-300)" fillOpacity="0.35">VALIDATE</text>
      <text x="330" y="250" fontSize="5.5" fontWeight="600" fontFamily="system-ui, sans-serif" fill="var(--accent-300)" fillOpacity="0.3">REVIEW</text>

      {/* ─── Outer boundary ring ─── */}
      <ellipse cx="200" cy="170" rx="185" ry="155" fill="none" stroke="var(--brand-400)" strokeOpacity="0.06" strokeWidth="1" strokeDasharray="6 8" />
    </svg>
  </div>
);
