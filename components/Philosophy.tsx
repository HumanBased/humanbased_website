
import React from 'react';

const Philosophy: React.FC = () => {
  return (
    <section className="ed-sec" id="about-philosophy">
      <div className="ed-full">
        <div className="mx-card" data-reveal="">
          <div className="px-6 py-10 sm:px-10 sm:py-14 lg:px-16 lg:py-16">
            {/* Small label row at top */}
            <p className="ed-label mb-8">
              About HumanBased
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
              {/* Top-left: big headline */}
              <div className="space-y-4">
                <h2 className="font-serif ed-title">
                  Restoring the <span className="text-amber-400">human signal</span> in a digital world.
                </h2>
              </div>

              {/* Top-right: Our Origin */}
              <div className="space-y-4">
                <h3 className="font-serif ed-subtitle text-white">
                  Our Origin
                </h3>
                <p className="ed-body">
                  We founded HumanBased after witnessing a concerning trend: while digital tools grew exponentially more powerful, human capacity for connection and clarity steadily diminished. Our mission is to reverse this trajectory by creating systems where technology serves as an enabling foundation for human flourishing, not an impediment to it.
                </p>
              </div>

              {/* Bottom-left: Our Uniqueness */}
              <div className="space-y-4">
                <h3 className="font-serif ed-subtitle text-white">
                  Our Uniqueness
                </h3>
                <p className="ed-body">
                  We are a social enterprise rooted in social consciousness rigor. While others optimize for feature bloat or engagement metrics, we optimize for measurable social impact. We blend high-performance engineering with behavioral science to create solutions that are as psychologically sound as they are technically robust.
                </p>
              </div>

              {/* Bottom-right: Core Beliefs */}
              <div className="space-y-4">
                <h3 className="ed-label">
                  Core Beliefs
                </h3>
                <ul className="space-y-4 text-sm sm:text-base text-white/80 leading-relaxed">
                  <li className="flex gap-5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2.5 shrink-0"></span>
                    <div>
                      <strong className="text-white block font-medium mb-2">Human Sovereignty</strong>
                      <p className="text-white/60 font-light leading-relaxed">Technology must serve human intent and respect attention, never exploit it for retention.</p>
                    </div>
                  </li>
                  <li className="flex gap-5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2.5 shrink-0"></span>
                    <div>
                      <strong className="text-white block font-medium mb-2">Unwavering Ethics</strong>
                      <p className="text-white/60 font-light leading-relaxed">Our ethical commitments are non-negotiable. Every decision, every line of code, every solution we build is grounded in human dignity, transparency, and social responsibility. Technology may evolve, but our values remain constant.</p>
                    </div>
                  </li>
                  <li className="flex gap-5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2.5 shrink-0"></span>
                    <div>
                      <strong className="text-white block font-medium mb-2">Collective Elevation</strong>
                      <p className="text-white/60 font-light leading-relaxed">We believe in shared prosperity. Our success is measured by how much we elevate everyone in our ecosystem: individuals, teams, and society at large. That is why we build solutions that strengthen teams, empower individuals, and advance communities. We rise together.</p>
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
