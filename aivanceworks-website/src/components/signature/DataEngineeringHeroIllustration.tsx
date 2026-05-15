/**
 * DataEngineeringHeroIllustration — inline SVG for the Data Engineering service hero.
 *
 * Visual concept: a simplified lakehouse pipeline flow showing raw source data
 * flowing through ingestion, storage layers (Bronze → Silver → Gold), and out to
 * analytics consumers. Represents the structured, layered data architecture that
 * is the core Data Engineering deliverable.
 *
 * Color strategy: all fills and strokes use CSS custom properties (var(--brand-*),
 * var(--accent-*)) so the illustration inherits the active data-theme automatically.
 * No hardcoded hex values.
 *
 * Accessibility: wrapped in a role="img" div with descriptive aria-label.
 * SVG has <title> and <desc>. Internal decorative elements use aria-hidden="true".
 */

export const DataEngineeringHeroIllustration = () => (
  <div
    className="w-full max-w-md mx-auto"
    role="img"
    aria-label="Data pipeline architecture diagram showing raw data flowing through ingestion, Bronze, Silver, and Gold warehouse layers into analytics dashboards"
  >
    <svg
      viewBox="0 0 400 300"
      className="w-full h-auto"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="false"
    >
      <title>Data Engineering Pipeline Illustration</title>
      <desc>
        A lakehouse architecture diagram showing data flowing from source systems
        through ingestion into Bronze, Silver, and Gold storage layers,
        with the Gold layer serving BI tools and analytics consumers.
      </desc>

      {/* ─── Defs ─── */}
      <defs>
        <linearGradient id="de-bg-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--brand-500)" stopOpacity="0.12" />
          <stop offset="100%" stopColor="var(--accent-500)" stopOpacity="0.08" />
        </linearGradient>

        <linearGradient id="de-flow" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--brand-400)" stopOpacity="0.55" />
          <stop offset="100%" stopColor="var(--accent-400)" stopOpacity="0.55" />
        </linearGradient>

        <linearGradient id="de-bronze" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--brand-400)" stopOpacity="0.25" />
          <stop offset="100%" stopColor="var(--brand-500)" stopOpacity="0.18" />
        </linearGradient>

        <linearGradient id="de-silver" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--brand-300)" stopOpacity="0.30" />
          <stop offset="100%" stopColor="var(--brand-400)" stopOpacity="0.22" />
        </linearGradient>

        <linearGradient id="de-gold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--accent-400)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="var(--accent-500)" stopOpacity="0.25" />
        </linearGradient>

        <radialGradient id="de-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--brand-400)" stopOpacity="0.07" />
          <stop offset="100%" stopColor="var(--brand-400)" stopOpacity="0" />
        </radialGradient>

        <linearGradient id="de-serve" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--accent-300)" stopOpacity="0.28" />
          <stop offset="100%" stopColor="var(--accent-400)" stopOpacity="0.18" />
        </linearGradient>
      </defs>

      {/* ─── Background glow ─── */}
      <ellipse cx="200" cy="150" rx="190" ry="130" fill="url(#de-glow)" />

      {/* ─── Decorative particles ─── */}
      <circle cx="28" cy="42" r="1.5" fill="var(--brand-300)" fillOpacity="0.28" />
      <circle cx="372" cy="58" r="1" fill="var(--accent-300)" fillOpacity="0.22" />
      <circle cx="45" cy="260" r="1" fill="var(--brand-400)" fillOpacity="0.18" />
      <circle cx="355" cy="245" r="1.5" fill="var(--accent-400)" fillOpacity="0.22" />
      <circle cx="185" cy="18" r="1" fill="var(--brand-300)" fillOpacity="0.22" />
      <circle cx="215" cy="285" r="1.5" fill="var(--accent-300)" fillOpacity="0.18" />

      {/* ─── SOURCE SYSTEMS (left column) ─── */}
      {/* Source 1 */}
      <rect x="14" y="60" width="64" height="26" rx="5" fill="url(#de-bg-grad)" stroke="var(--brand-400)" strokeWidth="0.8" strokeOpacity="0.4" />
      <text x="46" y="77" textAnchor="middle" fontSize="9" fontWeight="600" fill="var(--brand-200)" fillOpacity="0.85">Salesforce</text>

      {/* Source 2 */}
      <rect x="14" y="96" width="64" height="26" rx="5" fill="url(#de-bg-grad)" stroke="var(--brand-400)" strokeWidth="0.8" strokeOpacity="0.4" />
      <text x="46" y="113" textAnchor="middle" fontSize="9" fontWeight="600" fill="var(--brand-200)" fillOpacity="0.85">PostgreSQL</text>

      {/* Source 3 */}
      <rect x="14" y="132" width="64" height="26" rx="5" fill="url(#de-bg-grad)" stroke="var(--brand-400)" strokeWidth="0.8" strokeOpacity="0.4" />
      <text x="46" y="149" textAnchor="middle" fontSize="9" fontWeight="600" fill="var(--brand-200)" fillOpacity="0.85">Stripe</text>

      {/* Source 4 */}
      <rect x="14" y="168" width="64" height="26" rx="5" fill="url(#de-bg-grad)" stroke="var(--brand-400)" strokeWidth="0.8" strokeOpacity="0.4" />
      <text x="46" y="185" textAnchor="middle" fontSize="9" fontWeight="600" fill="var(--brand-200)" fillOpacity="0.85">Kafka Events</text>

      {/* Source label */}
      <text x="46" y="50" textAnchor="middle" fontSize="7.5" fontWeight="700" letterSpacing="0.08em" fill="var(--brand-300)" fillOpacity="0.7">SOURCES</text>

      {/* ─── INGESTION ARROW band ─── */}
      <path d="M78,73 L100,73 M78,109 L100,109 M78,145 L100,145 M78,181 L100,181" stroke="url(#de-flow)" strokeWidth="1.2" strokeDasharray="4 3" fill="none" />
      <path d="M100,127 L116,127" stroke="url(#de-flow)" strokeWidth="1.5" fill="none" />
      <polygon points="116,122 124,127 116,132" fill="var(--brand-400)" fillOpacity="0.6" />

      {/* Ingest label */}
      <text x="107" y="116" textAnchor="middle" fontSize="6.5" fontWeight="700" letterSpacing="0.06em" fill="var(--brand-300)" fillOpacity="0.55">INGEST</text>
      <text x="107" y="142" textAnchor="middle" fontSize="6" fill="var(--brand-300)" fillOpacity="0.4">Airbyte</text>
      <text x="107" y="151" textAnchor="middle" fontSize="6" fill="var(--brand-300)" fillOpacity="0.4">Fivetran</text>

      {/* ─── MEDALLION LAYERS (center) ─── */}
      {/* Bronze layer */}
      <rect x="130" y="70" width="52" height="46" rx="6" fill="url(#de-bronze)" stroke="var(--brand-400)" strokeWidth="0.9" strokeOpacity="0.5" />
      <text x="156" y="90" textAnchor="middle" fontSize="8" fontWeight="700" fill="var(--brand-200)" fillOpacity="0.9">Bronze</text>
      <text x="156" y="101" textAnchor="middle" fontSize="6.5" fill="var(--brand-300)" fillOpacity="0.65">Raw · Exact</text>
      <text x="156" y="111" textAnchor="middle" fontSize="6" fill="var(--brand-300)" fillOpacity="0.5">schema drift →</text>

      {/* Silver layer */}
      <rect x="130" y="128" width="52" height="46" rx="6" fill="url(#de-silver)" stroke="var(--brand-300)" strokeWidth="0.9" strokeOpacity="0.55" />
      <text x="156" y="148" textAnchor="middle" fontSize="8" fontWeight="700" fill="var(--brand-100)" fillOpacity="0.9">Silver</text>
      <text x="156" y="159" textAnchor="middle" fontSize="6.5" fill="var(--brand-200)" fillOpacity="0.65">Clean · Joined</text>
      <text x="156" y="169" textAnchor="middle" fontSize="6" fill="var(--brand-300)" fillOpacity="0.5">dbt models</text>

      {/* Gold layer */}
      <rect x="130" y="186" width="52" height="46" rx="6" fill="url(#de-gold)" stroke="var(--accent-400)" strokeWidth="0.9" strokeOpacity="0.55" />
      <text x="156" y="206" textAnchor="middle" fontSize="8" fontWeight="700" fill="var(--accent-100)" fillOpacity="0.9">Gold</text>
      <text x="156" y="217" textAnchor="middle" fontSize="6.5" fill="var(--accent-200)" fillOpacity="0.65">Business-ready</text>
      <text x="156" y="227" textAnchor="middle" fontSize="6" fill="var(--accent-300)" fillOpacity="0.5">tested &amp; trusted</text>

      {/* Warehouse label above */}
      <text x="156" y="60" textAnchor="middle" fontSize="7.5" fontWeight="700" letterSpacing="0.08em" fill="var(--brand-300)" fillOpacity="0.7">WAREHOUSE</text>

      {/* ─── TRANSFORM ARROW ─── */}
      <path d="M182,127 L200,127" stroke="url(#de-flow)" strokeWidth="1.5" fill="none" />
      <polygon points="200,122 208,127 200,132" fill="var(--accent-400)" fillOpacity="0.6" />

      {/* ─── ORCHESTRATION block ─── */}
      <rect x="210" y="100" width="58" height="54" rx="6" fill="url(#de-bg-grad)" stroke="var(--brand-400)" strokeWidth="0.8" strokeOpacity="0.4" />
      <text x="239" y="120" textAnchor="middle" fontSize="7.5" fontWeight="700" fill="var(--brand-200)" fillOpacity="0.85">Orchestrate</text>
      <text x="239" y="132" textAnchor="middle" fontSize="6.5" fill="var(--brand-300)" fillOpacity="0.6">Airflow</text>
      <text x="239" y="142" textAnchor="middle" fontSize="6.5" fill="var(--brand-300)" fillOpacity="0.6">Prefect</text>

      {/* dbt gear icon suggestion */}
      <circle cx="239" cy="108" r="4" fill="none" stroke="var(--brand-300)" strokeWidth="0.7" strokeOpacity="0.5" />
      <circle cx="239" cy="108" r="2" fill="var(--brand-400)" fillOpacity="0.3" />

      {/* Freshness badge */}
      <rect x="210" y="162" width="58" height="20" rx="4" fill="var(--accent-500)" fillOpacity="0.12" stroke="var(--accent-400)" strokeWidth="0.6" strokeOpacity="0.4" />
      <text x="239" y="175" textAnchor="middle" fontSize="6.5" fontWeight="600" fill="var(--accent-200)" fillOpacity="0.8">SLA monitored</text>

      {/* ─── SERVE ARROW ─── */}
      <path d="M268,127 L284,127" stroke="url(#de-flow)" strokeWidth="1.5" fill="none" />
      <polygon points="284,122 292,127 284,132" fill="var(--accent-400)" fillOpacity="0.6" />

      {/* ─── SERVE / BI CONSUMERS (right) ─── */}
      {/* Consumer 1 */}
      <rect x="294" y="84" width="64" height="26" rx="5" fill="url(#de-serve)" stroke="var(--accent-400)" strokeWidth="0.8" strokeOpacity="0.5" />
      <text x="326" y="101" textAnchor="middle" fontSize="9" fontWeight="600" fill="var(--accent-100)" fillOpacity="0.85">Power BI</text>

      {/* Consumer 2 */}
      <rect x="294" y="120" width="64" height="26" rx="5" fill="url(#de-serve)" stroke="var(--accent-400)" strokeWidth="0.8" strokeOpacity="0.5" />
      <text x="326" y="137" textAnchor="middle" fontSize="9" fontWeight="600" fill="var(--accent-100)" fillOpacity="0.85">Looker</text>

      {/* Consumer 3 */}
      <rect x="294" y="156" width="64" height="26" rx="5" fill="url(#de-serve)" stroke="var(--accent-400)" strokeWidth="0.8" strokeOpacity="0.5" />
      <text x="326" y="173" textAnchor="middle" fontSize="9" fontWeight="600" fill="var(--accent-100)" fillOpacity="0.85">Data APIs</text>

      {/* Serve label */}
      <text x="326" y="74" textAnchor="middle" fontSize="7.5" fontWeight="700" letterSpacing="0.08em" fill="var(--accent-300)" fillOpacity="0.7">SERVE</text>

      {/* ─── Bottom label strip ─── */}
      <line x1="20" y1="246" x2="380" y2="246" stroke="var(--brand-400)" strokeWidth="0.5" strokeOpacity="0.2" />
      <text x="200" y="262" textAnchor="middle" fontSize="8" fontWeight="600" letterSpacing="0.05em" fill="var(--brand-300)" fillOpacity="0.5">
        Medallion Lakehouse · dbt · Airflow · Governed by design
      </text>
    </svg>
  </div>
);
