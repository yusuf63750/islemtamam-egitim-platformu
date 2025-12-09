import React from 'react';
import { Video, Users, BookOpen, Clock, Target, MessageCircle } from 'lucide-react';
import { useSiteContent } from '../context/SiteContentContext';

const iconMap = {
  users: Users,
  video: Video,
  bookOpen: BookOpen,
  target: Target,
  messageCircle: MessageCircle,
  clock: Clock,
} as const;

export const Features: React.FC = () => {
  const { content } = useSiteContent();
  const features = content.features;

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Moving Pattern Background */}
      <div className="absolute inset-0 opacity-10 animate-slide-diagonal"
        style={{ backgroundImage: 'url(/fun_animated_bg_pattern_1765316023098.png)', backgroundSize: '400px' }}>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Floating Icons Background */}
        <div className="absolute top-10 left-0 animate-float hidden lg:block opacity-20 pointer-events-none">
          <span className="text-6xl">📚</span>
        </div>
        <div className="absolute bottom-10 right-0 animate-float animation-delay-2000 hidden lg:block opacity-20 pointer-events-none">
          <span className="text-6xl">✏️</span>
        </div>

        <div className="text-center mb-16 relative z-10">
          <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">{features.eyebrow}</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            {features.title}
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
            {features.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.items.map((feature) => {
            const Icon = iconMap[feature.icon] ?? Users;
            return (
              <div key={feature.id} className="relative group bg-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 border-2 border-slate-100 hover:-translate-y-2 hover:border-transparent overflow-hidden">
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 ${feature.color}`}></div>
                <div className={`absolute top-0 right-0 -mt-6 -mr-6 w-24 h-24 ${feature.color} rounded-full transform rotate-12 opacity-20 group-hover:scale-150 transition-transform duration-500`}></div>
                <div className={`inline-flex items-center justify-center p-3 ${feature.color} rounded-xl shadow-lg mb-5 relative z-10`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};