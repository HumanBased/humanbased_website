import React, { useMemo } from 'react';

// Shared backdrop for every PurposeBased page: a clean, homogeneous deep-navy
// starfield. No nebulae, no coloured patches, just deep space.
// Fixed full-page layer behind all content at z-index 0.

const rand = (min: number, max: number): number => Math.random() * (max - min) + min;

interface StarLayer {
  key: string;
  count: number;
  sizeMin: number;
  sizeMax: number;
  lo: number;
  hi: number;
  durMin: number;
  durMax: number;
}

const LAYERS: StarLayer[] = [
  { key: 'l1', count: 180, sizeMin: 0.4, sizeMax: 0.9, lo: 0.08, hi: 0.45, durMin: 4, durMax: 9 },
  { key: 'l2', count: 80, sizeMin: 1.0, sizeMax: 1.6, lo: 0.15, hi: 0.7, durMin: 3, durMax: 7 },
  { key: 'l3', count: 25, sizeMin: 1.8, sizeMax: 2.4, lo: 0.3, hi: 0.9, durMin: 2, durMax: 5 },
];

interface Star {
  id: string;
  size: number;
  top: number;
  left: number;
  lo: number;
  hi: number;
  duration: number;
  delay: number;
}

interface Shooter {
  id: number;
  name: string;
  cycle: number;
  length: number;
  top: number;
  left: number;
}

// Fires at `cycle` seconds, then repeats every `cycle` seconds. The visible
// travel is a fixed 0.8s regardless of cycle length: fade in 0.2s, hold 0.3s,
// fade out 0.3s, then idle (invisible) for the rest of the cycle.
const buildShootKeyframes = (name: string, cycle: number): string => {
  const pct = (s: number): string => `${((s / cycle) * 100).toFixed(3)}%`;
  // Travel ~280px along a 35deg diagonal (top-left -> bottom-right).
  const end = 'translate(229px, 161px) rotate(35deg)';
  return `
    @keyframes ${name} {
      0% { opacity: 0; transform: translate(0, 0) rotate(35deg); }
      ${pct(0.2)} { opacity: 1; }
      ${pct(0.5)} { opacity: 1; transform: translate(143px, 101px) rotate(35deg); }
      ${pct(0.8)} { opacity: 0; transform: ${end}; }
      100% { opacity: 0; transform: ${end}; }
    }`;
};

// Decorative zodiac watermark, drifting slowly behind every PurposeBased page.
const ZODIAC_GLYPHS = ['♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓'];
const GOLD = 'rgba(255,200,100,1)';

const ZodiacWheel: React.FC = () => (
  <div className="pb-zodiac" aria-hidden="true">
    <svg width="600" height="600" viewBox="-300 -300 600 600">
      {/* rings */}
      <circle cx="0" cy="0" r="270" fill="none" stroke={GOLD} strokeWidth="0.8" />
      <circle cx="0" cy="0" r="210" fill="none" stroke={GOLD} strokeWidth="0.8" />
      <circle cx="0" cy="0" r="160" fill="none" stroke={GOLD} strokeWidth="0.8" />

      {/* 12 segment lines + outer-ring dots */}
      {Array.from({ length: 12 }).map((_, i) => {
        const rad = (i * 30 * Math.PI) / 180;
        const cos = Math.cos(rad);
        const sin = Math.sin(rad);
        return (
          <g key={`seg-${i}`}>
            <line
              x1={(cos * 160).toFixed(2)}
              y1={(sin * 160).toFixed(2)}
              x2={(cos * 270).toFixed(2)}
              y2={(sin * 270).toFixed(2)}
              stroke={GOLD}
              strokeWidth="0.8"
            />
            <circle cx={(cos * 270).toFixed(2)} cy={(sin * 270).toFixed(2)} r="3" fill={GOLD} />
          </g>
        );
      })}

      {/* 12 zodiac glyphs at segment midpoints */}
      {ZODIAC_GLYPHS.map((glyph, i) => {
        const rad = ((i * 30 + 15) * Math.PI) / 180;
        return (
          <text
            key={`glyph-${i}`}
            x={(Math.cos(rad) * 240).toFixed(2)}
            y={(Math.sin(rad) * 240).toFixed(2)}
            fontSize="14"
            fill={GOLD}
            textAnchor="middle"
            dominantBaseline="central"
          >
            {glyph}
          </text>
        );
      })}

      {/* central star */}
      <text
        x="0"
        y="0"
        fontSize="20"
        fill="rgba(255,200,100,0.5)"
        textAnchor="middle"
        dominantBaseline="central"
      >
        ✦
      </text>
    </svg>

    <style>{`
      .pb-zodiac {
        position: fixed;
        right: -180px;
        top: 50%;
        transform: translateY(-50%);
        z-index: 1;
        pointer-events: none;
        opacity: 0.07;
      }
      .pb-zodiac svg {
        transform-origin: center;
        animation: pb-zodiac-spin 120s linear infinite;
      }
      @keyframes pb-zodiac-spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      @media (max-width: 1024px) {
        .pb-zodiac { display: none; }
      }
    `}</style>
  </div>
);

const PBCosmos: React.FC = () => {
  const stars = useMemo<Star[]>(() => {
    const out: Star[] = [];
    for (const layer of LAYERS) {
      for (let i = 0; i < layer.count; i++) {
        out.push({
          id: `${layer.key}-${i}`,
          size: rand(layer.sizeMin, layer.sizeMax),
          top: rand(0, 100),
          left: rand(0, 100),
          lo: layer.lo,
          hi: layer.hi,
          duration: rand(layer.durMin, layer.durMax),
          delay: rand(0, 12),
        });
      }
    }
    return out;
  }, []);

  const shooters = useMemo<Shooter[]>(() => {
    const cycles = [8, 23, 41];
    return cycles.map((cycle, i) => ({
      id: i,
      name: `pb-shoot-${i}`,
      cycle,
      length: rand(60, 90),
      top: rand(0, 55),
      left: rand(0, 65),
    }));
  }, []);

  return (
    <>
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        background: 'linear-gradient(180deg, #0a1628 0%, #0d1f3c 50%, #0a1628 100%)',
      }}
    >
      {stars.map((s) => (
        <div
          key={s.id}
          style={
            {
              position: 'absolute',
              top: `${s.top}%`,
              left: `${s.left}%`,
              width: `${s.size}px`,
              height: `${s.size}px`,
              borderRadius: '50%',
              background: '#ffffff',
              opacity: s.lo,
              '--pb-lo': s.lo,
              '--pb-hi': s.hi,
              animation: `pb-twinkle ${s.duration}s ease-in-out ${s.delay}s infinite`,
            } as React.CSSProperties
          }
        />
      ))}

      {shooters.map((sh) => (
        <div
          key={sh.id}
          style={{
            position: 'absolute',
            top: `${sh.top}%`,
            left: `${sh.left}%`,
            width: `${sh.length}px`,
            height: '1px',
            background: 'linear-gradient(90deg, rgba(255,255,255,0), rgba(255,255,255,0.95))',
            opacity: 0,
            animation: `${sh.name} ${sh.cycle}s linear ${sh.cycle}s infinite`,
          }}
        />
      ))}

      <style>{`
        @keyframes pb-twinkle {
          0% { opacity: var(--pb-lo, 0.1); }
          50% { opacity: var(--pb-hi, 0.6); }
          100% { opacity: var(--pb-lo, 0.1); }
        }
        ${shooters.map((sh) => buildShootKeyframes(sh.name, sh.cycle)).join('\n')}
      `}</style>
    </div>
    <ZodiacWheel />
    </>
  );
};

export default PBCosmos;
