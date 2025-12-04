import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useSiteContent } from '../context/SiteContentContext';

export const FAQ: React.FC = () => {
  const { content } = useSiteContent();
  const faqs = content.faq;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="sss" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">{faqs.title}</h2>
        </div>

        <div className="space-y-4">
          {faqs.items.map((faq, index) => (
            <div key={faq.id} className="border border-slate-200 rounded-xl overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center bg-slate-50 hover:bg-slate-100 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-slate-900">{faq.question}</span>
                {openIndex === index ? <ChevronUp className="text-slate-500" /> : <ChevronDown className="text-slate-500" />}
              </button>
              
              {openIndex === index && (
                <div className="px-6 py-4 bg-white text-slate-600 leading-relaxed border-t border-slate-100">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};