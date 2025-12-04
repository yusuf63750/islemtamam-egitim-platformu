import React from 'react';
import { Trophy } from 'lucide-react';
import { useSiteContent } from '../context/SiteContentContext';

export const SuccessStories: React.FC = () => {
  const { content } = useSiteContent();
  const successStories = content.successStories;

  return (
    <section id="basarilar" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">{successStories.title}</h2>
          <p className="mt-4 text-lg text-slate-600">{successStories.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {successStories.stories.map((story) => (
            <div key={story.id} className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
              <div className="absolute top-0 right-0 bg-primary-600 text-white px-4 py-1 rounded-bl-xl text-xs font-bold">
                {story.rank}
              </div>
              
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-6 text-yellow-600">
                <Trophy size={24} />
              </div>

              <blockquote className="text-slate-600 italic mb-6 min-h-[80px]">
                "{story.quote}"
              </blockquote>

              <div className="border-t border-slate-100 pt-6">
                <h4 className="font-bold text-lg text-slate-900">{story.name}</h4>
                <p className="text-primary-600 font-medium">{story.school}</p>
                <p className="text-sm text-slate-500">{story.score}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};