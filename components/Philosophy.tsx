
import React from 'react';

const Philosophy: React.FC = () => {
  return (
    <section className="py-12 md:py-16 px-6 relative overflow-hidden flex flex-wrap">
      {/* Subtle light blobs */}
      <div className="light-blob w-[400px] h-[400px] bg-indigo-600/10 top-0 left-0"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="glass rounded-[3rem] border-white/5 bg-white/[0.01]">
          <div className="px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14">
            {/* Small label row at top */}
            <p className="text-xs tracking-[0.25em] uppercase text-amber-400 mb-6">
              About HumanBased
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
              {/* Top-left: big headline */}
              <div className="space-y-4">
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight">
                  Restoring the <span className="text-amber-400">human signal</span> in a digital world.
                </h2>
              </div>

              {/* Top-right: Our Origin */}
              <div className="space-y-4">
                <h3 className="font-serif text-lg text-white">
                  Our Origin
                </h3>
                <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                  We founded HumanBased after witnessing a concerning trend: while digital tools grew exponentially more powerful, human capacity for connection and clarity steadily diminished. Our mission is to reverse this trajectory by creating systems where technology serves as an enabling foundation for human flourishing, not an impediment to it.
                </p>
              </div>

              {/* Bottom-left: Our Uniqueness */}
              <div className="space-y-4">
                <h3 className="font-serif text-lg text-white">
                  Our Uniqueness
                </h3>
                <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                  We are a social enterprise rooted in social consciousness rigor. While others optimize for feature bloat or engagement metrics, we optimize for measurable social impact. We blend high-performance engineering with behavioral science to create solutions that are as psychologically sound as they are technically robust.
                </p>
              </div>

              {/* Bottom-right: Core Beliefs */}
              <div className="space-y-4">
                <h3 className="text-xs uppercase tracking-[0.3em] text-amber-400">
                  Core Beliefs
                </h3>
                <ul className="space-y-4 text-sm sm:text-base text-white/80 leading-relaxed">
                  <li className="flex gap-5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2.5 shrink-0 shadow-[0_0_10px_rgba(242,178,74,0.5)]"></span>
                    <div>
                      <strong className="text-white block font-medium mb-2">Human Sovereignty</strong>
                      <p className="text-white/50 font-light leading-relaxed">Technology must serve human intent and respect attention, never exploit it for retention.</p>
                    </div>
                  </li>
                  <li className="flex gap-5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2.5 shrink-0 shadow-[0_0_10px_rgba(242,178,74,0.5)]"></span>
                    <div>
                      <strong className="text-white block font-medium mb-2">Unwavering Ethics</strong>
                      <p className="text-white/50 font-light leading-relaxed">Our ethical commitments are non-negotiable. Every decision, every line of code, every solution we build is grounded in human dignity, transparency, and social responsibility. Technology may evolve, but our values remain constant.</p>
                    </div>
                  </li>
                  <li className="flex gap-5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2.5 shrink-0 shadow-[0_0_10px_rgba(242,178,74,0.5)]"></span>
                    <div>
                      <strong className="text-white block font-medium mb-2">Collective Elevation</strong>
                      <p className="text-white/50 font-light leading-relaxed">We believe in shared prosperity. Our success is measured by how much we elevate everyone in our ecosystem: individuals, teams, and society at large. That is why we build solutions that strengthen teams, empower individuals, and advance communities. We rise together.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
