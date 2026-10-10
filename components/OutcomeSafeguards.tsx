import React from 'react';
import processCostImg from '../assets/images/process-cost-reduction.webp';
import processQualityImg from '../assets/images/process-quality.webp';

const OutcomeSafeguards: React.FC = () => {

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Cost Reduction */}
      <div className="mx-card group overflow-hidden" data-reveal="">
        <div className="relative aspect-video w-full bg-black/40 overflow-hidden">
          <img src={processCostImg} className="visual-card-img transition-all duration-500 ease-out group-hover:brightness-110 group-hover:scale-[1.02]" alt="Cost Reduction" width={1360} height={784} loading="lazy" decoding="async" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050509] to-transparent"></div>
        </div>
        <div className="p-6 sm:p-8 lg:p-10 space-y-5">
          <h3 className="font-serif ed-subtitle">
            Cost Reduction
          </h3>
          <p className="ed-body">
            We design systems that reduce operational overhead while preserving service quality and reliability. Intelligent automation and demand-aware infrastructure help you do more with less, without cutting corners.
          </p>
        </div>
      </div>

      {/* Uncompromising Quality */}
      <div className="mx-card group overflow-hidden" data-reveal="">
        <div className="relative aspect-video w-full bg-black/40 overflow-hidden">
          <img src={processQualityImg} className="visual-card-img transition-all duration-500 ease-out group-hover:brightness-110 group-hover:scale-[1.02]" alt="Uncompromising Quality" width={1344} height={768} loading="lazy" decoding="async" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050509] to-transparent"></div>
        </div>
        <div className="p-6 sm:p-8 lg:p-10 space-y-5">
          <h3 className="font-serif ed-subtitle">
            Uncompromising Quality
          </h3>
          <p className="ed-body">
            We never sacrifice quality for speed or cost. Every solution is built with rigorous engineering, thorough testing, and long-term maintainability in mind. Quality is not negotiable, it's foundational.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OutcomeSafeguards;

