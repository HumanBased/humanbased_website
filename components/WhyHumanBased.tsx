
import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import resultsFirstImg from '../assets/images/home-results-first.webp.png';
import homeKpiImg from '../assets/images/home-kpi.webp.png';

const WhyHumanBased: React.FC = () => {
  const [images, setImages] = useState<{ op: string | null; hardware: string | null }>({
    op: null,
    hardware: null,
  });

  useEffect(() => {
    const fetchImages = async () => {
      const apiKey = import.meta.env.VITE_API_KEY as string | undefined;
      if (!apiKey) {
        return;
      }
      const ai = new GoogleGenAI({ apiKey });
      const prompts = [
        "Cinematic visualization of human connection and growth, glowing golden network nodes rising and converging to uplift human figures, deep navy and black background, soft amber lighting, premium, 4k, hyperrealistic.",
        "Futuristic data visualization dashboard displaying rising trend lines and performance metrics in glowing amber and cool blue, sharp high-tech interface, cinematic depth of field, dark background, 4k."
      ];

      const generateOne = async (prompt: string, retries = 3, delay = 2000): Promise<string | null> => {
        try {
          const res = await ai.models.generateContent({
            model: 'gemini-2.5-flash-image',
            contents: { parts: [{ text: prompt }] },
            config: { imageConfig: { aspectRatio: "4:3" } }
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

      // Our Ultimate KPI and Results First cards now use static images, skipping image generation
    };

    fetchImages();
  }, []);

  return (
    <section className="pt-10 md:pt-14 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16 md:mb-24">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight">Why HumanBased?</h2>
          <p className="text-base md:text-lg text-white/70">high quality results without compromise</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="glass group rounded-[2.5rem] overflow-hidden transition-all duration-700 hover:scale-[1.01] hover:border-white/20 bg-white/[0.02]">
            <div className="aspect-video relative bg-black/40 overflow-hidden">
              <img src={homeKpiImg} className="visual-card-img transition-all duration-500 ease-out group-hover:brightness-110 group-hover:scale-[1.02] active:brightness-110 active:scale-[1.02]" alt="Abstract holographic visualization representing human connection, growth, and collective good" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050509] to-transparent visual-overlay-transition"></div>
            </div>
            <div className="p-10 space-y-4">
              <h3 className="font-serif text-2xl font-medium">Our Ultimate KPI</h3>
              <p className="text-white/50 leading-relaxed font-light">
                Our measure of success extends beyond quarterly reports or efficiency gains. We exist to elevate individuals, fortify teams, and advance the collective good. Our impact spans from the individual finding clarity and purpose, to teams achieving genuine collaboration, to society benefiting from more conscious, capable institutions. These aren't separate goals, they're interdependent imperatives.
              </p>
            </div>
          </div>

          <div className="glass group rounded-[2.5rem] overflow-hidden transition-all duration-700 hover:scale-[1.01] hover:border-white/20 bg-white/[0.02]">
            <div className="aspect-video relative bg-black/40 overflow-hidden">
              <img src={resultsFirstImg} className="visual-card-img transition-all duration-500 ease-out group-hover:brightness-110 group-hover:scale-[1.02] active:brightness-110 active:scale-[1.02]" alt="Abstract holographic visualization representing results-first approach and measurable impact" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050509] to-transparent visual-overlay-transition"></div>
            </div>
            <div className="p-10 space-y-4">
              <h3 className="font-serif text-2xl font-medium">Results First</h3>
              <p className="text-white/50 leading-relaxed font-light">
                Your outcomes are our singular focus. We don't traffic in theoretical possibilities or feature bloat. We deliver solutions that move hard numbers and generate measurable impact. If it doesn't create tangible value, we don't build it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyHumanBased;
