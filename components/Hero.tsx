import React, { useState, useMemo } from 'react';
import { Button } from './Button';
import { CheckCircle2, PlayCircle, ArrowRight, X } from 'lucide-react';
import { useSiteContent } from '../context/SiteContentContext';

// YouTube URL'lerini embed formatına dönüştür
const getEmbedUrl = (url: string): string => {
  if (!url) return '';
  
  // Zaten embed URL ise
  if (url.includes('/embed/')) {
    // youtube.com yerine youtube-nocookie.com kullan (X-Frame-Options hatası için)
    return url.replace('youtube.com', 'youtube-nocookie.com');
  }
  
  // youtube.com/watch?v=VIDEO_ID formatı
  const watchMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]+)/);
  if (watchMatch) {
    return `https://www.youtube-nocookie.com/embed/${watchMatch[1]}`;
  }
  
  // youtu.be/VIDEO_ID formatı
  const shortMatch = url.match(/youtu\.be\/([a-zA-Z0-9_-]+)/);
  if (shortMatch) {
    return `https://www.youtube-nocookie.com/embed/${shortMatch[1]}`;
  }
  
  return url;
};

// URL'nin lokal video mu yoksa embed mi olduğunu kontrol et
const isLocalVideo = (url: string): boolean => {
  if (!url) return false;
  return url.startsWith('data:video') || url.match(/\.(mp4|webm|ogg)$/i) !== null;
};

export const Hero: React.FC = () => {
  const { content } = useSiteContent();
  const hero = content.hero;
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  
  const processedVideoUrl = useMemo(() => getEmbedUrl(hero.videoUrl), [hero.videoUrl]);
  const isLocal = useMemo(() => isLocalVideo(hero.videoUrl), [hero.videoUrl]);

  const handleNavigation = (href: string) => {
    if (href.startsWith('#')) {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.open(href, '_blank');
    }
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-[600px] h-[600px] bg-primary-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-[400px] h-[400px] bg-secondary-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-sm font-medium text-slate-600">{hero.badgeText}</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
              {hero.title} <span className="text-primary-600">{hero.highlight}</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {hero.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                variant="primary"
                size="lg"
                className="gap-2"
                onClick={() => handleNavigation(hero.primaryButtonHref)}
              >
                {hero.primaryButtonText} <ArrowRight size={20} />
              </Button>
              <Button
                variant="white"
                size="lg"
                className="gap-2"
                onClick={() => setIsVideoOpen(true)}
                disabled={!hero.videoUrl}
              >
                <PlayCircle size={20} className="text-primary-600" />
                {hero.secondaryButtonText}
              </Button>
            </div>

            <div className="pt-6 flex items-center justify-center lg:justify-start gap-6 text-sm font-medium text-slate-500">
              {hero.stats.map((stat) => (
                <div key={stat} className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-green-500" /> {stat}
                </div>
              ))}
            </div>
          </div>

          {/* Image/Visual Content */}
          <div className="relative lg:ml-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white">
              <img 
                src={hero.heroImageUrl}
                alt={hero.heroImageAlt}
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
              
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur p-4 rounded-xl shadow-lg border border-slate-100 max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-3">
                    {hero.badgeInfo.avatarUrls.map((url, index) => (
                      <img key={url} className="w-10 h-10 rounded-full border-2 border-white" src={url} alt={`Öğrenci ${index + 1}`} />
                    ))}
                  </div>
              <div>
                <p className="text-sm font-bold text-slate-900">{hero.badgeInfo.studentCount}</p>
                <p className="text-xs text-slate-500">{hero.badgeInfo.studentSubtext}</p>
              </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-secondary-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          </div>
          
        </div>
      </div>

      {isVideoOpen && hero.videoUrl && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
          <div className="relative w-full max-w-3xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl">
            <button
              className="absolute top-3 right-3 z-10 bg-white/90 rounded-full p-2 text-slate-800 hover:bg-white transition"
              onClick={() => setIsVideoOpen(false)}
              aria-label="Tanıtım videosunu kapat"
            >
              <X size={20} />
            </button>
            {isLocal ? (
              <video
                className="w-full h-full"
                src={hero.videoUrl}
                controls
                autoPlay
              />
            ) : (
              <iframe
                className="w-full h-full"
                src={processedVideoUrl}
                title="Tanıtım Videosu"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
        </div>
      )}
    </section>
  );
};