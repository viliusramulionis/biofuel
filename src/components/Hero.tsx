import React from 'react';
import { ShieldCheck, CheckCircle2, Flame, ArrowRight, Snowflake, Fuel, TrendingDown, Factory } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/content';

interface HeroProps {
  language: Language;
  onNavigateToCalculator: () => void;
  onNavigateToContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  language,
  onNavigateToCalculator,
  onNavigateToContact,
}) => {
  const t = translations[language].hero;

  return (
    <section id="about" className="relative overflow-hidden pt-12 pb-20 sm:pt-16 sm:pb-24 border-b border-[#E3E8E3] bg-[#FAF9F6]">
      {/* Subtle organic gradient backdrop */}
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-[#E3EFE5] rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-10 left-10 -z-10 w-80 h-80 bg-[#F2ECE1] rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Location & Pioneer Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF3ED] border border-[#C5DEC9] text-[#143826] text-xs font-semibold shadow-xs">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2F7E55] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1B4D36]"></span>
              </span>
              <span className="tracking-wide">{t.badge}</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#143826] leading-[1.12]">
              {t.titleStart}{' '}
              <span className="text-[#2F7E55] underline decoration-[#86EFAC]/60 decoration-wavy decoration-2">
                {t.titleHighlight}
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-[#4A5D50] leading-relaxed max-w-2xl font-normal">
              {t.description}
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                id="hero-calculator-cta"
                type="button"
                onClick={onNavigateToCalculator}
                className="inline-flex items-center justify-center gap-2 bg-[#143826] text-white px-6 py-3.5 rounded-xl font-semibold text-base hover:bg-[#1B4D36] transition-all shadow-sm hover:shadow cursor-pointer"
              >
                <span>{t.ctaPrimary}</span>
                <ArrowRight className="w-4 h-4 text-[#86EFAC]" />
              </button>

              <button
                id="hero-contact-cta"
                type="button"
                onClick={onNavigateToContact}
                className="inline-flex items-center justify-center gap-2 bg-white text-[#143826] border border-[#CBD9CE] px-6 py-3.5 rounded-xl font-semibold text-base hover:bg-[#F4F7F4] hover:border-[#143826] transition-all shadow-2xs cursor-pointer"
              >
                <span>{t.ctaSecondary}</span>
              </button>
            </div>

            {/* Regulatory & Standards Badges */}
            <div className="pt-6 border-t border-[#E3E8E3]">
              <p className="text-xs font-semibold text-[#667A6C] uppercase tracking-wider mb-3">
                {language === 'en' ? 'Standards & Verified Compliance' : 'Standartai ir patvirtinta atitiktis'}
              </p>
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-4 text-xs font-medium text-[#264431]">
                {t.certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#F0F5F1] border border-[#D1E0D4]"
                  >
                    <ShieldCheck className="w-3.5 h-3.5 text-[#2F7E55]" />
                    <span>{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Visual Dashboard Panel */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#DCE5DE] shadow-sm relative space-y-6">
              
              {/* Header inside card */}
              <div className="flex items-center justify-between border-b border-[#EEF2EF] pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#EBF3ED] flex items-center justify-center text-[#143826]">
                    <Fuel className="w-4 h-4 text-[#1B4D36]" />
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-[#143826]">Baltic HVO100 Fuel Matrix</h2>
                    <p className="text-[11px] text-[#526658]">LST EN 15940 Paraffinic Specification</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 text-[11px] font-bold text-[#143826] bg-[#E3EFE5] border border-[#C6DFC9] rounded-full">
                  100% Drop-In
                </span>
              </div>

              {/* 4 Feature Key Highlights */}
              <div className="grid grid-cols-2 gap-3.5">
                <div className="p-3.5 rounded-xl bg-[#F8FAF8] border border-[#E3EAE4] space-y-1">
                  <div className="flex items-center gap-1.5 text-[#143826]">
                    <TrendingDown className="w-4 h-4 text-[#2F7E55]" />
                    <span className="text-2xl font-extrabold tracking-tight">-88%</span>
                  </div>
                  <p className="text-xs font-semibold text-[#143826]">
                    {language === 'en' ? 'CO₂e Lifecycle' : 'CO₂e gyvavimo cikle'}
                  </p>
                  <p className="text-[11px] text-[#667A6C] leading-tight">
                    {language === 'en' ? 'Certified vs fossil diesel' : 'Sertifikuota prieš iškastinį'}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#F8FAF8] border border-[#E3EAE4] space-y-1">
                  <div className="flex items-center gap-1.5 text-[#143826]">
                    <Snowflake className="w-4 h-4 text-[#0284C7]" />
                    <span className="text-2xl font-extrabold tracking-tight">-32°C</span>
                  </div>
                  <p className="text-xs font-semibold text-[#143826]">
                    {language === 'en' ? 'Arctic Winter Grade' : 'Arktinė žiemos klasė'}
                  </p>
                  <p className="text-[11px] text-[#667A6C] leading-tight">
                    {language === 'en' ? 'Cold Filter Plugging Point' : 'Filtravimosi ribinė temp.'}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#F8FAF8] border border-[#E3EAE4] space-y-1">
                  <div className="flex items-center gap-1.5 text-[#143826]">
                    <Flame className="w-4 h-4 text-[#D97706]" />
                    <span className="text-2xl font-extrabold tracking-tight">75+</span>
                  </div>
                  <p className="text-xs font-semibold text-[#143826]">
                    {language === 'en' ? 'High Cetane Rating' : 'Aukštas cetano skaičius'}
                  </p>
                  <p className="text-[11px] text-[#667A6C] leading-tight">
                    {language === 'en' ? 'Standard diesel is ~51' : 'Paprasto dyzelino tik ~51'}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#F8FAF8] border border-[#E3EAE4] space-y-1">
                  <div className="flex items-center gap-1.5 text-[#143826]">
                    <Factory className="w-4 h-4 text-[#2F7E55]" />
                    <span className="text-2xl font-extrabold tracking-tight">0%</span>
                  </div>
                  <p className="text-xs font-semibold text-[#143826]">
                    {language === 'en' ? 'Food-Crop Free' : 'Be maistinių pasėlių'}
                  </p>
                  <p className="text-[11px] text-[#667A6C] leading-tight">
                    {language === 'en' ? '100% residual biomass' : '100% perdirbimo liekanos'}
                  </p>
                </div>
              </div>

              {/* Feedstock Callout */}
              <div className="p-3.5 rounded-xl bg-[#F2F7F3] border border-[#D3E3D6] flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#2F7E55] shrink-0 mt-0.5" />
                <div className="text-xs text-[#264431]">
                  <p className="font-semibold text-[#143826] mb-0.5">
                    {language === 'en' ? 'Direct Fleet Deployment' : 'Tiesioginis naudojimas autoparke'}
                  </p>
                  <p className="text-[#526658] leading-relaxed">
                    {language === 'en'
                      ? 'Seamless transition: fill up without modifying fuel pumps, bulk tanks, or Euro 5/6 engine warranties.'
                      : 'Sklandus perėjimas: pilkite tiesiai be jokių degalų siurblių, talpyklų ar Euro 5/6 variklių modifikacijų.'}
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
