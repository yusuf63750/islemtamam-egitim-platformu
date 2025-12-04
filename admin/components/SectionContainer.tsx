import React from 'react';

interface SectionContainerProps {
  title: string;
  description: string;
  actions?: React.ReactNode;
  children: React.ReactNode;
}

export const SectionContainer: React.FC<SectionContainerProps> = ({
  title,
  description,
  actions,
  children,
}) => {
  return (
    <section className="space-y-6 text-left">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold text-slate-800">{title}</h2>
          <p className="text-sm text-slate-500 mt-1">{description}</p>
        </div>
        {actions && <div className="flex items-center gap-3">{actions}</div>}
      </div>
      <div className="grid gap-6">{children}</div>
    </section>
  );
};
