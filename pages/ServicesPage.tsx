import React, { useEffect, useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import { usePageTitle } from '../hooks/usePageTitle';
import Reveal from '../components/Reveal';
import impactProductivityImg from '../assets/images/services-impact-productivity.webp.png';
import impactCostImg from '../assets/images/services-impact-cost-reduction.webp.png';
import impactParticipationImg from '../assets/images/services-impact-participation.webp.png';
import impactSatisfactionImg from '../assets/images/services-impact-satisfaction.webp.png';
import servicesHeroImg from '../assets/images/services-hero.webp.png';
import orgDevImg from '../assets/images/services-card-organizational.webp.png';
import socialDevImg from '../assets/images/services-card-social.webp.png';
import personalDevImg from '../assets/images/services-card-personal.webp.png';
import expertMissionImg from '../assets/images/services-expert-mission.webp.png';
import automationImg from '../assets/images/services-automation.webp.png';

const ServicesPage: React.FC = () => {
  usePageTitle('Services – HumanBased');
  const [deliveryImages, setDeliveryImages] = useState<{ expert: string | null; automation: string | null }>({
    expert: null,
    automation: null
  });
  const [developmentImages, setDevelopmentImages] = useState<{ organizational: string | null; social: string | null; personal: string | null }>({
    organizational: null,
    social: null,
    personal: null
  });
  const [statImages, setStatImages] = useState<{ productivity: string | null; costReduction: string | null; participation: string | null; satisfaction: string | null }>({
    productivity: null,
    costReduction: null,
    participation: null,
    satisfaction: null
  });


  useEffect(() => {
    const fetchDeliveryImages = async () => {
      const apiKey = (import.meta as any).env?.VITE_API_KEY as string | undefined;
      if (!apiKey) return;
      try {
        const ai = new GoogleGenAI({ apiKey });
        
        const generateOne = async (prompt: string, retries = 3, delay = 2000): Promise<string | null> => {
          try {
            const res = await ai.models.generateContent({
              model: 'gemini-2.5-flash-image',
              contents: { parts: [{ text: prompt }] },
              config: { imageConfig: { aspectRatio: "16:9" } }
            });
            const part = res.candidates?.[0]?.content?.parts.find(p => p.inlineData);
            return part?.inlineData ? `data:${part.inlineData.mimeType};base64,${part.inlineData.data}` : null;
          } catch (error: any) {
            if (retries > 0 && JSON.stringify(error).includes('429')) {
              await new Promise(r => setTimeout(r, delay));
              return generateOne(prompt, retries - 1, delay * 2);
            }
            return null;
          }
        };

        const expertPrompt = 'Cinematic, high-contrast scene of a small, focused strategy team around a glowing table of data and diagrams, in a dark environment with warm golden highlights, symbolizing a dedicated mission-focused team, ultra-detailed, premium UX website illustration, 4k.';
        const automationPrompt = 'Futuristic network of interconnected glowing nodes and flowing data streams in deep midnight colors, with a subtle human silhouette monitoring from a control hub, symbolizing 24/7 intelligent automation with humans in control, cinematic lighting, high-end product website style, 4k.';

        const expertImg = await generateOne(expertPrompt);
        setDeliveryImages(prev => ({ ...prev, expert: expertImg }));
        await new Promise(r => setTimeout(r, 1000));
        const automationImg = await generateOne(automationPrompt);
        setDeliveryImages(prev => ({ ...prev, automation: automationImg }));
      } catch (_err) {
        // silent fail
      }
    };

    fetchDeliveryImages();
  }, []);

  useEffect(() => {
    const fetchDevelopmentImages = async () => {
      const apiKey = (import.meta as any).env?.VITE_API_KEY as string | undefined;
      if (!apiKey) return;
      try {
        const ai = new GoogleGenAI({ apiKey });
        
        const generateOne = async (prompt: string, retries = 3, delay = 2000): Promise<string | null> => {
          try {
            const res = await ai.models.generateContent({
              model: 'gemini-2.5-flash-image',
              contents: { parts: [{ text: prompt }] },
              config: { imageConfig: { aspectRatio: "16:9" } }
            });
            const part = res.candidates?.[0]?.content?.parts.find(p => p.inlineData);
            return part?.inlineData ? `data:${part.inlineData.mimeType};base64,${part.inlineData.data}` : null;
          } catch (error: any) {
            if (retries > 0 && JSON.stringify(error).includes('429')) {
              await new Promise(r => setTimeout(r, delay));
              return generateOne(prompt, retries - 1, delay * 2);
            }
            return null;
          }
        };

        const organizationalPrompt = 'Wide cinematic illustration. Dark near-black background (#050509) with warm amber holographic dashboards and system diagrams flowing across multiple panels. The composition suggests a whole organization being orchestrated: interconnected departments, workflows, and metrics aligned. Emphasize clarity, structure, and coordinated motion, not chaos. Translucent holographic UI panels and glass-like surfaces. Warm amber/gold lighting as primary color, subtle teal/blue as supporting accent. Cinematic, high-contrast, premium look. Clean, not cluttered. No overlaid text or logos. Technology-forward and human-aligned, no realistic people; at most abstract silhouettes. 4k.';
        const socialPrompt = 'Cinematic illustration of interconnected communities and social systems. Dark near-black background (#050509), warm amber and gold lines connecting clusters of translucent nodes, like neighborhoods or groups. Subtle abstract city or network forms, with glowing pathways indicating information and resources flowing. Translucent holographic UI panels and glass-like surfaces. Warm amber/gold lighting as primary color, subtle teal/blue as supporting accent. Cinematic, high-contrast, premium look. Clean, not cluttered. No overlaid text or logos. Technology-forward and human-aligned, no realistic people; at most abstract silhouettes. 4k.';
        const personalPrompt = 'Abstract representation of individual growth supported by ethical technology. Dark near-black background (#050509); in the center, a subtle, non-realistic human silhouette or head profile made of translucent lines and particles, surrounded by amber and gold holographic interfaces orbiting it. Feels empowering and calm, not overwhelming. Translucent holographic UI panels and glass-like surfaces. Warm amber/gold lighting as primary color, subtle teal/blue as supporting accent. Cinematic, high-contrast, premium look. Clean, not cluttered. No overlaid text or logos. Technology-forward and human-aligned. 4k.';

        const organizationalImg = await generateOne(organizationalPrompt);
        setDevelopmentImages(prev => ({ ...prev, organizational: organizationalImg }));
        await new Promise(r => setTimeout(r, 1000));
        const socialImg = await generateOne(socialPrompt);
        setDevelopmentImages(prev => ({ ...prev, social: socialImg }));
        await new Promise(r => setTimeout(r, 1000));
        const personalImg = await generateOne(personalPrompt);
        setDevelopmentImages(prev => ({ ...prev, personal: personalImg }));
      } catch (_err) {
        // silent fail
      }
    };

    fetchDevelopmentImages();
  }, []);

  useEffect(() => {
    const fetchStatImages = async () => {
      const apiKey = (import.meta as any).env?.VITE_API_KEY as string | undefined;
      if (!apiKey) return;
      try {
        const ai = new GoogleGenAI({ apiKey });
        
        const generateOne = async (prompt: string, retries = 3, delay = 2000): Promise<string | null> => {
          try {
            const res = await ai.models.generateContent({
              model: 'gemini-2.5-flash-image',
              contents: { parts: [{ text: prompt }] },
              config: { imageConfig: { aspectRatio: "16:10" } }
            });
            const part = res.candidates?.[0]?.content?.parts.find(p => p.inlineData);
            return part?.inlineData ? `data:${part.inlineData.mimeType};base64,${part.inlineData.data}` : null;
          } catch (error: any) {
            if (retries > 0 && JSON.stringify(error).includes('429')) {
              await new Promise(r => setTimeout(r, delay));
              return generateOne(prompt, retries - 1, delay * 2);
            }
            return null;
          }
        };

        const productivityPrompt = 'Square icon-style image. Dark background (#050509) with a bright amber upward graph and arrows, representing productivity rising. Clean holographic chart with subtle grid, no numbers or text. Same site color palette and style. Dark near-black background (#050509). Warm amber/gold lighting with subtle teal accents. Cinematic, high-contrast, premium, translucent holographic style. Clean, no overlaid text or logos in the image.';
        const costReductionPrompt = 'Square icon-style image. Dark background (#050509) with a glowing amber line or bar graph trending downward in a positive way, symbolizing reduced costs. Include subtle hints of budgets or resources, but no explicit currency symbols or text. Same holographic style and colors. Dark near-black background (#050509). Warm amber/gold lighting with subtle teal accents. Cinematic, high-contrast, premium, translucent holographic style. Clean, no overlaid text or logos in the image.';
        const participationPrompt = 'Square icon-style image. Dark background (#050509) with a cluster of glowing nodes that light up progressively, representing more people joining and engaging. Nodes are arranged in a network with increasing brightness and density. Same amber/gold holographic aesthetic. Dark near-black background (#050509). Warm amber/gold lighting with subtle teal accents. Cinematic, high-contrast, premium, translucent holographic style. Clean, no overlaid text or logos in the image.';
        const satisfactionPrompt = 'Square icon-style image. Dark background (#050509) with a glowing gauge dial or abstract smile arc trending upward into a bright amber zone, indicating improved satisfaction. No text or numbers on the gauge. Same cinematic, glass-like style and palette. Dark near-black background (#050509). Warm amber/gold lighting with subtle teal accents. Cinematic, high-contrast, premium, translucent holographic style. Clean, no overlaid text or logos in the image.';

        const productivityImg = await generateOne(productivityPrompt);
        setStatImages(prev => ({ ...prev, productivity: productivityImg }));
        await new Promise(r => setTimeout(r, 1000));
        const costReductionImg = await generateOne(costReductionPrompt);
        setStatImages(prev => ({ ...prev, costReduction: costReductionImg }));
        await new Promise(r => setTimeout(r, 1000));
        const participationImg = await generateOne(participationPrompt);
        setStatImages(prev => ({ ...prev, participation: participationImg }));
        await new Promise(r => setTimeout(r, 1000));
        const satisfactionImg = await generateOne(satisfactionPrompt);
        setStatImages(prev => ({ ...prev, satisfaction: satisfactionImg }));
      } catch (_err) {
        // silent fail
      }
    };

    fetchStatImages();
  }, []);

  return (
    <div className="flex-grow bg-transparent">
      <section className="pb-12 pt-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="glass rounded-[3rem] overflow-hidden bg-white/[0.01] border-white/5 p-2 relative">
            <div className="aspect-[21/9] w-full bg-transparent rounded-[2.8rem] overflow-hidden group relative">
              <img
                src={servicesHeroImg}
                alt="Abstract holographic visualization representing services that create real impact"
                className="h-full w-full ml-24 object-cover object-center transition-transform transition-opacity duration-500 ease-out hover:brightness-110 hover:scale-[1.02]"
                style={{
                  maskImage: 'linear-gradient(to bottom, transparent 0%, black 25%, black 75%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 25%, black 75%, transparent 100%)'
                }}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#050509] via-[#050509]/85 to-transparent"></div>
              <div className="absolute inset-0 flex items-center px-12 md:px-20 visual-overlay-transition z-10 pt-32">
                <div className="max-w-md drop-shadow-lg relative z-10">
                  <h4 className="font-serif text-3xl md:text-4xl font-medium mb-6 text-white">We Serve for Real Impact</h4>
                  <p className="text-white font-light mb-4">
                    We develop transformative solutions with one relentless focus: your success. Every product we create is customer-centered and outcomes-driven, fundamentally shifting what is possible for your organization and the people you serve.
                  </p>
                  <p className="text-white font-light mb-8">
                    Your needs drive every decision. Your results define our success. Real impact, tangible results, customer-first always.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1 – Intro */}
      <section className="pt-24 pb-10">
        <div className="max-w-6xl mx-auto px-6 space-y-4">
          <h1 className="font-serif text-4xl md:text-5xl font-medium tracking-tight mb-16">
            <span className="block">Services that move you</span>
            <span className="block">
              from{" "}
              <span className="text-6xl md:text-7xl lg:text-8xl text-amber-300">
                insight
              </span>
            </span>
            <span className="block">
              to{" "}
              <span className="text-6xl md:text-7xl lg:text-8xl text-amber-300">
                operational change.
              </span>
            </span>
          </h1>
          <p className="text-white/60 text-lg md:text-xl font-light max-w-5xl mx-auto text-center mb-12">
            We design, build, and operationalize digital platforms that deliver measurable outcomes:
          </p>
          <div className="max-w-5xl mx-auto space-y-1 text-center">
            <p className="text-white font-bold uppercase mt-4 text-xl">REDUCED COSTS | INCREASED PRODUCTIVITY</p>
            <p className="text-white font-bold uppercase text-xl">STRONGER PARTICIPATION | HIGHER SATISFACTION</p>
          </div>
        </div>
      </section>

      {/* Section 2 – Three development cards */}
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          {/* Organizational Development */}
          <Reveal delay={0}>
            <div className="glass rounded-[2.5rem] bg-white/[0.02] border border-white/10 px-6 py-10 md:px-10 md:py-12 flex flex-col md:flex-row gap-10 items-stretch shadow-2xl group">
            <div className="md:w-1/2 space-y-5">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-500/80">
                Organizational
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-medium tracking-tight">
                Organizational Development
              </h2>
              <p className="text-white/60 text-base md:text-lg font-light">
                We map the real behaviors, frictions, and constraints in your organization so we solve the right problem, not just the visible symptoms. From there, we build systems that reduce busywork and let your teams focus on high-leverage work.
              </p>
              <ul className="space-y-2 text-white/60 text-sm md:text-base font-light">
                <li className="flex gap-3">
                  <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-amber-500" />
                  <span>AI-driven workflow automation</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-amber-500" />
                  <span>Custom internal dashboards</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-amber-500" />
                  <span>Legacy system modernization</span>
                </li>
              </ul>
              <button className="mt-4 inline-flex items-center text-xs font-bold uppercase tracking-[0.25em] text-amber-500 hover:text-amber-400 transition-colors">
                Explore Organizational Solutions &#8594;
              </button>
            </div>
            <div className="md:w-1/2">
              <div className="relative w-full h-full min-h-[220px] rounded-[2rem] bg-black/40 overflow-hidden border border-white/10">
                <img src={orgDevImg} className="h-full w-full object-cover transition-all duration-500 ease-out group-hover:brightness-110 group-hover:scale-[1.02]" alt="Organizational Development" />
                <div className="absolute inset-0 border border-white/5 rounded-[2rem] pointer-events-none" />
              </div>
            </div>
            </div>
          </Reveal>

          {/* Social Development */}
          <Reveal delay={90}>
            <div className="glass rounded-[2.5rem] bg-white/[0.02] border border-white/10 px-6 py-10 md:px-10 md:py-12 flex flex-col md:flex-row gap-10 items-stretch shadow-2xl group">
            <div className="md:w-1/2 space-y-5">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-500/80">
                Social
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-medium tracking-tight">
                Social Development
              </h2>
              <p className="text-white/60 text-base md:text-lg font-light">
                We turn your insights into platforms, workflows, and interfaces that people adopt quickly because they feel built for them. The result: real connection, transparent governance, and inclusive decision-making across your ecosystem.
              </p>
              <ul className="space-y-2 text-white/60 text-sm md:text-base font-light">
                <li className="flex gap-3">
                  <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-amber-500" />
                  <span>Community and member portals</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-amber-500" />
                  <span>Participation and governance workflows</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-amber-500" />
                  <span>Feedback and deliberation tools</span>
                </li>
              </ul>
              <button className="mt-4 inline-flex items-center text-xs font-bold uppercase tracking-[0.25em] text-amber-500 hover:text-amber-400 transition-colors">
                See how we empower communities &#8594;
              </button>
            </div>
            <div className="md:w-1/2">
              <div className="relative w-full h-full min-h-[220px] rounded-[2rem] bg-black/40 overflow-hidden border border-white/10">
                <img src={socialDevImg} className="h-full w-full object-cover transition-all duration-500 ease-out group-hover:brightness-110 group-hover:scale-[1.02]" alt="Social Development" />
                <div className="absolute inset-0 border border-white/5 rounded-[2rem] pointer-events-none" />
              </div>
            </div>
            </div>
          </Reveal>

          {/* Personal Development */}
          <Reveal delay={180}>
            <div className="glass rounded-[2.5rem] bg-white/[0.02] border border-white/10 px-6 py-10 md:px-10 md:py-12 flex flex-col md:flex-row gap-10 items-stretch shadow-2xl group">
            <div className="md:w-1/2 space-y-5">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-500/80">
                Personal
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-medium tracking-tight">
                Personal Development
              </h2>
              <p className="text-white/60 text-base md:text-lg font-light">
                We turn insights into companion tools that people actually use. From learning experiences to wellbeing support, we build systems that respect privacy while helping individuals grow skills and stay focused on what matters.
              </p>
              <ul className="space-y-2 text-white/60 text-sm md:text-base font-light">
                <li className="flex gap-3">
                  <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-amber-500" />
                  <span>Companion tools for wellbeing and focus</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-amber-500" />
                  <span>Learning and skill-building experiences</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-amber-500" />
                  <span>Personal analytics that respect privacy</span>
                </li>
              </ul>
              <button className="mt-4 inline-flex items-center text-xs font-bold uppercase tracking-[0.25em] text-amber-500 hover:text-amber-400 transition-colors">
                See our personal tools &#8594;
              </button>
            </div>
            <div className="md:w-1/2">
              <div className="relative w-full h-full min-h-[220px] rounded-[2rem] bg-black/40 overflow-hidden border border-white/10">
                <img src={personalDevImg} className="h-full w-full object-cover transition-all duration-500 ease-out group-hover:brightness-110 group-hover:scale-[1.02]" alt="Personal Development" />
                <div className="absolute inset-0 border border-white/5 rounded-[2rem] pointer-events-none" />
              </div>
            </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Section 3 – Creating Solutions Tailored to Needs */}
      <section className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6 text-center space-y-6">
          <h2 className="font-serif text-3xl md:text-4xl font-medium tracking-tight">
            Creating Solutions Tailored to Needs
          </h2>
          <p className="text-white/60 text-lg md:text-xl font-light max-w-3xl mx-auto">
            Every organization, community, and individual operates within a unique ecosystem. We use the full potential of
            emerging technology to architect solutions that honor your constraints, amplify your strengths, and meet people
            where they are.
          </p>
        </div>
      </section>

      {/* Section 4 – Metric-driven case studies */}
      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-6 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-medium tracking-tight">
                Real Impact for Real Businesses
              </h2>
              <p className="text-white/50 text-sm md:text-base font-light max-w-xl mt-3">
                No hype, just measurable change. We design interventions that move the metrics that matter for your
                operations, finances, participation, and experience.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card A – Productivity */}
            <div className="glass rounded-[2rem] bg-white/[0.02] border border-white/10 overflow-hidden shadow-2xl group">
              <div className="relative aspect-[16/10] bg-black/40 overflow-hidden">
                <img
                  src={impactProductivityImg}
                  alt="Abstract holographic visualization representing productivity improvement"
                  className="h-full w-full object-cover transition-all duration-500 ease-out group-hover:brightness-110 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050509] via-transparent to-transparent" />
              </div>
              <div className="p-8 space-y-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-amber-500/80">
                  Operations Productivity
                </p>
                <h3 className="font-serif text-2xl font-medium">Productivity Up</h3>
                <p className="text-white/60 text-sm font-light">
                  Streamlined approval chains, automated status updates, and unified dashboards reduced decision latency and
                  manual handoffs across teams.
                </p>
                <div className="flex items-baseline gap-2 mt-2">
                  <span className="text-3xl font-bold text-amber-500">+42%</span>
                  <span className="text-[11px] uppercase tracking-[0.25em] text-white/40">
                    Productivity
                  </span>
                </div>
              </div>
            </div>

            {/* Card B – Cost Reduction */}
            <div className="glass rounded-[2rem] bg-white/[0.02] border border-white/10 overflow-hidden shadow-2xl group">
              <div className="relative aspect-[16/10] bg-black/40 overflow-hidden">
                <img
                  src={impactCostImg}
                  alt="Abstract holographic visualization representing cost reduction"
                  className="h-full w-full object-cover transition-all duration-500 ease-out group-hover:brightness-110 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050509] via-transparent to-transparent" />
              </div>
              <div className="p-8 space-y-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-amber-500/80">
                  Cost Optimization
                </p>
                <h3 className="font-serif text-2xl font-medium">Cost Reduction</h3>
                <p className="text-white/60 text-sm font-light">
                  Intelligent automation and demand-aware infrastructure reduced operational overhead while preserving
                  service quality and reliability.
                </p>
                <div className="flex items-baseline gap-2 mt-2">
                  <span className="text-3xl font-bold text-emerald-400">-28%</span>
                  <span className="text-[11px] uppercase tracking-[0.25em] text-white/40">
                    Costs
                  </span>
                </div>
              </div>
            </div>

            {/* Card C – Participation */}
            <div className="glass rounded-[2rem] bg-white/[0.02] border border-white/10 overflow-hidden shadow-2xl group">
              <div className="relative aspect-[16/10] bg-black/40 overflow-hidden">
                <img
                  src={impactParticipationImg}
                  alt="Abstract holographic visualization representing increased participation"
                  className="h-full w-full object-cover transition-all duration-500 ease-out group-hover:brightness-110 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050509] via-transparent to-transparent" />
              </div>
              <div className="p-8 space-y-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-amber-500/80">
                  Internal Communications
                </p>
                <h3 className="font-serif text-2xl font-medium">Participation Increased</h3>
                <p className="text-white/60 text-sm font-light">
                  Purpose-built channels, prompts, and feedback loops brought more voices into important decisions without
                  overwhelming the signal.
                </p>
                <div className="flex items-baseline gap-2 mt-2">
                  <span className="text-3xl font-bold text-amber-500">+68%</span>
                  <span className="text-[11px] uppercase tracking-[0.25em] text-white/40">
                    Participation
                  </span>
                </div>
              </div>
            </div>

            {/* Card D – Satisfaction */}
            <div className="glass rounded-[2rem] bg-white/[0.02] border border-white/10 overflow-hidden shadow-2xl group">
              <div className="relative aspect-[16/10] bg-black/40 overflow-hidden">
                <img
                  src={impactSatisfactionImg}
                  alt="Abstract holographic visualization representing improved satisfaction"
                  className="h-full w-full object-cover transition-all duration-500 ease-out group-hover:brightness-110 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050509] via-transparent to-transparent" />
              </div>
              <div className="p-8 space-y-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-amber-500/80">
                  Customer &amp; Staff Experience
                </p>
                <h3 className="font-serif text-2xl font-medium">Satisfaction Improved</h3>
                <p className="text-white/60 text-sm font-light">
                  Thoughtful journeys, clearer communication, and responsive support created better days for the people who
                  use and deliver your services.
                </p>
                <div className="flex items-baseline gap-2 mt-2">
                  <span className="text-3xl font-bold text-amber-500">+52%</span>
                  <span className="text-[11px] uppercase tracking-[0.25em] text-white/40">
                    Satisfaction
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 – How we deliver */}
      <section className="pb-32">
        <div className="max-w-6xl mx-auto px-6 space-y-8">
          <div className="text-center space-y-3">
            <h2 className="font-serif text-3xl md:text-4xl font-medium tracking-tight">
              How We Deliver
            </h2>
            <p className="text-white/60 text-sm md:text-base font-light max-w-2xl mx-auto">
              We combine focused human expertise with always-on intelligent systems so your organization can move with
              confidence, clarity, and care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Expert Mission */}
            <div className="glass rounded-[2.5rem] bg-white/[0.02] border border-white/10 overflow-hidden shadow-2xl group">
              <div className="relative aspect-video w-full bg-black/40 overflow-hidden">
                <img src={expertMissionImg} className="visual-card-img transition-all duration-500 ease-out group-hover:brightness-110 group-hover:scale-[1.02]" alt="Expert Mission" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050509] to-transparent"></div>
              </div>
              <div className="p-8 md:p-10 space-y-5">
                <h3 className="font-serif text-2xl md:text-3xl font-medium">
                  Expert Mission
                </h3>
                <p className="text-white/60 text-sm md:text-base font-light">
                  We work with a dedicated team whose only mission is to understand your world and solve the problems that
                  matter most, strategists, designers, and engineers aligned around your outcomes.
                </p>
              </div>
            </div>

            {/* 24/7 Intelligent Automation */}
            <div className="glass rounded-[2.5rem] bg-white/[0.02] border border-white/10 overflow-hidden shadow-2xl group">
              <div className="relative aspect-video w-full bg-black/40 overflow-hidden">
                <img src={automationImg} className="visual-card-img transition-all duration-500 ease-out group-hover:brightness-110 group-hover:scale-[1.02]" alt="24/7 Intelligent Automation" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050509] to-transparent"></div>
              </div>
              <div className="p-8 md:p-10 space-y-5">
                <h3 className="font-serif text-2xl md:text-3xl font-medium">
                  24/7 Intelligent Automation
                </h3>
                <p className="text-white/60 text-sm md:text-base font-light">
                  We design always-on automation that extends your capacity while keeping humans firmly in control, so your
                  systems keep working, even when your team is offline.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;