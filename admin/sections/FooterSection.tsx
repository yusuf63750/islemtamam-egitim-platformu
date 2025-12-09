import React, { useState } from 'react';
import { LayoutTemplate, Save, Plus, Trash2, Instagram, Twitter, Youtube, Phone, Mail, MapPin } from 'lucide-react';

interface FooterLink {
  id: string;
  label: string;
  href: string;
}

interface SocialLink {
  id: string;
  platform: 'instagram' | 'twitter' | 'youtube';
  url: string;
}

interface ContactInfo {
  id: string;
  type: 'phone' | 'email' | 'address';
  value: string;
}

const initialQuickLinks: FooterLink[] = [
  { id: '1', label: 'Ana Sayfa', href: '#' },
  { id: '2', label: 'Paketler', href: '#paketler' },
  { id: '3', label: 'Hakkımızda', href: '#kadro' },
  { id: '4', label: 'Blog', href: '#blog' },
  { id: '5', label: 'İletişim', href: '#iletisim' },
];

const initialResourceLinks: FooterLink[] = [
  { id: '1', label: 'SSS', href: '#sss' },
  { id: '2', label: 'Gizlilik Politikası', href: '#' },
  { id: '3', label: 'Kullanım Şartları', href: '#' },
  { id: '4', label: 'Destek', href: '#' },
];

const initialSocials: SocialLink[] = [
  { id: '1', platform: 'instagram', url: 'https://instagram.com/islemtamam' },
  { id: '2', platform: 'twitter', url: 'https://twitter.com/islemtamam' },
  { id: '3', platform: 'youtube', url: 'https://youtube.com/islemtamam' },
];

const initialContacts: ContactInfo[] = [
  { id: '1', type: 'address', value: 'Atatürk Cad. No:123, Kadıköy, İstanbul' },
  { id: '2', type: 'phone', value: '+90 (532) 123 45 67' },
  { id: '3', type: 'email', value: 'info@islemtamam.com' },
];

const socialIcons = {
  instagram: Instagram,
  twitter: Twitter,
  youtube: Youtube,
};

const contactIcons = {
  phone: Phone,
  email: Mail,
  address: MapPin,
};

