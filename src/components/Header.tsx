import React, { useState } from 'react';
import { Leaf, Menu, X, Globe, ArrowUpRight } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/content';

interface HeaderProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onNavigateToContact: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  language,
  onLanguageChange,
  onNavigateToContact,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[language].nav;

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FAF9F6]/95 backdrop-blur-md border-b border-[#E3E8E3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          id="brand-logo"
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1B4D36] rounded-lg"
        >
          <div className="w-10 h-10 rounded-xl bg-[#143826] flex items-center justify-center text-[#E8F2EC] shadow-sm transition-transform group-hover:scale-105">
            <Leaf className="w-5 h-5 text-[#86EFAC]" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-xl tracking-tight text-[#143826]">
                Baltic<span className="text-[#2F7E55]">Biofuels</span>
              </span>
              <span className="inline-block px-1.5 py-0.5 text-[10px] font-semibold tracking-wider text-[#143826] bg-[#E8F2EC] border border-[#C6DFC9] rounded uppercase">
                LT
              </span>
            </div>
            <p className="text-[11px] text-[#526658] font-medium tracking-wide">
              {language === 'en' ? 'Sustainable Lithuanian Biofuel' : 'Tvarus lietuviškas biokuras'}
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#314336]">
          <button
            id="nav-about"
            onClick={() => scrollTo('about')}
            className="hover:text-[#143826] transition-colors cursor-pointer py-1"
          >
            {t.about}
          </button>
          <button
            id="nav-metrics"
            onClick={() => scrollTo('sustainability-metrics')}
            className="hover:text-[#143826] transition-colors cursor-pointer py-1"
          >
            {t.metrics}
          </button>
          <button
            id="nav-calculator"
            onClick={() => scrollTo('fleet-calculator')}
            className="hover:text-[#143826] transition-colors cursor-pointer py-1 flex items-center gap-1 text-[#1B4D36] font-semibold"
          >
            {t.calculator}
          </button>
          <button
            id="nav-products"
            onClick={() => scrollTo('products')}
            className="hover:text-[#143826] transition-colors cursor-pointer py-1"
          >
            {t.products}
          </button>
          <button
            id="nav-process"
            onClick={() => scrollTo('process')}
            className="hover:text-[#143826] transition-colors cursor-pointer py-1"
          >
            {t.process}
          </button>
        </nav>

        {/* Action Controls & Language Selector */}
        <div className="hidden md:flex items-center gap-4">
          {/* Language Switcher */}
          <div
            id="lang-switcher"
            className="flex items-center bg-[#EAEFEA] p-0.5 rounded-lg border border-[#D5E0D7] text-xs font-semibold"
          >
            <button
              id="lang-btn-en"
              type="button"
              onClick={() => onLanguageChange('en')}
              className={`px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                language === 'en'
                  ? 'bg-white text-[#143826] shadow-xs'
                  : 'text-[#526658] hover:text-[#143826]'
              }`}
              aria-label="Switch to English"
            >
              EN
            </button>
            <button
              id="lang-btn-lt"
              type="button"
              onClick={() => onLanguageChange('lt')}
              className={`px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                language === 'lt'
                  ? 'bg-white text-[#143826] shadow-xs'
                  : 'text-[#526658] hover:text-[#143826]'
              }`}
              aria-label="Perjungti į lietuvių kalbą"
            >
              LT
            </button>
          </div>

          {/* Primary CTA */}
          <button
            id="header-cta-button"
            type="button"
            onClick={onNavigateToContact}
            className="inline-flex items-center gap-1.5 bg-[#143826] text-white px-4 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#1B4D36] transition-colors shadow-xs cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#143826] focus:ring-offset-2"
          >
            <span>{t.inquireBtn}</span>
            <ArrowUpRight className="w-4 h-4 text-[#86EFAC]" />
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          <div className="flex items-center bg-[#EAEFEA] p-0.5 rounded-lg border border-[#D5E0D7] text-xs font-semibold">
            <button
              type="button"
              onClick={() => onLanguageChange('en')}
              className={`px-2 py-1 rounded-md ${
                language === 'en' ? 'bg-white text-[#143826] shadow-xs' : 'text-[#526658]'
              }`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => onLanguageChange('lt')}
              className={`px-2 py-1 rounded-md ${
                language === 'lt' ? 'bg-white text-[#143826] shadow-xs' : 'text-[#526658]'
              }`}
            >
              LT
            </button>
          </div>

          <button
            id="mobile-menu-toggle"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#143826] hover:bg-[#EAEFEA] focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF9F6] border-b border-[#E3E8E3] px-4 pt-3 pb-6 space-y-3">
          <button
            onClick={() => scrollTo('about')}
            className="block w-full text-left py-2 text-[#314336] font-medium border-b border-[#EAEFEA]"
          >
            {t.about}
          </button>
          <button
            onClick={() => scrollTo('sustainability-metrics')}
            className="block w-full text-left py-2 text-[#314336] font-medium border-b border-[#EAEFEA]"
          >
            {t.metrics}
          </button>
          <button
            onClick={() => scrollTo('fleet-calculator')}
            className="block w-full text-left py-2 text-[#1B4D36] font-semibold border-b border-[#EAEFEA]"
          >
            {t.calculator}
          </button>
          <button
            onClick={() => scrollTo('products')}
            className="block w-full text-left py-2 text-[#314336] font-medium border-b border-[#EAEFEA]"
          >
            {t.products}
          </button>
          <button
            onClick={() => scrollTo('process')}
            className="block w-full text-left py-2 text-[#314336] font-medium border-b border-[#EAEFEA]"
          >
            {t.process}
          </button>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigateToContact();
              }}
              className="w-full bg-[#143826] text-white py-3 rounded-lg font-semibold text-center flex items-center justify-center gap-2"
            >
              <span>{t.inquireBtn}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
