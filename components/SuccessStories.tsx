import React from 'react';
import { Trophy } from 'lucide-react';

const stories = [
  {
    name: "Berkay Yıldız",
    uni: "Boğaziçi Üniversitesi",
    dept: "Bilgisayar Mühendisliği",
    rank: "TR 150.",
    quote: "Matematik netlerim İşlemTamam sayesinde 20'den 38'e çıktı."
  },
  {
    name: "Zeynep Kara",
    uni: "Hacettepe Üniversitesi",
    dept: "Tıp Fakültesi",
    rank: "TR 950.",
    quote: "Disiplinli takip sistemi olmasa bu sıralamayı yapamazdım."
  },
  {
    name: "Canan Erkin",
    uni: "ODTÜ",
    dept: "Mimarlık",
    rank: "TR 2400.",
    quote: "Hocalarımızın ilgisi, özel ders alıyormuşum gibi hissettirdi."
  }
];

export const SuccessStories: React.FC = () => {
  return (
    <section id="basarilar" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Gurur Tablomuz</h2>
          <p className="mt-4 text-lg text-slate-600">Onlar hayallerine kavuştu, şimdi sıra sende.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
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
                <p className="text-primary-600 font-medium">{story.uni}</p>
                <p className="text-sm text-slate-500">{story.dept}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};