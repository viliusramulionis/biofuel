import React, { useState, useId } from 'react';
import {
  TrendingDown,
  Wind,
  Recycle,
  TreeDeciduous,
  Calculator,
  ArrowRight,
  Sparkles,
  Scale,
  Shield,
  FileCheck2,
} from 'lucide-react';
import { Language } from '../types';
import { translations, sustainabilityMetrics } from '../data/content';

interface MetricsSectionProps {
  language: Language;
  onApplyFleetSizeToInquiry: (fleetInfo: string) => void;
}

export const MetricsSection: React.FC<MetricsSectionProps> = ({
  language,
  onApplyFleetSizeToInquiry,
}) => {
  const t = translations[language].metricsSection;
  const fleetSizeInputId = useId();
  const annualKmInputId = useId();
  const consumptionInputId = useId();

  // Calculator State
  const [fleetSize, setFleetSize] = useState<number>(15);
  const [annualKm, setAnnualKm] = useState<number>(90000);
  const [consumptionL100km, setConsumptionL100km] = useState<number>(30); // 30 L/100km typical heavy truck

  // Calculations
  // Total liters of diesel per year = fleetSize * (annualKm / 100) * consumptionL100km
  const totalAnnualLiters = Math.round(fleetSize * (annualKm / 100) * consumptionL100km);
  
  // Standard fossil diesel emissions factor: ~3.15 kg CO2e per liter (well-to-wheel)
  // Baltic HVO100 achieves 88% reduction = saving 88% of 3.15 = ~2.77 kg CO2e saved per liter
  const co2AvoidedTons = Math.round((totalAnnualLiters * 2.772) / 1000);

  // 1 mature pine/oak tree absorbs approx 22 kg CO2 per year = ~45 trees per ton of CO2
  const equivalentTrees = Math.round(co2AvoidedTons * 45.4);

  // EU ETS / Carbon border & fleet carbon tax avoidance estimate (€85/ton)
  const carbonCostSavedEur = Math.round(co2AvoidedTons * 85);

  const handleTransferToForm = () => {
    const info =
      language === 'en'
        ? `${fleetSize} vehicles (${annualKm.toLocaleString()} km/yr, ~${totalAnnualLiters.toLocaleString()} L/yr)`
        : `${fleetSize} vnt. transporto (${annualKm.toLocaleString()} km/metus, ~${totalAnnualLiters.toLocaleString()} l/metus)`;
    onApplyFleetSizeToInquiry(info);
  };

  return (
    <section id="sustainability-metrics" className="py-20 bg-white border-b border-[#E3E8E3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBF3ED] text-[#143826] text-xs font-semibold uppercase tracking-wider">
            <Shield className="w-3.5 h-3.5 text-[#2F7E55]" />
            <span>{t.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#143826]">
            {t.title}
          </h2>
          <p className="text-base sm:text-lg text-[#526658] leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {sustainabilityMetrics.map((metric) => {
            const label = language === 'en' ? metric.labelEn : metric.labelLt;
            const sub = language === 'en' ? metric.subEn : metric.subLt;

            return (
              <div
                key={metric.id}
                id={`metric-${metric.id}`}
                className={`p-6 rounded-2xl border transition-all hover:shadow-md relative flex flex-col justify-between ${
                  metric.highlight
                    ? 'bg-[#143826] text-white border-[#143826]'
                    : 'bg-[#FAF9F6] text-[#143826] border-[#DCE5DE]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    {metric.id === 'ghg_reduction' && (
                      <div className={`p-2 rounded-xl ${metric.highlight ? 'bg-[#235339] text-[#86EFAC]' : 'bg-[#EBF3ED] text-[#2F7E55]'}`}>
                        <TrendingDown className="w-5 h-5" />
                      </div>
                    )}
                    {metric.id === 'particulate_reduction' && (
                      <div className="p-2 rounded-xl bg-[#EBF3ED] text-[#2F7E55]">
                        <Wind className="w-5 h-5" />
                      </div>
                    )}
                    {metric.id === 'feedstock_waste' && (
                      <div className="p-2 rounded-xl bg-[#EBF3ED] text-[#2F7E55]">
                        <Recycle className="w-5 h-5" />
                      </div>
                    )}
                    {metric.id === 'capacity' && (
                      <div className="p-2 rounded-xl bg-[#EBF3ED] text-[#2F7E55]">
                        <Scale className="w-5 h-5" />
                      </div>
                    )}

                    <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${
                      metric.highlight
                        ? 'bg-[#235339] text-[#86EFAC] border border-[#2F7E55]'
                        : 'bg-[#EAEFEA] text-[#526658]'
                    }`}>
                      {language === 'en' ? 'Verified' : 'Audituota'}
                    </span>
                  </div>

                  <div className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-2">
                    {metric.value}
                  </div>

                  <h3 className={`text-base font-bold mb-1.5 ${metric.highlight ? 'text-white' : 'text-[#143826]'}`}>
                    {label}
                  </h3>
                </div>

                <p className={`text-xs leading-relaxed mt-3 pt-3 border-t ${
                  metric.highlight
                    ? 'text-[#C5DEC9] border-[#235339]'
                    : 'text-[#667A6C] border-[#E3EAE4]'
                }`}>
                  {sub}
                </p>
              </div>
            );
          })}
        </div>

        {/* Audit & Compliance Transparency Callout */}
        <div className="mb-20 p-5 sm:p-6 rounded-2xl bg-[#F4F8F5] border border-[#D5E4D8] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-[#E2EDE5] text-[#143826] shrink-0 mt-0.5">
              <FileCheck2 className="w-5 h-5 text-[#2F7E55]" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#143826]">
                {language === 'en'
                  ? 'ISCC EU Certified Chain-of-Custody (Mass Balance System)'
                  : 'ISCC EU sertifikuota kilmės grandinė (Masės balanso sistema)'}
              </h4>
              <p className="text-xs text-[#526658] mt-0.5 max-w-2xl leading-relaxed">
                {language === 'en'
                  ? 'Every batch refined at Klaipėda is assigned a digital Proof of Sustainability (PoS) certificate detailing feedstock batch origins, transport greenhouse gas footprints, and specific RED III greenhouse gas avoidance ratios.'
                  : 'Kiekviena Klaipėdoje perdirbta partija turi skaitmeninį Tvarumo įrodymo (PoS) sertifikatą, nurodantį žaliavų kilmę, gamybos emisijas bei tikslų RED III šiltnamio efektą sukeliančių dujų sutaupymą.'}
              </p>
            </div>
          </div>
          <div className="shrink-0 flex items-center gap-2 text-xs font-semibold text-[#143826] bg-white px-3.5 py-2 rounded-lg border border-[#CBD9CE]">
            <span>Cert ID: ISCC-EU-LT-2026-0841</span>
          </div>
        </div>

        {/* Interactive Fleet Sustainability Calculator */}
        <div
          id="fleet-calculator"
          className="bg-[#FAF9F6] rounded-3xl border border-[#DCE5DE] p-6 sm:p-10 shadow-sm"
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-[#E3EAE4] pb-8 mb-8">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#E8F2EC] text-[#143826] text-xs font-semibold mb-2">
                <Calculator className="w-3.5 h-3.5 text-[#2F7E55]" />
                <span>{language === 'en' ? 'Interactive Tool' : 'Interaktyvus įrankis'}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#143826]">
                {t.calculatorTitle}
              </h3>
              <p className="text-sm text-[#526658] mt-1 max-w-xl">
                {t.calculatorDesc}
              </p>
            </div>
            
            <div className="flex items-center gap-2 self-start lg:self-auto bg-white px-3.5 py-2 rounded-xl border border-[#D5E0D7] text-xs text-[#264431]">
              <Sparkles className="w-4 h-4 text-[#C68936]" />
              <span className="font-medium">
                {language === 'en' ? 'Based on 88% WTW Diesel Abatement' : 'Paremtas 88% WTW dyzelino mažinimu'}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Input Controls */}
            <div className="lg:col-span-5 space-y-6 bg-white p-6 rounded-2xl border border-[#E3E8E3]">
              
              {/* Fleet Size Input */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <label htmlFor={fleetSizeInputId} className="font-semibold text-[#143826]">
                    {t.fleetLabel}
                  </label>
                  <span className="font-bold text-[#2F7E55]">{fleetSize} {language === 'en' ? 'vehicles' : 'vnt.'}</span>
                </div>
                <input
                  id={fleetSizeInputId}
                  type="range"
                  min={1}
                  max={150}
                  step={1}
                  value={fleetSize}
                  onChange={(e) => setFleetSize(Number(e.target.value))}
                  className="w-full accent-[#143826] cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-[#667A6C]">
                  <span>1 vehicle</span>
                  <span>50</span>
                  <span>100</span>
                  <span>150+</span>
                </div>
              </div>

              {/* Annual Mileage Slider */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <label htmlFor={annualKmInputId} className="font-semibold text-[#143826]">
                    {t.distanceLabel}
                  </label>
                  <span className="font-bold text-[#2F7E55]">{annualKm.toLocaleString()} km</span>
                </div>
                <input
                  id={annualKmInputId}
                  type="range"
                  min={20000}
                  max={160000}
                  step={5000}
                  value={annualKm}
                  onChange={(e) => setAnnualKm(Number(e.target.value))}
                  className="w-full accent-[#143826] cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-[#667A6C]">
                  <span>20,000 km (Regional)</span>
                  <span>90,000 km</span>
                  <span>160,000 km (Long-haul)</span>
                </div>
              </div>

              {/* Consumption Preset Selector */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <label htmlFor={consumptionInputId} className="font-semibold text-[#143826]">
                    {language === 'en' ? 'Average Fuel Consumption' : 'Vidutinės kuro sąnaudos'}
                  </label>
                  <span className="font-bold text-[#2F7E55]">{consumptionL100km} L/100km</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setConsumptionL100km(24)}
                    className={`py-1.5 px-2 text-xs font-semibold rounded-lg border transition-colors cursor-pointer ${
                      consumptionL100km === 24
                        ? 'bg-[#143826] text-white border-[#143826]'
                        : 'bg-[#FAF9F6] text-[#314336] border-[#DCE5DE] hover:bg-[#EAEFEA]'
                    }`}
                  >
                    24 L/100km <span className="block text-[10px] font-normal opacity-80">{language === 'en' ? 'Bus/Rigid' : 'Autobusas'}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setConsumptionL100km(30)}
                    className={`py-1.5 px-2 text-xs font-semibold rounded-lg border transition-colors cursor-pointer ${
                      consumptionL100km === 30
                        ? 'bg-[#143826] text-white border-[#143826]'
                        : 'bg-[#FAF9F6] text-[#314336] border-[#DCE5DE] hover:bg-[#EAEFEA]'
                    }`}
                  >
                    30 L/100km <span className="block text-[10px] font-normal opacity-80">{language === 'en' ? 'Semi-truck' : 'Vilkikas'}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setConsumptionL100km(36)}
                    className={`py-1.5 px-2 text-xs font-semibold rounded-lg border transition-colors cursor-pointer ${
                      consumptionL100km === 36
                        ? 'bg-[#143826] text-white border-[#143826]'
                        : 'bg-[#FAF9F6] text-[#314336] border-[#DCE5DE] hover:bg-[#EAEFEA]'
                    }`}
                  >
                    36 L/100km <span className="block text-[10px] font-normal opacity-80">{language === 'en' ? 'Heavy / Timber' : 'Sunkus/Miškavežis'}</span>
                  </button>
                </div>
                <input
                  id={consumptionInputId}
                  type="range"
                  min={18}
                  max={45}
                  step={1}
                  value={consumptionL100km}
                  onChange={(e) => setConsumptionL100km(Number(e.target.value))}
                  className="w-full accent-[#143826] cursor-pointer mt-1"
                />
              </div>

              <div className="pt-2 text-[11px] text-[#667A6C] border-t border-[#EEF2EF]">
                {language === 'en'
                  ? 'Based on certified Baltic Biofuels laboratory analyses comparing fossil ultra-low sulfur diesel vs HVO100 density and calorific properties.'
                  : 'Parengta pagal „Baltic Biofuels“ laboratorinius tyrimus, lyginant iškastinį dyzeliną su HVO100 tankiu ir kaloringumu.'}
              </div>
            </div>

            {/* Real-Time Calculated Results */}
            <div className="lg:col-span-7 bg-[#143826] text-white p-7 rounded-2xl shadow-sm space-y-6 flex flex-col justify-between">
              
              <div>
                <div className="flex items-center justify-between border-b border-[#235339] pb-4 mb-6">
                  <div>
                    <h4 className="font-bold text-lg text-[#F2F7F3]">{t.resultTitle}</h4>
                    <p className="text-xs text-[#A3C8B0]">
                      {language === 'en' ? 'Annual fleet decarbonization summary' : 'Metinė autoparko dekarbonizacijos suvestinė'}
                    </p>
                  </div>
                  <span className="px-2.5 py-1 text-xs font-bold bg-[#235339] text-[#86EFAC] rounded-full border border-[#2F7E55]">
                    {fleetSize} {language === 'en' ? 'Trucks' : 'Vilkikai'}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Metric 1: CO2 Avoided */}
                  <div className="p-4 rounded-xl bg-[#1C4B33] border border-[#2F7E55]/60 space-y-1">
                    <div className="flex items-center gap-1.5 text-[#86EFAC] text-xs font-semibold uppercase tracking-wider">
                      <TrendingDown className="w-4 h-4" />
                      <span>{t.co2Saved}</span>
                    </div>
                    <div className="text-3xl font-extrabold text-white">
                      {co2AvoidedTons.toLocaleString()}{' '}
                      <span className="text-lg font-normal text-[#A3C8B0]">t CO₂e</span>
                    </div>
                    <p className="text-[11px] text-[#A3C8B0]">
                      {language === 'en' ? 'Directly subtracted from Scope 1 emissions' : 'Tiesiogiai sumažina 1 apimties (Scope 1) emisijas'}
                    </p>
                  </div>

                  {/* Metric 2: Fossil Diesel Displaced */}
                  <div className="p-4 rounded-xl bg-[#1C4B33] border border-[#2F7E55]/60 space-y-1">
                    <div className="flex items-center gap-1.5 text-[#86EFAC] text-xs font-semibold uppercase tracking-wider">
                      <Recycle className="w-4 h-4" />
                      <span>{t.dieselDisplaced}</span>
                    </div>
                    <div className="text-3xl font-extrabold text-white">
                      {totalAnnualLiters.toLocaleString()}{' '}
                      <span className="text-lg font-normal text-[#A3C8B0]">L</span>
                    </div>
                    <p className="text-[11px] text-[#A3C8B0]">
                      {language === 'en' ? 'Replaced 1-to-1 with Baltic HVO100' : '1 prie 1 pakeičiama „Baltic HVO100“ degalais'}
                    </p>
                  </div>

                  {/* Metric 3: Trees Equivalent */}
                  <div className="p-4 rounded-xl bg-[#1C4B33] border border-[#2F7E55]/60 space-y-1">
                    <div className="flex items-center gap-1.5 text-[#86EFAC] text-xs font-semibold uppercase tracking-wider">
                      <TreeDeciduous className="w-4 h-4" />
                      <span>{t.treeEquiv}</span>
                    </div>
                    <div className="text-3xl font-extrabold text-white">
                      {equivalentTrees.toLocaleString()}
                    </div>
                    <p className="text-[11px] text-[#A3C8B0]">
                      {language === 'en' ? 'Equivalent annual forest sequestration' : 'Atitinka metinę miško CO₂ absorbciją'}
                    </p>
                  </div>

                  {/* Metric 4: ETS Penalty Saved */}
                  <div className="p-4 rounded-xl bg-[#1C4B33] border border-[#2F7E55]/60 space-y-1">
                    <div className="flex items-center gap-1.5 text-[#FDE68A] text-xs font-semibold uppercase tracking-wider">
                      <Scale className="w-4 h-4" />
                      <span>{t.penaltySaved}</span>
                    </div>
                    <div className="text-3xl font-extrabold text-[#FDE68A]">
                      ~€{carbonCostSavedEur.toLocaleString()}
                    </div>
                    <p className="text-[11px] text-[#A3C8B0]">
                      {language === 'en' ? 'Estimated EU ETS2 future carbon levy shield' : 'Apsauga nuo būsimų ES ETS2 taršos mokesčių'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action from Calculator */}
              <div className="pt-3">
                <button
                  id="calc-apply-to-form-btn"
                  type="button"
                  onClick={handleTransferToForm}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#2F7E55] hover:bg-[#389464] text-white font-semibold py-3 px-5 rounded-xl transition-all shadow-sm cursor-pointer"
                >
                  <span>{t.calculatorCta}</span>
                  <ArrowRight className="w-4 h-4 text-[#86EFAC]" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
