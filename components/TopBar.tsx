import React from 'react';
import { Phone, Mail, Instagram, Twitter, Youtube } from 'lucide-react';
import { useSiteContent } from '../context/SiteContentContext';

export const TopBar: React.FC = () => {
  const { content } = useSiteContent();
  const { footer } = content; // Using footer contact/social info for TopBar as well

  const getIcon = (platform: string) => {
    switch (platform) {
      case 'instagram': return <Instagram size={14} />;
      case 'twitter': return <Twitter size={14} />;
      case 'youtube': return <Youtube size={14} />;
      default: return null;
    }
  };

  const phone = footer.contact.find(c => c.type === 'phone')?.value;
  const email = footer.contact.find(c => c.type === 'email')?.value;

  return (
    <div className="bg-slate-900 text-white py-2 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-2">
        
        {/* Contact Info */}
        <div className="flex items-center gap-4 sm:gap-6">
          {phone && (
            <a href={`tel:${phone.replace(/\s/g, '')}`} className="flex items-center gap-2 hover:text-primary-300 transition-colors">
              <Phone size={14} />
              <span>{phone}</span>
            </a>
          )}
          {email && (
            <a href={`mailto:${email}`} className="flex items-center gap-2 hover:text-primary-300 transition-colors">
              <Mail size={14} />
              <span>{email}</span>
            </a>
          )}
        </div>

        {/* Social Media */}
        <div className="flex items-center gap-4">
          <span className="hidden sm:inline text-slate-400">Bizi Takip Edin:</span>
          <div className="flex items-center gap-3">
            {footer.socials.map((social) => (
              <a 
                key={social.id} 
                href={social.url} 
                className="hover:text-primary-300 transition-colors"
                aria-label={social.platform}
              >
                {getIcon(social.platform)}
              </a>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
