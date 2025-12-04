import React from 'react';
import { Plus, Trash2 } from 'lucide-react';

interface StringListEditorProps {
  label: string;
  values: string[];
  onChange: (next: string[]) => void;
  addLabel?: string;
  placeholder?: string;
}

export const StringListEditor: React.FC<StringListEditorProps> = ({
  label,
  values,
  onChange,
  addLabel = 'Yeni öğe ekle',
  placeholder,
}) => {
  const handleValueChange = (index: number, value: string) => {
    const next = [...values];
    next[index] = value;
    onChange(next);
  };

  const handleRemove = (index: number) => {
    const next = values.filter((_, i) => i !== index);
    onChange(next);
  };

  const handleAdd = () => {
    onChange([...values, '']);
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <label className="text-sm font-semibold text-slate-700">{label}</label>
        <button
          type="button"
          onClick={handleAdd}
          className="inline-flex items-center gap-1 rounded-lg bg-primary-600 text-white text-xs font-semibold px-3 py-1.5 hover:bg-primary-700 transition"
        >
          <Plus size={14} /> {addLabel}
        </button>
      </div>
      <div className="space-y-2">
        {values.length === 0 && (
          <p className="text-xs text-slate-400 border border-dashed border-slate-200 rounded-xl px-4 py-3">
            Henüz öğe eklenmedi.
          </p>
        )}
        {values.map((value, index) => (
          <div key={index} className="flex items-center gap-3">
            <input
              type="text"
              value={value}
              onChange={(event) => handleValueChange(index, event.target.value)}
              placeholder={placeholder}
              className="flex-1 rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:ring-4 focus:ring-primary-100 focus:border-primary-400 transition"
            />
            <button
              type="button"
              onClick={() => handleRemove(index)}
              className="rounded-xl border border-red-200 bg-red-50 text-red-600 p-2 hover:bg-red-100 transition"
              aria-label={`${label} öğesini sil`}
            >
              <Trash2 size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
