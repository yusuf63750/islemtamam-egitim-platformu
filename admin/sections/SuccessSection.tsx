import React from 'react';
import { SectionContainer } from '../components/SectionContainer';

export const SuccessSection: React.FC = () => {
  return (
    <SectionContainer
      title="Başarı Öyküleri"
      description="Öğrenci başarı hikayelerini ve sıralamalarını yönetin."
    >
      <div className="rounded-2xl border border-dashed border-slate-300 bg-white/70 p-6 text-sm text-slate-500">
        Form içeriği yakında burada yer alacak.
      </div>
    </SectionContainer>
  );
};
