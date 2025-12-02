import React from 'react';
import { Check, Zap } from 'lucide-react';
import { Button } from './Button';

const packages = [
  {
    name: "LGS Video Arşivi",
    description: "Kendi hızında çalışmak isteyenler için tüm LGS konularının video ve kaynak arşivi.",
    price: "₺599",
    period: "/aylık",
    features: [
      "Tüm LGS Ders Videoları",
      "PDF Konu Anlatımları",
      "Aylık Deneme Sınavları",
      "Çıkmış Soruların Çözümü",
      "Rehberlik Seminerleri"
    ],
    highlight: false,
    buttonVariant: "outline" as const
  },
  {
    name: "LGS Tam Hazırlık",
    description: "Canlı LGS dersleri ve sıkı takip ile sınavda başarıyı garantileyin.",
    price: "₺1.299",
    period: "/aylık",
    features: [
      "Haftada 12 Saat Canlı LGS Dersler",
      "Sınırsız LGS Soru Çözüm",
      "Birebir Performans Koçluğu",
      "Haftalık LGS Ödev Takibi",
      "Tüm LGS Dijital Kaynakları",
      "Ayda 2 Deneme Sınavı"
    ],
    highlight: true,
    buttonVariant: "primary" as const
  },
  {
    name: "VIP LGS Koçluğu",
    description: "LGS'ye maksimum hazırlık için kişiye özel birebir ilgi ve destek.",
    price: "₺2.199",
    period: "/aylık",
    features: [
      "Kişiye Özel LGS Ders Programı",
      "Haftada 5 Saat Özel LGS Dersi",
      "7/24 Whatsapp Soru Desteği",
      "LGS Psikolojik Danışmanlığı",
      "Veli Bilgilendirme Sistemi",
      "Prioriteli Soru Çözümü"
    ],
    highlight: false,
    buttonVariant: "outline" as const
  }
];

export const Packages: React.FC = () => {
  return (
    <section id="paketler" className="py-20 bg-slate-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">LGS Eğitim Paketlerimiz</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Sana En Uygun LGS Paketini Seç
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
            LGS'ye tam hazırlık için video destekli isen başla, live dersler istiyorsan tam kapsamlıyı seç.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {packages.map((pkg, index) => (
            <div 
              key={index} 
              className={`rounded-2xl p-8 border transition-all duration-300 ${
                pkg.highlight 
                  ? 'bg-white border-primary-200 shadow-xl ring-4 ring-primary-50 scale-105 z-10' 
                  : 'bg-white border-slate-200 shadow-md hover:shadow-lg'
              }`}
            >
              {pkg.highlight && (
                <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-xs font-bold mb-4">
                  <Zap size={14} className="fill-primary-700" />
                  EN ÇOK TERCİH EDİLEN
                </div>
              )}
              <h3 className="text-2xl font-bold text-slate-900">{pkg.name}</h3>
              <p className="mt-2 text-slate-500 text-sm">{pkg.description}</p>
              
              <div className="my-6 flex items-baseline">
                <span className="text-4xl font-extrabold text-slate-900">{pkg.price}</span>
                <span className="text-slate-500 ml-2">{pkg.period}</span>
              </div>

              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-600">
                    <Check size={20} className="text-green-500 shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button variant={pkg.buttonVariant} className="w-full justify-center">
                Hemen Başvur
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-500 text-sm">
            * Tüm paketlerimizde 14 gün iade garantisi bulunmaktadır. Okul turu paketleri için iletişime geçiniz.
          </p>
        </div>
      </div>
    </section>
  );
};