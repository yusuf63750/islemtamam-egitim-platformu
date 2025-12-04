import React from 'react';
import { BookOpen, Instagram, Twitter, Youtube, Phone, Mail, MapPin } from 'lucide-react';
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
                {footer.brandName}
                <span className="text-primary-500">{footer.brandHighlight}</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              {footer.brandDescription}
            </p>
            <div className="flex gap-4">
              {footer.socials.map((social) => {
                const Icon = socialIconMap[social.platform];
                return (
                  <a key={social.id} href={social.url} className="text-slate-400 hover:text-white transition-colors" target="_blank" rel="noreferrer">
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Hızlı Erişim</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              {footer.quickLinks.map((link) => (
                <li key={link.id}>
                  <a href={link.href} className="hover:text-primary-400 transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-bold mb-6">Kaynaklar</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              {footer.resourceLinks.map((link) => (
                <li key={link.id}>
                  <a href={link.href} className="hover:text-primary-400 transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6">İletişim</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              {footer.contact.map((item) => {
                const Icon = contactIconMap[item.type];
                return (
                  <li key={item.id} className={`flex ${item.type === 'address' ? 'items-start' : 'items-center'} gap-3`}>
                    <Icon size={18} className={`text-primary-500 shrink-0 ${item.type === 'address' ? 'mt-0.5' : ''}`} />
                    <span>{item.value}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          <p>{footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
};