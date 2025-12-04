import React, { useId } from 'react';
import { SectionContainer } from '../components/SectionContainer';
import { useEditableSection } from '../hooks/useEditableSection';
import { PackagesContent, PackageOption } from '../../types';
import { Plus, Trash2 } from 'lucide-react';
import { StringListEditor } from '../components/StringListEditor';

const createPackageOption = (): PackageOption => ({
  id: `package-${crypto.randomUUID ? crypto.randomUUID() : Date.now()}`,
  name: 'Yeni Paket',
  description: 'Paket açıklaması',
  price: '₺0',
  period: '/aylık',
  features: [],
  highlight: false,
  badgeText: '',
  buttonLabel: 'Hemen Başvur',
  buttonHref: '#',
});

export const PackagesSection: React.FC = () => {
  const formId = useId();
  const { draft, setDraft, save, resetToCurrent, loadDefaults, isDirty } = useEditableSection('packages');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    save();
  };

  const updatePackage = (id: string, updater: (option: PackageOption) => PackageOption) => {
    setDraft((prev) => ({
      ...prev,
      options: prev.options.map((option) => (option.id === id ? updater(option) : option)),
    }));
  };

  const addPackage = () => {
    setDraft((prev) => ({
      ...prev,
      options: [...prev.options, createPackageOption()],
    }));
  };

  const removePackage = (id: string) => {
    setDraft((prev) => ({
      ...prev,
      options: prev.options.filter((option) => option.id !== id),
    }));
  };

  const toggleHighlight = (id: string, value: boolean) => {
    updatePackage(id, (option) => ({ ...option, highlight: value }));
  };

  const updateFeatures = (id: string, features: string[]) => {
    updatePackage(id, (option) => ({ ...option, features }));
  };

  return (
    <SectionContainer
      title="Eğitim Paketleri"
      description="Paket başlıkları, fiyatları ve özellik listelerini yapılandırın."
      actions={
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={addPackage}
            className="rounded-xl bg-primary-100 text-primary-700 px-4 py-2 text-xs font-semibold hover:bg-primary-200 transition"
          >
            <Plus size={14} /> Yeni Paket
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
          {draft.options.map((option, index) => (
            <div key={option.id} className="rounded-2xl border border-slate-200 bg-white/70 p-6 space-y-5 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-wide font-semibold text-slate-400">Paket {index + 1}</p>
                  <h3 className="text-base font-semibold text-slate-800">{option.name}</h3>
                </div>
                <button
                  type="button"
                  onClick={() => removePackage(option.id)}
                  className="rounded-xl border border-red-200 bg-red-50 text-red-600 p-2 hover:bg-red-100 transition"
                  aria-label="Paketi sil"
                >
                  <Trash2 size={16} />
                </button>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-600">Paket Adı</label>
                  <input
                    type="text"
                    value={option.name}
                    onChange={(event) =>
                      updatePackage(option.id, (pkg) => ({
                        ...pkg,
                        name: event.target.value,
                      }))
                    }
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:ring-4 focus:ring-primary-100 focus:border-primary-400 transition"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-600">Fiyat</label>
                  <input
                    type="text"
                    value={option.price}
                    onChange={(event) =>
                      updatePackage(option.id, (pkg) => ({
                        ...pkg,
                        price: event.target.value,
                      }))
                    }
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:ring-4 focus:ring-primary-100 focus:border-primary-400 transition"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-600">Dönem</label>
                  <input
                    type="text"
                    value={option.period}
                    onChange={(event) =>
                      updatePackage(option.id, (pkg) => ({
                        ...pkg,
                        period: event.target.value,
                      }))
                    }
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:ring-4 focus:ring-primary-100 focus:border-primary-400 transition"
                    placeholder="/aylık"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-600">Buton Metni</label>
                  <input
                    type="text"
                    value={option.buttonLabel}
                    onChange={(event) =>
                      updatePackage(option.id, (pkg) => ({
                        ...pkg,
                        buttonLabel: event.target.value,
                      }))
                    }
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:ring-4 focus:ring-primary-100 focus:border-primary-400 transition"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-600">Buton Hedefi</label>
                  <input
                    type="text"
                    value={option.buttonHref}
                    onChange={(event) =>
                      updatePackage(option.id, (pkg) => ({
                        ...pkg,
                        buttonHref: event.target.value,
                      }))
                    }
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:ring-4 focus:ring-primary-100 focus:border-primary-400 transition"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-600">Paket Açıklaması</label>
                <textarea
                  value={option.description}
                  onChange={(event) =>
                    updatePackage(option.id, (pkg) => ({
                      ...pkg,
                      description: event.target.value,
                    }))
                  }
                  rows={3}
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:ring-4 focus:ring-primary-100 focus:border-primary-400 transition"
                />
              </div>

              <div className="flex items-center gap-3">
                <input
                  id={`highlight-${option.id}`}
                  type="checkbox"
                  checked={option.highlight}
                  onChange={(event) => toggleHighlight(option.id, event.target.checked)}
                  className="h-4 w-4 rounded border-slate-300 text-primary-600 focus:ring-primary-500"
                />
                <label htmlFor={`highlight-${option.id}`} className="text-sm text-slate-600">
                  Öne çıkan paket olarak işaretle
                </label>
              </div>

              {option.highlight && (
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-600">Rozet Metni</label>
                  <input
                    type="text"
                    value={option.badgeText ?? ''}
                    onChange={(event) =>
                      updatePackage(option.id, (pkg) => ({
                        ...pkg,
                        badgeText: event.target.value,
                      }))
                    }
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:ring-4 focus:ring-primary-100 focus:border-primary-400 transition"
                    placeholder="EN ÇOK TERCİH EDİLEN"
                  />
                </div>
              )}

              <StringListEditor
                label="Özellikler"
                values={option.features}
                onChange={(next) => updateFeatures(option.id, next)}
                addLabel="Özellik ekle"
                placeholder="Örneğin Haftada 12 Saat Canlı Ders"
              />
            </div>
          ))}

          {draft.options.length === 0 && (
            <p className="text-sm text-slate-500 border border-dashed border-slate-200 rounded-2xl px-6 py-10 text-center">
              Henüz paket eklenmedi. "Yeni Paket" butonunu kullanarak ekleyin.
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700">Alt Bilgi Notu</label>
          <textarea
            value={draft.disclaimer}
            onChange={(event) =>
              setDraft((prev) => ({ ...prev, disclaimer: event.target.value }))
            }
            rows={2}
            className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:ring-4 focus:ring-primary-100 focus:border-primary-400 transition"
          />
        </div>
      </form>
    </SectionContainer>
  );
};
