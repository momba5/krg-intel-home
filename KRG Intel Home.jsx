import React, { useEffect, useState } from 'react';
import { Shield, Activity, Target, Network, ChevronRight } from 'lucide-react';

const FUB_URL = 'https://fub.krgintel.com';

const portalModules = [
  {
    id: 'fub',
    status: 'Live now',
    title: 'FUB Intel Center',
    body:
      'A sharper reading of the business built from FUB data—designed to surface hidden opportunities, KPI relationships, law-of-averages insight, and performance patterns that standard dashboard views do not clearly expose.',
    href: FUB_URL,
    live: true,
    Icon: Shield,
  },
  {
    id: 'marketing',
    status: 'Taking shape',
    title: 'Marketing Intelligence',
    body:
      'A developing intelligence layer focused on the relationship between campaigns, traffic quality, engagement, and downstream business outcomes.',
    Icon: Activity,
  },
  {
    id: 'search',
    status: 'Forming now',
    title: 'Search Visibility',
    body:
      'An emerging view of discoverability, demand signals, and search behavior designed to reveal how visibility connects to momentum and opportunity flow.',
    Icon: Target,
  },
  {
    id: 'network',
    status: 'Ahead',
    title: 'Intelligence Network',
    body:
      'A broader operating view in progress—connecting marketing, search, lead flow, and execution into a clearer picture of what is really driving performance.',
    Icon: Network,
  },
];

/** Cyber-neural substrate: routing paths, signal fragments, junction pulses */
function NeuralSubstrate() {
  return (
    <svg
      className="krg-neural-svg krg-neural-svg--from-core pointer-events-none fixed inset-0 z-0 h-full w-full"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden
    >
      <defs>
        <linearGradient id="krg-trace" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(6,182,212,0)" />
          <stop offset="45%" stopColor="rgba(34,211,238,0.22)" />
          <stop offset="100%" stopColor="rgba(45,212,191,0)" />
        </linearGradient>
        <linearGradient id="krg-trace-dim" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(148,163,184,0)" />
          <stop offset="50%" stopColor="rgba(100,116,139,0.12)" />
          <stop offset="100%" stopColor="rgba(148,163,184,0)" />
        </linearGradient>
      </defs>

      <g
        fill="none"
        stroke="url(#krg-trace)"
        strokeWidth="0.2"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
        className="krg-circuit-lines"
      >
        <path d="M0 14 H32 L40 24 H72 L82 18 L100 22" />
        <path d="M0 38 H24 L34 48 H58 L68 44 H100" />
        <path d="M6 62 H46 L54 52 H94" />
        <path d="M18 88 H52 L62 76 H100" />
        <path d="M0 28 L18 34 H50 L64 28" />
        <path d="M12 50 H40 L48 58 H88" />
      </g>

      <g
        fill="none"
        stroke="rgba(45,212,191,0.35)"
        strokeWidth="0.12"
        strokeLinecap="round"
        strokeDasharray="2 18"
        vectorEffect="non-scaling-stroke"
        className="krg-signal-frags"
      >
        <path d="M0 20 H38" />
        <path d="M62 30 H100" />
        <path d="M0 55 H28" />
        <path d="M70 48 H100" />
        <path d="M25 72 H55" />
        <path d="M78 82 H100" />
      </g>

      <g
        fill="none"
        stroke="url(#krg-trace-dim)"
        strokeWidth="0.1"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
        className="krg-substrate-align"
      >
        <path d="M4 8 H96" opacity="0.32" />
        <path d="M2 48 H98" opacity="0.22" />
        <path d="M6 78 H92" opacity="0.2" />
        <path d="M48 0 V100" opacity="0.12" />
        <path d="M72 0 V100" opacity="0.1" />
      </g>

      <g className="krg-neural-nodes" fill="rgba(34,211,238,0.45)">
        {[
          [26, 20],
          [34, 24],
          [42, 18],
          [22, 32],
          [48, 44],
          [68, 38],
          [58, 62],
          [18, 52],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="0.35">
            <animate
              attributeName="opacity"
              values="0.15;0.85;0.2;0.6;0.15"
              dur={`${4.2 + i * 0.4}s`}
              repeatCount="indefinite"
            />
          </circle>
        ))}
      </g>
    </svg>
  );
}

/** Lower-zone substrate: faint routes and nodes behind CTA / Omnishun / footer (no grid) */
function LowerSubstrate() {
  return (
    <svg
      className="krg-lower-sub-svg pointer-events-none fixed bottom-0 left-0 right-0 z-0 h-[min(58vh,760px)] w-full"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 52"
      preserveAspectRatio="none"
      aria-hidden
    >
      <defs>
        <linearGradient id="krg-lower-trace" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="rgba(34,211,238,0)" />
          <stop offset="35%" stopColor="rgba(34,211,238,0.11)" />
          <stop offset="55%" stopColor="rgba(56,189,248,0.08)" />
          <stop offset="78%" stopColor="rgba(124,58,237,0.07)" />
          <stop offset="100%" stopColor="rgba(91,33,182,0)" />
        </linearGradient>
        <linearGradient id="krg-lower-trace-dim" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(148,163,184,0)" />
          <stop offset="50%" stopColor="rgba(100,116,139,0.07)" />
          <stop offset="100%" stopColor="rgba(148,163,184,0)" />
        </linearGradient>
      </defs>

      <g
        fill="none"
        stroke="url(#krg-lower-trace)"
        strokeWidth="0.14"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
        className="krg-lower-routes"
      >
        <path d="M0 28 C22 24 28 32 46 26 S78 20 100 24" />
        <path d="M0 36 L24 34 L38 40 L62 33 L100 38" />
        <path d="M8 44 H42 L52 38 H92" />
        <path d="M0 20 H32 L44 26 H72 L84 22" opacity="0.7" />
      </g>

      <g
        fill="none"
        stroke="rgba(45,212,191,0.22)"
        strokeWidth="0.1"
        strokeLinecap="round"
        strokeDasharray="1.5 14"
        vectorEffect="non-scaling-stroke"
        className="krg-lower-frags"
      >
        <path d="M0 31 H36" />
        <path d="M58 27 H100" />
        <path d="M18 41 H48" />
        <path d="M72 35 H100" />
      </g>

      <g
        fill="none"
        stroke="url(#krg-lower-trace-dim)"
        strokeWidth="0.09"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
        opacity="0.85"
      >
        <path d="M12 18 H88" opacity="0.5" />
        <path d="M0 48 Q50 42 100 46" opacity="0.45" />
      </g>

      <g className="krg-lower-nodes" fill="rgba(34,211,238,0.35)">
        {[
          [24, 34],
          [44, 26],
          [62, 33],
          [78, 38],
          [36, 40],
          [88, 22],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="0.28">
            <animate
              attributeName="opacity"
              values="0.12;0.45;0.18;0.38;0.12"
              dur={`${5.5 + i * 0.5}s`}
              repeatCount="indefinite"
            />
          </circle>
        ))}
      </g>
    </svg>
  );
}

