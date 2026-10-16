import React from 'react';
import { usePageTitle } from '../hooks/usePageTitle';
import { useJsonLd } from '../hooks/useJsonLd';
import Hero from '../components/Hero';
import WhyHumanBased from '../components/WhyHumanBased';
import Contact from '../components/Contact';
import Journey from '../components/motion/Journey';
import { HOME_JOURNEY } from '../components/motion/journeys';
import ChoosePath from '../components/home/ChoosePath';
import People from '../components/home/People';
import HowWeWork from '../components/home/HowWeWork';
import '../components/home/home.css';

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
    <div className="flex-grow relative hb-home">
      <Journey
        start=".hb-hero-copy"
        end="#contact"
        milestones={HOME_JOURNEY(['#hero', '#people', '#paths', '#how-we-work', '#contact'])}
      />
      <Hero />
      <div id="about">
        <WhyHumanBased />
      </div>
      <hr className="mx-divider" />
      <People />
      <hr className="mx-divider" />
      <ChoosePath />
      <hr className="mx-divider" />
      <HowWeWork />
      <hr className="mx-divider" />
      <section id="contact" className="scroll-mt-24 ed-sec">
        {/* The founders are introduced in "The people", so no founders credit here. */}
        <Contact showTrustLine={false} />
      </section>
    </div>
  );
};

export default HomePage;