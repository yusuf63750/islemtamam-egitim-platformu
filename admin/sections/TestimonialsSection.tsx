import React, { useId } from 'react';
import { SectionContainer } from '../components/SectionContainer';
import { useEditableSection } from '../hooks/useEditableSection';
import { Testimonial } from '../../types';
import { Plus, Trash2, Star } from 'lucide-react';
import { FileUploader } from '../components/FileUploader';

const generateId = (prefix: string) => {
  const randomPart = typeof globalThis.crypto?.randomUUID === 'function'
    ? globalThis.crypto.randomUUID()
    : `${Date.now()}-${Math.random().toString(16).slice(2, 8)}`;
  return `${prefix}-${randomPart}`;
};

const createTestimonial = (): Testimonial => ({
  id: generateId('testimonial'),
  name: 'Yeni Kişi',
  role: 'Öğrenci / Veli',
  image: '',
  content: 'Yorum içeriği...',
  rating: 5,
});

export const TestimonialsSection: React.FC = () => {
  const formId = useId();
  const { draft, setDraft, save, resetToCurrent, loadDefaults, isDirty } = useEditableSection('testimonials');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    save();
  };

  const addTestimonial = () => {
    setDraft((prev) => ({
      ...prev,
      testimonials: [...prev.testimonials, createTestimonial()],
    }));
  };

  const updateTestimonial = (id: string, updater: (t: Testimonial) => Testimonial) => {
    setDraft((prev) => ({
      ...prev,
      testimonials: prev.testimonials.map((t) => (t.id === id ? updater(t) : t)),
    }));
  };

  const removeTestimonial = (id: string) => {
    setDraft((prev) => ({
      ...prev,
      testimonials: prev.testimonials.filter((t) => t.id !== id),
    }));
  };

  return (
    <SectionContainer
      title="Yorumlar"
      description="Öğrenci ve veli yorumlarını yönetin."
      actions={
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={addTestimonial}
            className="rounded-xl bg-primary-100 text-primary-700 px-4 py-2 text-xs font-semibold hover:bg-primary-200 transition flex items-center gap-1"
          >
            <Plus size={14} /> Yeni Yorum
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
            <label className="text-sm font-semibold text-slate-700">Ön Başlık</label>
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

        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-slate-700">Yorumlar</h3>
          {draft.testimonials.map((testimonial) => (
            <div key={testimonial.id} className="rounded-2xl border border-slate-200 bg-white/70 p-6 space-y-4 shadow-sm">
              <div className="flex items-center justify-between">
                <h4 className="text-base font-semibold text-slate-800">{testimonial.name}</h4>
                <button
                  type="button"
                  onClick={() => removeTestimonial(testimonial.id)}
                  className="rounded-xl border border-red-200 bg-red-50 text-red-600 p-2 hover:bg-red-100 transition"
                  aria-label="Yorumu sil"
                >
                  <Trash2 size={16} />
                </button>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-600">İsim</label>
                  <input
                    type="text"
                    value={testimonial.name}
                    onChange={(event) =>
                      updateTestimonial(testimonial.id, (t) => ({ ...t, name: event.target.value }))
                    }
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:ring-4 focus:ring-primary-100 focus:border-primary-400 transition"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-600">Rol</label>
                  <input
                    type="text"
                    value={testimonial.role}
                    onChange={(event) =>
                      updateTestimonial(testimonial.id, (t) => ({ ...t, role: event.target.value }))
                    }
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:ring-4 focus:ring-primary-100 focus:border-primary-400 transition"
                    placeholder="Örn: Öğrenci / Veli"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-600">Puan</label>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() =>
                        updateTestimonial(testimonial.id, (t) => ({ ...t, rating: star }))
                      }
                      className={`p-1 rounded-lg transition ${
                        star <= testimonial.rating
                          ? 'text-yellow-500'
                          : 'text-slate-300 hover:text-yellow-400'
                      }`}
                    >
                      <Star size={20} fill={star <= testimonial.rating ? 'currentColor' : 'none'} />
                    </button>
                  ))}
                  <span className="ml-2 text-sm text-slate-500">({testimonial.rating}/5)</span>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-600">Yorum</label>
                <textarea
                  value={testimonial.content}
                  onChange={(event) =>
                    updateTestimonial(testimonial.id, (t) => ({ ...t, content: event.target.value }))
                  }
                  rows={3}
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:ring-4 focus:ring-primary-100 focus:border-primary-400 transition"
                />
              </div>
              <FileUploader
                label="Profil Görseli"
                value={testimonial.image}
                onChange={(url) =>
                  updateTestimonial(testimonial.id, (t) => ({ ...t, image: url }))
                }
                accept="image"
                placeholder="https://... veya dosya yükleyin"
                previewHeight="100px"
              />
            </div>
          ))}

          {draft.testimonials.length === 0 && (
            <p className="text-sm text-slate-500 border border-dashed border-slate-200 rounded-2xl px-6 py-10 text-center">
              Henüz yorum bulunmuyor. "Yeni Yorum" butonunu kullanarak ekleyin.
            </p>
          )}
        </div>
      </form>
    </SectionContainer>
  );
};
