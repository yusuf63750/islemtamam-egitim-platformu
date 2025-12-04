import React, { useId } from 'react';
import { SectionContainer } from '../components/SectionContainer';
import { useEditableSection } from '../hooks/useEditableSection';
import { TeacherHighlightDetail, TeacherStat, TeacherIconKey } from '../../types';
import { Plus, Trash2 } from 'lucide-react';
import { StringListEditor } from '../components/StringListEditor';
import { FileUploader } from '../components/FileUploader';

const generateId = (prefix: string) => {
  const randomPart = typeof globalThis.crypto?.randomUUID === 'function'
    ? globalThis.crypto.randomUUID()
    : `${Date.now()}-${Math.random().toString(16).slice(2, 8)}`;
  return `${prefix}-${randomPart}`;
};

const createDetail = (): TeacherHighlightDetail => ({
  id: generateId('detail'),
  icon: 'award',
  title: 'Yeni Başlık',
  description: 'Açıklama metnini buraya girin.',
});

const createStat = (): TeacherStat => ({
  id: generateId('stat'),
  value: '0',
  label: 'İstatistik başlığı',
});

const iconOptions: { value: TeacherIconKey; label: string }[] = [
  { value: 'award', label: 'Ödül' },
  { value: 'graduationCap', label: 'Mezuniyet' },
];

