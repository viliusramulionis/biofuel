import React, { useState, useEffect } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  Building2,
  Copy,
  Check,
  RotateCcw,
  ShieldCheck,
  MessageSquare,
} from 'lucide-react';
import { Language, InquiryFormData } from '../types';
import { translations } from '../data/content';

interface ContactSectionProps {
  language: Language;
  prefilledFleetInfo?: string;
  prefilledProduct?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  language,
  prefilledFleetInfo,
  prefilledProduct,
}) => {
  const t = translations[language].contactSection;

  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    inquiryType: 'fleet_fuel',
    fleetSize: '',
    message: '',
    consent: false,
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [copiedRef, setCopiedRef] = useState(false);

  // Sync prefilled data if passed from calculator or product section
  useEffect(() => {
    if (prefilledFleetInfo) {
      setFormData((prev) => ({
        ...prev,
        inquiryType: 'fleet_fuel',
        fleetSize: prefilledFleetInfo,
        message: prev.message || (language === 'en'
          ? `We are interested in evaluating Baltic HVO100 fuel for our fleet: ${prefilledFleetInfo}. Please provide a wholesale trial proposal.`
          : `Domimės „Baltic HVO100“ degalų išbandymu mūsų autoparkui: ${prefilledFleetInfo}. Prašome pateikti didmeninio tiekimo pasiūlymą.`),
      }));
    }
  }, [prefilledFleetInfo, language]);

  useEffect(() => {
    if (prefilledProduct) {
      setFormData((prev) => ({
        ...prev,
        message: prev.message
          ? `${prev.message} | Product: ${prefilledProduct}`
          : (language === 'en'
              ? `We would like to request commercial specifications and bulk supply availability for: ${prefilledProduct}.`
              : `Norėtume gauti komercinę specifikaciją ir didmeninio tiekimo sąlygas produktui: ${prefilledProduct}.`),
      }));
    }
  }, [prefilledProduct, language]);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = language === 'en' ? 'Full name is required' : 'Vardas ir pavardė yra privalomi';
    }
    if (!formData.email.trim()) {
      newErrors.email = language === 'en' ? 'Work email is required' : 'El. paštas yra privalomas';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = language === 'en' ? 'Please enter a valid email address' : 'Neteisingas el. pašto formatas';
    }
    if (!formData.companyName.trim()) {
      newErrors.companyName = language === 'en' ? 'Company name is required' : 'Įmonės pavadinimas yra privalomas';
    }
    if (!formData.message.trim() || formData.message.length < 10) {
      newErrors.message =
        language === 'en'
          ? 'Please enter at least 10 characters explaining your inquiry'
          : 'Prašome pateikti bent 10 simbolių paaiškinantį pranešimą';
    }
    if (!formData.consent) {
      newErrors.consent =
        language === 'en'
          ? 'You must accept the data processing terms'
          : 'Privalote sutikti su duomenų tvarkymu';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate brief processing
    setTimeout(() => {
      setIsSubmitting(false);
      const generatedRef = `LT-BIO-2026-${Math.floor(1000 + Math.random() * 9000)}`;
      setSubmittedRef(generatedRef);
    }, 600);
  };

  const handleCopyRef = () => {
    if (submittedRef) {
      navigator.clipboard.writeText(submittedRef);
      setCopiedRef(true);
      setTimeout(() => setCopiedRef(false), 2000);
    }
  };

  const handleResetForm = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      companyName: '',
      inquiryType: 'fleet_fuel',
      fleetSize: '',
      message: '',
      consent: false,
    });
    setErrors({});
    setSubmittedRef(null);
  };

  const applyTemplate = (tmpl: string) => {
    let text = '';
    if (tmpl.includes('Trial') || tmpl.includes('bandym')) {
      text =
        language === 'en'
          ? 'We would like to request an introductory 5,000L - 10,000L batch trial of Baltic HVO100 for our heavy transport fleet to test fuel economy and cold-start performance.'
          : 'Norėtume užsakyti bandomąją 5 000 l – 10 000 l „Baltic HVO100“ partiją savo krovinių autoparkui patikrinti kuro sąnaudas ir variklio darbą žiemą.';
      setFormData((prev) => ({ ...prev, inquiryType: 'fleet_fuel', message: text }));
    } else if (tmpl.includes('Biomass') || tmpl.includes('atliek')) {
      text =
        language === 'en'
          ? 'We are a certified forestry / timber mill / agricultural enterprise in Lithuania and have available volumes of clean sawmill residues/straw for sustainable biofuel processing.'
          : 'Esame sertifikuota medienos apdirbimo / žemės ūkio įmonė Lietuvoje ir turime švarių pjuvenų / šiaudų atliekų, kurias galime tiekti biokuro gamybai.';
      setFormData((prev) => ({ ...prev, inquiryType: 'feedstock', message: text }));
    } else {
      text =
        language === 'en'
          ? 'Please provide your current wholesale bulk contract pricing schedule for delivery across Lithuania and Baltic transit corridors.'
          : 'Prašome pateikti didmeninių kuro sutarčių kainyną ir pristatymo sąlygas Lietuvos bei Baltijos šalių transporto koridoriuose.';
      setFormData((prev) => ({ ...prev, inquiryType: 'fleet_fuel', message: text }));
    }
  };

  return (
    <section id="contact-section" className="py-20 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBF3ED] text-[#143826] text-xs font-semibold uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5 text-[#2F7E55]" />
            <span>{t.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#143826]">
            {t.title}
          </h2>
          <p className="text-base sm:text-lg text-[#526658] leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Office Details & Baltic Footprint */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Headquarters Card */}
            <div className="bg-white rounded-2xl p-6 border border-[#DCE5DE] shadow-xs space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#E8F2EC] flex items-center justify-center text-[#143826]">
                  <Building2 className="w-5 h-5 text-[#1B4D36]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#143826] text-base">{t.hqTitle}</h3>
                  <p className="text-xs text-[#526658]">Vilnius Innovation Hub</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-[#314336] leading-relaxed">
                <MapPin className="w-4 h-4 text-[#2F7E55] shrink-0 mt-0.5" />
                <span>{t.hqAddress}</span>
              </div>
            </div>

            {/* Production Terminal Card */}
            <div className="bg-white rounded-2xl p-6 border border-[#DCE5DE] shadow-xs space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#E8F2EC] flex items-center justify-center text-[#143826]">
                  <MapPin className="w-5 h-5 text-[#0284C7]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#143826] text-base">{t.terminalTitle}</h3>
                  <p className="text-xs text-[#526658]">Port of Klaipėda Seaport Zone</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-[#314336] leading-relaxed">
                <MapPin className="w-4 h-4 text-[#0284C7] shrink-0 mt-0.5" />
                <span>{t.terminalAddress}</span>
              </div>
            </div>

            {/* Direct Commercial Desk Card */}
            <div className="bg-white rounded-2xl p-6 border border-[#DCE5DE] shadow-xs space-y-3.5">
              <h3 className="font-bold text-[#143826] text-sm flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#2F7E55]" />
                <span>{t.directContact}</span>
              </h3>
              
              <div className="space-y-2 text-xs text-[#314336]">
                <div className="flex items-center justify-between py-1 border-b border-[#F0F4F1]">
                  <span className="text-[#667A6C]">{language === 'en' ? 'Direct Email' : 'El. paštas'}:</span>
                  <a
                    href={`mailto:${t.email}`}
                    className="font-semibold text-[#143826] hover:text-[#2F7E55] transition-colors"
                  >
                    {t.email}
                  </a>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-[#F0F4F1]">
                  <span className="text-[#667A6C]">{language === 'en' ? 'Commercial Phone' : 'Telefonas'}:</span>
                  <a
                    href={`tel:${t.phone.replace(/\s+/g, '')}`}
                    className="font-semibold text-[#143826] hover:text-[#2F7E55] transition-colors"
                  >
                    {t.phone}
                  </a>
                </div>
                <div className="flex items-center justify-between py-1">
                  <span className="text-[#667A6C] flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#526658]" />
                    <span>{language === 'en' ? 'Working Hours' : 'Darbo laikas'}:</span>
                  </span>
                  <span className="font-medium text-[#143826]">{t.hours}</span>
                </div>
              </div>

              <div className="pt-2 text-[11px] text-[#2F7E55] flex items-center gap-1.5 font-medium">
                <ShieldCheck className="w-4 h-4" />
                <span>
                  {language === 'en'
                    ? '24-hour response guarantee on all commercial fleet inquiries'
                    : 'Garantuotas atsakymas per 24 darbo valandas'}
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Inquiry Form or Submission State */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-7 sm:p-9 border border-[#DCE5DE] shadow-sm">
              
              {submittedRef ? (
                /* Success Confirmation State */
                <div id="inquiry-success-view" className="py-8 text-center space-y-6">
                  <div className="w-16 h-16 rounded-full bg-[#E8F2EC] border border-[#C5DEC9] text-[#143826] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8 text-[#2F7E55]" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-[#143826]">
                      {t.successTitle}
                    </h3>
                    <p className="text-sm text-[#526658] max-w-md mx-auto leading-relaxed">
                      {t.successMessage}
                    </p>
                  </div>

                  {/* Reference ID Pill */}
                  <div className="inline-flex items-center gap-3 bg-[#FAF9F6] border border-[#DCE5DE] px-4 py-2.5 rounded-xl text-sm">
                    <span className="text-[#667A6C]">{t.refNumber}:</span>
                    <span className="font-mono font-bold text-[#143826]">{submittedRef}</span>
                    <button
                      type="button"
                      onClick={handleCopyRef}
                      className="p-1.5 text-[#526658] hover:text-[#143826] rounded-md transition-colors cursor-pointer"
                      title="Copy Reference ID"
                    >
                      {copiedRef ? <Check className="w-4 h-4 text-[#2F7E55]" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>

                  <div className="p-4 bg-[#F8FAF8] rounded-xl border border-[#E3EAE4] text-xs text-[#526658] max-w-md mx-auto">
                    <p className="font-semibold text-[#143826] mb-1">
                      {language === 'en' ? 'Submitted Parameters' : 'Pateikti duomenys'}:
                    </p>
                    <p>
                      <strong>{formData.companyName}</strong> · {formData.email}
                    </p>
                    {formData.fleetSize && <p className="mt-1">{formData.fleetSize}</p>}
                  </div>

                  <div>
                    <button
                      id="submit-another-btn"
                      type="button"
                      onClick={handleResetForm}
                      className="inline-flex items-center gap-2 bg-[#FAF9F6] hover:bg-[#EAEFEA] text-[#143826] border border-[#CBD9CE] font-semibold py-2.5 px-5 rounded-xl text-sm transition-colors cursor-pointer"
                    >
                      <RotateCcw className="w-4 h-4" />
                      <span>{t.sendAnother}</span>
                    </button>
                  </div>
                </div>
              ) : (
                /* Inquiry Form */
                <form id="contact-inquiry-form" onSubmit={handleSubmit} className="space-y-6" noValidate>
                  
                  <div className="border-b border-[#EEF2EF] pb-4">
                    <h3 className="text-xl font-bold text-[#143826]">{t.formTitle}</h3>
                    <p className="text-xs text-[#526658] mt-0.5">
                      {language === 'en'
                        ? 'Connect with our procurement and supply engineering team in Lithuania.'
                        : 'Susisiekite su mūsų tiekimo ir inžinerijos komanda Lietuvoje.'}
                    </p>
                  </div>

                  {/* Quick preset template chips */}
                  <div>
                    <span className="text-xs font-semibold text-[#667A6C] block mb-2">
                      {language === 'en' ? 'Quick Inquiry Prompts:' : 'Greiti užklausos šablonai:'}
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {t.quickTemplates.map((tmpl, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => applyTemplate(tmpl)}
                          className="text-xs py-1 px-2.5 rounded-lg bg-[#FAF9F6] hover:bg-[#EAEFEA] border border-[#DCE5DE] text-[#314336] transition-colors cursor-pointer"
                        >
                          + {tmpl}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Inquiry Type Radio / Selector */}
                  <div className="space-y-2">
                    <label className="block text-xs font-semibold text-[#143826]">
                      {t.inquiryTypeLabel}
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {(['fleet_fuel', 'feedstock', 'investment', 'general'] as const).map((type) => (
                        <label
                          key={type}
                          className={`flex items-start gap-2.5 p-3 rounded-xl border text-xs cursor-pointer transition-all ${
                            formData.inquiryType === type
                              ? 'bg-[#EBF3ED] border-[#2F7E55] text-[#143826] font-semibold'
                              : 'bg-white border-[#E3E8E3] text-[#526658] hover:bg-[#FAF9F6]'
                          }`}
                        >
                          <input
                            type="radio"
                            name="inquiryType"
                            value={type}
                            checked={formData.inquiryType === type}
                            onChange={() => setFormData({ ...formData, inquiryType: type })}
                            className="mt-0.5 accent-[#143826]"
                          />
                          <span className="leading-tight">{t.types[type]}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* 2 Column: Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label htmlFor="input-fullName" className="block text-xs font-semibold text-[#143826]">
                        {t.nameLabel} <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="input-fullName"
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder={language === 'en' ? 'Jonas Kazlauskas' : 'Vardas Pavardė'}
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-[#143826] bg-[#FAF9F6] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#143826] transition-colors ${
                          errors.fullName ? 'border-red-500' : 'border-[#CBD9CE]'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-[11px] text-red-600 flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3 h-3" /> {errors.fullName}
                        </p>
                      )}
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="input-email" className="block text-xs font-semibold text-[#143826]">
                        {t.emailLabel} <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="input-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="jonas@imone.lt"
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-[#143826] bg-[#FAF9F6] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#143826] transition-colors ${
                          errors.email ? 'border-red-500' : 'border-[#CBD9CE]'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-600 flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* 2 Column: Company and Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label htmlFor="input-companyName" className="block text-xs font-semibold text-[#143826]">
                        {t.companyLabel} <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="input-companyName"
                        type="text"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder={language === 'en' ? 'Baltic Cargo Logistics UAB' : 'UAB „Transporto Lyderis“'}
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-[#143826] bg-[#FAF9F6] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#143826] transition-colors ${
                          errors.companyName ? 'border-red-500' : 'border-[#CBD9CE]'
                        }`}
                      />
                      {errors.companyName && (
                        <p className="text-[11px] text-red-600 flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3 h-3" /> {errors.companyName}
                        </p>
                      )}
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="input-phone" className="block text-xs font-semibold text-[#143826]">
                        {t.phoneLabel}
                      </label>
                      <input
                        id="input-phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+370 600 00000"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#CBD9CE] text-sm text-[#143826] bg-[#FAF9F6] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#143826] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Fleet Size / Volume helper */}
                  <div className="space-y-1">
                    <label htmlFor="input-fleetSize" className="block text-xs font-semibold text-[#143826]">
                      {t.fleetSizeLabel}
                    </label>
                    <input
                      id="input-fleetSize"
                      type="text"
                      value={formData.fleetSize || ''}
                      onChange={(e) => setFormData({ ...formData, fleetSize: e.target.value })}
                      placeholder={language === 'en' ? 'e.g. 20 Euro 6 trucks / approx 400,000 L annually' : 'pvz. 20 vilkikų / apie 400 000 l per metus'}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#CBD9CE] text-sm text-[#143826] bg-[#FAF9F6] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#143826] transition-colors"
                    />
                  </div>

                  {/* Message Input */}
                  <div className="space-y-1">
                    <label htmlFor="input-message" className="block text-xs font-semibold text-[#143826]">
                      {t.messageLabel} <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="input-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={
                        language === 'en'
                          ? 'Describe your requirements, depot delivery location, or feedstock availability...'
                          : 'Aprašykite kuro poreikį, pristatymo bazę ar siūlomą tiekti biomasę...'
                      }
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-[#143826] bg-[#FAF9F6] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#143826] transition-colors ${
                        errors.message ? 'border-red-500' : 'border-[#CBD9CE]'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-red-600 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3 h-3" /> {errors.message}
                      </p>
                    )}
                  </div>

                  {/* GDPR Consent */}
                  <div className="space-y-1">
                    <label className="flex items-start gap-2.5 cursor-pointer">
                      <input
                        type="checkbox"
                        id="input-consent"
                        checked={formData.consent}
                        onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                        className="mt-1 accent-[#143826]"
                      />
                      <span className="text-xs text-[#526658] leading-relaxed">
                        {t.consentLabel}
                      </span>
                    </label>
                    {errors.consent && (
                      <p className="text-[11px] text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.consent}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    id="submit-inquiry-button"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#143826] hover:bg-[#1B4D36] text-white py-3.5 px-6 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span>{t.submitting}</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-[#86EFAC]" />
                        <span>{t.submitBtn}</span>
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
