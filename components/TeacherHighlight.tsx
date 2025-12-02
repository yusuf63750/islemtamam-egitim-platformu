import React from 'react';
import { Star, Award, GraduationCap } from 'lucide-react';

export const TeacherHighlight: React.FC = () => {
  // Mock data for 4 of the 10 teachers to display as preview
  const teachers = [
    { name: "Ahmet Yılmaz", branch: "Matematik LGS", exp: "15 Yıl", img: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
    { name: "Elif Demir", branch: "Fen Bilgisi LGS", exp: "12 Yıl", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
    { name: "Murat Kaya", branch: "Türkçe & Sosyal LGS", exp: "18 Yıl", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
    { name: "Ayşe Çelik", branch: "İngilizce LGS", exp: "10 Yıl", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
  ];

  return (
    <section id="kadro" className="py-20 bg-slate-900 text-white overflow-hidden relative">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#4b5563 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:flex lg:items-center lg:gap-16">
          
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              LGS'ye 10 Kişilik <br />
              <span className="text-primary-400">Öğretmen Ekibi ile Hazırlık</span>
            </h2>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              LGS başarısı ekip çalışmasının ürünüdür. Her branşta uzmanlaşmış 10 kişilik öğretmen kadromuzla, öğrencinin her sorusuna, her konu zayıflığına anında yanıt veriyoruz.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="bg-slate-800 p-3 rounded-lg border border-slate-700">
                  <Award className="text-yellow-400" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">LGS Uzmanı</h4>
                  <p className="text-slate-400 text-sm">Her öğretmen LGS müfredatında 10+ yıl deneyimli.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-slate-800 p-3 rounded-lg border border-slate-700">
                  <GraduationCap className="text-blue-400" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">LGS Koçluğu</h4>
                  <p className="text-slate-400 text-sm">Akademik başarının yanında sınav psikolojisi desteği.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="grid grid-cols-2 gap-4 items-stretch">
              {teachers.map((teacher, idx) => (
                <div key={idx} className="bg-slate-800 p-4 rounded-xl border border-slate-700 hover:border-primary-500 transition-all duration-300 h-full flex flex-col justify-between">
                  <div className="flex items-center gap-4 mb-3">
                    <img src={teacher.img} alt={teacher.name} className="w-12 h-12 rounded-full object-cover border-2 border-slate-600" />
                    <div>
                      <h5 className="font-bold text-white text-sm">{teacher.name}</h5>
                      <span className="text-xs text-primary-400 font-medium">{teacher.branch}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-slate-400">
                    <Star size={12} className="text-yellow-500 fill-yellow-500" />
                    <span>{teacher.exp} Deneyim</span>
                  </div>
                </div>
              ))}
              
              <div className="col-span-2 text-center mt-4">
                <p className="text-slate-400 text-sm italic">ve diğer 6 uzman öğretmenimiz...</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};