import React from 'react';
import { Fuel, Flame, Check, Droplets, Sparkles, Snowflake, Truck, Building2 } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/content';

interface ProductsSectionProps {
  language: Language;
  onSelectProductForInquiry: (productName: string) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({
  language,
  onSelectProductForInquiry,
}) => {
  const t = translations[language].productsSection;

  return (
    <section id="products" className="py-20 bg-[#FAF9F6] border-b border-[#E3E8E3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBF3ED] text-[#143826] text-xs font-semibold uppercase tracking-wider">
            <Fuel className="w-3.5 h-3.5 text-[#2F7E55]" />
            <span>{t.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#143826]">
            {t.title}
          </h2>
          <p className="text-base sm:text-lg text-[#526658] leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* 2 Main Products */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* Baltic HVO100 Card */}
          <div className="bg-white rounded-3xl p-7 sm:p-9 border border-[#DCE5DE] shadow-xs flex flex-col justify-between hover:border-[#2F7E55]/60 transition-all">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#E8F2EC] flex items-center justify-center text-[#143826]">
                    <Droplets className="w-6 h-6 text-[#1B4D36]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-[#2F7E55] uppercase tracking-wider">
                      {language === 'en' ? 'Flagship Liquid Biofuel' : 'Pagrindinis skystasis biokuras'}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#143826]">
                      {t.hvoTitle}
                    </h3>
                  </div>
                </div>
                <span className="px-3 py-1 text-xs font-bold bg-[#143826] text-white rounded-full">
                  EN 15940
                </span>
              </div>

              <p className="text-sm text-[#526658] leading-relaxed mb-6">
                {t.hvoDesc}
              </p>

              {/* Key Technical Badges */}
              <div className="grid grid-cols-2 gap-3 mb-6 p-4 rounded-xl bg-[#F8FAF8] border border-[#E3EAE4]">
                <div className="flex items-center gap-2">
                  <Snowflake className="w-4 h-4 text-[#0284C7] shrink-0" />
                  <div className="text-xs">
                    <span className="font-bold text-[#143826] block">-32°C CFPP</span>
                    <span className="text-[#667A6C]">{language === 'en' ? 'Arctic Winter' : 'Arktinis žieminis'}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Flame className="w-4 h-4 text-[#D97706] shrink-0" />
                  <div className="text-xs">
                    <span className="font-bold text-[#143826] block">Cetane 75+</span>
                    <span className="text-[#667A6C]">{language === 'en' ? 'High Combustion' : 'Švarus degimas'}</span>
                  </div>
                </div>
              </div>

              {/* Specifications List */}
              <ul className="space-y-3 mb-8">
                {t.hvoSpecs.map((spec, index) => (
                  <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#314336]">
                    <div className="w-5 h-5 rounded-full bg-[#EBF3ED] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-[#2F7E55]" />
                    </div>
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              id="hvo-inquire-btn"
              type="button"
              onClick={() => onSelectProductForInquiry('Baltic HVO100 Drop-in Diesel')}
              className="w-full py-3.5 px-4 bg-[#143826] hover:bg-[#1B4D36] text-white rounded-xl text-sm font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
            >
              <Truck className="w-4 h-4 text-[#86EFAC]" />
              <span>
                {language === 'en' ? 'Inquire for HVO100 Bulk Supply' : 'Užsakyti HVO100 didmeninį tiekimą'}
              </span>
            </button>
          </div>

          {/* Bio-CNG & Bio-LNG Card */}
          <div className="bg-white rounded-3xl p-7 sm:p-9 border border-[#DCE5DE] shadow-xs flex flex-col justify-between hover:border-[#2F7E55]/60 transition-all">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#E8F2EC] flex items-center justify-center text-[#143826]">
                    <Flame className="w-6 h-6 text-[#1B4D36]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-[#2F7E55] uppercase tracking-wider">
                      {language === 'en' ? 'Gaseous Clean Energy' : 'Dujinis biokuras'}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#143826]">
                      {t.biomethaneTitle}
                    </h3>
                  </div>
                </div>
                <span className="px-3 py-1 text-xs font-bold bg-[#E8F2EC] text-[#143826] border border-[#C5DEC9] rounded-full">
                  EN 16723
                </span>
              </div>

              <p className="text-sm text-[#526658] leading-relaxed mb-6">
                {t.biomethaneDesc}
              </p>

              {/* Key Technical Badges */}
              <div className="grid grid-cols-2 gap-3 mb-6 p-4 rounded-xl bg-[#F8FAF8] border border-[#E3EAE4]">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#2F7E55] shrink-0" />
                  <div className="text-xs">
                    <span className="font-bold text-[#143826] block">&gt;98.5% CH₄</span>
                    <span className="text-[#667A6C]">{language === 'en' ? 'Pure Methane' : 'Grynasis metanas'}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-[#1B4D36] shrink-0" />
                  <div className="text-xs">
                    <span className="font-bold text-[#143826] block">Grid / Terminal</span>
                    <span className="text-[#667A6C]">{language === 'en' ? 'Amber Grid / Depots' : 'Magistralinis tinklas'}</span>
                  </div>
                </div>
              </div>

              {/* Specifications List */}
              <ul className="space-y-3 mb-8">
                {t.biomethaneSpecs.map((spec, index) => (
                  <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#314336]">
                    <div className="w-5 h-5 rounded-full bg-[#EBF3ED] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-[#2F7E55]" />
                    </div>
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              id="cng-inquire-btn"
              type="button"
              onClick={() => onSelectProductForInquiry('Bio-CNG / Bio-LNG Biomethane')}
              className="w-full py-3.5 px-4 bg-white hover:bg-[#F4F7F4] text-[#143826] border border-[#CBD9CE] hover:border-[#143826] rounded-xl text-sm font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
            >
              <Building2 className="w-4 h-4 text-[#2F7E55]" />
              <span>
                {language === 'en' ? 'Inquire for Municipal Transit & Fleet CNG' : 'Užsakyti Bio-CNG savivaldybės / autoparko tiekimą'}
              </span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
