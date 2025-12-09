import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { ArrowRight, ChevronLeft, ChevronRight, CheckCircle, BookOpen, Users, Laptop, Sparkles, Rocket, Star } from 'lucide-react';
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
    bgGradient: 'from-blue-600 via-blue-500 to-cyan-400',
    emoji: '🎓',
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
    bgGradient: 'from-emerald-600 via-teal-500 to-cyan-400',
    emoji: '🚀',
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
    bgGradient: 'from-purple-600 via-violet-500 to-pink-400',
    emoji: '⭐',
  },
];

// Fun floating emojis
const floatingEmojis = ['📚', '✏️', '🎯', '💡', '🏆', '📝', '🎨', '🔬'];

export const Hero: React.FC = () => {
  const { content } = useSiteContent();
  const hero = content.hero;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

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

  return (
    <section className="relative min-h-[650px] md:min-h-[700px] overflow-hidden pt-28 md:pt-32">
      {/* Floating Fun Emojis */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-20">
        {floatingEmojis.map((emoji, i) => (
          <div
            key={i}
            className="absolute text-4xl md:text-5xl opacity-20 animate-float"
            style={{
              left: `${10 + (i * 12)}%`,
              top: `${15 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + (i % 3)}s`,
            }}
          >
            {emoji}
          </div>
        ))}
      </div>

      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-700 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
        >
          {/* Gradient Background */}
          <div className={`absolute inset-0 bg-gradient-to-br ${slide.bgGradient}`}></div>

          {/* Animated Pattern Overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '60px 60px',
              animation: 'slidePattern 20s linear infinite',
            }}></div>
          </div>

          {/* Floating Shapes */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float hidden lg:block"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-white/10 rounded-full blur-2xl animate-float animation-delay-2000 hidden lg:block"></div>
          <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-white/5 rounded-full blur-lg animate-float animation-delay-4000 hidden lg:block"></div>

          {/* Content */}
          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <div className={`transform transition-all duration-700 delay-200 ${index === currentSlide ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                  {/* Fun Badge */}
                  <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-semibold mb-6 animate-bounce-slow">
                    <span className="text-2xl">{slide.emoji}</span>
                    <Sparkles className="w-4 h-4" />
                    Yeni Dönem Başlıyor!
                  </div>

                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 drop-shadow-lg leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
                    {slide.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3 mb-8">
                    {slide.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-white/90">
                        <CheckCircle className="w-5 h-5 text-white shrink-0 mt-0.5" />
                        <span className="text-sm md:text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <div className="flex flex-wrap gap-4">
                    <Button
                      variant="white"
                      size="lg"
                      className="gap-2 shadow-2xl hover:scale-105 transition-transform font-bold"
                      onClick={() => window.location.href = slide.buttonHref}
                    >
                      <Rocket className="w-5 h-5" />
                      {slide.buttonText}
                    </Button>
                    <Button
                      variant="secondary"
                      size="lg"
                      className="gap-2 shadow-xl hover:scale-105 transition-transform bg-white/20 border-white/30 text-white hover:bg-white/30"
                      onClick={() => window.location.href = '#neler-var'}
                    >
                      Keşfet <ArrowRight size={20} />
                    </Button>
                  </div>
                </div>

                {/* Fun Illustration Side */}
                <div className={`hidden lg:block transform transition-all duration-700 delay-400 ${index === currentSlide ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                  <div className="relative">
                    {/* Main Card */}
                    <div className="bg-white/15 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                      <div className="text-center mb-6">
                        <div className="text-8xl mb-4 animate-bounce-slow">{slide.emoji}</div>
                        <div className="flex justify-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                          ))}
                        </div>
                      </div>

                      <div className="grid gap-4">
                        <div className="bg-white/20 rounded-xl p-4 flex items-center gap-4">
                          <div className="w-12 h-12 rounded-xl bg-white/30 flex items-center justify-center">
                            <BookOpen className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <div className="text-white font-bold">Akıllı Öğrenme</div>
                            <div className="text-white/70 text-sm">7 Farklı Modül</div>
                          </div>
                        </div>
                        <div className="bg-white/20 rounded-xl p-4 flex items-center gap-4">
                          <div className="w-12 h-12 rounded-xl bg-white/30 flex items-center justify-center">
                            <Users className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <div className="text-white font-bold">8500+ Öğrenci</div>
                            <div className="text-white/70 text-sm">Mutlu aile</div>
                          </div>
                        </div>
                        <div className="bg-white/20 rounded-xl p-4 flex items-center gap-4">
                          <div className="w-12 h-12 rounded-xl bg-white/30 flex items-center justify-center">
                            <Laptop className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <div className="text-white font-bold">7/24 Erişim</div>
                            <div className="text-white/70 text-sm">Her yerden öğren</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Floating Mini Cards */}
                    <div className="absolute -top-4 -right-4 bg-yellow-400 text-yellow-900 px-4 py-2 rounded-xl font-bold text-sm animate-wiggle shadow-lg">
                      🎉 %100 MEB Uyumlu
                    </div>
                    <div className="absolute -bottom-4 -left-4 bg-emerald-400 text-emerald-900 px-4 py-2 rounded-xl font-bold text-sm animate-bounce-slow shadow-lg">
                      🏆 15+ Yıl Deneyim
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-all duration-300 text-white"
        aria-label="Önceki"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-all duration-300 text-white"
        aria-label="Sonraki"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/70'
              }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};