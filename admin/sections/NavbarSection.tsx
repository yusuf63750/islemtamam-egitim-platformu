import React, { useState } from 'react';
import { Navigation, Save, Plus, Trash2, Phone, Mail, MapPin, Clock } from 'lucide-react';

interface NavLink {
  id: string;
  label: string;
  href: string;
}

interface TopBarInfo {
  phone: string;
  email: string;
  address: string;
  workingHours: string;
}

const initialLinks: NavLink[] = [
  { id: '1', label: 'Ana Sayfa', href: '#hero' },
  { id: '2', label: 'Neler Var', href: '#neler-var' },
  { id: '3', label: 'Çözümler', href: '#cozumler' },
  { id: '4', label: 'Paketler', href: '#paketler' },
  { id: '5', label: 'Kadromuz', href: '#kadro' },
  { id: '6', label: 'Yorumlar', href: '#yorumlar' },
  { id: '7', label: 'SSS', href: '#sss' },
  { id: '8', label: 'Blog', href: '#blog' },
];

export const NavbarSection: React.FC = () => {
  const [logoText, setLogoText] = useState('İŞLEM TAMAM');
  const [tagline, setTagline] = useState('Eğitim Platformu');
  const [ctaLabel, setCtaLabel] = useState('ÜCRETSİZ DENE');
  const [ctaHref, setCtaHref] = useState('#basvuru');
  const [links, setLinks] = useState<NavLink[]>(initialLinks);
  const [topBar, setTopBar] = useState<TopBarInfo>({
    phone: '+90 (532) 123 45 67',
    email: 'info@islemtamam.com',
    address: 'İstanbul, Türkiye',
    workingHours: 'Hafta içi 09:00 - 18:00',
  });
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const addLink = () => {
    const newId = String(Date.now());
    setLinks([...links, { id: newId, label: 'Yeni Link', href: '#' }]);
  };

  const deleteLink = (id: string) => {
    if (links.length > 1) {
      setLinks(links.filter(l => l.id !== id));
    }
  };

  const updateLink = (id: string, field: keyof NavLink, value: string) => {
    setLinks(links.map(l => l.id === id ? { ...l, [field]: value } : l));
  };

  const updateTopBar = (field: keyof TopBarInfo, value: string) => {
    setTopBar({ ...topBar, [field]: value });
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center gap-3 pb-6 border-b border-slate-200">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center">
          <Navigation className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Navbar & TopBar</h2>
          <p className="text-slate-500">Menü, logo ve iletişim bilgilerini düzenleyin</p>
        </div>
      </div>

      {/* Logo Settings */}
      <div className="space-y-4 p-6 bg-slate-50 rounded-2xl border border-slate-200">
        <h3 className="font-semibold text-slate-900 flex items-center gap-2">
          🏷️ Logo Ayarları
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Logo Metni</label>
            <input
              type="text"
              value={logoText}
              onChange={(e) => setLogoText(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Alt Yazı (Tagline)</label>
            <input
              type="text"
              value={tagline}
              onChange={(e) => setTagline(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition"
            />
          </div>
        </div>
        <div className="bg-white p-4 rounded-xl border border-slate-200">
          <p className="text-xs text-slate-500 mb-2">Önizleme:</p>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center text-white font-bold">İT</div>
            <div>
              <div className="font-bold text-slate-900">{logoText}</div>
              <div className="text-xs text-slate-500">{tagline}</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="space-y-4 p-6 bg-primary-50 rounded-2xl border border-primary-100">
        <h3 className="font-semibold text-slate-900 flex items-center gap-2">
          🚀 CTA Butonu
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Buton Metni</label>
            <input
              type="text"
              value={ctaLabel}
              onChange={(e) => setCtaLabel(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Buton Linki</label>
            <input
              type="text"
              value={ctaHref}
              onChange={(e) => setCtaHref(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition"
            />
          </div>
        </div>
      </div>

      {/* Top Bar Info */}
      <div className="space-y-4 p-6 bg-slate-900 rounded-2xl text-white">
        <h3 className="font-semibold flex items-center gap-2">
          📞 TopBar İletişim Bilgileri
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-slate-300 mb-2">
              <Phone size={14} />
              Telefon
            </label>
            <input
              type="text"
              value={topBar.phone}
              onChange={(e) => updateTopBar('phone', e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:border-white/40 outline-none transition"
            />
          </div>
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-slate-300 mb-2">
              <Mail size={14} />
              E-posta
            </label>
            <input
              type="text"
              value={topBar.email}
              onChange={(e) => updateTopBar('email', e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:border-white/40 outline-none transition"
            />
          </div>
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-slate-300 mb-2">
              <MapPin size={14} />
              Adres
            </label>
            <input
              type="text"
              value={topBar.address}
              onChange={(e) => updateTopBar('address', e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:border-white/40 outline-none transition"
            />
          </div>
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-slate-300 mb-2">
              <Clock size={14} />
              Çalışma Saatleri
            </label>
            <input
              type="text"
              value={topBar.workingHours}
              onChange={(e) => updateTopBar('workingHours', e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:border-white/40 outline-none transition"
            />
          </div>
        </div>
      </div>

      {/* Menu Links */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-slate-900 flex items-center gap-2">
            🔗 Menü Linkleri ({links.length})
          </h3>
          <button
            onClick={addLink}
            className="flex items-center gap-2 px-3 py-2 text-sm bg-primary-100 text-primary-700 rounded-xl hover:bg-primary-200 transition-colors"
          >
            <Plus size={16} />
            Link Ekle
          </button>
        </div>
        <div className="space-y-3">
          {links.map((link, index) => (
            <div key={link.id} className="flex gap-4 items-center p-4 bg-white rounded-xl border border-slate-200">
              <span className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-sm font-bold text-slate-500">
                {index + 1}
              </span>
              <input
                type="text"
                value={link.label}
                onChange={(e) => updateLink(link.id, 'label', e.target.value)}
                className="flex-1 px-3 py-2 rounded-lg border border-slate-200 focus:border-primary-500 outline-none transition"
                placeholder="Link adı"
              />
              <input
                type="text"
                value={link.href}
                onChange={(e) => updateLink(link.id, 'href', e.target.value)}
                className="flex-1 px-3 py-2 rounded-lg border border-slate-200 focus:border-primary-500 outline-none transition font-mono text-sm"
                placeholder="#section-id"
              />
              <button
                onClick={() => deleteLink(link.id)}
                className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                disabled={links.length <= 1}
              >
                <Trash2 size={18} />
              </button>
            </div>
          ))}
        </div>
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
