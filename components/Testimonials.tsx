import React from 'react';
import { Star, Quote } from 'lucide-react';
import { useSiteContent } from '../context/SiteContentContext';

export const Testimonials: React.FC = () => {
  const { content } = useSiteContent();
  const testimonials = content.testimonials;

  return (
    <section id="yorumlar" className="py-20 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">{testimonials.eyebrow}</h2>
          <h2 className="mt-2 text-3xl font-bold text-slate-900">{testimonials.title}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.testimonials.map((review) => (
            <div key={review.id} className="bg-slate-50 rounded-2xl p-8 relative group hover:bg-white hover:shadow-xl transition-all duration-300 border border-slate-100">
              <Quote className="absolute top-6 right-6 text-primary-200 w-10 h-10 group-hover:text-primary-500 transition-colors duration-300" />
              
              <div className="flex items-center gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-slate-600 leading-relaxed mb-6 relative z-10">
                "{review.content}"
              </p>

              <div className="flex items-center gap-4">
                <img 
                  src={review.image} 
                  alt={review.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{review.name}</h4>
                  <p className="text-primary-600 text-xs font-medium">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};