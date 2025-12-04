import React, { useId } from 'react';
import { SectionContainer } from '../components/SectionContainer';
import { useEditableSection } from '../hooks/useEditableSection';
import { FeatureItem, FeatureIconKey } from '../../types';
import { Plus, Trash2 } from 'lucide-react';

const iconOptions: { value: FeatureIconKey; label: string }[] = [
  { value: 'users', label: 'Takım (Users)' },
  { value: 'video', label: 'Video (Video)' },
  { value: 'bookOpen', label: 'Kaynaklar (BookOpen)' },
  { value: 'target', label: 'Hedef (Target)' },
  { value: 'messageCircle', label: 'İletişim (MessageCircle)' },
  { value: 'clock', label: 'Zaman (Clock)' },
];

const createFeature = (): FeatureItem => ({
  id: `feature-${crypto.randomUUID ? crypto.randomUUID() : Date.now()}`,
  icon: 'users',
  color: 'bg-primary-500',
  title: 'Yeni Özellik',
  description: 'Özellik açıklamasını buraya girin.',
});

export const FeaturesSection: React.FC = () => {
  const formId = useId();
  const { draft, setDraft, save, resetToCurrent, loadDefaults, isDirty } = useEditableSection('features');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    save();
  };

  const updateFeature = (id: string, updater: (item: FeatureItem) => FeatureItem) => {
    setDraft((prev) => ({
      ...prev,
      items: prev.items.map((item) => (item.id === id ? updater(item) : item)),
    }));
  };

  const removeFeature = (id: string) => {
    setDraft((prev) => ({
      ...prev,
      items: prev.items.filter((item) => item.id !== id),
    }));
  };

  const addFeature = () => {
    setDraft((prev) => ({
      ...prev,
      items: [...prev.items, createFeature()],
    }));
  };

  return (
    <SectionContainer
      title="Öne Çıkanlar"
      description="Öne çıkan özellik kartlarını ve açıklamalarını düzenleyin."
      actions={
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={addFeature}
            className="rounded-xl bg-primary-100 text-primary-700 px-4 py-2 text-xs font-semibold hover:bg-primary-200 transition"
          >
            <Plus size={14} /> Yeni Özellik
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
            <label className="text-sm font-semibold text-slate-700">Üst Başlık</label>
            <input
              type="text"
              value={draft.eyebrow}
              onChange={(event) =>
                setDraft((prev) => ({ ...prev, eyebrow: event.target.value }))
              }
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:ring-4 focus:ring-primary-100 focus:border-primary-400 transition"
            />
          </div>
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

        <div className="space-y-6">
          {draft.items.map((feature, index) => (
            <div key={feature.id} className="rounded-2xl border border-slate-200 bg-white/70 p-6 space-y-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-wide font-semibold text-slate-400">Özellik {index + 1}</p>
                  <h3 className="text-base font-semibold text-slate-800">{feature.title}</h3>
                </div>
                <button
                  type="button"
                  onClick={() => removeFeature(feature.id)}
                  className="rounded-xl border border-red-200 bg-red-50 text-red-600 p-2 hover:bg-red-100 transition"
                  aria-label="Özelliği sil"
                >
                  <Trash2 size={16} />
                </button>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-600">Başlık</label>
                  <input
                    type="text"
                    value={feature.title}
                    onChange={(event) =>
                      updateFeature(feature.id, (item) => ({
                        ...item,
                        title: event.target.value,
                      }))
                    }
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:ring-4 focus:ring-primary-100 focus:border-primary-400 transition"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-600">Renk Sınıfı</label>
                  <input
                    type="text"
                    value={feature.color}
                    onChange={(event) =>
                      updateFeature(feature.id, (item) => ({
                        ...item,
                        color: event.target.value,
                      }))
                    }
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:ring-4 focus:ring-primary-100 focus:border-primary-400 transition"
                    placeholder="bg-blue-500"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-600">Açıklama</label>
                <textarea
                  value={feature.description}
                  onChange={(event) =>
                    updateFeature(feature.id, (item) => ({
                      ...item,
                      description: event.target.value,
                    }))
                  }
                  rows={3}
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:ring-4 focus:ring-primary-100 focus:border-primary-400 transition"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-600">İkon</label>
                <select
                  value={feature.icon}
                  onChange={(event) =>
                    updateFeature(feature.id, (item) => ({
                      ...item,
                      icon: event.target.value as FeatureIconKey,
                    }))
                  }
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:ring-4 focus:ring-primary-100 focus:border-primary-400 transition bg-white"
                >
                  {iconOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          ))}

          {draft.items.length === 0 && (
            <p className="text-sm text-slate-500 border border-dashed border-slate-200 rounded-2xl px-6 py-10 text-center">
              Henüz bir özellik eklenmedi. "Yeni Özellik" butonunu kullanarak ekleme yapabilirsiniz.
            </p>
          )}
        </div>
      </form>
    </SectionContainer>
  );
};
