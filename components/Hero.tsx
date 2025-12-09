import React from 'react';
import { Button } from './Button';
import { ArrowRight } from 'lucide-react';
import { useSiteContent } from '../context/SiteContentContext';

export const Hero: React.FC = () => {
  const { content } = useSiteContent();
  const hero = content.hero;

  // Use the generated hero image (assuming it's placed in public folder or imported)
  // For now, I'll use a placeholder or the one from context if updated
  // The user asked for "children education" photo. I generated one.
  // I will assume it's saved as /hero-bg.png in public for now, or I'll use the URL from context if I update it.
  // Let's use the context URL, but I'll need to update the context to point to the new image.

  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={hero.heroImageUrl}
          alt="Eğitim"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 drop-shadow-lg">
          LGS
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 font-light max-w-2xl mx-auto drop-shadow-md">
          {hero.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="primary"
            size="lg"
            className="gap-2 shadow-xl hover:scale-105 transition-transform"
            onClick={() => window.location.href = hero.primaryButtonHref}
          >
            {hero.primaryButtonText} <ArrowRight size={20} />
          </Button>
          <Button
            variant="white"
            size="lg"
            className="gap-2 shadow-xl hover:scale-105 transition-transform"
            onClick={() => window.location.href = '#contact'} // Assuming contact section
          >
            İletişime Geç
          </Button>
        </div>
      </div>
    </section>
  );
};