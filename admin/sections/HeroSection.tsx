import React, { useId } from 'react';
import { SectionContainer } from '../components/SectionContainer';
import { useEditableSection } from '../hooks/useEditableSection';
import { StringListEditor } from '../components/StringListEditor';

export const HeroSection: React.FC = () => {
  const formId = useId();
  const { draft, setDraft, save, resetToCurrent, loadDefaults, isDirty } = useEditableSection('hero');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    save();
  };

  return (
    <SectionContainer
      title="Hero Bölümü"
      description="Başlık, açıklama, istatistikler ve tanıtım videosu ayarlarını buradan yönetin."
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
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-3">
            <label className="text-sm font-semibold text-slate-700">Üst Rozet Metni</label>
            <input
              type="text"
              value={draft.badgeText}
              onChange={(event) =>
                setDraft((prev) => ({ ...prev, badgeText: event.target.value }))
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
          <div className="space-y-3">
            <label className="text-sm font-semibold text-slate-700">Vurgulu Kelime</label>
            <input
              type="text"
              value={draft.highlight}
              onChange={(event) =>
                setDraft((prev) => ({ ...prev, highlight: event.target.value }))
              }
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:ring-4 focus:ring-primary-100 focus:border-primary-400 transition"
            />
          </div>
          <div className="space-y-3 md:col-span-2">
            <label className="text-sm font-semibold text-slate-700">Açıklama</label>
            <textarea
              value={draft.description}
              onChange={(event) =>
                setDraft((prev) => ({ ...prev, description: event.target.value }))
              }
              rows={4}
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:ring-4 focus:ring-primary-100 focus:border-primary-400 transition"
            />
          </div>
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
              placeholder="#paketler"
            />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-3">
            <label className="text-sm font-semibold text-slate-700">Tanıtım Butonu Metni</label>
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
            <label className="text-sm font-semibold text-slate-700">Tanıtım Videosu URL</label>
            <input
              type="text"
              value={draft.videoUrl}
              onChange={(event) =>
                setDraft((prev) => ({ ...prev, videoUrl: event.target.value }))
              }
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:ring-4 focus:ring-primary-100 focus:border-primary-400 transition"
              placeholder="https://www.youtube.com/embed/..."
            />
          </div>
        </div>

        <StringListEditor
          label="Hero İstatistikleri"
          values={draft.stats}
          onChange={(next) =>
            setDraft((prev) => ({ ...prev, stats: next }))
          }
          addLabel="Yeni istatistik"
          placeholder="Örn. %95 Başarı Oranı"
        />

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-3">
            <label className="text-sm font-semibold text-slate-700">Hero Görseli URL</label>
            <input
              type="text"
              value={draft.heroImageUrl}
              onChange={(event) =>
                setDraft((prev) => ({ ...prev, heroImageUrl: event.target.value }))
              }
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:ring-4 focus:ring-primary-100 focus:border-primary-400 transition"
            />
          </div>
          <div className="space-y-3">
            <label className="text-sm font-semibold text-slate-700">Hero Görseli Alt Metni</label>
            <input
              type="text"
              value={draft.heroImageAlt}
              onChange={(event) =>
                setDraft((prev) => ({ ...prev, heroImageAlt: event.target.value }))
              }
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:ring-4 focus:ring-primary-100 focus:border-primary-400 transition"
            />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-slate-700">Rozet Bilgileri</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-600">Başlık</label>
              <input
                type="text"
                value={draft.badgeInfo.badgeTitle}
                onChange={(event) =>
                  setDraft((prev) => ({
                    ...prev,
                    badgeInfo: { ...prev.badgeInfo, badgeTitle: event.target.value },
                  }))
                }
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:ring-4 focus:ring-primary-100 focus:border-primary-400 transition"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-600">Alt Başlık</label>
              <input
                type="text"
                value={draft.badgeInfo.badgeSubtitle}
                onChange={(event) =>
                  setDraft((prev) => ({
                    ...prev,
                    badgeInfo: { ...prev.badgeInfo, badgeSubtitle: event.target.value },
                  }))
                }
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:ring-4 focus:ring-primary-100 focus:border-primary-400 transition"
              />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-600">Öğrenci Sayısı</label>
              <input
                type="text"
                value={draft.badgeInfo.studentCount}
                onChange={(event) =>
                  setDraft((prev) => ({
                    ...prev,
                    badgeInfo: { ...prev.badgeInfo, studentCount: event.target.value },
                  }))
                }
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:ring-4 focus:ring-primary-100 focus:border-primary-400 transition"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-600">Öğrenci Metni</label>
              <input
                type="text"
                value={draft.badgeInfo.studentSubtext}
                onChange={(event) =>
                  setDraft((prev) => ({
                    ...prev,
                    badgeInfo: { ...prev.badgeInfo, studentSubtext: event.target.value },
                  }))
                }
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:ring-4 focus:ring-primary-100 focus:border-primary-400 transition"
              />
            </div>
          </div>

          <StringListEditor
            label="Avatar Görselleri"
            values={draft.badgeInfo.avatarUrls}
            onChange={(next) =>
              setDraft((prev) => ({
                ...prev,
                badgeInfo: { ...prev.badgeInfo, avatarUrls: next },
              }))
            }
            addLabel="Yeni görsel"
            placeholder="https://..."
          />
        </div>
      </form>
    </SectionContainer>
  );
};
