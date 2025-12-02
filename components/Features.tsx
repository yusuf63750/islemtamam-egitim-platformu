import React from 'react';
import { Video, Users, BookOpen, Clock, Target, MessageCircle } from 'lucide-react';

const features = [
  {
    icon: <Users className="w-6 h-6 text-white" />,
    color: "bg-blue-500",
    title: "10 Kişilik LGS Uzman Kadro",
    description: "Her ders için LGS müfredatına hakim, sorulara cevap verebilen uzman öğretmenlerden oluşan ekip."
  },
  {
    icon: <Video className="w-6 h-6 text-white" />,
    color: "bg-orange-500",
    title: "Canlı LGS Dersleri & Kayıtlar",
    description: "İster canlı katıl, LGS konularını anla; istersen kaçırdığın dersleri sınırsız tekrar et."
  },
  {
    icon: <BookOpen className="w-6 h-6 text-white" />,
    color: "bg-green-500",
    title: "LGS Soru Bankası ve Deneme",
    description: "Binlerce çıkmış LGS sorusu, çözümlü deneme sınavları ve konu kütüphanesine 7/24 erişim."
  },
  {
    icon: <Target className="w-6 h-6 text-white" />,
    color: "bg-purple-500",
    title: "Kişiye Özel LGS Koçluğu",
    description: "Zayıf branşlarında birebir destek, hedef puan belirleme ve motivasyon rehberliği."
  },
  {
    icon: <MessageCircle className="w-6 h-6 text-white" />,
    color: "bg-pink-500",
    title: "LGS Soru Çözüm Sistemleri",
    description: "Yapamadığın LGS sorularını gönder, öğretmenlerimiz video ile anında çözüme kavuştur."
  },
  {
    icon: <Clock className="w-6 h-6 text-white" />,
    color: "bg-indigo-500",
    title: "Sınav Öncesi Yoğunlaşma",
    description: "LGS'ye 4-6 hafta kala son düşüş, eksiklikleri kapatma ve full tekrar kampları."
  }
];

export const Features: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">Neden İşlemTamam LGS?</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            LGS Başarısına Giden Yolda Tam Donanımlı Destek
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
            LGS'ye özel hazırlanmış, modern ve sonuç odaklı bir eğitim sistemi sunuyoruz.
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