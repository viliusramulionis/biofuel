/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Language } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MetricsSection } from './components/MetricsSection';
import { ProductsSection } from './components/ProductsSection';
import { ProcessSection } from './components/ProcessSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [language, setLanguage] = useState<Language>('en');
  const [prefilledFleetInfo, setPrefilledFleetInfo] = useState<string>('');
  const [prefilledProduct, setPrefilledProduct] = useState<string>('');

  const scrollToContact = () => {
    const el = document.getElementById('contact-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToCalculator = () => {
    const el = document.getElementById('fleet-calculator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleApplyFleetSize = (fleetInfo: string) => {
    setPrefilledFleetInfo(fleetInfo);
    scrollToContact();
  };

  const handleSelectProduct = (productName: string) => {
    setPrefilledProduct(productName);
    scrollToContact();
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#1E2922] font-sans selection:bg-[#143826] selection:text-white">
      <Header
        language={language}
        onLanguageChange={setLanguage}
        onNavigateToContact={scrollToContact}
      />

      <main className="flex-1">
        <Hero
          language={language}
          onNavigateToCalculator={scrollToCalculator}
          onNavigateToContact={scrollToContact}
        />

        <MetricsSection
          language={language}
          onApplyFleetSizeToInquiry={handleApplyFleetSize}
        />

        <ProductsSection
          language={language}
          onSelectProductForInquiry={handleSelectProduct}
        />

        <ProcessSection
          language={language}
        />

        <ContactSection
          language={language}
          prefilledFleetInfo={prefilledFleetInfo}
          prefilledProduct={prefilledProduct}
        />
      </main>

      <Footer language={language} />
    </div>
  );
}
