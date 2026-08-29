import React, { useMemo } from 'react';

// Shared animated cosmos backdrop for every PurposeBased page.
// Fixed full-page layer that sits behind all content at z-index 0.

const NEBULA_PAIRS: [string, string][] = [
  ['#5b4bd6', '#8a6bff'],
  ['#c2417a', '#ff7ab0'],
  ['#2f6fb5', '#63a8e8'],
  ['#6a3fa8', '#a878e8'],
  ['#b4622a', '#ffb066'],
  ['#2d5fa8', '#7fb4e8'],
  ['#8e3a6e', '#e07ab0'],
  ['#4a4bc0', '#8f8ef0'],
  ['#2f7a94', '#6fc4d8'],
  ['#7a3fa0', '#b47ae0'],
  ['#b06a2a', '#ffc07a'],
];

const CORE_TONES: string[] = ['#ffd9a8', '#dcc4ff', '#ffc4dd', '#bcd9ff', '#ffd9a8'];

const rand = (min: number, max: number): number => Math.random() * (max - min) + min;

interface Nebula {
  id: number;
  c1: string;
  c2: string;
  size: number;
  top: number;
  left: number;
  duration: number;
  delay: number;
  anim: string;
}

interface Core {
  id: number;
  tone: string;
  size: number;
  top: number;
  left: number;
  duration: number;
}

interface Star {
  id: number;
  size: number;
  top: number;
  left: number;
  duration: number;
  delay: number;
  maxOpacity: number;
}

interface Shooting {
  id: number;
  top: number;
  left: number;
  duration: number;
  delay: number;
}

const PBCosmos: React.FC = () => {
  const nebulae = useMemo<Nebula[]>(
    () =>
      NEBULA_PAIRS.map((pair, i) => ({
        id: i,
        c1: pair[0],
        c2: pair[1],
        size: rand(320, 620),
        top: rand(-12, 88),
        left: rand(-12, 88),
        duration: rand(46, 62),
        delay: rand(0, 18),
        anim: `pb-drift${(i % 3) + 1}`,
      })),
    [],
  );

  const cores = useMemo<Core[]>(
    () =>
      CORE_TONES.map((tone, i) => ({
        id: i,
        tone,
        size: rand(180, 380),
        top: rand(6, 78),
        left: rand(6, 78),
        duration: rand(50, 66),
      })),
    [],
  );

  const stars = useMemo<Star[]>(
    () =>
      Array.from({ length: 230 }, (_, i) => ({
        id: i,
        size: rand(0.4, 2.3),
        top: rand(0, 100),
        left: rand(0, 100),
        duration: rand(4, 8),
        delay: rand(0, 7),
        maxOpacity: rand(0.35, 0.7),
      })),
    [],
  );

  const shooting = useMemo<Shooting[]>(
    () =>
      Array.from({ length: 5 }, (_, i) => ({
        id: i,
        top: rand(0, 55),
        left: rand(0, 78),
        duration: rand(12, 20),
        delay: rand(6, 51),
      })),
    [],
  );

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        background: 'linear-gradient(140deg, #1a3a5c 0%, #0f2940 55%, #1a2f4d 100%)',
      }}
    >
      {nebulae.map((n) => (
        <div
          key={`n${n.id}`}
          style={{
            position: 'absolute',
            top: `${n.top}%`,
            left: `${n.left}%`,
            width: `${n.size}px`,
            height: `${n.size}px`,
            borderRadius: '50%',
            opacity: 0.18,
            filter: 'blur(70px)',
            background: `radial-gradient(circle at 35% 35%, ${n.c1}, ${n.c2} 60%, transparent 78%)`,
            animation: `${n.anim} ${n.duration}s ease-in-out ${n.delay}s infinite alternate`,
          }}
        />
      ))}

      {cores.map((c) => (
        <div
          key={`c${c.id}`}
          style={{
            position: 'absolute',
            top: `${c.top}%`,
            left: `${c.left}%`,
            width: `${c.size}px`,
            height: `${c.size}px`,
            borderRadius: '50%',
            opacity: 0.15,
            filter: 'blur(60px)',
            background: `radial-gradient(circle, ${c.tone}, transparent 70%)`,
            animation: `pb-drift2 ${c.duration}s ease-in-out infinite alternate`,
          }}
        />
      ))}

      {stars.map((s) => (
        <div
          key={`s${s.id}`}
          style={
            {
              position: 'absolute',
              top: `${s.top}%`,
              left: `${s.left}%`,
              width: `${s.size}px`,
              height: `${s.size}px`,
              borderRadius: '50%',
              background: '#ffffff',
              '--pb-star-max': s.maxOpacity,
              animation: `pb-twinkle ${s.duration}s ease-in-out ${s.delay}s infinite`,
            } as React.CSSProperties
          }
        />
      ))}

      {shooting.map((sh) => (
        <div
          key={`sh${sh.id}`}
          style={{
            position: 'absolute',
            top: `${sh.top}%`,
            left: `${sh.left}%`,
            width: '140px',
            height: '2px',
            background: 'linear-gradient(90deg, rgba(255,255,255,0.9), transparent)',
            opacity: 0,
            animation: `pb-shoot ${sh.duration}s linear ${sh.delay}s infinite`,
          }}
        />
      ))}

      <style>{`
        @keyframes pb-drift1 { 0% { transform: translate(0, 0); } 100% { transform: translate(24px, -21px); } }
        @keyframes pb-drift2 { 0% { transform: translate(0, 0); } 100% { transform: translate(-22px, 26px); } }
        @keyframes pb-drift3 { 0% { transform: translate(0, 0); } 100% { transform: translate(20px, 28px); } }
        @keyframes pb-twinkle {
          0%, 100% { opacity: 0.1; }
          50% { opacity: var(--pb-star-max, 0.6); }
        }
        @keyframes pb-shoot {
          0%   { opacity: 0; transform: translate(0, 0) rotate(18deg); }
          3%   { opacity: 1; }
          9%   { opacity: 1; }
          16%  { opacity: 0; transform: translate(440px, 150px) rotate(18deg); }
          100% { opacity: 0; transform: translate(440px, 150px) rotate(18deg); }
        }
      `}</style>
    </div>
  );
};

export default PBCosmos;
