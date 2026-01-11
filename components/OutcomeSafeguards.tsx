import React from 'react';
import processCostImg from '../assets/images/process-cost-reduction.webp.png';
import processQualityImg from '../assets/images/process-quality.webp.png';

const OutcomeSafeguards: React.FC = () => {

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Cost Reduction */}
      <div className="glass group rounded-[2.5rem] bg-white/[0.02] border border-white/10 overflow-hidden shadow-2xl">
        <div className="relative aspect-video w-full bg-black/40 overflow-hidden">
          <img src={processCostImg} className="visual-card-img transition-all duration-500 ease-out group-hover:brightness-110 group-hover:scale-[1.02] active:brightness-110 active:scale-[1.02]" alt="Cost Reduction" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050509] to-transparent"></div>
        </div>
        <div className="p-8 md:p-10 space-y-5">
          <h3 className="font-serif text-2xl md:text-3xl font-medium">
            Cost Reduction
          </h3>
          <p className="text-white/60 text-sm md:text-base font-light">
            We design systems that reduce operational overhead while preserving service quality and reliability. Intelligent automation and demand-aware infrastructure help you do more with less, without cutting corners.
          </p>
        </div>
      </div>

      {/* Uncompromising Quality */}
      <div className="glass group rounded-[2.5rem] bg-white/[0.02] border border-white/10 overflow-hidden shadow-2xl">
        <div className="relative aspect-video w-full bg-black/40 overflow-hidden">
          <img src={processQualityImg} className="visual-card-img transition-all duration-500 ease-out group-hover:brightness-110 group-hover:scale-[1.02] active:brightness-110 active:scale-[1.02]" alt="Uncompromising Quality" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050509] to-transparent"></div>
        </div>
        <div className="p-8 md:p-10 space-y-5">
          <h3 className="font-serif text-2xl md:text-3xl font-medium">
            Uncompromising Quality
          </h3>
          <p className="text-white/60 text-sm md:text-base font-light">
            We never sacrifice quality for speed or cost. Every solution is built with rigorous engineering, thorough testing, and long-term maintainability in mind. Quality is not negotiable, it's foundational.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OutcomeSafeguards;

