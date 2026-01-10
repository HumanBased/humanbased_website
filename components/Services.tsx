
import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

const Services: React.FC = () => {
  const [images, setImages] = useState<Record<string, string | null>>({});

  useEffect(() => {
    const fetchImages = async () => {
      const apiKey = import.meta.env.VITE_API_KEY as string | undefined;
      if (!apiKey) {
        return;
      }
      const ai = new GoogleGenAI({ apiKey });
      const prompts = [
        "A hyperrealistic abstract view of floating glass interface elements with amber glows. 4k.",
        "Deep indigo and purple bokeh cinematic lighting. Premium.",
        "A futuristic minimal workspace with soft amber reflections on metal. Cinematic."
      ];

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

      const img1 = await generateOne(prompts[0]);
      setImages(prev => ({ ...prev, main: img1 }));
      await new Promise(r => setTimeout(r, 1000));
      const img2 = await generateOne(prompts[1]);
      setImages(prev => ({ ...prev, impact1: img2 }));
    };

    fetchImages();
  }, []);

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
