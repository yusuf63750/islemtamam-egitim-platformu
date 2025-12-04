import React, { useRef, useId } from 'react';
import { Upload, X, Image as ImageIcon, Film } from 'lucide-react';

interface FileUploaderProps {
  label: string;
  value: string;
  onChange: (dataUrl: string) => void;
  accept: 'image' | 'video' | 'both';
  placeholder?: string;
  previewHeight?: string;
}

const acceptMap = {
  image: 'image/*',
  video: 'video/*',
  both: 'image/*,video/*',
};

export const FileUploader: React.FC<FileUploaderProps> = ({
  label,
  value,
  onChange,
  accept,
  placeholder = 'veya URL yapıştırın',
  previewHeight = '200px',
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const id = useId();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        onChange(reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  const clearValue = () => {
    onChange('');
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  const isImage = value.startsWith('data:image') || (!value.startsWith('data:video') && !value.includes('youtube') && !value.includes('vimeo') && (value.match(/\.(jpg|jpeg|png|gif|webp|svg)$/i) || value.startsWith('data:image')));
  const isVideo = value.startsWith('data:video') || value.match(/\.(mp4|webm|ogg)$/i);
  const isEmbed = value.includes('youtube') || value.includes('vimeo');

  return (
    <div className="space-y-3">
      <label className="text-sm font-semibold text-slate-700">{label}</label>
      
      <div className="flex gap-2">
        <input
          type="text"
          value={value}
          onChange={handleUrlChange}
          className="flex-1 rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:ring-4 focus:ring-primary-100 focus:border-primary-400 transition"
          placeholder={placeholder}
        />
        <input
          ref={inputRef}
          type="file"
          id={id}
          accept={acceptMap[accept]}
          onChange={handleFileChange}
          className="hidden"
        />
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className="rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-600 hover:bg-slate-100 transition flex items-center gap-2"
        >
          <Upload size={16} />
          Yükle
        </button>
        {value && (
          <button
            type="button"
            onClick={clearValue}
            className="rounded-xl border border-red-200 bg-red-50 px-3 py-3 text-red-600 hover:bg-red-100 transition"
            aria-label="Temizle"
          >
            <X size={16} />
          </button>
        )}
      </div>

      {value && (
        <div className="rounded-2xl border border-slate-200 bg-slate-50 overflow-hidden" style={{ maxHeight: previewHeight }}>
          {isImage && (
            <img
              src={value}
              alt="Önizleme"
              className="w-full h-full object-contain"
              style={{ maxHeight: previewHeight }}
            />
          )}
          {isVideo && (
            <video
              src={value}
              controls
              className="w-full"
              style={{ maxHeight: previewHeight }}
            />
          )}
          {isEmbed && (
            <div className="flex items-center justify-center gap-2 p-6 text-slate-500">
              <Film size={20} />
              <span className="text-sm">Embed video URL ayarlandı</span>
            </div>
          )}
          {!isImage && !isVideo && !isEmbed && value && (
            <div className="flex items-center justify-center gap-2 p-6 text-slate-500">
              <ImageIcon size={20} />
              <span className="text-sm">Medya URL ayarlandı</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
