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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
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
              <div key={feature.id} className="relative group bg-slate-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-slate-100 hover:-translate-y-1">
                <div className={`absolute top-0 right-0 -mt-4 -mr-4 w-16 h-16 ${feature.color} rounded-2xl transform rotate-12 opacity-20 group-hover:rotate-45 transition-transform duration-300`}></div>
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