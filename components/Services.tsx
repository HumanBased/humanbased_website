import React from 'react';

const Services: React.FC = () => {

  return (
    <section className="py-24 md:py-32 px-6 relative">
      {/* Background glow blobs */}
      <div className="light-blob w-[500px] h-[500px] bg-purple-600/10 bottom-0 right-0"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-8">
            Capabilities for <span className="text-amber-500">consequential impact</span>.
          </h2>
          <p className="text-white/40 text-lg md:text-xl font-light max-w-2xl">
            We partner with mission-driven institutions to build systems that elevate human potential. Our work combines rigorous engineering with behavioral science to solve complex challenges.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Services;
