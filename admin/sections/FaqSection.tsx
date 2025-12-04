import React from 'react';
import { SectionContainer } from '../components/SectionContainer';

export const FaqSection: React.FC = () => {
  return (
    <SectionContainer
      title="Sıkça Sorulan Sorular"
      description="SSS listesini düzenleyin ve yeni sorular ekleyin."
    >
      <div className="rounded-2xl border border-dashed border-slate-300 bg-white/70 p-6 text-sm text-slate-500">
        Form içeriği yakında burada yer alacak.
      </div>
    </SectionContainer>
  );
};