export default function App() {
  const [pageReady, setPageReady] = useState(false);

  useEffect(() => {
    let timeoutId;
    const raf = requestAnimationFrame(() => {
      timeoutId = window.setTimeout(() => setPageReady(true), 60);
    });
    return () => {
      cancelAnimationFrame(raf);
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div
      className={`krg-root relative min-h-screen overflow-x-hidden bg-[#020308] text-[#E8ECF4] selection:bg-cyan-500/25 ${pageReady ? 'krg-page-ready' : ''}`}
    >
      <NeuralSubstrate />

      {/* Neural field: directional pulses + mesh (not generic blobs only) */}
        <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="krg-neural-mesh absolute inset-0 opacity-[0.22]" aria-hidden />
        <div className="krg-neural-field krg-neural-field-a absolute inset-0" aria-hidden />
        <div className="krg-neural-field krg-neural-field-b absolute inset-0" aria-hidden />
        <div className="krg-synapse-pulse krg-synapse-core absolute left-[min(18%,8rem)] top-[min(14%,5rem)] h-[min(36vw,200px)] w-[min(36vw,200px)] rounded-full bg-cyan-400/[0.032] blur-[72px]" aria-hidden />
        <div className="krg-synapse-pulse krg-synapse-delay absolute left-[28%] top-[20%] h-28 w-28 rounded-full bg-teal-400/[0.022] blur-[56px]" aria-hidden />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_40%_at_18%_16%,rgba(34,211,238,0.04),transparent_50%)]" />
      </div>

      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="krg-substrate-field absolute inset-0" aria-hidden />
      </div>

      {/* Lower system zone: broad electric field + vector substrate (CTA → Omnishun → footer) */}
      <div
        className="pointer-events-none fixed inset-x-0 bottom-0 z-0 h-[min(82vh,920px)] overflow-hidden"
        aria-hidden
      >
        <div className="krg-lower-energy-drift">
          <div className="krg-lower-energy" />
        </div>
      </div>
      <LowerSubstrate />

      <div className="krg-scan pointer-events-none fixed inset-x-0 top-0 z-[1] h-full" aria-hidden />
      <div className="krg-neural-flicker pointer-events-none fixed inset-0 z-[1]" aria-hidden />

      <div className="relative z-[2] mx-auto flex min-h-screen max-w-6xl flex-col px-4 pb-16 pt-7 sm:px-5 sm:pb-24 sm:pt-9">
        {/* Branded intelligence field: CSS wordmark core + modules floating above */}
        <div className="krg-system-field relative mb-9 sm:mb-10">
          <header className="krg-hero-environment relative mb-8 min-h-0 overflow-hidden rounded-[1.75rem] border border-white/[0.08] sm:mb-10 sm:rounded-[2rem]">
            {/* Top chassis seam: energized edge of the shell (not internal decoration) */}
            <div
              className="krg-hero-edge-seam pointer-events-none absolute inset-x-0 top-0 z-[6] h-[5px] overflow-hidden rounded-t-[1.75rem] sm:rounded-t-[2rem]"
              aria-hidden
            >
              <div className="krg-hero-edge-seam-breathe">
                <div className="krg-hero-edge-seam-bloom" />
              </div>
              <div className="krg-hero-edge-seam-core" />
              <div className="krg-hero-edge-seam-charge" />
            </div>
            {/* Atmospheric base + read veil on the right only — does not dim the branded core */}
            <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-[inherit]" aria-hidden>
              <div className="krg-hero-atmos absolute inset-0 rounded-[inherit]" />
              <div className="krg-hero-veil-right absolute inset-0 rounded-[inherit]" />
            </div>

            <div className="krg-boot-surge pointer-events-none absolute inset-0 z-[3] rounded-[inherit]" aria-hidden />
            <div className="krg-boot-ripple pointer-events-none absolute inset-0 z-[2] rounded-[inherit] opacity-0" aria-hidden />

            <div className="relative z-[4] px-5 py-9 sm:px-10 sm:py-9 lg:py-11">
              <div className="mb-7 flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.07] pb-4">
                <span className="flex items-center gap-2 text-[0.58rem] font-semibold uppercase tracking-[0.38em] text-cyan-400/75">
                  <span className="h-1 w-1 rounded-full bg-teal-400 shadow-[0_0_8px_rgba(45,212,191,0.6)]" aria-hidden />
                  Secure channel
                </span>
                <span className="hidden font-mono text-[0.55rem] tracking-[0.2em] text-slate-600 sm:inline">
                  SECURE · INTELLIGENCE · CORE
                </span>
              </div>

              <div className="grid items-start gap-11 lg:grid-cols-12 lg:gap-12 lg:gap-x-12">
                {/* CSS wordmark — no image, no frame */}
                <div className="krg-wordmark-focal relative flex min-h-[220px] justify-center lg:col-span-6 lg:min-h-[260px] lg:justify-start lg:pl-0">
                  <div className="krg-wordmark-spotwrap relative mx-auto w-full max-w-[520px] text-center lg:mx-0 lg:text-left">
                    <div className="krg-wordmark-lockup relative z-[4] inline-block w-full max-w-full">
                      <div className="krg-wordmark-core relative pb-[1.125rem]">
                        <div className="krg-wordmark-row relative z-[2] flex flex-wrap items-baseline justify-center gap-x-0 gap-y-1 lg:justify-start">
                          <span className="krg-krg-stack relative inline-block">
                            <span className="krg-krg-depth" aria-hidden="true">
                              KRG
                            </span>
                            <span className="krg-krg-body">KRG</span>
                            <span className="krg-krg-sheen" aria-hidden="true" />
                          </span>
                          <span className="krg-intel-stack relative inline-block">
                            <span className="krg-intel-bloom" aria-hidden="true">
                              intel
                            </span>
                            <span className="krg-intel-core">intel</span>
                          </span>
                        </div>

                        {/* Signal rail under lockup: source under KRG → current into intel */}
                        <div className="krg-laser-track pointer-events-none" aria-hidden>
                          <div className="krg-laser-breathe">
                            <div className="krg-laser-diffuse" />
                          </div>
                          <div className="krg-laser-coreline" />
                          <div className="krg-laser-charge" />
                        </div>
                      </div>

                      <p className="krg-wordmark-sub relative z-[2] -mt-1">Kenna Real Estate Group</p>
                    </div>
                  </div>
                </div>

                <div className="min-w-0 lg:col-span-6 lg:pt-1">
                  <p className="mb-3.5 text-[0.72rem] font-bold uppercase tracking-[0.32em] text-[#7d8b9e]">
                    Intelligence Center
                  </p>
                  <h1 className="mb-3 text-[1.65rem] font-bold leading-[1.12] tracking-tight text-white sm:text-3xl lg:text-[2.05rem] lg:leading-tight">
                    Welcome to KRG Intel
                  </h1>
                  <p className="mb-4 text-base font-medium text-slate-300 sm:text-lg">
                    The intelligence center behind Kenna Real Estate Group.
                  </p>
                  <p className="max-w-xl text-[0.95rem] leading-relaxed text-[#9dadbf] sm:text-[1rem] sm:leading-[1.65] lg:max-w-md">
                    A custom business intelligence layer built to surface the patterns, blind spots, pressure
                    points, and opportunities that ordinary reporting does not make easy to see.
                  </p>
                </div>
              </div>
            </div>
          </header>

        {/* Portal modules */}
        <section className="mb-9">
          <div className="mb-5 px-1">
            <p className="mb-2 text-[0.68rem] font-bold uppercase tracking-[0.32em] text-[#7d8a9e]">
              Portal Modules
            </p>
            <p className="max-w-2xl text-[0.92rem] leading-relaxed text-[#8b97ab]">
              Access the live intelligence systems shaping performance now, with additional modules
              expanding the picture over time.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {portalModules.map((mod, i) => {
              const Icon = mod.Icon;
              const staggerDelay = `${0.1 + i * 0.075}s`;
              const liveEnter = mod.live ? ' intel-enter--live' : '';

              const inner = (
                <>
                  <div className="intel-metal-grain pointer-events-none absolute inset-0 rounded-[inherit] opacity-[0.5]" aria-hidden />
                  <div className="intel-chassis-bevel pointer-events-none absolute inset-0 rounded-[inherit]" aria-hidden />
                  <div className="intel-panel-sheen pointer-events-none absolute inset-0 rounded-[inherit]" aria-hidden />
                  {mod.live && (
                    <>
                      <div className="intel-live-shimmer pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]" aria-hidden />
                      <div className="intel-live-mesh pointer-events-none absolute inset-0 rounded-[inherit]" aria-hidden />
                      <div className="intel-live-core-well pointer-events-none absolute inset-[2px] rounded-[inherit]" aria-hidden />
                      <div className="intel-live-rim pointer-events-none absolute -inset-px rounded-[inherit]" aria-hidden />
                    </>
                  )}
                  <div className="intel-edge-trace pointer-events-none absolute inset-0 rounded-[inherit]" aria-hidden />

                  <div className="relative z-[2] mb-4 flex items-start justify-between gap-3">
                    <div className="relative rounded-xl border border-white/[0.1] bg-[linear-gradient(165deg,rgba(255,255,255,0.06)_0%,rgba(0,0,0,0.35)_100%)] p-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),inset_0_-2px_6px_rgba(0,0,0,0.4)] transition-all duration-500 group-hover:border-cyan-400/25 group-hover:shadow-[0_0_22px_rgba(34,211,238,0.14),inset_0_1px_0_rgba(255,255,255,0.1)]">
                      {mod.live && (
                        <div className="intel-icon-bloom pointer-events-none absolute inset-[-40%] rounded-full bg-cyan-400/10 blur-xl" aria-hidden />
                      )}
                      <Icon
                        className={`relative z-[1] h-5 w-5 transition-all duration-500 ${
                          mod.live
                            ? 'text-cyan-200/95 drop-shadow-[0_0_12px_rgba(34,211,238,0.45)] group-hover:text-cyan-100'
                            : 'text-slate-500 group-hover:text-slate-400'
                        }`}
                        strokeWidth={1.75}
                      />
                    </div>
                    <span
                      className={`relative inline-flex shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-1 text-[0.58rem] font-bold uppercase tracking-[0.12em] ${
                        mod.live
                          ? 'intel-live-chip border-teal-400/35 bg-teal-500/[0.1] text-teal-100/95 shadow-[0_0_16px_rgba(45,212,191,0.12)]'
                          : 'border-white/[0.08] bg-black/25 text-[#8b97ab] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]'
                      }`}
                    >
                      {mod.live && (
                        <span className="intel-live-dot h-1.5 w-1.5 rounded-full bg-teal-400 shadow-[0_0_12px_rgba(45,212,191,0.85)]" />
                      )}
                      {mod.status}
                    </span>
                  </div>
                  <h3 className="relative z-[2] mb-3 text-[1.02rem] font-bold tracking-tight text-white transition-colors duration-300">
                    {mod.title}
                  </h3>
                  <p className="relative z-[2] flex-1 text-[0.84rem] leading-relaxed text-[#8b97ab] transition-colors duration-300 group-hover:text-[#b8c4d4]">
                    {mod.body}
                  </p>
                  {mod.href ? (
                    <div className="relative z-[2] mt-5 flex items-center gap-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-cyan-300/95 transition-transform duration-300 group-hover:text-cyan-100">
                      <span>Open FUB Intel Center</span>
                      <ChevronRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  ) : (
                    <div className="relative z-[2] mt-5 h-px w-full bg-gradient-to-r from-transparent via-white/[0.1] to-transparent" />
                  )}
                </>
              );

              const baseCard =
                'intel-panel intel-panel-translucent intel-enter group relative flex min-h-[280px] flex-col overflow-hidden rounded-[1.25rem] border p-[1px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400/40 sm:min-h-[300px]';

              if (mod.href) {
                return (
                  <a
                    key={mod.id}
                    href={mod.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${baseCard} intel-panel--live${liveEnter}`}
                    style={{ animationDelay: staggerDelay }}
                  >
                    <div className="relative flex h-full min-h-0 flex-col rounded-[1.2rem] px-5 py-[1.125rem] sm:p-6">{inner}</div>
                  </a>
                );
              }

              return (
                <article
                  key={mod.id}
                  className={`${baseCard}${liveEnter}`}
                  style={{ animationDelay: staggerDelay }}
                >
                  <div className="relative flex h-full min-h-0 flex-col rounded-[1.2rem] px-5 py-[1.125rem] sm:p-6">{inner}</div>
                </article>
              );
            })}
          </div>
        </section>
        </div>

        {/* Friction Analysis */}
        <section className="mb-9">
          <div
            className="intel-panel intel-panel-translucent intel-enter intel-panel--wide relative overflow-hidden rounded-[1.35rem] border p-[1px] sm:rounded-[1.75rem]"
            style={{ animationDelay: '0.52s' }}
          >
            <div className="intel-metal-grain pointer-events-none absolute inset-0 rounded-[inherit] opacity-[0.45]" aria-hidden />
            <div className="intel-chassis-bevel pointer-events-none absolute inset-0 rounded-[inherit]" aria-hidden />
            <div className="intel-panel-sheen pointer-events-none absolute inset-0 rounded-[inherit]" aria-hidden />
            <div className="relative z-[2] rounded-[1.3rem] p-7 sm:rounded-[1.7rem] sm:p-9">
              <div className="grid gap-8 md:grid-cols-[1fr_1.35fr] md:items-start md:gap-12">
                <div>
                  <p className="mb-3 text-[0.68rem] font-bold uppercase tracking-[0.3em] text-teal-500/90">
                    Friction Analysis
                  </p>
                  <h2 className="text-xl font-bold leading-snug text-white sm:text-2xl">
                    Most teams feel the drag before they can explain it.
                  </h2>
                </div>
                <p className="text-[0.95rem] md:border-l md:border-cyan-500/[0.1] md:pl-10">
                  Missed follow-up. Uneven source quality. Pipeline drag. Behavioral patterns that never
                  fully show up in standard reporting. KRG Intel was built to make those buried signals
                  easier to see, interpret, and act on.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Access Portal CTA — sits in shared lower atmospheric zone */}
        <section className="krg-lower-system-anchor mb-9">
          <div
            className="intel-panel intel-panel-translucent intel-enter relative overflow-hidden rounded-[1.35rem] border border-cyan-500/18 p-[1px] sm:rounded-[1.75rem]"
            style={{ animationDelay: '0.6s' }}
          >
            <div className="intel-metal-grain pointer-events-none absolute inset-0 rounded-[inherit] opacity-[0.4]" aria-hidden />
            <div className="intel-chassis-bevel pointer-events-none absolute inset-0 rounded-[inherit]" aria-hidden />
            <div className="intel-panel-sheen pointer-events-none absolute inset-0 rounded-[inherit]" aria-hidden />
            <div className="relative z-[2] rounded-[1.3rem] bg-[linear-gradient(168deg,rgba(20,28,38,0.78)_0%,rgba(10,14,20,0.72)_55%,rgba(5,7,12,0.88)_100%)] px-8 py-9 text-center shadow-[inset_0_-12px_32px_rgba(0,0,0,0.35)] sm:rounded-[1.7rem] sm:px-10 sm:py-10">
              <div className="relative z-[2] mx-auto max-w-2xl">
                <p className="mb-3 text-[0.65rem] font-bold uppercase tracking-[0.28em] text-cyan-400/80">
                  Access Portal
                </p>
                <h2 className="mb-4 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  Built for clearer growth.
                </h2>
                <p className="mb-8 text-[1.02rem]">
                  KRG Intel gives Kenna Real Estate Group a clearer view of what is happening, where
                  momentum is slipping, and where the next gains are likely to come from.
                </p>
                <a
                  href={FUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="intel-cta-btn group/btn relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-cyan-400/25 bg-[linear-gradient(135deg,rgba(45,212,191,0.95)_0%,rgba(34,211,238,0.88)_45%,rgba(56,189,248,0.85)_100%)] px-10 py-4 text-sm font-bold uppercase tracking-[0.12em] text-[#03050a] shadow-[0_0_40px_rgba(34,211,238,0.25),inset_0_1px_0_rgba(255,255,255,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300/40 hover:shadow-[0_0_52px_rgba(34,211,238,0.38),inset_0_1px_0_rgba(255,255,255,0.35)] active:translate-y-0"
                >
                  <span className="relative z-[2]">Open FUB Intel Center</span>
                  <ChevronRight className="relative z-[2] h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  <span className="intel-cta-glint pointer-events-none absolute inset-0 z-[1] opacity-0 group-hover/btn:opacity-100" aria-hidden />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Omnishun */}
        <section className="krg-lower-system-anchor mb-10">
          <div className="intel-panel intel-panel-translucent omnishun-signature-shell relative overflow-hidden rounded-[1.25rem] border border-white/[0.065] p-[1px] sm:rounded-2xl">
            <div className="omnishun-chassis-atmos pointer-events-none absolute inset-0 z-0 rounded-[inherit]" aria-hidden />
            <div className="intel-metal-grain pointer-events-none absolute inset-0 z-[1] rounded-[inherit] opacity-[0.35]" aria-hidden />
            <div
              className="omnishun-edge-seam pointer-events-none absolute inset-x-0 top-0 z-[4] h-[4px] overflow-hidden rounded-t-[1.25rem] sm:rounded-t-2xl"
              aria-hidden
            >
              <div className="omnishun-edge-seam-breathe">
                <div className="omnishun-edge-seam-bloom" />
              </div>
              <div className="omnishun-edge-seam-core" />
              <div className="omnishun-edge-seam-charge" />
            </div>
            <div className="relative z-[2] rounded-[1.15rem] bg-[linear-gradient(168deg,rgba(12,15,20,0.82)_0%,rgba(7,9,13,0.88)_100%)] px-7 py-8 sm:rounded-2xl sm:px-9 sm:py-9">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent" aria-hidden />
              <div className="relative z-[2] max-w-3xl">
                <p className="mb-2.5 text-[0.64rem] font-bold uppercase tracking-[0.26em]">
                  Omnishun Intelligence Centers
                </p>
                <h2 className="mb-3.5 text-xl font-bold leading-snug sm:text-2xl">
                  You knew something was missing.{' '}
                  <span>Now you know what.</span>
                </h2>
                <p className="text-[0.9rem]">
                  Omnishun builds intelligence centers for businesses that need more than surface-level
                  reporting. The goal is to turn scattered signals into clearer decisions by revealing the
                  patterns, weak points, and leverage moments that ordinary dashboards rarely connect
                  clearly enough to act on.
                </p>
              </div>
            </div>
          </div>
        </section>

        <footer className="krg-lower-system-anchor mt-auto border-t border-white/[0.045] pt-9">
          <div className="krg-builder-footer-face rounded-2xl border border-white/[0.06] bg-[linear-gradient(180deg,#080a0e_0%,#050608_100%)] px-7 py-9 shadow-[0_-10px_40px_rgba(124,58,237,0.035)] sm:px-8 sm:py-9">
            <p className="mb-2 text-lg font-semibold tracking-tight">
              Built by <span className="text-cyan-400/55">Omnishun</span>
            </p>
            <p className="mb-3 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[#717c8d]">
              Omnishun — Growth Intelligence
            </p>
            <p className="max-w-md text-[0.85rem] text-[#7d8899]">
              Custom growth systems, digital marketing insight, and operational clarity.
            </p>
          </div>
        </footer>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes krg-boot-surge {
          0% { opacity: 0; transform: scaleX(0.02) scaleY(0.4); filter: brightness(2); }
          15% { opacity: 0.85; transform: scaleX(1) scaleY(1); filter: brightness(1.4); }
          45% { opacity: 0.35; transform: scaleX(1) scaleY(1); filter: brightness(1); }
          100% { opacity: 0; transform: scaleX(1) scaleY(1); filter: brightness(1); }
        }
        @keyframes krg-boot-ripple {
          0% { opacity: 0; box-shadow: 0 0 0 0 rgba(34,211,238,0.35); }
          20% { opacity: 1; }
          100% { opacity: 0; box-shadow: 0 0 0 28px rgba(34,211,238,0); }
        }
        @keyframes krg-neural-mesh-shift {
          0%, 100% { opacity: 0.18; }
          50% { opacity: 0.26; }
        }
        @keyframes krg-neural-field-a {
          0%, 100% { opacity: 0.12; transform: translate(0,0) scale(1); }
          33% { opacity: 0.2; transform: translate(1.5%, -1%) scale(1.02); }
          66% { opacity: 0.15; transform: translate(-1%, 1.2%) scale(0.99); }
        }
        @keyframes krg-neural-field-b {
          0%, 100% { opacity: 0.08; transform: translate(-50%, 0) rotate(0deg); }
          50% { opacity: 0.16; transform: translate(-48%, -0.5%) rotate(0.3deg); }
        }
        @keyframes krg-synapse-glow {
          0%, 100% { opacity: 0.55; }
          50% { opacity: 0.85; }
        }
        @keyframes krg-circuit-flow {
          0% { stroke-dashoffset: 140; opacity: 0.12; }
          50% { opacity: 0.32; }
          100% { stroke-dashoffset: 0; opacity: 0.12; }
        }
        @keyframes krg-signal-surge {
          0% { stroke-dashoffset: 48; opacity: 0; }
          15% { opacity: 0.55; }
          50% { opacity: 0.35; }
          100% { stroke-dashoffset: 0; opacity: 0.08; }
        }
        @keyframes krg-scan-pass {
          0%, 96%, 100% { opacity: 0; transform: translateY(-8%); }
          2% { opacity: 0.05; }
          8% { opacity: 0.09; transform: translateY(108%); }
          12% { opacity: 0; transform: translateY(108%); }
        }
        @keyframes krg-flicker {
          0%, 92%, 100% { opacity: 0; }
          93% { opacity: 0.03; }
          94% { opacity: 0; }
          96% { opacity: 0.06; }
          97% { opacity: 0; }
        }
        @keyframes intel-sheen-drift {
          0%, 100% { opacity: 0.2; transform: translateX(-8%) skewX(-8deg); }
          50% { opacity: 0.32; transform: translateX(8%) skewX(-8deg); }
        }
        @keyframes intel-shimmer-sweep {
          0% { transform: translateX(-120%) skewX(-12deg); opacity: 0; }
          4% { opacity: 1; }
          20% { transform: translateX(120%) skewX(-12deg); opacity: 0.45; }
          24%, 100% { opacity: 0; transform: translateX(120%) skewX(-12deg); }
        }
        @keyframes intel-live-border {
          0%, 100% {
            box-shadow:
              0 22px 64px rgba(0,0,0,0.72),
              inset 0 2px 0 rgba(255,255,255,0.07),
              inset 0 -14px 28px rgba(0,0,0,0.5),
              0 0 0 1px rgba(34,211,238,0.15),
              0 0 20px rgba(34,211,238,0.055);
          }
          50% {
            box-shadow:
              0 24px 66px rgba(0,0,0,0.74),
              inset 0 2px 0 rgba(255,255,255,0.085),
              inset 0 -15px 30px rgba(0,0,0,0.52),
              0 0 0 1px rgba(45,212,191,0.2),
              0 0 24px rgba(34,211,238,0.075);
          }
        }
        @keyframes intel-live-mesh {
          0%, 100% { opacity: 0.26; background-position: 0% 50%; }
          50% { opacity: 0.4; background-position: 100% 50%; }
        }
        @keyframes intel-live-rim {
          0%, 100% { opacity: 0.32; }
          50% { opacity: 0.62; }
        }
        @keyframes intel-live-dot {
          0%, 100% { opacity: 1; transform: scale(1); box-shadow: 0 0 12px rgba(45,212,191,0.75); }
          50% { opacity: 0.6; transform: scale(0.9); box-shadow: 0 0 18px rgba(45,212,191,1); }
        }
        @keyframes intel-edge-trace {
          0%, 100% {
            opacity: 0.4;
            box-shadow: inset 0 0 0 0 rgba(34,211,238,0);
          }
          45% {
            opacity: 0.9;
            box-shadow: inset 0 0 0 1px rgba(34,211,238,0.14);
          }
          55% {
            opacity: 0.55;
            box-shadow: inset 0 0 0 1px rgba(45,212,191,0.1);
          }
        }
        @keyframes intel-card-enter {
          from {
            opacity: 0;
            transform: translateY(24px) scale(0.97);
            filter: blur(7px);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }
        @keyframes intel-live-activate {
          0% { filter: brightness(1) saturate(1); }
          40% { filter: brightness(1.06) saturate(1.1); }
          100% { filter: brightness(1) saturate(1); }
        }
        @keyframes intel-cta-glint {
          0% { transform: translateX(-100%) skewX(-20deg); }
          100% { transform: translateX(200%) skewX(-20deg); }
        }
        .krg-neural-svg { opacity: 0.26; }
        .krg-neural-svg--from-core {
          opacity: 0.32;
          mask-image: radial-gradient(
            ellipse 95% 85% at 24% 22%,
            rgba(0,0,0,1) 0%,
            rgba(0,0,0,0.85) 38%,
            rgba(0,0,0,0.35) 62%,
            rgba(0,0,0,0.08) 100%
          );
          -webkit-mask-image: radial-gradient(
            ellipse 95% 85% at 24% 22%,
            rgba(0,0,0,1) 0%,
            rgba(0,0,0,0.85) 38%,
            rgba(0,0,0,0.35) 62%,
            rgba(0,0,0,0.08) 100%
          );
        }

        .krg-hero-environment {
          background: linear-gradient(165deg, rgba(10,14,20,0.55) 0%, rgba(4,6,10,0.65) 100%);
          box-shadow:
            0 24px 72px rgba(0,0,0,0.5),
            inset 0 1px 0 rgba(255,255,255,0.06);
        }
        .krg-hero-atmos {
          background: linear-gradient(165deg, rgba(10,13,18,0.5) 0%, rgba(5,7,10,0.65) 100%);
        }
        .krg-hero-veil-right {
          background: linear-gradient(
            90deg,
            transparent 0%,
            transparent 34%,
            rgba(2,3,8,0.22) 52%,
            rgba(2,3,8,0.42) 100%
          );
          mix-blend-mode: multiply;
        }
        @supports not (mix-blend-mode: multiply) {
          .krg-hero-veil-right {
            mix-blend-mode: normal;
            opacity: 0.85;
            background: linear-gradient(
              90deg,
              transparent 0%,
              transparent 32%,
              rgba(2,3,8,0.35) 55%,
              rgba(2,3,8,0.55) 100%
            );
          }
        }

        /* Hero: top chassis edge-light (cyan seam on shell, not internal band) */
        .krg-hero-edge-seam {
          isolation: isolate;
        }
        .krg-hero-edge-seam-breathe {
          position: absolute;
          inset: 0;
          animation: krg-hero-edge-seam-breathe 6.5s cubic-bezier(0.45, 0, 0.35, 1) infinite;
        }
        @keyframes krg-hero-edge-seam-breathe {
          0%, 100% { opacity: 0.88; }
          50% { opacity: 0.98; }
        }
        .krg-hero-edge-seam-bloom {
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          height: 5px;
          background:
            linear-gradient(to bottom, rgba(207, 250, 254, 0.5) 0%, rgba(34, 211, 238, 0.14) 42%, transparent 100%),
            linear-gradient(
              90deg,
              transparent 0%,
              rgba(45, 212, 191, 0.42) 20%,
              rgba(255, 255, 255, 0.65) 40%,
              rgba(34, 211, 238, 0.52) 52%,
              rgba(56, 189, 248, 0.28) 72%,
              transparent 100%
            );
          filter: blur(2px);
          mix-blend-mode: screen;
        }
        .krg-hero-edge-seam-core {
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent 1%,
            rgba(45, 212, 191, 0.65) 20%,
            rgba(255, 255, 255, 0.98) 38%,
            rgba(224, 242, 254, 0.9) 46%,
            rgba(34, 211, 238, 0.88) 54%,
            rgba(56, 189, 248, 0.5) 68%,
            transparent 99%
          );
          box-shadow:
            0 0 2px rgba(255, 255, 255, 0.48),
            0 0 5px rgba(34, 211, 238, 0.32),
            0 1px 3px rgba(45, 212, 191, 0.18);
          mix-blend-mode: screen;
        }
        .krg-hero-edge-seam-charge {
          position: absolute;
          top: 0;
          left: 0;
          width: 15%;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.95),
            rgba(224, 242, 254, 0.55),
            transparent
          );
          opacity: 0;
          mix-blend-mode: screen;
          animation: krg-hero-edge-seam-charge 13s cubic-bezier(0.42, 0, 0.2, 1) infinite;
        }
        @keyframes krg-hero-edge-seam-charge {
          0%, 8%, 100% {
            opacity: 0;
            transform: translateX(-8%);
          }
          12% {
            opacity: 0.92;
          }
          46% {
            opacity: 0.48;
            transform: translateX(300%);
          }
          56% {
            opacity: 0;
            transform: translateX(360%);
          }
        }

        .krg-wordmark-spotwrap::before {
          content: '';
          position: absolute;
          inset: -8% -6% 0 -6%;
          z-index: 0;
          background:
            radial-gradient(ellipse 44% 40% at 28% 44%, rgba(34, 211, 238, 0.032) 0%, transparent 58%),
            radial-gradient(ellipse 34% 26% at 58% 50%, rgba(56, 189, 248, 0.012) 0%, transparent 55%);
          pointer-events: none;
        }
        @media (min-width: 1024px) {
          .krg-wordmark-spotwrap::before {
            background:
              radial-gradient(ellipse 38% 38% at 18% 46%, rgba(34, 211, 238, 0.028) 0%, transparent 56%),
              radial-gradient(ellipse 30% 24% at 46% 52%, rgba(56, 189, 248, 0.01) 0%, transparent 52%);
          }
        }

        .krg-wordmark-lockup {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-rendering: optimizeLegibility;
        }

        .krg-wordmark-core {
          position: relative;
          line-height: 0.82;
        }
        .krg-wordmark-row {
          line-height: 0.82;
        }

        /* Signal rail: crisp core + tight spill — not an underline */
        .krg-laser-track {
          position: absolute;
          z-index: 1;
          left: -2%;
          right: -5%;
          bottom: 0.18rem;
          height: 16px;
          overflow: visible;
        }
        .krg-laser-breathe {
          position: absolute;
          inset: 0;
          animation: krg-laser-breathe 6.5s cubic-bezier(0.45, 0, 0.35, 1) infinite;
        }
        @keyframes krg-laser-breathe {
          0%, 100% { opacity: 0.88; }
          50% { opacity: 0.96; }
        }
        .krg-laser-diffuse {
          position: absolute;
          left: 0;
          right: 0;
          top: 50%;
          height: 7px;
          transform: translateY(-50%);
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(34, 211, 238, 0.045) 6%,
            rgba(125, 211, 252, 0.2) 14%,
            rgba(186, 230, 253, 0.14) 20%,
            rgba(34, 211, 238, 0.11) 30%,
            rgba(56, 189, 248, 0.055) 46%,
            rgba(34, 211, 238, 0.028) 62%,
            transparent 90%
          );
          filter: blur(4px);
          mix-blend-mode: screen;
        }
        .krg-laser-coreline {
          position: absolute;
          left: 0;
          right: 0;
          top: 50%;
          height: 1px;
          transform: translateY(-50%);
          background: linear-gradient(
            90deg,
            rgba(56, 189, 248, 0.06) 0%,
            rgba(160, 240, 255, 0.55) 10%,
            rgba(255, 255, 255, 0.9) 18%,
            rgba(224, 242, 254, 0.72) 24%,
            rgba(34, 211, 238, 0.52) 36%,
            rgba(56, 189, 248, 0.22) 54%,
            rgba(34, 211, 238, 0.06) 72%,
            transparent 96%
          );
          box-shadow:
            0 0 2px rgba(224, 242, 254, 0.32),
            0 0 7px rgba(34, 211, 238, 0.14);
          mix-blend-mode: plus-lighter;
          opacity: 0.9;
        }
        @supports not (mix-blend-mode: plus-lighter) {
          .krg-laser-coreline {
            mix-blend-mode: screen;
            opacity: 0.88;
          }
        }
        .krg-laser-charge {
          position: absolute;
          top: 50%;
          left: 0;
          width: 18%;
          height: 2px;
          transform: translateY(-50%);
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.9),
            rgba(186, 230, 253, 0.65),
            transparent
          );
          filter: blur(0.5px);
          opacity: 0;
          mix-blend-mode: screen;
          animation: krg-laser-charge-travel 9.5s cubic-bezier(0.42, 0, 0.22, 1) infinite;
        }
        @keyframes krg-laser-charge-travel {
          0%, 8%, 100% {
            opacity: 0;
            transform: translateY(-50%) translateX(-15%);
          }
          12% {
            opacity: 1;
          }
          48% {
            opacity: 0.88;
            transform: translateY(-50%) translateX(320%);
          }
          58% {
            opacity: 0.25;
            transform: translateY(-50%) translateX(380%);
          }
          68%, 100% {
            opacity: 0;
            transform: translateY(-50%) translateX(420%);
          }
        }

        .omnishun-signature-shell {
          isolation: isolate;
          -webkit-backdrop-filter: blur(8px) saturate(1.12);
          backdrop-filter: blur(8px) saturate(1.12);
        }

        /* Omnishun: top chassis seam — quieter violet edge than hero */
        .omnishun-edge-seam {
          isolation: isolate;
        }
        .omnishun-edge-seam-breathe {
          position: absolute;
          inset: 0;
          animation: omnishun-edge-seam-breathe 14s cubic-bezier(0.45, 0, 0.35, 1) infinite;
        }
        @keyframes omnishun-edge-seam-breathe {
          0%, 100% { opacity: 0.82; }
          50% { opacity: 0.94; }
        }
        .omnishun-edge-seam-bloom {
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          height: 4px;
          background:
            linear-gradient(to bottom, rgba(196, 181, 253, 0.2) 0%, rgba(91, 33, 182, 0.06) 48%, transparent 100%),
            linear-gradient(
              90deg,
              transparent 4%,
              rgba(76, 29, 149, 0.22) 30%,
              rgba(167, 139, 250, 0.26) 50%,
              rgba(109, 40, 217, 0.18) 68%,
              transparent 96%
            );
          filter: blur(1.75px);
          mix-blend-mode: screen;
          opacity: 0.45;
        }
        .omnishun-edge-seam-core {
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent 5%,
            rgba(88, 28, 135, 0.5) 30%,
            rgba(196, 181, 253, 0.38) 50%,
            rgba(124, 58, 237, 0.42) 64%,
            transparent 97%
          );
          box-shadow: 0 0 2px rgba(139, 92, 246, 0.1);
          mix-blend-mode: screen;
          opacity: 0.38;
        }
        .omnishun-edge-seam-charge {
          position: absolute;
          top: 0;
          left: 0;
          width: 20%;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(221, 214, 254, 0.4),
            rgba(167, 139, 250, 0.2),
            transparent
          );
          opacity: 0;
          mix-blend-mode: screen;
          animation: omnishun-edge-seam-charge 24s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
        @keyframes omnishun-edge-seam-charge {
          0%, 14%, 100% {
            opacity: 0;
            transform: translateX(-5%);
          }
          20% {
            opacity: 0.48;
          }
          52% {
            opacity: 0.2;
            transform: translateX(270%);
          }
          64% {
            opacity: 0;
            transform: translateX(330%);
          }
        }

        /* KRG — gunmetal authority (type + material; intel owns signal hue) */
        .krg-krg-stack {
          font-family: 'IBM Plex Sans Condensed', 'IBM Plex Sans', ui-sans-serif, system-ui, sans-serif;
          font-weight: 700;
          font-size: clamp(3.75rem, 13.4vw, 6.75rem);
          letter-spacing: 0.022em;
          line-height: 0.84;
          text-transform: uppercase;
          filter: drop-shadow(0 2px 5px rgba(0, 2, 12, 0.52))
            drop-shadow(0 -1px 0 rgba(0, 8, 18, 0.34))
            drop-shadow(0 1px 0 rgba(165, 198, 228, 0.12))
            drop-shadow(0 0 16px rgba(25, 52, 88, 0.12));
        }
        .krg-krg-depth {
          position: absolute;
          left: 0;
          top: 0;
          z-index: 0;
          color: #010910;
          transform: translate(0.014em, 0.034em);
          text-shadow: none;
          user-select: none;
        }
        .krg-krg-body {
          position: relative;
          z-index: 2;
          background: linear-gradient(
            172deg,
            #6a7d90 0%,
            #4a5d72 10%,
            #354a62 24%,
            #243449 42%,
            #1a283c 62%,
            #121f30 82%,
            #0a1422 100%
          );
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: #1a2838;
        }
        @supports not (background-clip: text) {
          .krg-krg-body {
            background: none;
            -webkit-text-fill-color: unset;
            color: #243449;
            text-shadow:
              0 1px 0 rgba(140, 170, 200, 0.16),
              0 -1px 0 rgba(0, 8, 18, 0.9),
              0 2px 12px rgba(0, 0, 0, 0.48);
          }
          .krg-krg-stack {
            filter: none;
          }
        }
        .krg-krg-sheen {
          position: absolute;
          inset: -8% -12%;
          z-index: 4;
          overflow: hidden;
          pointer-events: none;
        }
        .krg-krg-sheen::after {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          width: 32%;
          background: linear-gradient(90deg, transparent, rgba(176, 205, 228, 0.038), transparent);
          transform: translateX(-140%) skewX(-8deg);
          animation: krg-krg-specular 22s ease-in-out infinite;
          mix-blend-mode: overlay;
        }
        @keyframes krg-krg-specular {
          0%, 12%, 88%, 100% {
            transform: translateX(-160%) skewX(-8deg);
            opacity: 0;
          }
          18% {
            opacity: 0.38;
          }
          42% {
            transform: translateX(200%) skewX(-8deg);
            opacity: 0.18;
          }
          52% {
            opacity: 0;
            transform: translateX(260%) skewX(-8deg);
          }
        }

        /* intel — slightly brighter signal vs KRG; still disciplined */
        .krg-intel-stack {
          font-family: 'IBM Plex Sans', ui-sans-serif, system-ui, sans-serif;
          font-weight: 500;
          font-size: clamp(2.05rem, 7.5vw, 4.28rem);
          letter-spacing: 0.021em;
          line-height: 0.9;
          margin-left: 0.026em;
          padding-bottom: 0.035em;
          text-transform: lowercase;
          filter:
            drop-shadow(0 1px 2px rgba(0, 4, 12, 0.36))
            drop-shadow(0 0 12px rgba(56, 189, 248, 0.07));
        }
        .krg-intel-bloom {
          position: absolute;
          left: 0;
          top: 0;
          z-index: 0;
          background: linear-gradient(
            180deg,
            #d2f6fc 0%,
            #7ee8f8 35%,
            #45c8f0 70%,
            #1f7eb8 100%
          );
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: rgba(56, 189, 248, 0.14);
          filter: blur(3.5px);
          opacity: 0.88;
          user-select: none;
          pointer-events: none;
        }
        .krg-intel-core {
          position: relative;
          z-index: 2;
          background: linear-gradient(
            180deg,
            #dff8ff 0%,
            #9aefff 22%,
            #52d0f2 56%,
            #2488c9 100%
          );
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: #7aa8be;
        }
        @supports not (background-clip: text) {
          .krg-intel-core {
            background: none;
            -webkit-text-fill-color: unset;
            color: #93c5dc;
            text-shadow:
              0 1px 0 rgba(255, 255, 255, 0.07),
              0 1px 3px rgba(0, 0, 0, 0.38),
              0 0 10px rgba(56, 189, 248, 0.1);
          }
          .krg-intel-bloom {
            background: none;
            -webkit-text-fill-color: unset;
            color: rgba(56, 189, 248, 0.16);
          }
          .krg-intel-stack {
            filter: none;
          }
        }

        .krg-wordmark-sub {
          margin-top: 1.15rem;
          font-family: 'Inter', ui-sans-serif, system-ui, sans-serif;
          font-size: clamp(0.56rem, 1.55vw, 0.68rem);
          font-weight: 600;
          letter-spacing: 0.48em;
          text-transform: uppercase;
          color: rgba(120, 132, 152, 0.92);
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.9);
        }
        .krg-circuit-lines path {
          stroke-dasharray: 10 130;
          animation: krg-circuit-flow 16s ease-in-out infinite;
        }
        .krg-circuit-lines path:nth-child(2) { animation-delay: -4s; animation-duration: 19s; }
        .krg-circuit-lines path:nth-child(3) { animation-delay: -7s; animation-duration: 17s; }
        .krg-circuit-lines path:nth-child(4) { animation-delay: -2s; animation-duration: 21s; }
        .krg-circuit-lines path:nth-child(5) { animation-delay: -9s; animation-duration: 18s; }
        .krg-circuit-lines path:nth-child(6) { animation-delay: -5s; animation-duration: 20s; }

        .krg-signal-frags path {
          animation: krg-signal-surge 2.8s ease-in-out infinite;
        }
        .krg-signal-frags path:nth-child(2) { animation-delay: -0.6s; animation-duration: 3.4s; }
        .krg-signal-frags path:nth-child(3) { animation-delay: -1.2s; animation-duration: 2.5s; }
        .krg-signal-frags path:nth-child(4) { animation-delay: -0.3s; animation-duration: 3.1s; }
        .krg-signal-frags path:nth-child(5) { animation-delay: -1.8s; animation-duration: 2.9s; }
        .krg-signal-frags path:nth-child(6) { animation-delay: -0.9s; animation-duration: 3.6s; }

        .krg-neural-mesh {
          background-image:
            linear-gradient(106deg, transparent 42%, rgba(34, 211, 238, 0.016) 50%, transparent 58%),
            linear-gradient(72deg, transparent 46%, rgba(45, 212, 191, 0.012) 52%, transparent 58%),
            radial-gradient(ellipse 90% 65% at 28% 55%, rgba(30, 58, 95, 0.07) 0%, transparent 52%),
            radial-gradient(ellipse 70% 50% at 72% 40%, rgba(34, 211, 238, 0.04) 0%, transparent 48%);
          background-size: 100% 100%, 100% 100%, 100% 100%, 100% 100%;
          animation: krg-neural-mesh-shift 22s ease-in-out infinite;
        }

        .krg-substrate-field {
          opacity: 0.85;
          background:
            linear-gradient(98deg, transparent 36%, rgba(34, 211, 238, 0.025) 50%, transparent 64%),
            linear-gradient(168deg, rgba(15, 23, 42, 0.12) 0%, transparent 42%),
            radial-gradient(ellipse 85% 60% at 50% 72%, rgba(30, 41, 59, 0.14) 0%, transparent 55%);
          -webkit-mask-image: radial-gradient(ellipse 72% 58% at 50% 42%, #000 0%, transparent 78%);
          mask-image: radial-gradient(ellipse 72% 58% at 50% 42%, #000 0%, transparent 78%);
        }

        /* Lower system zone: drift wrapper + blurred field (cohesive, not a hard shape) */
        .krg-lower-energy-drift {
          position: absolute;
          inset: 0;
          animation: krg-lower-energy-drift 44s cubic-bezier(0.42, 0, 0.28, 1) infinite;
        }
        @keyframes krg-lower-energy-drift {
          0%, 100% {
            opacity: 0.84;
            transform: translateY(0);
          }
          50% {
            opacity: 0.91;
            transform: translateY(-0.5%);
          }
        }
        .krg-lower-energy {
          position: absolute;
          left: -5%;
          right: -5%;
          top: -8%;
          bottom: -3%;
          transform: scale(1.035);
          filter: blur(22px);
          opacity: 0.92;
          background:
            radial-gradient(ellipse 130% 40% at 42% 100%, rgba(34, 211, 238, 0.072) 0%, transparent 58%),
            radial-gradient(ellipse 105% 34% at 36% 97%, rgba(56, 189, 248, 0.05) 0%, transparent 54%),
            radial-gradient(ellipse 110% 36% at 54% 93%, rgba(45, 212, 191, 0.03) 0%, rgba(56, 189, 248, 0.026) 28%, rgba(91, 33, 182, 0.02) 55%, transparent 72%),
            radial-gradient(ellipse 92% 30% at 62% 99%, rgba(34, 211, 238, 0.026) 0%, transparent 50%),
            radial-gradient(ellipse 74% 28% at 78% 99%, rgba(124, 58, 237, 0.05) 0%, transparent 52%),
            radial-gradient(ellipse 52% 20% at 50% 100%, rgba(30, 58, 95, 0.052) 0%, transparent 44%);
          mix-blend-mode: screen;
        }

        .krg-lower-sub-svg {
          opacity: 0.22;
          mix-blend-mode: screen;
          -webkit-mask-image: linear-gradient(
            to bottom,
            transparent 0%,
            rgba(0, 0, 0, 0.25) 14%,
            rgba(0, 0, 0, 0.75) 32%,
            #000 52%,
            #000 100%
          );
          mask-image: linear-gradient(
            to bottom,
            transparent 0%,
            rgba(0, 0, 0, 0.25) 14%,
            rgba(0, 0, 0, 0.75) 32%,
            #000 52%,
            #000 100%
          );
        }
        .krg-lower-routes path {
          stroke-dasharray: 32 140;
          animation: krg-lower-route-flow 44s linear infinite;
        }
        .krg-lower-routes path:nth-child(2) {
          animation-delay: -8s;
          animation-duration: 50s;
        }
        .krg-lower-routes path:nth-child(3) {
          animation-delay: -14s;
          animation-duration: 38s;
        }
        .krg-lower-routes path:nth-child(4) {
          animation-delay: -4s;
          animation-duration: 46s;
        }
        @keyframes krg-lower-route-flow {
          to {
            stroke-dashoffset: -172;
          }
        }
        .krg-lower-frags path {
          stroke-dasharray: 2 16;
          animation: krg-lower-frag-drift 28s cubic-bezier(0.45, 0, 0.35, 1) infinite;
        }
        .krg-lower-frags path:nth-child(2) {
          animation-delay: -5s;
          animation-duration: 32s;
        }
        .krg-lower-frags path:nth-child(3) {
          animation-delay: -11s;
        }
        .krg-lower-frags path:nth-child(4) {
          animation-delay: -3s;
          animation-duration: 34s;
        }
        @keyframes krg-lower-frag-drift {
          0%, 100% {
            opacity: 0.28;
          }
          50% {
            opacity: 0.42;
          }
        }

        .krg-lower-sub-svg .krg-lower-routes {
          opacity: 0.5;
        }
        .krg-lower-sub-svg .krg-lower-frags {
          opacity: 0.42;
        }
        .krg-lower-sub-svg .krg-lower-nodes {
          opacity: 0.4;
        }

        .krg-lower-system-anchor {
          position: relative;
          z-index: 1;
        }

        /* final lower-zone readability / typography polish */
        .intel-panel--wide .grid > p {
          color: #94a0b2;
          line-height: 1.72;
        }
        .krg-lower-system-anchor p {
          color: #94a0b2;
          line-height: 1.72;
        }
        .krg-lower-system-anchor .max-w-2xl > p:first-of-type {
          color: rgb(34 211 238 / 0.8);
          line-height: normal;
        }
        .omnishun-signature-shell h2 {
          color: #e5ebf3;
        }
        .omnishun-signature-shell h2 span {
          color: rgba(56, 189, 248, 0.68);
        }
        .omnishun-signature-shell p {
          color: #97a3b4;
          line-height: 1.72;
        }
        .krg-builder-footer-face p:first-child {
          color: #a6b1c1;
        }
        .krg-builder-footer-face .text-\\[\\#717c8d\\],
        .krg-builder-footer-face .text-\\[\\#7d8899\\] {
          color: #8c98aa !important;
        }

        .omnishun-chassis-atmos {
          background:
            radial-gradient(ellipse 100% 48% at 50% -8%, rgba(139, 92, 246, 0.07) 0%, transparent 52%),
            radial-gradient(ellipse 108% 92% at 50% 122%, rgba(76, 29, 149, 0.11) 0%, transparent 56%),
            radial-gradient(ellipse 52% 42% at 94% 2%, rgba(124, 58, 237, 0.05) 0%, transparent 50%);
          mix-blend-mode: screen;
          opacity: 0.58;
        }

        .krg-neural-field {
          background: radial-gradient(ellipse 42% 36% at 22% 18%, rgba(34,211,238,0.045) 0%, transparent 58%);
          mix-blend-mode: screen;
        }
        .krg-neural-field-a { animation: krg-neural-field-a 14s ease-in-out infinite; }
        .krg-neural-field-b {
          background: radial-gradient(ellipse 32% 28% at 26% 20%, rgba(45,212,191,0.032) 0%, transparent 55%);
          animation: krg-neural-field-b 22s ease-in-out infinite -3s;
        }
        .krg-synapse-pulse { animation: krg-synapse-glow 5.5s ease-in-out infinite; }
        .krg-synapse-delay { animation-delay: -2s; }

        .krg-neural-flicker {
          background: linear-gradient(100deg, transparent 48%, rgba(34,211,238,0.04) 50%, transparent 52%);
          background-size: 200% 200%;
          animation: krg-flicker 11s ease-in-out infinite;
        }

        .krg-scan {
          background: linear-gradient(
            to bottom,
            transparent 0%,
            rgba(56,189,248,0.035) 48%,
            rgba(45,212,191,0.045) 50%,
            transparent 52%
          );
          animation: krg-scan-pass 16s ease-in-out infinite;
        }

        .krg-boot-surge {
          background: linear-gradient(
            105deg,
            transparent 0%,
            rgba(34,211,238,0.14) 35%,
            rgba(45,212,191,0.2) 50%,
            rgba(56,189,248,0.12) 65%,
            transparent 100%
          );
          mix-blend-mode: screen;
          animation: krg-boot-surge 1.15s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .krg-boot-ripple {
          animation: krg-boot-ripple 1.25s ease-out 0.08s forwards;
        }
        .intel-metal-grain {
          background-image:
            repeating-linear-gradient(
              -18deg,
              transparent,
              transparent 3px,
              rgba(255,255,255,0.012) 3px,
              rgba(255,255,255,0.012) 4px
            ),
            repeating-linear-gradient(
              12deg,
              transparent,
              transparent 4px,
              rgba(0,0,0,0.032) 4px,
              rgba(0,0,0,0.032) 5px
            ),
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 1px,
              rgba(255,255,255,0.006) 1px,
              rgba(255,255,255,0.006) 2px
            ),
            linear-gradient(175deg, rgba(255,255,255,0.028) 0%, transparent 22%, transparent 78%, rgba(0,0,0,0.12) 100%);
          mix-blend-mode: soft-light;
          opacity: 0.85;
          pointer-events: none;
        }
        .intel-chassis-bevel {
          box-shadow:
            inset 0 1px 2px rgba(255,255,255,0.05),
            inset 0 -10px 26px rgba(0,0,0,0.52),
            inset 0 0 0 1px rgba(0,0,0,0.25);
          border-radius: inherit;
          pointer-events: none;
        }

        .intel-panel {
          background:
            linear-gradient(178deg, rgba(255,255,255,0.045) 0%, transparent 28%),
            linear-gradient(168deg, rgba(22,26,34,0.94) 0%, rgba(14,17,24,0.9) 22%, rgba(10,12,18,0.88) 48%, rgba(6,7,11,0.92) 72%, rgba(3,4,7,0.96) 100%);
          box-shadow:
            0 18px 48px rgba(0,0,0,0.62),
            0 6px 18px rgba(0,0,0,0.42),
            inset 0 1px 0 rgba(255,255,255,0.055),
            inset 0 -16px 36px rgba(0,0,0,0.48),
            inset 0 0 0 1px rgba(255,255,255,0.022);
          border-color: rgba(255,255,255,0.065);
          transition:
            transform 260ms cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 260ms cubic-bezier(0.22, 1, 0.36, 1),
            border-color 240ms ease,
            background 240ms ease;
        }
        .intel-panel-translucent {
          background:
            linear-gradient(178deg, rgba(255,255,255,0.038) 0%, transparent 26%),
            linear-gradient(168deg, rgba(20,24,32,0.78) 0%, rgba(12,15,22,0.76) 24%, rgba(8,10,16,0.74) 52%, rgba(4,5,9,0.84) 100%);
          box-shadow:
            0 20px 52px rgba(0,0,0,0.52),
            0 8px 22px rgba(0,0,0,0.36),
            inset 0 1px 0 rgba(255,255,255,0.048),
            inset 0 -18px 38px rgba(0,0,0,0.42),
            inset 0 0 0 1px rgba(255,255,255,0.018);
        }
        .intel-panel-sheen {
          background: linear-gradient(
            122deg,
            rgba(255,255,255,0.05) 0%,
            rgba(255,255,255,0.018) 14%,
            transparent 32%,
            transparent 100%
          );
          animation: intel-sheen-drift 28s cubic-bezier(0.45, 0, 0.35, 1) infinite;
          pointer-events: none;
        }

        .intel-panel--live {
          animation: intel-live-border 5.5s cubic-bezier(0.45, 0, 0.35, 1) infinite;
          border-color: rgba(34,211,238,0.2);
          background:
            linear-gradient(175deg, rgba(34,211,238,0.06) 0%, transparent 26%),
            linear-gradient(168deg, rgba(24,30,40,0.9) 0%, rgba(14,18,26,0.88) 24%, rgba(8,11,18,0.86) 52%, rgba(3,4,9,0.92) 100%);
        }
        .intel-panel--live > div {
          background: linear-gradient(180deg, rgba(255,255,255,0.022) 0%, transparent 26%);
        }
        .intel-panel--live:hover {
          transform: translateY(-5px) scale(1.008);
          border-color: rgba(45,212,191,0.3);
          box-shadow:
            0 26px 68px rgba(0,0,0,0.66),
            inset 0 1px 0 rgba(255,255,255,0.085),
            inset 0 -18px 38px rgba(0,0,0,0.48),
            0 0 0 1px rgba(34,211,238,0.2),
            0 0 26px rgba(34,211,238,0.09);
        }

        .intel-live-core-well {
          box-shadow:
            inset 0 0 40px rgba(34,211,238,0.035),
            inset 0 -18px 36px rgba(0,0,0,0.58);
          pointer-events: none;
        }
        .intel-live-rim {
          box-shadow:
            0 0 0 1px rgba(45,212,191,0.09),
            0 0 16px rgba(34,211,238,0.05);
          animation: intel-live-rim 4.8s cubic-bezier(0.45, 0, 0.35, 1) infinite;
          pointer-events: none;
        }

        .intel-live-shimmer::after {
          content: '';
          position: absolute;
          inset: -25% -45%;
          background: linear-gradient(
            100deg,
            transparent 32%,
            rgba(255,255,255,0.065) 50%,
            transparent 68%
          );
          animation: intel-shimmer-sweep 11s cubic-bezier(0.42, 0, 0.28, 1) infinite;
        }
        .intel-live-mesh {
          background: linear-gradient(
            125deg,
            rgba(34,211,238,0.065) 0%,
            transparent 38%,
            rgba(45,212,191,0.04) 68%,
            transparent 100%
          );
          background-size: 220% 220%;
          animation: intel-live-mesh 12s cubic-bezier(0.45, 0, 0.35, 1) infinite;
        }

        .intel-live-dot {
          animation: intel-live-dot 2.6s cubic-bezier(0.45, 0, 0.35, 1) infinite;
        }

        .intel-edge-trace {
          box-shadow: inset 0 0 0 1px rgba(34,211,238,0);
          animation: intel-edge-trace 5.5s ease-in-out infinite;
        }
        .intel-panel:not(.intel-panel--live) .intel-edge-trace {
          animation-duration: 10s;
        }
        .intel-panel:not(.intel-panel--live):hover {
          transform: translateY(-4px);
          border-color: rgba(255,255,255,0.14);
          box-shadow:
            0 24px 60px rgba(0,0,0,0.54),
            inset 0 1px 0 rgba(255,255,255,0.095),
            inset 0 -14px 30px rgba(0,0,0,0.32),
            0 0 0 1px rgba(56,189,248,0.11),
            0 0 28px rgba(34,211,238,0.06);
        }

        .krg-page-ready .intel-enter {
          animation: intel-card-enter 0.75s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        .krg-page-ready .intel-enter--live {
          animation:
            intel-card-enter 0.75s cubic-bezier(0.16, 1, 0.3, 1) both,
            intel-live-activate 0.9s ease-out 0.82s both;
        }

        .intel-cta-glint {
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255,255,255,0.32),
            transparent
          );
          animation: intel-cta-glint 2.4s cubic-bezier(0.42, 0, 0.28, 1) infinite;
        }
        .intel-cta-btn:hover .intel-cta-glint {
          animation-duration: 1.05s;
        }

        @media (prefers-reduced-motion: reduce) {
          .krg-boot-surge, .krg-boot-ripple,
          .krg-laser-breathe,
          .krg-laser-charge,
          .krg-hero-edge-seam-breathe,
          .krg-hero-edge-seam-charge,
          .omnishun-edge-seam-breathe,
          .omnishun-edge-seam-charge,
          .krg-lower-energy-drift,
          .krg-lower-energy,
          .krg-lower-routes path,
          .krg-lower-frags path,
          .krg-krg-sheen::after,
          .krg-neural-mesh, .krg-neural-field, .krg-synapse-pulse,
          .krg-circuit-lines path, .krg-signal-frags path,
          .krg-scan, .krg-neural-flicker,
          .intel-panel-sheen, .intel-live-shimmer::after, .intel-live-mesh,
          .intel-live-dot, .intel-edge-trace, .intel-live-rim, .intel-cta-glint {
            animation: none !important;
          }
          .intel-panel--live {
            animation: none !important;
            box-shadow: 0 20px 56px rgba(0,0,0,0.68), inset 0 1px 0 rgba(255,255,255,0.06), 0 0 0 1px rgba(34,211,238,0.18);
          }
          .krg-page-ready .intel-enter,
          .krg-page-ready .intel-enter--live {
            animation: none !important;
            opacity: 1;
            transform: none;
            filter: none;
          }
        }

        body {
          background-color: #020308;
          margin: 0;
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
        }
      `,
        }}
      />
    </div>
  );
}
