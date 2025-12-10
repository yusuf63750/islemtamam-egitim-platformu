import React, { useState, useEffect, useRef, TouchEvent } from 'react';
import { Button } from './Button';
import { ArrowRight, ChevronLeft, ChevronRight, CheckCircle, Sparkles, Rocket } from 'lucide-react';
import { useSiteContent } from '../context/SiteContentContext';

const slides = [
  {
    id: 1,
    title: 'Deneme Üyeliği Başvurusu',
    description: 'Yapay Zeka Destekli Akıllı Öğrenme Sistemi ile tanışın. HİS, KÖS, ÇÖS, ÜDS, ODS, GBS ve CDS modülleri ile öğrenmeyi keşfedin.',
    features: [
      'İlkokul 2-3-4, Ortaokul 5-6-7-8. Sınıf öğrencileri için',
      'Eğitim Koçu takibinde 34 haftalık program',
      'Canlı Ders Programına 1 hafta ücretsiz katılım',
      'Bitiminde ayrıntılı karne ve analiz raporu',
    ],
    buttonText: 'ÜCRETSİZ BAŞVUR',
    buttonHref: '#basvuru',
    bgGradient: 'from-blue-600/80 via-blue-500/80 to-cyan-400/80',
    emoji: '🎓',
    bgImage: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1920&h=1080&fit=crop',
  },
  {
    id: 2,
    title: "İşlemTamam'a Hoşgeldiniz!",
    description: 'MEB müfredatına %100 uyumlu, öğrenci merkezli teknik anlayışla geliştirilmiş yeni nesil akıllı öğrenme platformu.',
    features: [
      '7x24 uzaktan erişim tekniği ile web tabanlı platform',
      'Okul öncesi, ilkokul, ortaokul, lise ve TYT-AYT desteği',
      'Akıllı Öğrenme, Ders Merkezi, Sınav Merkezi, WebTV',
      'Eğitim danışmanları ile akademik hedef rehberliği',
    ],
    buttonText: 'HEMEN BAŞLA',
    buttonHref: '#paketler',
    bgGradient: 'from-emerald-600/80 via-teal-500/80 to-cyan-400/80',
    emoji: '🚀',
    bgImage: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1920&h=1080&fit=crop',
  },
  {
    id: 3,
    title: 'LGS Hazırlık Programı',
    description: '10 kişilik uzman öğretmen kadromuzla LGS başarısı için tam donanımlı eğitim.',
    features: [
      'Canlı LGS dersleri ve sınırsız tekrar imkanı',
      'Kişiye özel LGS koçluğu ve performans takibi',
      'Haftalık deneme sınavları ve Türkiye sıralaması',
      '7/24 soru çözüm desteği',
    ],
    buttonText: 'LGS PAKETLERİ',
    buttonHref: '#paketler',
    bgGradient: 'from-purple-600/80 via-violet-500/80 to-pink-400/80',
    emoji: '⭐',
    bgImage: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1920&h=1080&fit=crop',
  },
];

