import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import ethicalIntelligenceImg from '../assets/images/about-ethical-intelligence.webp.png';
import organizationalEnablementImg from '../assets/images/about-organizational-enablement.webp.png';
import strategicDiscoveryImg from '../assets/images/about-strategic-discovery.webp.png';
import responsiblePlatformsImg from '../assets/images/about-responsible-platforms.webp.png';

const pillars = [
  { 
    title: "Strategic Discovery", 
    desc: "We map the intersection of organizational goals and human needs. Before writing code, we validate the problem space to ensure every initiative targets a measurable social or operational outcome.",
    prompt: "High-contrast data visualization with people and nodes connected, representing mapping organizational goals and human needs, dark background, gold accents, cinematic, 4k."
  },
  { 
    title: "Responsible Platforms", 
    desc: "We build robust, scalable digital environments designed to respect user attention. Our engineering prioritizes accessibility, privacy, and long-term maintainability over fleeting trends.",
    prompt: "Robust digital interface with layered panels, icons for privacy, accessibility, and reliability, futuristic but trustworthy, dark interface with teal and amber highlights, 4k."
  },
  { 
    title: "Ethical Intelligence", 
    desc: "We architect infrastructure that turns raw data into actionable social insight. From bias-aware algorithms to privacy-first analytics, we help you measure what truly matters for your mission.",
    prompt: "Abstract AI brain or network with a clear ethical justice motif scales balance light, soft gradients, dark background, subtle gold, cinematic, 4k."
  },
  { 
    title: "Organizational Enablement", 
    desc: "Technology fails without adoption. We train your teams and redesign workflows to ensure new systems amplify human capability rather than replacing it.",
    prompt: "Team collaborating around digital boards and dashboards, warm lighting, sense of alignment and focus, modern workplace, cinematic, 4k."
  }
];

const CapabilitiesGrid: React.FC = () => {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const generateImages = async () => {
      const apiKey = (import.meta as any).env?.VITE_API_KEY as string | undefined;
      if (!apiKey) {
        return;
      }
      const ai = new GoogleGenAI({ apiKey });

      const generateOne = async (prompt: string, retries = 3, delay = 2000): Promise<string> => {
        try {
          const res = await ai.models.generateContent({
            model: 'gemini-2.5-flash-image',
            contents: { parts: [{ text: prompt }] },
            config: { imageConfig: { aspectRatio: "16:9" } }
          });
          const part = res.candidates?.[0]?.content?.parts.find(p => p.inlineData);
          return part?.inlineData ? `data:${part.inlineData.mimeType};base64,${part.inlineData.data}` : "";
        } catch (error: any) {
          if (retries > 0 && JSON.stringify(error).includes('429')) {
            await new Promise(r => setTimeout(r, delay));
            return generateOne(prompt, retries - 1, delay * 2);
          }
          return "";
        }
      };

      const imagePrompts = pillars.map(p => p.prompt);
      const generatedImages: string[] = [];
      for (const prompt of imagePrompts) {
        const img = await generateOne(prompt);
        generatedImages.push(img);
        setImages([...generatedImages]);
        await new Promise(r => setTimeout(r, 1000));
      }
    };

    generateImages();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {pillars.map((p, i) => (
        <div key={i} className="glass rounded-[2.5rem] bg-white/[0.02] border-white/5 transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.04] hover:border-white/10 group shadow-2xl overflow-hidden">
          <div className="relative aspect-video w-full bg-black/40 overflow-hidden">
            {p.title === "Strategic Discovery" ? (
              <img src={strategicDiscoveryImg} className="visual-card-img transition-all duration-500 ease-out group-hover:brightness-110 group-hover:scale-[1.02]" alt="Abstract holographic visualization representing strategic discovery and organizational mapping" />
            ) : p.title === "Responsible Platforms" ? (
              <img src={responsiblePlatformsImg} className="visual-card-img transition-all duration-500 ease-out group-hover:brightness-110 group-hover:scale-[1.02]" alt="Abstract holographic visualization representing responsible platforms and robust digital environments" />
            ) : p.title === "Ethical Intelligence" ? (
              <img src={ethicalIntelligenceImg} className="visual-card-img transition-all duration-500 ease-out group-hover:brightness-110 group-hover:scale-[1.02]" alt="Abstract holographic visualization representing ethical intelligence and aligned technology" />
            ) : p.title === "Organizational Enablement" ? (
              <img src={organizationalEnablementImg} className="visual-card-img brightness-125 transition-all duration-500 ease-out group-hover:brightness-125 group-hover:scale-[1.02]" alt="Abstract holographic visualization representing organizational enablement and connected teams" />
            ) : images[i] ? (
              <img src={images[i]} className="visual-card-img transition-all duration-500 ease-out group-hover:brightness-110 group-hover:scale-[1.02]" alt={p.title} />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-white/10 border-t-amber-500 rounded-full animate-spin"></div>
              </div>
            )}
            {p.title === "Organizational Enablement" ? (
              <div className="absolute inset-0 bg-gradient-to-t from-[#050509]/30 to-transparent"></div>
            ) : (
              <div className="absolute inset-0 bg-gradient-to-t from-[#050509] to-transparent"></div>
            )}
          </div>
          <div className="p-7 md:p-8">
            <h3 className="font-serif text-[25px] md:text-2xl font-medium mb-4">{p.title}</h3>
            <p className="text-white/50 leading-relaxed font-light mb-6 text-sm md:text-base">
              {p.desc}
            </p>
            <div className="h-px w-full bg-white/5 mb-6"></div>
            <button className="text-xs font-bold uppercase tracking-widest text-amber-500 hover:text-amber-400 transition-colors">
              Explore Solutions →
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CapabilitiesGrid;

