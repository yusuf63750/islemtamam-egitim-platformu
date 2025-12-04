import React from 'react';
import { Button } from './Button';
import { CheckCircle2, PlayCircle, ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const handlePackagesClick = () => {
    const packagesSection = document.getElementById('paketler');
    if (packagesSection) {
      packagesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-[600px] h-[600px] bg-primary-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-[400px] h-[400px] bg-secondary-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-sm font-medium text-slate-600">LGS 2025 Kayıtları Açılmıştır</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
              Liselere Giriş Sınavında <span className="text-primary-600">Başarıya Ulaş!</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              10 kişilik uzman öğretmen kadromuzla, LGS'ye tam hazırlık yapın. 
              Kişiye özel takip, canlı dersler ve sınırsız soru çözümü ile başarı tesadüf değil.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="primary" size="lg" className="gap-2" onClick={handlePackagesClick}>
                Paketleri İncele <ArrowRight size={20} />
              </Button>
              <Button variant="white" size="lg" className="gap-2">
                <PlayCircle size={20} className="text-primary-600" />
                Tanıtım Videosu
              </Button>
            </div>

            <div className="pt-6 flex items-center justify-center lg:justify-start gap-6 text-sm font-medium text-slate-500">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-green-500" /> 15+ Yıl LGS Tecrübesi
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-green-500" /> %95 Başarı Oranı
              </div>
            </div>
          </div>

          {/* Image/Visual Content */}
          <div className="relative lg:ml-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white">
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                alt="Happy Students" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
              
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur p-4 rounded-xl shadow-lg border border-slate-100 max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-3">
                    {[1,2,3,4].map(i => (
                      <img key={i} className="w-10 h-10 rounded-full border-2 border-white" src={`https://picsum.photos/100/100?random=${i}`} alt="Student" />
                    ))}
                  </div>
              <div>
                <p className="text-sm font-bold text-slate-900">8500+ Öğrenci</p>
                <p className="text-xs text-slate-500">LGS başarısı için bize güveniyor</p>
              </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-secondary-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          </div>
          
        </div>
      </div>
    </section>
  );
};