export const FooterSection: React.FC = () => {
  const [brandDescription, setBrandDescription] = useState('MEB müfredatına %100 uyumlu, yapay zeka destekli akıllı öğrenme platformu. 15 yılı aşkın deneyimle eğitimde fark yaratıyoruz.');
  const [copyright, setCopyright] = useState('© 2024 İşlemTamam. Tüm hakları saklıdır.');
  const [quickLinks, setQuickLinks] = useState<FooterLink[]>(initialQuickLinks);
  const [resourceLinks, setResourceLinks] = useState<FooterLink[]>(initialResourceLinks);
  const [socials, setSocials] = useState<SocialLink[]>(initialSocials);
  const [contacts, setContacts] = useState<ContactInfo[]>(initialContacts);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  // Quick Links
  const addQuickLink = () => {
    setQuickLinks([...quickLinks, { id: String(Date.now()), label: 'Yeni Link', href: '#' }]);
  };
  const deleteQuickLink = (id: string) => {
    setQuickLinks(quickLinks.filter(l => l.id !== id));
  };
  const updateQuickLink = (id: string, field: keyof FooterLink, value: string) => {
    setQuickLinks(quickLinks.map(l => l.id === id ? { ...l, [field]: value } : l));
  };

  // Resource Links
  const addResourceLink = () => {
    setResourceLinks([...resourceLinks, { id: String(Date.now()), label: 'Yeni Link', href: '#' }]);
  };
  const deleteResourceLink = (id: string) => {
    setResourceLinks(resourceLinks.filter(l => l.id !== id));
  };
  const updateResourceLink = (id: string, field: keyof FooterLink, value: string) => {
    setResourceLinks(resourceLinks.map(l => l.id === id ? { ...l, [field]: value } : l));
  };

  // Socials
  const updateSocial = (id: string, url: string) => {
    setSocials(socials.map(s => s.id === id ? { ...s, url } : s));
  };

  // Contacts
  const updateContact = (id: string, value: string) => {
    setContacts(contacts.map(c => c.id === id ? { ...c, value } : c));
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center gap-3 pb-6 border-b border-slate-200">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center">
          <LayoutTemplate className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Footer</h2>
          <p className="text-slate-500">Alt bilgi ve sosyal medya linklerini düzenleyin</p>
        </div>
      </div>

      {/* Brand Description */}
      <div className="space-y-4 p-6 bg-slate-50 rounded-2xl border border-slate-200">
        <h3 className="font-semibold text-slate-900 flex items-center gap-2">
          📝 Marka Açıklaması
        </h3>
        <textarea
          value={brandDescription}
          onChange={(e) => setBrandDescription(e.target.value)}
          rows={3}
          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition resize-none"
          placeholder="Marka hakkında kısa açıklama..."
        />
      </div>

      {/* Social Media */}
      <div className="space-y-4 p-6 bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl border border-pink-100">
        <h3 className="font-semibold text-slate-900 flex items-center gap-2">
          🌐 Sosyal Medya Linkleri
        </h3>
        <div className="space-y-3">
          {socials.map((social) => {
            const Icon = socialIcons[social.platform];
            return (
              <div key={social.id} className="flex gap-4 items-center">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${social.platform === 'instagram' ? 'bg-gradient-to-br from-pink-500 to-purple-500' :
                    social.platform === 'twitter' ? 'bg-blue-500' : 'bg-red-500'
                  }`}>
                  <Icon size={20} className="text-white" />
                </div>
                <input
                  type="text"
                  value={social.url}
                  onChange={(e) => updateSocial(social.id, e.target.value)}
                  className="flex-1 px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition"
                  placeholder={`https://${social.platform}.com/...`}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Contact Info */}
      <div className="space-y-4 p-6 bg-slate-900 rounded-2xl text-white">
        <h3 className="font-semibold flex items-center gap-2">
          📞 İletişim Bilgileri
        </h3>
        <div className="space-y-3">
          {contacts.map((contact) => {
            const Icon = contactIcons[contact.type];
            return (
              <div key={contact.id} className="flex gap-4 items-center">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <Icon size={18} className="text-primary-400" />
                </div>
                <input
                  type="text"
                  value={contact.value}
                  onChange={(e) => updateContact(contact.id, e.target.value)}
                  className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:border-white/40 outline-none transition"
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Quick Links */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-slate-900 flex items-center gap-2">
            🔗 Hızlı Erişim Linkleri
          </h3>
          <button
            onClick={addQuickLink}
            className="flex items-center gap-2 px-3 py-2 text-sm bg-primary-100 text-primary-700 rounded-xl hover:bg-primary-200 transition-colors"
          >
            <Plus size={16} />
            Ekle
          </button>
        </div>
        <div className="grid sm:grid-cols-2 gap-3">
          {quickLinks.map((link) => (
            <div key={link.id} className="flex gap-2 items-center p-3 bg-white rounded-xl border border-slate-200">
              <input
                type="text"
                value={link.label}
                onChange={(e) => updateQuickLink(link.id, 'label', e.target.value)}
                className="flex-1 px-3 py-2 rounded-lg border border-slate-200 focus:border-primary-500 outline-none transition text-sm"
                placeholder="Link adı"
              />
              <input
                type="text"
                value={link.href}
                onChange={(e) => updateQuickLink(link.id, 'href', e.target.value)}
                className="w-28 px-3 py-2 rounded-lg border border-slate-200 focus:border-primary-500 outline-none transition text-sm font-mono"
                placeholder="#id"
              />
              <button
                onClick={() => deleteQuickLink(link.id)}
                className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Resource Links */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-slate-900 flex items-center gap-2">
            📚 Kaynak Linkleri
          </h3>
          <button
            onClick={addResourceLink}
            className="flex items-center gap-2 px-3 py-2 text-sm bg-primary-100 text-primary-700 rounded-xl hover:bg-primary-200 transition-colors"
          >
            <Plus size={16} />
            Ekle
          </button>
        </div>
        <div className="grid sm:grid-cols-2 gap-3">
          {resourceLinks.map((link) => (
            <div key={link.id} className="flex gap-2 items-center p-3 bg-white rounded-xl border border-slate-200">
              <input
                type="text"
                value={link.label}
                onChange={(e) => updateResourceLink(link.id, 'label', e.target.value)}
                className="flex-1 px-3 py-2 rounded-lg border border-slate-200 focus:border-primary-500 outline-none transition text-sm"
                placeholder="Link adı"
              />
              <input
                type="text"
                value={link.href}
                onChange={(e) => updateResourceLink(link.id, 'href', e.target.value)}
                className="w-28 px-3 py-2 rounded-lg border border-slate-200 focus:border-primary-500 outline-none transition text-sm font-mono"
                placeholder="#id"
              />
              <button
                onClick={() => deleteResourceLink(link.id)}
                className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div className="space-y-4 p-6 bg-slate-50 rounded-2xl border border-slate-200">
        <h3 className="font-semibold text-slate-900 flex items-center gap-2">
          ©️ Telif Hakkı Metni
        </h3>
        <input
          type="text"
          value={copyright}
          onChange={(e) => setCopyright(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition"
        />
      </div>

      {/* Save Button */}
      <div className="flex justify-end pt-6 border-t border-slate-200">
        <button
          onClick={handleSave}
          className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${saved
              ? 'bg-emerald-500 text-white'
              : 'bg-gradient-to-r from-primary-500 to-blue-500 text-white hover:shadow-lg'
            }`}
        >
          <Save size={18} />
          {saved ? 'Kaydedildi!' : 'Değişiklikleri Kaydet'}
        </button>
      </div>
    </div>
  );
};
