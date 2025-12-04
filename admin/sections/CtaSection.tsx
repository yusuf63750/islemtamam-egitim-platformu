import React from 'react';
import { SectionContainer } from '../components/SectionContainer';

export const CtaSection: React.FC = () => {
  return (
    <SectionContainer
      title="CTA Bölümü"
      description="Ana sayfa çağrı alanı metinlerini ve buton bağlantılarını düzenleyin."
    >
      <div className="rounded-2xl border border-dashed border-slate-300 bg-white/70 p-6 text-sm text-slate-500">
        Form içeriği yakında burada yer alacak.
      </div>
    </SectionContainer>
  );
};
