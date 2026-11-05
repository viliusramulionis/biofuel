import React from 'react';
import { Leaf, ShieldCheck } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/content';

interface FooterProps {
  language: Language;
}

export const Footer: React.FC<FooterProps> = ({ language }) => {
  const t = translations[language].footer;

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#143826] text-[#FAF9F6] pt-16 pb-12 border-t border-[#1C4E3A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#235339]">
          
          {/* Col 1: Brand & Origin */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#235339] flex items-center justify-center text-[#86EFAC]">
                <Leaf className="w-5 h-5" />
              </div>
              <span className="font-bold text-xl tracking-tight text-white">
                Baltic<span className="text-[#86EFAC]">Biofuels</span>
              </span>
            </div>
            
            <p className="text-xs text-[#A3C8B0] leading-relaxed max-w-sm">
              {language === 'en'
                ? 'Pioneering circular, second-generation advanced biofuels in Lithuania. Converting regional agro-forestry waste into drop-in synthetic HVO100 and biomethane.'
                : 'Lietuvos antrosios kartos pažangiojo biokuro pradininkai. Paverčiame vietines žemės ūkio ir medienos atliekas į švarų HVO100 dyzeliną ir biometaną.'}
            </p>

            <div className="flex items-center gap-2 text-[11px] text-[#A3C8B0] pt-1">
              <ShieldCheck className="w-4 h-4 text-[#86EFAC]" />
              <span>{t.disclaimer}</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold text-[#86EFAC] uppercase tracking-wider">
              {language === 'en' ? 'Quick Navigation' : 'Navigacija'}
            </h4>
            <ul className="space-y-2 text-xs text-[#C5DEC9]">
              <li>
                <button
                  onClick={() => scrollTo('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {language === 'en' ? 'About Baltic Biofuels' : 'Apie „Baltic Biofuels“'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('sustainability-metrics')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {language === 'en' ? 'Sustainability & Audited Metrics' : 'Tvarumo rodikliai'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('fleet-calculator')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {language === 'en' ? 'Fleet Emissions Calculator' : 'Emisijų skaičiuoklė'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('products')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {language === 'en' ? 'Baltic HVO100 & Bio-CNG' : 'HVO100 ir Bio-CNG produktai'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('process')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {language === 'en' ? 'Feedstock & Sourcing' : 'Žaliavų grandinė'}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Registry & Facilities */}
          <div className="md:col-span-4 space-y-3 text-xs text-[#C5DEC9]">
            <h4 className="font-semibold text-[#86EFAC] uppercase tracking-wider">
              {language === 'en' ? 'Corporate & Facilities' : 'Juridinis statusas ir bazės'}
            </h4>
            <p className="leading-relaxed">
              <strong className="text-white">UAB „Baltic Biofuels“</strong>
              <br />
              {t.regCode}
            </p>
            <p className="leading-relaxed">
              <span className="text-[#86EFAC]">{language === 'en' ? 'Vilnius Hub' : 'Vilniaus centras'}:</span> Upės g. 21, LT-08128 Vilnius
              <br />
              <span className="text-[#86EFAC]">{language === 'en' ? 'Klaipėda Terminal' : 'Klaipėdos terminalas'}:</span> Minijos g. 180, Klaipėda Seaport
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#A3C8B0] gap-4">
          <p>{t.copyright}</p>
          <div className="flex items-center gap-6">
            <span>{language === 'en' ? 'Made with renewable energy in Lithuania' : 'Pagaminta naudojant žaliąją energiją Lietuvoje'}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
