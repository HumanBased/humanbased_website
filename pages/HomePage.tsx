import React from 'react';
import { Link } from 'react-router-dom';
import { usePageTitle } from '../hooks/usePageTitle';
import { useJsonLd } from '../hooks/useJsonLd';
import Hero from '../components/Hero';
import Reveal from '../components/Reveal';
import WhyHumanBased from '../components/WhyHumanBased';
import Contact from '../components/Contact';
import Journey from '../components/motion/Journey';
import { HB_JOURNEY } from '../components/motion/journeys';

const HomePage: React.FC = () => {
  usePageTitle(
    'HumanBased – Human problems. Digital solutions.',
    '/',
    'HumanBased builds custom mobile apps and AI systems for social impact, co-designing secure, scalable solutions that automate workflows and empower teams.',
  );
  useJsonLd({
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'HumanBased',
    url: 'https://www.humanbased.org/',
  });
  return (
    <div className="flex-grow relative">
      <Journey
        start=".hb-hero-copy"
        end="#contact"
        milestones={HB_JOURNEY(['#hero', '#about', '#process', '#contact'])}
      />
      <Hero />
      <div id="about">
        <WhyHumanBased />
      </div>
      <hr className="mx-divider" />
      <section id="process" className="ed-sec--tight">
        <Reveal className="ed-full flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="ed-stack max-w-3xl">
            <p className="ed-label">How</p>
            <h2 className="font-serif ed-title">Our Process</h2>
            <p className="ed-lead text-white/65">
              We follow a rigorous path from immersion and insight to continuous evolution,
              so every engagement moves from understanding to lasting impact.
            </p>
          </div>
          <div className="shrink-0">
            <Link to="/process" className="ed-btn ed-btn--primary">
              Explore the process
            </Link>
          </div>
        </Reveal>
      </section>
      <hr className="mx-divider" />
      <section id="contact" className="scroll-mt-24 ed-sec">
        <Contact />
      </section>
    </div>
  );
};

export default HomePage;