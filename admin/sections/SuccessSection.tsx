import React, { useId } from 'react';
import { SectionContainer } from '../components/SectionContainer';
import { useEditableSection } from '../hooks/useEditableSection';
import { SuccessStory } from '../../types';
import { Plus, Trash2 } from 'lucide-react';

const generateId = (prefix: string) => {
  const randomPart = typeof globalThis.crypto?.randomUUID === 'function'
    ? globalThis.crypto.randomUUID()
    : `${Date.now()}-${Math.random().toString(16).slice(2, 8)}`;
  return `${prefix}-${randomPart}`;
};

const createStory = (): SuccessStory => ({
  id: generateId('story'),
  name: 'Yeni Öğrenci',
  school: 'Okul Adı',
  score: '0',
  rank: '0',
  quote: 'Başarı hikayesi...',
});

export const SuccessSection: React.FC = () => {
  const formId = useId();
  const { draft, setDraft, save, resetToCurrent, loadDefaults, isDirty } = useEditableSection('successStories');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    save();
  };

  const addStory = () => {
    setDraft((prev) => ({ ...prev, stories: [...prev.stories, createStory()] }));
  };

  const updateStory = (id: string, updater: (story: SuccessStory) => SuccessStory) => {
    setDraft((prev) => ({
      ...prev,
      stories: prev.stories.map((story) => (story.id === id ? updater(story) : story)),
    }));
  };

  const removeStory = (id: string) => {
    setDraft((prev) => ({
      ...prev,
      stories: prev.stories.filter((story) => story.id !== id),
    }));
  };

  return (
    <SectionContainer
      title="Başarı Öyküleri"
      description="Öğrenci başarı hikayelerini ve sıralamalarını yönetin."
      actions={
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={addStory}
            className="rounded-xl bg-primary-100 text-primary-700 px-4 py-2 text-xs font-semibold hover:bg-primary-200 transition flex items-center gap-1"
          >
            <Plus size={14} /> Yeni Öykü
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
            <label className="text-sm font-semibold text-slate-700">Alt Başlık</label>
            <input
              type="text"
              value={draft.subtitle}
              onChange={(event) =>
                setDraft((prev) => ({ ...prev, subtitle: event.target.value }))
              }
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:ring-4 focus:ring-primary-100 focus:border-primary-400 transition"
            />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-slate-700">Başarı Öyküleri</h3>
          {draft.stories.map((story) => (
            <div key={story.id} className="rounded-2xl border border-slate-200 bg-white/70 p-6 space-y-4 shadow-sm">
              <div className="flex items-center justify-between">
                <h4 className="text-base font-semibold text-slate-800">{story.name}</h4>
                <button
                  type="button"
                  onClick={() => removeStory(story.id)}
                  className="rounded-xl border border-red-200 bg-red-50 text-red-600 p-2 hover:bg-red-100 transition"
                  aria-label="Öyküyü sil"
                >
                  <Trash2 size={16} />
                </button>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-600">Öğrenci Adı</label>
                  <input
                    type="text"
                    value={story.name}
                    onChange={(event) =>
                      updateStory(story.id, (item) => ({ ...item, name: event.target.value }))
                    }
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:ring-4 focus:ring-primary-100 focus:border-primary-400 transition"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-600">Okul</label>
                  <input
                    type="text"
                    value={story.school}
                    onChange={(event) =>
                      updateStory(story.id, (item) => ({ ...item, school: event.target.value }))
                    }
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:ring-4 focus:ring-primary-100 focus:border-primary-400 transition"
                  />
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-600">Puan</label>
                  <input
                    type="text"
                    value={story.score}
                    onChange={(event) =>
                      updateStory(story.id, (item) => ({ ...item, score: event.target.value }))
                    }
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:ring-4 focus:ring-primary-100 focus:border-primary-400 transition"
                    placeholder="Örn: 495"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-600">Sıralama</label>
                  <input
                    type="text"
                    value={story.rank}
                    onChange={(event) =>
                      updateStory(story.id, (item) => ({ ...item, rank: event.target.value }))
                    }
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:ring-4 focus:ring-primary-100 focus:border-primary-400 transition"
                    placeholder="Örn: Türkiye 1.si"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-600">Alıntı</label>
                <textarea
                  value={story.quote}
                  onChange={(event) =>
                    updateStory(story.id, (item) => ({ ...item, quote: event.target.value }))
                  }
                  rows={3}
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:ring-4 focus:ring-primary-100 focus:border-primary-400 transition"
                />
              </div>
            </div>
          ))}

          {draft.stories.length === 0 && (
            <p className="text-sm text-slate-500 border border-dashed border-slate-200 rounded-2xl px-6 py-10 text-center">
              Henüz başarı öyküsü bulunmuyor. "Yeni Öykü" butonunu kullanarak ekleyin.
            </p>
          )}
        </div>
      </form>
    </SectionContainer>
  );
};
