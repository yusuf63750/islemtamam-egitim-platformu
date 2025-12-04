import React, { useId } from 'react';
import { SectionContainer } from '../components/SectionContainer';
import { useEditableSection } from '../hooks/useEditableSection';

export const CtaSection: React.FC = () => {
  const formId = useId();
  const { draft, setDraft, save, resetToCurrent, loadDefaults, isDirty } = useEditableSection('cta');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    save();
  };

  return (
    <SectionContainer
      title="CTA Bölümü"
      description="Ana sayfa çağrı alanı metinlerini ve buton bağlantılarını düzenleyin."
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
        <div className="space-y-3">
          <label className="text-sm font-semibold text-slate-700">Başlık</label>
          <input
            type="text"
            value={draft.title}
            onChange={(event) =>
              setDraft((prev) => ({ ...prev, title: event.target.value }))
            }
            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:ring-4 focus:ring-primary-100 focus:border-primary-400 transition"
          />
        </div>

        <div className="space-y-3">
          <label className="text-sm font-semibold text-slate-700">Açıklama</label>
          <textarea
            value={draft.description}
            onChange={(event) =>
              setDraft((prev) => ({ ...prev, description: event.target.value }))
            }
            rows={3}
            className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:ring-4 focus:ring-primary-100 focus:border-primary-400 transition"
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-3">
            <label className="text-sm font-semibold text-slate-700">Birincil Buton Metni</label>
            <input
              type="text"
              value={draft.primaryButtonText}
              onChange={(event) =>
                setDraft((prev) => ({ ...prev, primaryButtonText: event.target.value }))
              }
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:ring-4 focus:ring-primary-100 focus:border-primary-400 transition"
            />
          </div>
          <div className="space-y-3">
            <label className="text-sm font-semibold text-slate-700">Birincil Buton Hedefi</label>
            <input
              type="text"
              value={draft.primaryButtonHref}
              onChange={(event) =>
                setDraft((prev) => ({ ...prev, primaryButtonHref: event.target.value }))
              }
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:ring-4 focus:ring-primary-100 focus:border-primary-400 transition"
              placeholder="https://..."
            />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-3">
            <label className="text-sm font-semibold text-slate-700">İkincil Buton Metni</label>
            <input
              type="text"
              value={draft.secondaryButtonText}
              onChange={(event) =>
                setDraft((prev) => ({ ...prev, secondaryButtonText: event.target.value }))
              }
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:ring-4 focus:ring-primary-100 focus:border-primary-400 transition"
            />
          </div>
          <div className="space-y-3">
            <label className="text-sm font-semibold text-slate-700">İkincil Buton Hedefi</label>
            <input
              type="text"
              value={draft.secondaryButtonHref}
              onChange={(event) =>
                setDraft((prev) => ({ ...prev, secondaryButtonHref: event.target.value }))
              }
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:ring-4 focus:ring-primary-100 focus:border-primary-400 transition"
              placeholder="https://..."
            />
          </div>
        </div>

        <div className="space-y-3">
          <label className="text-sm font-semibold text-slate-700">Arka Plan Deseni URL (opsiyonel)</label>
          <input
            type="text"
            value={draft.backgroundPatternUrl}
            onChange={(event) =>
              setDraft((prev) => ({ ...prev, backgroundPatternUrl: event.target.value }))
            }
            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:ring-4 focus:ring-primary-100 focus:border-primary-400 transition"
            placeholder="https://..."
          />
        </div>
      </form>
    </SectionContainer>
  );
};
