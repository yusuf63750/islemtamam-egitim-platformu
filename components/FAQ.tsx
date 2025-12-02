import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    q: "LGS kursuna kaç sınıf öğrencisi katılabilir?",
    a: "Genellikle 8. sınıf öğrencileri katılır. Ancak 9. sınıfların LGS yılındaki ilk dönemi de içerir. En erken 7. sınıf ortasında başlayanlar da olmuştur."
  },
  {
    q: "LGS kursunu yılın ortasında başlayabilir miyim?",
    a: "Evet! Kayıt olduğunuz andan itibaren önceki tüm ders videoları, çıkmış sorular ve çözümlere erişiminiz açılır. Ayrıca kişiye özel telafi programı hazırlarız."
  },
  {
    q: "Öğretmenlere LGS konularında birebir soru sorabiliyor muyuz?",
    a: "Kesinlikle. Haftalık canlı soru çözüm saatlerimizde anında soru sorabilir, diğer zamanlarda ise WhatsApp veya soru çözüm platformumuz üzerinden 7/24 destek alabilirsiniz."
  },
  {
    q: "LGS deneme sınavları ne sıklıkla yapılıyor?",
    a: "Tam kapsamlı pakette ayda 2, video paketinde ayda 1 deneme sınavı yapılıyor. Sınavlar hem online hem de basılı olarak uygulanır. Türkiye geneli ranking sistemi sayesinde kendinizi karşılaştırabilirsiniz."
  },
  {
    q: "LGS paket fiyatları nedir ve taksit seçenekleri var mı?",
    a: "Paketlerimiz ₺599 ile ₺2.199 arasında değişmektedir. Kredi kartına 12 taksit imkanı, peşin ödemelerde %10 indirim ve okul turları için özel fiyatlandırma sunuyoruz."
  },
  {
    q: "LGS müfredatındaki tüm konuları kapsıyor musunuz?",
    a: "Evet, MEB'in belirlediği tüm LGS konuları (Matematik, Fen Bilgisi, Türkçe, Sosyal Bilgiler, İngilizce) tamamen kapsamlı bir şekilde öğretilmektedir."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="sss" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">Sıkça Sorulan Sorular</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-slate-200 rounded-xl overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center bg-slate-50 hover:bg-slate-100 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-slate-900">{faq.q}</span>
                {openIndex === index ? <ChevronUp className="text-slate-500" /> : <ChevronDown className="text-slate-500" />}
              </button>
              
              {openIndex === index && (
                <div className="px-6 py-4 bg-white text-slate-600 leading-relaxed border-t border-slate-100">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};