import React from 'react';
import { BookOpen, Instagram, Twitter, Youtube, Phone, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-primary-600 p-1.5 rounded text-white">
                <BookOpen size={20} strokeWidth={3} />
              </div>
              <span className="text-xl font-bold">
                İşlem<span className="text-primary-500">Tamam</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              LGS'ye hazırlık için 10 kişilik öğretmen kadromuzla başarıya ulaşın. 
              Başarıyı şansa bırakmayın, işi LGS uzmanlarına bırakın.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Youtube size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Hızlı Erişim</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="#paketler" className="hover:text-primary-400 transition-colors">Paketler</a></li>
              <li><a href="#kadro" className="hover:text-primary-400 transition-colors">Öğretmen Kadrosu</a></li>
              <li><a href="#basarilar" className="hover:text-primary-400 transition-colors">Başarı Hikayeleri</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-bold mb-6">Kaynaklar</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="#yorumlar" className="hover:text-primary-400 transition-colors">Öğrenci Yorumları</a></li>
              <li><a href="#sss" className="hover:text-primary-400 transition-colors">Sıkça Sorulan Sorular</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6">İletişim</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary-500 shrink-0 mt-0.5" />
                <span>Mecidiyeköy Mah. Büyükdere Cad. No:123 Şişli/İstanbul</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary-500 shrink-0" />
                <span>0850 123 45 67</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary-500 shrink-0" />
                <span>iletisim@islemtamam.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          <p>&copy; 2024 LGS Hazırlık Platformu - İşlemTamam. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};