import React, { useId } from 'react';
import { SectionContainer } from '../components/SectionContainer';
import { useEditableSection } from '../hooks/useEditableSection';
import { SocialLink, FooterLink, ContactItem } from '../../types';
import { Plus, Trash2, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from 'lucide-react';

const generateId = (prefix: string) => {
  const randomPart = typeof globalThis.crypto?.randomUUID === 'function'
    ? globalThis.crypto.randomUUID()
    : `${Date.now()}-${Math.random().toString(16).slice(2, 8)}`;
  return `${prefix}-${randomPart}`;
};

const createSocialLink = (): SocialLink => ({
  id: generateId('social'),
  platform: 'instagram',
  url: 'https://',
});

const createFooterLink = (): FooterLink => ({
  id: generateId('footerlink'),
  label: 'Yeni Link',
  href: '#',
});

const createContactItem = (): ContactItem => ({
  id: generateId('contact'),
  type: 'phone',
  value: '',
});

const platformOptions: { value: SocialLink['platform']; label: string; icon: React.ReactNode }[] = [
  { value: 'instagram', label: 'Instagram', icon: <Instagram size={16} /> },
  { value: 'twitter', label: 'Twitter', icon: <Twitter size={16} /> },
  { value: 'youtube', label: 'YouTube', icon: <Youtube size={16} /> },
];

const contactTypeOptions: { value: ContactItem['type']; label: string; icon: React.ReactNode }[] = [
  { value: 'address', label: 'Adres', icon: <MapPin size={16} /> },
  { value: 'phone', label: 'Telefon', icon: <Phone size={16} /> },
  { value: 'email', label: 'E-posta', icon: <Mail size={16} /> },
];

export const FooterSection: React.FC = () => {
  const formId = useId();
  const { draft, setDraft, save, resetToCurrent, loadDefaults, isDirty } = useEditableSection('footer');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    save();
  };

  // Social Links
  const addSocialLink = () => {
    setDraft((prev) => ({ ...prev, socials: [...prev.socials, createSocialLink()] }));
  };

  const updateSocialLink = (id: string, updater: (s: SocialLink) => SocialLink) => {
    setDraft((prev) => ({
      ...prev,
      socials: prev.socials.map((s) => (s.id === id ? updater(s) : s)),
    }));
  };

  const removeSocialLink = (id: string) => {
    setDraft((prev) => ({
      ...prev,
      socials: prev.socials.filter((s) => s.id !== id),
    }));
  };

  // Quick Links
  const addQuickLink = () => {
    setDraft((prev) => ({ ...prev, quickLinks: [...prev.quickLinks, createFooterLink()] }));
  };

  const updateQuickLink = (id: string, updater: (l: FooterLink) => FooterLink) => {
    setDraft((prev) => ({
      ...prev,
      quickLinks: prev.quickLinks.map((l) => (l.id === id ? updater(l) : l)),
    }));
  };

  const removeQuickLink = (id: string) => {
    setDraft((prev) => ({
      ...prev,
      quickLinks: prev.quickLinks.filter((l) => l.id !== id),
    }));
  };

  // Resource Links
  const addResourceLink = () => {
    setDraft((prev) => ({ ...prev, resourceLinks: [...prev.resourceLinks, createFooterLink()] }));
  };

  const updateResourceLink = (id: string, updater: (l: FooterLink) => FooterLink) => {
    setDraft((prev) => ({
      ...prev,
      resourceLinks: prev.resourceLinks.map((l) => (l.id === id ? updater(l) : l)),
    }));
  };

  const removeResourceLink = (id: string) => {
    setDraft((prev) => ({
      ...prev,
      resourceLinks: prev.resourceLinks.filter((l) => l.id !== id),
    }));
  };

  // Contact Items
  const addContactItem = () => {
    setDraft((prev) => ({ ...prev, contact: [...prev.contact, createContactItem()] }));
  };

  const updateContactItem = (id: string, updater: (c: ContactItem) => ContactItem) => {
    setDraft((prev) => ({
      ...prev,
      contact: prev.contact.map((c) => (c.id === id ? updater(c) : c)),
    }));
  };

  const removeContactItem = (id: string) => {
    setDraft((prev) => ({
      ...prev,
      contact: prev.contact.filter((c) => c.id !== id),
    }));
  };

  return (
    <SectionContainer
      title="Footer"
      description="Alt bilgi alanındaki iletişim ve link detaylarını düzenleyin."
      actions={
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={loadDefaults}
            className="rounded-xl border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 transition"
          >
            Varsayılanları Yükle
          </button>
          <button
            type="button"
            onClick={resetToCurrent}
            disabled={!isDirty}
            className="rounded-xl border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Değişiklikleri Geri Al
          </button>
          <button
            type="submit"
            form={formId}
            disabled={!isDirty}
            className="rounded-xl bg-primary-600 px-4 py-2 text-xs font-semibold text-white hover:bg-primary-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Kaydet
          </button>
        </div>
      }
    >
      <form id={formId} className="space-y-8" onSubmit={handleSubmit}>
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-slate-700">Marka Bilgileri</h3>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-3">
              <label className="text-xs font-semibold text-slate-600">Marka Adı</label>
              <input
                type="text"
                value={draft.brandName}
                onChange={(event) =>
                  setDraft((prev) => ({ ...prev, brandName: event.target.value }))
                }
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:ring-4 focus:ring-primary-100 focus:border-primary-400 transition"
              />
            </div>
            <div className="space-y-3">
              <label className="text-xs font-semibold text-slate-600">Vurgulu Metin</label>
              <input
                type="text"
                value={draft.brandHighlight}
                onChange={(event) =>
                  setDraft((prev) => ({ ...prev, brandHighlight: event.target.value }))
                }
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:ring-4 focus:ring-primary-100 focus:border-primary-400 transition"
              />
            </div>
          </div>
          <div className="space-y-3">
            <label className="text-xs font-semibold text-slate-600">Marka Açıklaması</label>
            <textarea
              value={draft.brandDescription}
              onChange={(event) =>
                setDraft((prev) => ({ ...prev, brandDescription: event.target.value }))
              }
              rows={3}
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:ring-4 focus:ring-primary-100 focus:border-primary-400 transition"
            />
          </div>
          <div className="space-y-3">
            <label className="text-xs font-semibold text-slate-600">Telif Hakkı Metni</label>
            <input
              type="text"
              value={draft.copyright}
              onChange={(event) =>
                setDraft((prev) => ({ ...prev, copyright: event.target.value }))
              }
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:ring-4 focus:ring-primary-100 focus:border-primary-400 transition"
            />
          </div>
        </div>

        {/* Sosyal Medya Linkleri */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-slate-700">Sosyal Medya Linkleri</h3>
            <button
              type="button"
              onClick={addSocialLink}
              className="rounded-xl bg-primary-100 text-primary-700 px-3 py-1.5 text-xs font-semibold hover:bg-primary-200 transition flex items-center gap-1"
            >
              <Plus size={14} /> Ekle
            </button>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {draft.socials.map((social) => (
              <div key={social.id} className="rounded-xl border border-slate-200 bg-white/70 p-4 flex items-center gap-3">
                <select
                  value={social.platform}
                  onChange={(event) =>
                    updateSocialLink(social.id, (s) => ({
                      ...s,
                      platform: event.target.value as SocialLink['platform'],
                    }))
                  }
                  className="rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary-100 bg-white"
                >
                  {platformOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                <input
                  type="text"
                  value={social.url}
                  onChange={(event) =>
                    updateSocialLink(social.id, (s) => ({ ...s, url: event.target.value }))
                  }
                  className="flex-1 rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary-100"
                  placeholder="https://..."
                />
                <button
                  type="button"
                  onClick={() => removeSocialLink(social.id)}
                  className="rounded-lg border border-red-200 bg-red-50 text-red-600 p-2 hover:bg-red-100 transition"
                  aria-label="Sil"
                >
                  <Trash2 size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Hızlı Linkler */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-slate-700">Hızlı Linkler</h3>
            <button
              type="button"
              onClick={addQuickLink}
              className="rounded-xl bg-primary-100 text-primary-700 px-3 py-1.5 text-xs font-semibold hover:bg-primary-200 transition flex items-center gap-1"
            >
              <Plus size={14} /> Ekle
            </button>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {draft.quickLinks.map((link) => (
              <div key={link.id} className="rounded-xl border border-slate-200 bg-white/70 p-4 flex items-center gap-3">
                <input
                  type="text"
                  value={link.label}
                  onChange={(event) =>
                    updateQuickLink(link.id, (l) => ({ ...l, label: event.target.value }))
                  }
                  className="flex-1 rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary-100"
                  placeholder="Etiket"
                />
                <input
                  type="text"
                  value={link.href}
                  onChange={(event) =>
                    updateQuickLink(link.id, (l) => ({ ...l, href: event.target.value }))
                  }
                  className="flex-1 rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary-100"
                  placeholder="#section veya URL"
                />
                <button
                  type="button"
                  onClick={() => removeQuickLink(link.id)}
                  className="rounded-lg border border-red-200 bg-red-50 text-red-600 p-2 hover:bg-red-100 transition"
                  aria-label="Sil"
                >
                  <Trash2 size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Kaynak Linkler */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-slate-700">Kaynaklar</h3>
            <button
              type="button"
              onClick={addResourceLink}
              className="rounded-xl bg-primary-100 text-primary-700 px-3 py-1.5 text-xs font-semibold hover:bg-primary-200 transition flex items-center gap-1"
            >
              <Plus size={14} /> Ekle
            </button>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {draft.resourceLinks.map((link) => (
              <div key={link.id} className="rounded-xl border border-slate-200 bg-white/70 p-4 flex items-center gap-3">
                <input
                  type="text"
                  value={link.label}
                  onChange={(event) =>
                    updateResourceLink(link.id, (l) => ({ ...l, label: event.target.value }))
                  }
                  className="flex-1 rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary-100"
                  placeholder="Etiket"
                />
                <input
                  type="text"
                  value={link.href}
                  onChange={(event) =>
                    updateResourceLink(link.id, (l) => ({ ...l, href: event.target.value }))
                  }
                  className="flex-1 rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary-100"
                  placeholder="#section veya URL"
                />
                <button
                  type="button"
                  onClick={() => removeResourceLink(link.id)}
                  className="rounded-lg border border-red-200 bg-red-50 text-red-600 p-2 hover:bg-red-100 transition"
                  aria-label="Sil"
                >
                  <Trash2 size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* İletişim Bilgileri */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-slate-700">İletişim Bilgileri</h3>
            <button
              type="button"
              onClick={addContactItem}
              className="rounded-xl bg-primary-100 text-primary-700 px-3 py-1.5 text-xs font-semibold hover:bg-primary-200 transition flex items-center gap-1"
            >
              <Plus size={14} /> Ekle
            </button>
          </div>
          <div className="space-y-3">
            {draft.contact.map((item) => (
              <div key={item.id} className="rounded-xl border border-slate-200 bg-white/70 p-4 flex items-center gap-3">
                <select
                  value={item.type}
                  onChange={(event) =>
                    updateContactItem(item.id, (c) => ({
                      ...c,
                      type: event.target.value as ContactItem['type'],
                    }))
                  }
                  className="rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary-100 bg-white"
                >
                  {contactTypeOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                <input
                  type="text"
                  value={item.value}
                  onChange={(event) =>
                    updateContactItem(item.id, (c) => ({ ...c, value: event.target.value }))
                  }
                  className="flex-1 rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary-100"
                  placeholder={
                    item.type === 'address'
                      ? 'Adres girin...'
                      : item.type === 'phone'
                      ? '+90 XXX XXX XX XX'
                      : 'email@example.com'
                  }
                />
                <button
                  type="button"
                  onClick={() => removeContactItem(item.id)}
                  className="rounded-lg border border-red-200 bg-red-50 text-red-600 p-2 hover:bg-red-100 transition"
                  aria-label="Sil"
                >
                  <Trash2 size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </form>
    </SectionContainer>
  );
};
