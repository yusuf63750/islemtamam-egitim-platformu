import React from 'react';
import { Instagram, Twitter, Youtube, Phone, Mail, MapPin } from 'lucide-react';
import { useSiteContent } from '../context/SiteContentContext';

const socialIconMap = {
  instagram: Instagram,
  twitter: Twitter,
  youtube: Youtube,
} as const;

const contactIconMap = {
  address: MapPin,
  phone: Phone,
  email: Mail,
} as const;

export const Footer: React.FC = () => {
  const { content } = useSiteContent();
  const footer = content.footer;
  const navbar = content.navbar;

  return (
    <footer id="iletisim" className="bg-slate-900 text-white pt-16 pb-8 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand - Logo ve Yazı ile */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              {/* Logo */}
              <img
                src="/LOGO.png"
                alt="İşlemTamam Logo"
                className="w-14 h-14 object-contain"
              />
              {/* Marka Yazısı - Beyaz ve hareketsiz */}
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight uppercase text-white">
                  {navbar.logoText}
                </span>
                <span className="text-slate-400 text-xs">
                  {navbar.tagline}
                </span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              {footer.brandDescription}
            </p>
            <div className="flex gap-4">
              {footer.socials.map((social) => {
                const Icon = socialIconMap[social.platform];
                return (
                  <a
                    key={social.id}
                    href={social.url}
                    className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-primary-600 transition-all duration-300"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              <span className="text-xl">🔗</span>
              Hızlı Erişim
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              {footer.quickLinks.map((link) => (
                <li key={link.id}>
                  <a href={link.href} className="hover:text-primary-400 transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-500"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              <span className="text-xl">📚</span>
              Kaynaklar
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              {footer.resourceLinks.map((link) => (
                <li key={link.id}>
                  <a href={link.href} className="hover:text-primary-400 transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-500"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              <span className="text-xl">📞</span>
              İletişim
            </h4>
            <ul className="space-y-4 text-sm text-slate-400">
              {footer.contact.map((item) => {
                const Icon = contactIconMap[item.type];
                return (
                  <li key={item.id} className={`flex ${item.type === 'address' ? 'items-start' : 'items-center'} gap-3`}>
                    <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center shrink-0">
                      <Icon size={16} className="text-primary-500" />
                    </div>
                    <span>{item.value}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">{footer.copyright}</p>
          <div className="flex items-center gap-2 text-slate-500 text-sm">
            <span>🎓</span>
            <span>Eğitimde Başarının Adresi</span>
          </div>
        </div>
      </div>
    </footer>
  );
};