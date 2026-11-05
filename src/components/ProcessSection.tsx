import React from 'react';
import { Layers, Sprout, Cpu, Anchor, Route, ArrowRight, ShieldAlert, CheckCircle } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/content';

interface ProcessSectionProps {
  language: Language;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ language }) => {
  const t = translations[language].processSection;

  return (
    <section id="process" className="py-20 bg-white border-b border-[#E3E8E3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBF3ED] text-[#143826] text-xs font-semibold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5 text-[#2F7E55]" />
            <span>{t.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#143826]">
            {t.title}
          </h2>
          <p className="text-base sm:text-lg text-[#526658] leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* 4 Steps Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {t.steps.map((step, idx) => {
            return (
              <div
                key={idx}
                className="bg-[#FAF9F6] rounded-2xl p-6 border border-[#DCE5DE] relative flex flex-col justify-between hover:shadow-sm transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-2xl font-black text-[#86EFAC] bg-[#143826] px-3 py-1 rounded-lg">
                      {step.num}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-[#E8F2EC] flex items-center justify-center text-[#143826]">
                      {idx === 0 && <Sprout className="w-5 h-5 text-[#2F7E55]" />}
                      {idx === 1 && <Cpu className="w-5 h-5 text-[#2F7E55]" />}
                      {idx === 2 && <Anchor className="w-5 h-5 text-[#0284C7]" />}
                      {idx === 3 && <Route className="w-5 h-5 text-[#D97706]" />}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-[#143826] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#526658] leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#EAEFEA] flex items-center gap-1 text-[11px] font-semibold text-[#2F7E55]">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>
                    {idx === 0 && (language === 'en' ? 'FSC & Agro certified' : 'Sertifikuota žaliava')}
                    {idx === 1 && (language === 'en' ? 'Hydrotreated (HEFA/HVO)' : 'Hidrintas rafinavimas')}
                    {idx === 2 && (language === 'en' ? 'Deepwater Port Access' : 'Prieiga prie giliavandenio uosto')}
                    {idx === 3 && (language === 'en' ? '100% Drop-in standard' : '100% tinka be pertvarkymo')}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Ethical Feedstock Statement */}
        <div className="mt-12 bg-[#F6FAF6] rounded-2xl p-6 border border-[#D5E4D8] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-[#143826] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#2F7E55]"></span>
              {language === 'en' ? 'Our Strict "No-Food-Competition" Charter' : 'Mūsų griežtas „Nulinės maisto konkurencijos“ principas'}
            </h4>
            <p className="text-xs text-[#526658] max-w-2xl leading-relaxed">
              {language === 'en'
                ? 'We reject palm oil, virgin soybean oil, and direct food crops. Our production relies 100% on Lithuanian forestry thinning residues, straw cellulose, and certified tall oil fatty acids (TOFA) from Baltic paper and pulp manufacturing.'
                : 'Mes nenaudojame palmių aliejaus, maistinių sojų ar kitų maisto kultūrų. Mūsų gamyba 100% remiasi Lietuvos miško retinimo liekanomis, šiaudų celiulioze bei Baltijos šalių popieriaus ir medienos pramonės talų aliejaus frakcijomis.'}
            </p>
          </div>
          <div className="shrink-0 text-xs font-semibold text-[#143826] px-4 py-2 bg-white rounded-xl border border-[#CBD9CE]">
            {language === 'en' ? 'RED III Annex IX Part A Listed' : 'Įtraukta į RED III IX priedo A dalį'}
          </div>
        </div>

      </div>
    </section>
  );
};