export const TeacherSection: React.FC = () => {
  const formId = useId();
  const { draft, setDraft, save, resetToCurrent, loadDefaults, isDirty } = useEditableSection('teacherHighlight');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    save();
  };

  const addDetail = () => {
    setDraft((prev) => ({ ...prev, details: [...prev.details, createDetail()] }));
  };

  const updateDetail = (id: string, updater: (detail: TeacherHighlightDetail) => TeacherHighlightDetail) => {
    setDraft((prev) => ({
      ...prev,
      details: prev.details.map((detail) => (detail.id === id ? updater(detail) : detail)),
    }));
  };

  const removeDetail = (id: string) => {
    setDraft((prev) => ({
      ...prev,
      details: prev.details.filter((detail) => detail.id !== id),
    }));
  };

  const addStat = () => {
    setDraft((prev) => ({ ...prev, stats: [...prev.stats, createStat()] }));
  };

  const updateStat = (id: string, updater: (stat: TeacherStat) => TeacherStat) => {
    setDraft((prev) => ({
      ...prev,
      stats: prev.stats.map((stat) => (stat.id === id ? updater(stat) : stat)),
    }));
  };

  const removeStat = (id: string) => {
    setDraft((prev) => ({
      ...prev,
      stats: prev.stats.filter((stat) => stat.id !== id),
    }));
  };

  return (
    <SectionContainer
      title="Öğretmen Kadrosu"
      description="Kurucu bilgileri, istatistikler ve ekip detaylarını düzenleyin."
      actions={
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={addDetail}
            className="rounded-xl bg-primary-100 text-primary-700 px-4 py-2 text-xs font-semibold hover:bg-primary-200 transition"
          >
            <Plus size={14} /> Yeni Detay
          </button>
          <button
            type="button"
            onClick={addStat}
            className="rounded-xl bg-primary-100 text-primary-700 px-4 py-2 text-xs font-semibold hover:bg-primary-200 transition"
          >
            <Plus size={14} /> Yeni İstatistik
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
            <label className="text-sm font-semibold text-slate-700">Vurgulu Başlık</label>
            <input
              type="text"
              value={draft.highlight}
              onChange={(event) =>
                setDraft((prev) => ({ ...prev, highlight: event.target.value }))
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

        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-slate-700">Detay Kartları</h3>
          {draft.details.map((detail) => (
            <div key={detail.id} className="rounded-2xl border border-slate-200 bg-white/70 p-6 space-y-4 shadow-sm">
              <div className="flex items-center justify-between">
                <h4 className="text-base font-semibold text-slate-800">{detail.title}</h4>
                <button
                  type="button"
                  onClick={() => removeDetail(detail.id)}
                  className="rounded-xl border border-red-200 bg-red-50 text-red-600 p-2 hover:bg-red-100 transition"
                  aria-label="Detayı sil"
                >
                  <Trash2 size={16} />
                </button>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-600">Başlık</label>
                  <input
                    type="text"
                    value={detail.title}
                    onChange={(event) =>
                      updateDetail(detail.id, (item) => ({
                        ...item,
                        title: event.target.value,
                      }))
                    }
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:ring-4 focus:ring-primary-100 focus:border-primary-400 transition"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-600">İkon</label>
                  <select
                    value={detail.icon}
                    onChange={(event) =>
                      updateDetail(detail.id, (item) => ({
                        ...item,
                        icon: event.target.value as TeacherIconKey,
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
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-600">Açıklama</label>
                <textarea
                  value={detail.description}
                  onChange={(event) =>
                    updateDetail(detail.id, (item) => ({
                      ...item,
                      description: event.target.value,
                    }))
                  }
                  rows={3}
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:ring-4 focus:ring-primary-100 focus:border-primary-400 transition"
                />
              </div>
            </div>
          ))}

          {draft.details.length === 0 && (
            <p className="text-sm text-slate-500 border border-dashed border-slate-200 rounded-2xl px-6 py-10 text-center">
              Henüz detay kartı bulunmuyor. "Yeni Detay" butonunu kullanarak ekleyin.
            </p>
          )}
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-slate-700">İstatistikler</h3>
          <div className="grid gap-4 md:grid-cols-2">
            {draft.stats.map((stat) => (
              <div key={stat.id} className="rounded-2xl border border-slate-200 bg-white/70 p-5 space-y-3 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500">İstatistik</span>
                  <button
                    type="button"
                    onClick={() => removeStat(stat.id)}
                    className="rounded-lg border border-red-200 bg-red-50 text-red-600 p-1.5 hover:bg-red-100 transition"
                    aria-label="İstatistiği sil"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-600">Değer</label>
                  <input
                    type="text"
                    value={stat.value}
                    onChange={(event) =>
                      updateStat(stat.id, (item) => ({ ...item, value: event.target.value }))
                    }
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:ring-4 focus:ring-primary-100 focus:border-primary-400 transition"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-600">Etiket</label>
                  <input
                    type="text"
                    value={stat.label}
                    onChange={(event) =>
                      updateStat(stat.id, (item) => ({ ...item, label: event.target.value }))
                    }
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:ring-4 focus:ring-primary-100 focus:border-primary-400 transition"
                  />
                </div>
              </div>
            ))}
          </div>

          {draft.stats.length === 0 && (
            <p className="text-sm text-slate-500 border border-dashed border-slate-200 rounded-2xl px-6 py-10 text-center">
              Henüz istatistik eklenmemiş. "Yeni İstatistik" butonunu kullanarak ekleyin.
            </p>
          )}
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-slate-700">Kurucu Bilgileri</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-600">Kurucu Adı</label>
              <input
                type="text"
                value={draft.founderName}
                onChange={(event) =>
                  setDraft((prev) => ({ ...prev, founderName: event.target.value }))
                }
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:ring-4 focus:ring-primary-100 focus:border-primary-400 transition"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-600">Ünvan</label>
              <input
                type="text"
                value={draft.founderTitle}
                onChange={(event) =>
                  setDraft((prev) => ({ ...prev, founderTitle: event.target.value }))
                }
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:ring-4 focus:ring-primary-100 focus:border-primary-400 transition"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-600">Alıntı</label>
            <textarea
              value={draft.founderQuote}
              onChange={(event) =>
                setDraft((prev) => ({ ...prev, founderQuote: event.target.value }))
              }
              rows={2}
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:ring-4 focus:ring-primary-100 focus:border-primary-400 transition"
            />
          </div>
          
          <FileUploader
            label="Kurucu Görseli"
            value={draft.founderImageUrl}
            onChange={(url) => setDraft((prev) => ({ ...prev, founderImageUrl: url }))}
            accept="image"
            placeholder="https://... veya dosya yükleyin"
            previewHeight="200px"
          />
          
          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-600">Rozet Metni</label>
            <input
              type="text"
              value={draft.founderBadgeText}
              onChange={(event) =>
                setDraft((prev) => ({ ...prev, founderBadgeText: event.target.value }))
              }
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:ring-4 focus:ring-primary-100 focus:border-primary-400 transition"
            />
          </div>

          <StringListEditor
            label="Kurucu Hakkında Paragraflar"
            values={draft.founderBio}
            onChange={(next) =>
              setDraft((prev) => ({ ...prev, founderBio: next }))
            }
            addLabel="Paragraf ekle"
            placeholder="Kurucu hakkında bilgi girin"
          />
        </div>
      </form>
    </SectionContainer>
  );
};
