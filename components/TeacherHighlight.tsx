import React from 'react';
import { Award, GraduationCap } from 'lucide-react';

export const TeacherHighlight: React.FC = () => {
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

            {/* İstatistikler */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-slate-700">
              <div className="text-center">
                <p className="text-2xl font-bold text-primary-400">15+</p>
                <p className="text-xs text-slate-400">Yıl Deneyim</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-primary-400">5000+</p>
                <p className="text-xs text-slate-400">Mezun Öğrenci</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-primary-400">%95</p>
                <p className="text-xs text-slate-400">Başarı Oranı</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-primary-400">250+</p>
                <p className="text-xs text-slate-400">Aktif Öğrenci</p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 shadow-2xl">
              <div className="flex flex-col items-center text-center">
                {/* Kurucu Fotoğrafı - Daire */}
                <div className="relative mb-6">
                  <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-primary-500 shadow-lg shadow-primary-500/30">
                    <img 
                      src="/kurucu.jpg" 
                      alt="M.Osman DOĞRUER" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                    Kurucu
                  </div>
                </div>
                
                {/* Kurucu İsmi */}
                <h3 className="text-2xl font-bold text-white mb-2">M.Osman DOĞRUER</h3>
                <p className="text-primary-400 font-semibold mb-4">İşlem Tamam Eğitim Kurucusu</p>
                
                {/* Hakkında Yazısı */}
                <div className="text-slate-300 leading-relaxed space-y-4">
                  <p className="text-lg italic border-l-4 border-primary-500 pl-4 text-left">
                    "Eğitim sadece bir meslek değil, geleceği inşa etme sanatıdır."
                  </p>
                  <p className="text-sm">
                    Yılların tecrübesiyle eğitim sektörünün en iyilerinden biri olmayı başaran M.Osman DOĞRUER, 
                    binlerce öğrenciyi hayallerine kavuşturmanın gururunu yaşıyor. LGS'de %1'lik dilime 
                    giren yüzlerce öğrenci yetiştiren eğitim vizyoneridir.
                  </p>
                  <p className="text-sm">
                    <span className="text-primary-400 font-semibold">İşlem Tamam</span> markasını, 
                    "Her öğrenci başarabilir" felsefesiyle kurdu. Disiplinli çalışma, doğru strateji 
                    ve kararlılıkla her hedefin ulaşılabilir olduğuna inanır.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};