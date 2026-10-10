import React from 'react';
import resultsFirstImg from '../assets/images/home-results-first.webp';
import homeKpiImg from '../assets/images/home-kpi.webp';
import Reveal from './Reveal';

const CARDS = [
  {
    title: 'Our Ultimate KPI',
    img: homeKpiImg,
    body:
      "Our measure of success extends beyond quarterly reports or efficiency gains. We exist to elevate individuals, fortify teams, and advance the collective good. Our impact spans from the individual finding clarity and purpose, to teams achieving genuine collaboration, to society benefiting from more conscious, capable institutions. These aren't separate goals, they're interdependent imperatives.",
  },
  {
    title: 'Results First',
    img: resultsFirstImg,
    body:
      "Your outcomes are our singular focus. We don't traffic in theoretical possibilities or feature bloat. We deliver solutions that move hard numbers and generate measurable impact. If it doesn't create tangible value, we don't build it.",
  },
];

const WhyHumanBased: React.FC = () => (
  <section className="ed-sec">
    <div className="ed-wide text-center ed-stack mb-14 md:mb-20">
      <Reveal>
        <h2 className="font-serif ed-title">Why HumanBased?</h2>
      </Reveal>
      <Reveal delay={80}>
        <p className="font-serif text-2xl md:text-3xl tracking-[0.06em] text-white/60">Coding For Humanity</p>
      </Reveal>
    </div>

    <div className="ed-full grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
      {CARDS.map((card, i) => (
        <Reveal key={card.title} delay={i * 120}>
          <article className="mx-card h-full">
            <div className="ed-card-media">
              <img src={card.img} alt="" width={1184} height={864} loading="lazy" decoding="async" />
            </div>
            <div className="ed-card-body ed-stack">
              <h3 className="font-serif ed-subtitle">{card.title}</h3>
              <p className="ed-body">{card.body}</p>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  </section>
);

export default WhyHumanBased;
