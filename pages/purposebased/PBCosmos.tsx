import React, { useMemo } from 'react';

// Shared backdrop for every PurposeBased page: a clean, homogeneous deep-navy
// starfield. No nebulae, no coloured patches — just deep space.
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
  );
};

export default PBCosmos;
