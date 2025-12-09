import React from 'react';
import { Star, Quote, Heart, ThumbsUp, Sparkles } from 'lucide-react';
import { useSiteContent } from '../context/SiteContentContext';

export const Testimonials: React.FC = () => {
  const { content } = useSiteContent();
  const testimonials = content.testimonials;

  return (
    <section id="yorumlar" className="py-20 bg-gradient-to-b from-white to-slate-50 scroll-mt-20 relative overflow-hidden">
      {/* Fun Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 text-6xl opacity-10 animate-float">💬</div>
        <div className="absolute top-1/3 right-10 text-6xl opacity-10 animate-float animation-delay-2000">⭐</div>
        <div className="absolute bottom-10 left-1/4 text-6xl opacity-10 animate-bounce-slow">❤️</div>
        <div className="absolute bottom-1/4 right-1/4 text-6xl opacity-10 animate-wiggle">🎉</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Heart className="w-4 h-4 fill-pink-500" />
            Sizden Gelenler
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 flex items-center justify-center gap-3">
            <span className="text-4xl">🗣️</span>
            {testimonials.title}
            <span className="text-4xl">💖</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Binlerce öğrenci ve velimizin güvenini kazandık. İşte onların hikayeleri!
          </p>
        </div>

        {/* Stats Bar */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-md">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="font-bold text-slate-900">4.9/5</span>
            <span className="text-slate-500 text-sm">Ortalama Puan</span>
          </div>
          <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-md">
            <ThumbsUp className="w-5 h-5 text-emerald-500" />
            <span className="font-bold text-slate-900">%98</span>
            <span className="text-slate-500 text-sm">Memnuniyet</span>
          </div>
          <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-md">
            <Sparkles className="w-5 h-5 text-purple-500" />
            <span className="font-bold text-slate-900">8500+</span>
            <span className="text-slate-500 text-sm">Mutlu Öğrenci</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.testimonials.map((review, index) => (
            <div
              key={review.id}
              className="bg-white rounded-3xl p-8 relative group hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 text-primary-100 w-12 h-12 group-hover:text-primary-200 transition-colors duration-300" />

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                ))}
                <span className="ml-2 text-sm text-slate-500">({review.rating}.0)</span>
              </div>

              {/* Content */}
              <p className="text-slate-700 leading-relaxed mb-6 relative z-10 text-lg">
                "{review.content}"
              </p>

              {/* Fun Emoji Reaction */}
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">😊</span>
                <span className="text-sm text-slate-500">Çok memnun</span>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-14 h-14 rounded-full object-cover border-4 border-primary-100 shadow-md"
                />
                <div>
                  <h4 className="font-bold text-slate-900">{review.name}</h4>
                  <p className="text-primary-600 text-sm font-medium">{review.role}</p>
                </div>
              </div>

              {/* Decorative Badge */}
              {index === 1 && (
                <div className="absolute -top-3 left-6 bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                  <Star size={12} className="fill-white" />
                  En Beğenilen
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-slate-600 mb-4">Siz de başarı hikayenizi yazın!</p>
          <a
            href="#paketler"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-bold px-8 py-4 rounded-full hover:scale-105 transition-transform shadow-lg"
          >
            <span className="text-xl">🚀</span>
            Hemen Başla
          </a>
        </div>
      </div>
    </section>
  );
};