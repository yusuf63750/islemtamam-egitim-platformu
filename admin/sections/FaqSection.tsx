import React, { useId } from 'react';
import { SectionContainer } from '../components/SectionContainer';
import { useEditableSection } from '../hooks/useEditableSection';
import { FAQItem } from '../../types';
import { Plus, Trash2, GripVertical } from 'lucide-react';

const generateId = (prefix: string) => {
  const randomPart = typeof globalThis.crypto?.randomUUID === 'function'
    ? globalThis.crypto.randomUUID()
    : `${Date.now()}-${Math.random().toString(16).slice(2, 8)}`;
  return `${prefix}-${randomPart}`;
};

const createFAQItem = (): FAQItem => ({
  id: generateId('faq'),
  question: 'Yeni Soru',
  answer: 'Cevap metni...',
});

export const FaqSection: React.FC = () => {
  const formId = useId();
  const { draft, setDraft, save, resetToCurrent, loadDefaults, isDirty } = useEditableSection('faq');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    save();
  };

  const addItem = () => {
    setDraft((prev) => ({ ...prev, items: [...prev.items, createFAQItem()] }));
  };

  const updateItem = (id: string, updater: (item: FAQItem) => FAQItem) => {
    setDraft((prev) => ({
      ...prev,
      items: prev.items.map((item) => (item.id === id ? updater(item) : item)),
    }));
  };

  const removeItem = (id: string) => {
    setDraft((prev) => ({
      ...prev,
      items: prev.items.filter((item) => item.id !== id),
    }));
  };

  const moveItem = (index: number, direction: 'up' | 'down') => {
    setDraft((prev) => {
      const items = [...prev.items];
      const newIndex = direction === 'up' ? index - 1 : index + 1;
      if (newIndex < 0 || newIndex >= items.length) return prev;
      [items[index], items[newIndex]] = [items[newIndex], items[index]];
      return { ...prev, items };
    });
  };

  return (
    <SectionContainer
      title="Sıkça Sorulan Sorular"
      description="SSS listesini düzenleyin ve yeni sorular ekleyin."
      actions={
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={addItem}
            className="rounded-xl bg-primary-100 text-primary-700 px-4 py-2 text-xs font-semibold hover:bg-primary-200 transition flex items-center gap-1"
          >
            <Plus size={14} /> Yeni Soru
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
        <div className="space-y-3">
          <label className="text-sm font-semibold text-slate-700">Bölüm Başlığı</label>
          <input
            type="text"
            value={draft.title}
            onChange={(event) =>
              setDraft((prev) => ({ ...prev, title: event.target.value }))
            }
            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:ring-4 focus:ring-primary-100 focus:border-primary-400 transition"
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-slate-700">Sorular ve Cevaplar</h3>
          {draft.items.map((item, index) => (
            <div key={item.id} className="rounded-2xl border border-slate-200 bg-white/70 p-6 space-y-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex flex-col gap-0.5">
                    <button
                      type="button"
                      onClick={() => moveItem(index, 'up')}
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
                      onClick={() => moveItem(index, 'down')}
                      disabled={index === draft.items.length - 1}
                      className="text-slate-400 hover:text-slate-600 disabled:opacity-30 disabled:cursor-not-allowed p-0.5"
                      aria-label="Aşağı taşı"
                    >
                      <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                        <path d="M6 8L0 0H12L6 8Z" fill="currentColor" />
                      </svg>
                    </button>
                  </div>
                  <span className="text-xs text-slate-400 font-medium">#{index + 1}</span>
                  <h4 className="text-base font-semibold text-slate-800 truncate max-w-xs">{item.question}</h4>
                </div>
                <button
                  type="button"
                  onClick={() => removeItem(item.id)}
                  className="rounded-xl border border-red-200 bg-red-50 text-red-600 p-2 hover:bg-red-100 transition"
                  aria-label="Soruyu sil"
                >
                  <Trash2 size={16} />
                </button>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-600">Soru</label>
                <input
                  type="text"
                  value={item.question}
                  onChange={(event) =>
                    updateItem(item.id, (i) => ({ ...i, question: event.target.value }))
                  }
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:ring-4 focus:ring-primary-100 focus:border-primary-400 transition"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-600">Cevap</label>
                <textarea
                  value={item.answer}
                  onChange={(event) =>
                    updateItem(item.id, (i) => ({ ...i, answer: event.target.value }))
                  }
                  rows={4}
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:ring-4 focus:ring-primary-100 focus:border-primary-400 transition"
                />
              </div>
            </div>
          ))}

          {draft.items.length === 0 && (
            <p className="text-sm text-slate-500 border border-dashed border-slate-200 rounded-2xl px-6 py-10 text-center">
              Henüz SSS öğesi bulunmuyor. "Yeni Soru" butonunu kullanarak ekleyin.
            </p>
          )}
        </div>
      </form>
    </SectionContainer>
  );
};
