import React, { useId } from 'react';
import { SectionContainer } from '../components/SectionContainer';
import { useEditableSection } from '../hooks/useEditableSection';
import { NavbarLink } from '../../types';
import { Plus, Trash2 } from 'lucide-react';
import { FileUploader } from '../components/FileUploader';

const generateId = (prefix: string) => {
  const randomPart = typeof globalThis.crypto?.randomUUID === 'function'
    ? globalThis.crypto.randomUUID()
    : `${Date.now()}-${Math.random().toString(16).slice(2, 8)}`;
  return `${prefix}-${randomPart}`;
};

const createLink = (): NavbarLink => ({
  id: generateId('link'),
  label: 'Yeni Link',
  href: '#',
});

export const NavbarSection: React.FC = () => {
  const formId = useId();
  const { draft, setDraft, save, resetToCurrent, loadDefaults, isDirty } = useEditableSection('navbar');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    save();
  };

  const addLink = () => {
    setDraft((prev) => ({ ...prev, links: [...prev.links, createLink()] }));
  };

  const updateLink = (id: string, updater: (link: NavbarLink) => NavbarLink) => {
    setDraft((prev) => ({
      ...prev,
      links: prev.links.map((link) => (link.id === id ? updater(link) : link)),
    }));
  };

  const removeLink = (id: string) => {
    setDraft((prev) => ({
      ...prev,
      links: prev.links.filter((link) => link.id !== id),
    }));
  };

  const moveLink = (index: number, direction: 'up' | 'down') => {
    setDraft((prev) => {
      const links = [...prev.links];
      const newIndex = direction === 'up' ? index - 1 : index + 1;
      if (newIndex < 0 || newIndex >= links.length) return prev;
      [links[index], links[newIndex]] = [links[newIndex], links[index]];
      return { ...prev, links };
    });
  };

  return (
    <SectionContainer
      title="Navigation"
      description="Menü linkleri ve üst bilgilendirme alanını düzenleyin."
      actions={
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={addLink}
            className="rounded-xl bg-primary-100 text-primary-700 px-4 py-2 text-xs font-semibold hover:bg-primary-200 transition flex items-center gap-1"
          >
            <Plus size={14} /> Yeni Link
          </button>
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
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-3">
            <label className="text-sm font-semibold text-slate-700">Logo Metni</label>
            <input
              type="text"
              value={draft.logoText}
              onChange={(event) =>
                setDraft((prev) => ({ ...prev, logoText: event.target.value }))
              }
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:ring-4 focus:ring-primary-100 focus:border-primary-400 transition"
            />
          </div>
          <div className="space-y-3">
            <label className="text-sm font-semibold text-slate-700">Slogan</label>
            <input
              type="text"
              value={draft.tagline}
              onChange={(event) =>
                setDraft((prev) => ({ ...prev, tagline: event.target.value }))
              }
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:ring-4 focus:ring-primary-100 focus:border-primary-400 transition"
            />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-3">
            <label className="text-sm font-semibold text-slate-700">CTA Butonu Metni</label>
            <input
              type="text"
              value={draft.ctaLabel}
              onChange={(event) =>
                setDraft((prev) => ({ ...prev, ctaLabel: event.target.value }))
              }
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:ring-4 focus:ring-primary-100 focus:border-primary-400 transition"
            />
          </div>
          <div className="space-y-3">
            <label className="text-sm font-semibold text-slate-700">CTA Butonu Hedefi</label>
            <input
              type="text"
              value={draft.ctaHref}
              onChange={(event) =>
                setDraft((prev) => ({ ...prev, ctaHref: event.target.value }))
              }
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:ring-4 focus:ring-primary-100 focus:border-primary-400 transition"
              placeholder="https://..."
            />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-slate-700">Menü Linkleri</h3>
          {draft.links.map((link, index) => (
            <div key={link.id} className="rounded-2xl border border-slate-200 bg-white/70 p-5 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex flex-col gap-0.5">
                  <button
                    type="button"
                    onClick={() => moveLink(index, 'up')}
                    disabled={index === 0}
                    className="text-slate-400 hover:text-slate-600 disabled:opacity-30 disabled:cursor-not-allowed p-0.5"
                    aria-label="Yukarı taşı"
                  >
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                      <path d="M6 0L12 8H0L6 0Z" fill="currentColor" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    onClick={() => moveLink(index, 'down')}
                    disabled={index === draft.links.length - 1}
                    className="text-slate-400 hover:text-slate-600 disabled:opacity-30 disabled:cursor-not-allowed p-0.5"
                    aria-label="Aşağı taşı"
                  >
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                      <path d="M6 8L0 0H12L6 8Z" fill="currentColor" />
                    </svg>
                  </button>
                </div>
                <span className="text-xs text-slate-400 font-medium">#{index + 1}</span>
                <span className="font-semibold text-slate-800 flex-1">{link.label}</span>
                <button
                  type="button"
                  onClick={() => removeLink(link.id)}
                  className="rounded-xl border border-red-200 bg-red-50 text-red-600 p-2 hover:bg-red-100 transition"
                  aria-label="Linki sil"
                >
                  <Trash2 size={16} />
                </button>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-600">Etiket</label>
                  <input
                    type="text"
                    value={link.label}
                    onChange={(event) =>
                      updateLink(link.id, (l) => ({ ...l, label: event.target.value }))
                    }
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:ring-4 focus:ring-primary-100 focus:border-primary-400 transition"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-600">Hedef</label>
                  <input
                    type="text"
                    value={link.href}
                    onChange={(event) =>
                      updateLink(link.id, (l) => ({ ...l, href: event.target.value }))
                    }
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:ring-4 focus:ring-primary-100 focus:border-primary-400 transition"
                    placeholder="/sayfa veya https://..."
                  />
                  <p className="text-[10px] text-slate-400 mt-1">
                    Site içi sayfalar için "/" ile başlayın (örn: /paketler). Dış linkler için https:// kullanın.
                  </p>
                </div>
              </div>
            </div>
          ))}

          {draft.links.length === 0 && (
            <p className="text-sm text-slate-500 border border-dashed border-slate-200 rounded-2xl px-6 py-10 text-center">
              Henüz menü linki bulunmuyor. "Yeni Link" butonunu kullanarak ekleyin.
            </p>
          )}
        </div>
      </form>
    </SectionContainer>
  );
};
