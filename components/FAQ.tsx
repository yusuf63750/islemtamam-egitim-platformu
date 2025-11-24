import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    q: "Eğitim paketine yılın ortasında katılabilir miyim?",
    a: "Evet! Kayıt olduğunuz andan itibaren geçmiş tüm ders kayıtlarına ve dokümanlara erişiminiz açılır. Ayrıca size özel bir telafi programı hazırlanır."
  },
  {
    q: "Öğretmenlere birebir soru sorabiliyor muyuz?",
    a: "Kesinlikle. Haftalık soru çözüm saatlerimizde canlı olarak, diğer zamanlarda ise soru çözüm uygulamamız üzerinden fotoğraf göndererek 7/24 soru sorabilirsiniz."
  },
  {
    q: "Deneme sınavları online mı yapılıyor?",
    a: "Hem online hem de evinize kargoladığımız basılı deneme setleriyle sınavlar yapıyoruz. Türkiye geneli sıralamanızı görebiliyorsunuz."
  },
  {
    q: "Fiyatlandırma ve ödeme seçenekleri nelerdir?",
    a: "Farklı paket seçeneklerimiz mevcuttur. Kredi kartına 12 taksit imkanı ve peşin ödemelerde indirim fırsatları sunuyoruz. Detaylar için iletişime geçebilirsiniz."
  },
  {
    q: "10 kişilik öğretmen kadrosu sabit mi?",
    a: "Evet, sene başında tanıttığımız 10 kişilik uzman kadromuz, tüm yıl boyunca derslerinize giren ve sizi takip eden aynı ekiptir."
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