export const Hero: React.FC = () => {
  const { content } = useSiteContent();
  const hero = content.hero;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Touch/Swipe handling
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);
  const minSwipeDistance = 50;

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  // Touch event handlers for swipe
  const handleTouchStart = (e: TouchEvent<HTMLElement>) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: TouchEvent<HTMLElement>) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const swipeDistance = touchStartX.current - touchEndX.current;

    if (Math.abs(swipeDistance) > minSwipeDistance) {
      if (swipeDistance > 0) {
        // Swipe left -> next slide
        nextSlide();
      } else {
        // Swipe right -> prev slide
        prevSlide();
      }
    }

    // Reset
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  return (
    <section
      className="relative min-h-[90vh] sm:min-h-[650px] md:min-h-[1000px] overflow-hidden pt-20 sm:pt-28 md:pt-32"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-700 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={slide.bgImage}
              alt={slide.title}
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Gradient Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-br ${slide.bgGradient}`}></div>

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40 sm:bg-black/30"></div>

          {/* Animated Pattern Overlay */}
          <div className="absolute inset-0 opacity-10 hidden sm:block">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '60px 60px',
              animation: 'slidePattern 20s linear infinite',
            }}></div>
          </div>

          {/* Floating Shapes */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float hidden lg:block"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-white/10 rounded-full blur-2xl animate-float animation-delay-2000 hidden lg:block"></div>

          {/* Content */}
          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Text Content */}
                <div className={`transform transition-all duration-700 delay-200 ${index === currentSlide ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                  {/* Fun Badge */}
                  <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-white/20 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-white text-xs sm:text-sm font-semibold mb-4 sm:mb-6 animate-bounce-slow">
                    <span className="text-lg sm:text-2xl">{slide.emoji}</span>
                    <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="hidden xs:inline">Yeni Dönem Başlıyor!</span>
                    <span className="xs:hidden">Yeni Dönem!</span>
                  </div>

                  {/* Title */}
                  <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-3 sm:mb-6 drop-shadow-lg leading-tight">
                    {slide.title}
                  </h1>

                  {/* Description */}
                  <p className="text-sm sm:text-lg md:text-xl text-white/90 mb-4 sm:mb-8 leading-relaxed line-clamp-3 sm:line-clamp-none">
                    {slide.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-8">
                    {slide.features.slice(0, 2).map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 sm:gap-3 text-white/90">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm md:text-base">{feature}</span>
                      </li>
                    ))}
                    {/* Show more on larger screens */}
                    <div className="hidden sm:block">
                      {slide.features.slice(2).map((feature, idx) => (
                        <li key={idx + 2} className="flex items-start gap-2 sm:gap-3 text-white/90 mt-3">
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm md:text-base">{feature}</span>
                        </li>
                      ))}
                    </div>
                  </ul>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <Button
                      variant="white"
                      size="lg"
                      className="gap-2 shadow-2xl hover:scale-105 transition-transform font-bold text-sm sm:text-base py-3 sm:py-4"
                      onClick={() => window.location.href = slide.buttonHref}
                    >
                      <Rocket className="w-4 h-4 sm:w-5 sm:h-5" />
                      {slide.buttonText}
                    </Button>
                    <Button
                      variant="secondary"
                      size="lg"
                      className="gap-2 shadow-xl hover:scale-105 transition-transform bg-white/20 border-white/30 text-white hover:bg-white/30 text-sm sm:text-base py-3 sm:py-4"
                      onClick={() => window.location.href = '#neler-var'}
                    >
                      Keşfet <ArrowRight size={18} className="sm:w-5 sm:h-5" />
                    </Button>
                  </div>
                </div>

                {/* Hero Image - Right Side (lg+) */}
                <div className={`hidden lg:block transform transition-all duration-700 delay-400 ${index === currentSlide ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                  <div className="relative">
                    <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20">
                      <img
                        src={slide.bgImage}
                        alt={slide.title}
                        className="w-full h-[400px] xl:h-[500px] object-cover"
                      />
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-3xl"></div>
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400/30 rounded-full blur-xl"></div>
                    <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-blue-400/30 rounded-full blur-xl"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows - SADECE MASAÜSTÜNDE (sm ve üstü) */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-all duration-300 text-white hidden sm:block"
        aria-label="Önceki"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-all duration-300 text-white hidden sm:block"
        aria-label="Sonraki"
      >
        <ChevronRight size={24} />
      </button>

      {/* Swipe hint - Sadece mobilde ilk görünümde */}
      <div className="absolute bottom-28 left-1/2 -translate-x-1/2 z-20 sm:hidden">
        <div className="flex items-center gap-2 text-white/60 text-xs animate-pulse">
          <span>←</span>
          <span>Kaydır</span>
          <span>→</span>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-white w-6 sm:w-8' : 'bg-white/50 hover:bg-white/70'
              }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Mobile Quick Stats */}
      <div className="absolute bottom-16 left-0 right-0 z-20 px-4 sm:hidden">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-3 flex justify-around text-center">
          <div>
            <div className="text-white font-bold text-lg">7</div>
            <div className="text-white/70 text-xs">Modül</div>
          </div>
          <div className="border-l border-white/20 pl-4">
            <div className="text-white font-bold text-lg">8500+</div>
            <div className="text-white/70 text-xs">Öğrenci</div>
          </div>
          <div className="border-l border-white/20 pl-4">
            <div className="text-white font-bold text-lg">7/24</div>
            <div className="text-white/70 text-xs">Erişim</div>
          </div>
        </div>
      </div>
    </section>
  );
};