import React from 'react';
import { SectionContainer } from '../components/SectionContainer';

export const FooterSection: React.FC = () => {
  return (
    <SectionContainer
      title="Footer"
      description="Alt bilgi alanındaki iletişim ve link detaylarını düzenleyin."
    >
      <div className="rounded-2xl border border-dashed border-slate-300 bg-white/70 p-6 text-sm text-slate-500">
        Form içeriği yakında burada yer alacak.
      </div>
    </SectionContainer>
  );
};
