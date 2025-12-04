import { useEffect, useState } from 'react';
import { getDefaultContent, useSiteContent } from '../../context/SiteContentContext';
import { SiteContent } from '../../types';

const clone = <T,>(value: T): T => JSON.parse(JSON.stringify(value)) as T;

export const useEditableSection = <K extends keyof SiteContent>(section: K) => {
  const { content, updateSection } = useSiteContent();
  const sectionData = content[section];
  const [draft, setDraft] = useState<SiteContent[K]>(() => clone(sectionData));
  const [isDirty, setIsDirty] = useState(false);

  useEffect(() => {
    setDraft(clone(sectionData));
    setIsDirty(false);
  }, [sectionData]);

  const save = (nextDraft?: SiteContent[K]) => {
    const payload = clone(nextDraft ?? draft);
    updateSection(section, payload);
    setIsDirty(false);
  };

  const updateDraft = (updater: SiteContent[K] | ((prev: SiteContent[K]) => SiteContent[K])) => {
    setDraft((prev) => {
      const next = typeof updater === 'function' ? (updater as (prev: SiteContent[K]) => SiteContent[K])(prev) : updater;
      setIsDirty(true);
      return next;
    });
  };

  const resetToCurrent = () => {
    setDraft(clone(sectionData));
    setIsDirty(false);
  };

  const loadDefaults = () => {
    const defaults = getDefaultContent();
    setDraft(clone(defaults[section]));
    setIsDirty(true);
  };

  return {
    draft,
    setDraft: updateDraft,
    save,
    resetToCurrent,
    loadDefaults,
    isDirty,
  } as const;
};
