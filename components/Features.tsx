import React from 'react';
import { Video, Users, BookOpen, Clock, Target, MessageCircle } from 'lucide-react';

const features = [
  {
    icon: <Users className="w-6 h-6 text-white" />,
    color: "bg-blue-500",
    title: "10 Kişilik Dev Kadro",
    description: "Her ders için alanında uzman, sınav sistemine hakim öğretmenlerden oluşan güçlü bir ekip."
  },
  {
    icon: <Video className="w-6 h-6 text-white" />,
    color: "bg-orange-500",
    title: "Canlı Dersler & Kayıtlar",
    description: "İster canlı katıl, sorunu sor; istersen kaçırdığın dersleri sınırsız tekrar et."
  },
  {
    icon: <BookOpen className="w-6 h-6 text-white" />,
    color: "bg-green-500",
    title: "Dijital Kütüphane",
    description: "PDF notlar, deneme sınavları ve soru bankalarına 7/24 erişim imkanı."
  },
  {
    icon: <Target className="w-6 h-6 text-white" />,
    color: "bg-purple-500",
    title: "Kişiye Özel Koçluk",
    description: "Sadece ders değil, motivasyon ve planlama desteği ile her an yanındayız."
  },
  {
    icon: <MessageCircle className="w-6 h-6 text-white" />,
    color: "bg-pink-500",
    title: "Soru Çözüm Grupları",
    description: "Yapamadığın soruları gönder, öğretmenlerimiz ve arkadaşlarınla anında çözüme kavuştur."
  },
  {
    icon: <Clock className="w-6 h-6 text-white" />,
    color: "bg-indigo-500",
    title: "Hızlandırılmış Kamplar",
    description: "Sınav öncesi son tekrarlar ve yoğunlaştırılmış programlarla eksiklerini kapat."
  }
];

export const Features: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">Neden İşlemTamam?</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Başarıya Giden Yolda Tam Donanımlı Destek
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
            Klasik dershanelerin ötesinde, modern ve sonuç odaklı bir eğitim sistemi sunuyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="relative group bg-slate-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-slate-100 hover:-translate-y-1">
              <div className={`absolute top-0 right-0 -mt-4 -mr-4 w-16 h-16 ${feature.color} rounded-2xl transform rotate-12 opacity-20 group-hover:rotate-45 transition-transform duration-300`}></div>
              <div className={`inline-flex items-center justify-center p-3 ${feature.color} rounded-xl shadow-lg mb-5 relative z-10`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};