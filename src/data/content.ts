import { Language, MetricItem } from '../types';

export const sustainabilityMetrics: MetricItem[] = [
  {
    id: 'ghg_reduction',
    value: '-88%',
    labelEn: 'Lifecycle CO₂e Reduction',
    labelLt: 'CO₂e emisijų sumažinimas gyvavimo cikle',
    subEn: 'Certified vs. standard fossil diesel under EU RED III directive',
    subLt: 'Sertifikuota pagal ES RED III direktyvą lyginant su iškastiniu dyzelinu',
    highlight: true,
  },
  {
    id: 'particulate_reduction',
    value: '-99.4%',
    labelEn: 'Particulate Matter Drop',
    labelLt: 'Kietųjų dalelių sumažėjimas',
    subEn: 'Drastically cleaner air for Vilnius, Kaunas & Klaipėda transit corridors',
    subLt: 'Švaresnis oras Vilniaus, Kauno ir Klaipėdos transporto koridoriuose',
  },
  {
    id: 'feedstock_waste',
    value: '100%',
    labelEn: 'Non-Food Residual Feedstock',
    labelLt: 'Ne maistinės paskirties atliekinė biomasė',
    subEn: 'Exclusively Baltic timber residues, straw & organic processing byproducts',
    subLt: 'Išskirtinai Baltijos šalių medienos atraižos, šiaudai ir perdirbimo liekanos',
  },
  {
    id: 'capacity',
    value: '142k MT',
    labelEn: 'Annual Carbon Avoidance',
    labelLt: 'Metinis išvengto CO₂ kiekis',
    subEn: 'Projected capacity at Klaipėda pilot biorefinery facility by 2027',
    subLt: 'Planuojamas pajėgumas Klaipėdos bandomojoje biorafinavimo gamykloje iki 2027 m.',
  },
];

export const translations = {
  en: {
    nav: {
      about: 'About',
      metrics: 'Sustainability',
      calculator: 'Emissions Calculator',
      products: 'Products',
      process: 'Feedstock & Tech',
      contact: 'Contact Us',
      inquireBtn: 'Request Supply Quote',
    },
    hero: {
      badge: 'Lithuania’s Clean Fuel Pioneer · Klaipėda & Vilnius',
      titleStart: 'Decarbonizing Baltic fleets with',
      titleHighlight: '2nd-Generation Biofuel',
      description:
        'Baltic Biofuels converts locally sourced Lithuanian agricultural and forestry residues into ultra-low-carbon HVO100 diesel and biomethane. 100% drop-in ready for current diesel engines down to -32°C.',
      ctaPrimary: 'Calculate Fleet Savings',
      ctaSecondary: 'Partner With Us',
      certifications: ['ISCC EU Certified', 'RED III Compliant', 'EN 15940 Standard', 'Klaipėda Clean Port Partner'],
    },
    metricsSection: {
      tag: 'Environmental Integrity',
      title: 'Measurable, Audited Sustainability',
      subtitle:
        'Every liter of our fuel traces back to certified sustainable residuals. We adhere strictly to the EU Renewable Energy Directive III with full digital traceability.',
      calculatorTitle: 'Fleet Carbon & Cost Impact Calculator',
      calculatorDesc:
        'Estimate your transport fleet’s emissions reduction and fossil displacement by switching to Baltic HVO100.',
      fleetLabel: 'Fleet Size (Heavy Goods Vehicles / Buses)',
      distanceLabel: 'Average Annual Mileage per Vehicle (km)',
      resultTitle: 'Projected Annual Environmental Savings',
      co2Saved: 'Metric Tons CO₂e Avoided',
      dieselDisplaced: 'Liters Fossil Diesel Displaced',
      treeEquiv: 'Equivalent Mature Trees Planted',
      penaltySaved: 'Estimated EU ETS / Carbon Cost Shielded',
      calculatorCta: 'Request Custom Fleet Transition Study',
    },
    productsSection: {
      tag: 'Our Biofuel Portfolio',
      title: 'Direct Replacement for Fossil Fuels',
      subtitle:
        'No engine conversions. No infrastructure rebuilds. Immediate compliance with net-zero transport mandates.',
      hvoTitle: 'Baltic HVO100 (Hydrotreated Vegetable Oil)',
      hvoDesc:
        'Premium paraffinic synthetic renewable diesel synthesized from non-food waste oils and tall oil fatty acids. Exceeds standard diesel cetane value (>70).',
      hvoSpecs: [
        'Cloud point / Cold Filter Plugging: Down to -32°C Arctic Grade',
        'Cetane rating: 70–80 (superior combustion efficiency)',
        'Storage stability: Over 2 years without bacterial degradation',
        'Direct 100% drop-in replacement (standard EN 15940)',
      ],
      biomethaneTitle: 'Bio-CNG & Bio-LNG (Refined Biomethane)',
      biomethaneDesc:
        'Upgraded biomethane generated through anaerobic digestion of agro-industrial slurry and straw cellulose, purified to 98.5% CH₄.',
      biomethaneSpecs: [
        'Purity: >98.5% Methane (exceeds EN 16723 standard)',
        'Ideal for municipal transit buses and regional delivery haulers',
        'Direct pipeline grid injection and dedicated filling terminals',
        'Near-zero sulfur & NOx emission profiles',
      ],
    },
    processSection: {
      tag: 'Circular Economy Flow',
      title: 'Rooted in Baltic Agriculture & Forestry',
      subtitle:
        'We never compete with food crops or natural old-growth ecosystems. We unlock high-energy potential from existing residual streams.',
      steps: [
        {
          num: '01',
          title: 'Local Residual Sourcing',
          desc: 'Partnering directly with Lithuanian grain farmers, sawmills, and food processors for certified residues and non-edible oils.',
        },
        {
          num: '02',
          title: 'Advanced Hydro-processing',
          desc: 'Catalytic hydrotreatment removes oxygen and impurities, creating pure hydrocarbon chains chemically identical to premium diesel.',
        },
        {
          num: '03',
          title: 'Klaipėda Logistics Hub',
          desc: 'Strategically refined and stored at our Klaipėda port terminal for rapid distribution across Lithuania and Baltic maritime corridors.',
        },
        {
          num: '04',
          title: 'Immediate Fleet Decarbonization',
          desc: 'Delivered directly to commercial logistics depots, municipal transport depots, and retail fuel networks without fleet modifications.',
        },
      ],
    },
    contactSection: {
      tag: 'Partner With Us',
      title: 'Ready to Power Your Transition?',
      subtitle:
        'Whether you manage a commercial fleet, supply organic residual biomass, or explore institutional supply agreements, our Lithuanian engineering team is ready.',
      formTitle: 'Submit an Inquiry',
      nameLabel: 'Full Name',
      emailLabel: 'Work Email Address',
      phoneLabel: 'Phone Number (Optional)',
      companyLabel: 'Company / Organization',
      inquiryTypeLabel: 'Inquiry Category',
      types: {
        fleet_fuel: 'Commercial Fleet Biofuel Supply (HVO100 / Bio-CNG)',
        feedstock: 'Biomass & Feedstock Sourcing Partnership',
        investment: 'Investor & ESG Financing Relations',
        general: 'General Technical or Municipal Inquiry',
      },
      fleetSizeLabel: 'Estimated Annual Fuel Consumption or Fleet Size (Optional)',
      messageLabel: 'Message or Project Specifics',
      consentLabel: 'I agree to the processing of business contact data under GDPR regulations.',
      submitBtn: 'Send Inquiry to Vilnius Team',
      submitting: 'Processing inquiry...',
      successTitle: 'Inquiry Successfully Received',
      successMessage:
        'Ačiū! Our commercial team in Vilnius will review your fleet profile and get back to you within 24 business hours.',
      refNumber: 'Reference ID',
      sendAnother: 'Send Another Inquiry',
      quickTemplates: ['Request HVO100 Fleet Trial', 'Supply Timber/Agri Biomass', 'Wholesale Pricing Inquiry'],
      hqTitle: 'Headquarters & R&D',
      hqAddress: 'Upės g. 21, Green Hall Business Valley, LT-08128 Vilnius, Lithuania',
      terminalTitle: 'Terminal & Production Site',
      terminalAddress: 'Minijos g. 180, Klaipėda Seaport Free Economic Zone, Lithuania',
      directContact: 'Direct Commercial Desk',
      email: 'tiekimas@balticbiofuels.lt',
      phone: '+370 5 210 4488',
      hours: 'Mon - Fri: 08:30 - 17:30 EET',
    },
    footer: {
      copyright: '© 2026 Baltic Biofuels UAB. Registered in the Republic of Lithuania.',
      regCode: 'Company Code: 306489211 · VAT: LT100016489215',
      disclaimer: 'Certified under EU Renewable Energy Directive (RED III) and ISCC EU certification schemes.',
    },
  },
  lt: {
    nav: {
      about: 'Apie mus',
      metrics: 'Tvarumo rodikliai',
      calculator: 'Emisijų skaičiuoklė',
      products: 'Produktai',
      process: 'Žaliavos ir technologija',
      contact: 'Kontaktai',
      inquireBtn: 'Užsakyti tiekimą',
    },
    hero: {
      badge: 'Lietuvos švariųjų degalų startuolis · Vilnius ir Klaipėda',
      titleStart: 'Dekarbonizuojame Baltijos šalių transportą su',
      titleHighlight: 'II kartos biokuru',
      description:
        '„Baltic Biofuels“ perdirba vietines Lietuvos žemės ūkio ir medienos pramonės liekanas į itin mažo anglies pėdsako HVO100 dyzeliną ir biometaną. 100% tinka esamiems dyzeliniams varikliams iki -32°C šalčio.',
      ctaPrimary: 'Skaičiuoti autoparko naudą',
      ctaSecondary: 'Bendradarbiauti',
      certifications: ['ISCC EU sertifikuota', 'RED III atitiktis', 'EN 15940 standartas', 'Klaipėdos uosto žaliasis partneris'],
    },
    metricsSection: {
      tag: 'Aplinkosaugos įsipareigojimas',
      title: 'Pamatuojami ir audituoti tvarumo rodikliai',
      subtitle:
        'Kiekvienas mūsų degalų litras atsekamas iki sertifikuotų tvarių atliekų. Veikiame griežtai pagal ES Atsinaujinančios energijos direktyvą III su visišku skaitmeniniu atsekamumu.',
      calculatorTitle: 'Autoparko CO₂ emisijų ir kaštų skaičiuoklė',
      calculatorDesc:
        'Įvertinkite, kiek sumažinsite CO₂ pėdsaką ir iškastinio dyzelino sąnaudas perėję prie „Baltic HVO100“.',
      fleetLabel: 'Autoparko dydis (vilkikai arba autobusai)',
      distanceLabel: 'Vidutinė vienos transporto priemonės metinė rida (km)',
      resultTitle: 'Numatomas metinis aplinkosauginis poveikis',
      co2Saved: 'Išvengta CO₂e tonų per metus',
      dieselDisplaced: 'Pakeista litrų iškastinio dyzelino',
      treeEquiv: 'Atitinka pasodintų medžių poveikį',
      penaltySaved: 'Sutaupyti ES apyvartinių taršos leidimų kaštai',
      calculatorCta: 'Gauti individualų autoparko perėjimo planą',
    },
    productsSection: {
      tag: 'Biokuro produkcija',
      title: 'Tiesioginis iškastinio kuro pakaitalas',
      subtitle:
        'Nereikia keisti variklių ar degalinių infrastruktūros. Momentinis transporto emisijų mažinimo reikalavimų išpildymas.',
      hvoTitle: 'Baltic HVO100 (Hidrintas augalinis aliejus)',
      hvoDesc:
        'Aukščiausios kokybės sintetinis parafininis atsinaujinantis dyzelinas, gaminamas iš nemaistinių riebalų ir talų aliejaus atliekų. Cetano skaičius viršija 70.',
      hvoSpecs: [
        'Filtravimosi ribinė temperatūra (CFPP): iki -32°C arktinė klasė',
        'Cetano skaičius: 70–80 (ypatingas degimo efektyvumas)',
        'Sandėliavimo stabilumas: virš 2 metų be bakterinio irimo',
        'Tiesioginis 100% pakaitalas (standartas LST EN 15940)',
      ],
      biomethaneTitle: 'Bio-CNG ir Bio-LNG (Išgrynintas biometanas)',
      biomethaneDesc:
        'Išvalytas biometanas, išgautas anaerobinio rauginimo būdu iš žemės ūkio liekanų ir šiaudų celiuliozės, išgrynintas iki 98,5% CH₄.',
      biomethaneSpecs: [
        'Metano grynumas: >98,5% (atitinka LST EN 16723)',
        'Idealiai tinka miesto autobusams ir regioniniam transportui',
        'Tiesioginis tiekimas į dujotiekio tinklą ir terminalus',
        'Beveik nulinės sieros ir NOx emisijos',
      ],
    },
    processSection: {
      tag: 'Žiedinės ekonomikos grandinė',
      title: 'Paremtas Lietuvos žemės ir miškų ūkiu',
      subtitle:
        'Nenaudojame maistinių pasėlių ar sengirių medienos. Įdarbiname vietines perdirbimo liekanas švarios energijos kūrimui.',
      steps: [
        {
          num: '01',
          title: 'Vietinių žaliavų surinkimas',
          desc: 'Tiesioginė partnerystė su Lietuvos grūdų ūkiais, lentpjūvėmis ir maisto perdirbėjais sertifikuotų atliekų supirkimui.',
        },
        {
          num: '02',
          title: 'Pažangus hidroperdirbimas',
          desc: 'Katalizinis hidrovalymas pašalina deguonį ir priemaišas, sukurdamas švarias angliavandenilių grandines.',
        },
        {
          num: '03',
          title: 'Klaipėdos logistikos mazgas',
          desc: 'Strateginė gamyba ir terminalas Klaipėdos uoste užtikrina greitą tiekimą Lietuvos ir Baltijos transporto koridoriams.',
        },
        {
          num: '04',
          title: 'Momentinė autoparkų dekarbonizacija',
          desc: 'Tiekimas tiesiai į logistikos bazes, savivaldybių parkus ir degalinių tinklus be jokių techninių modifikacijų.',
        },
      ],
    },
    contactSection: {
      tag: 'Susisiekite su mumis',
      title: 'Pasiruošę pereiti prie švaresnio kuro?',
      subtitle:
        'Nesvarbu, ar valdote krovinių autoparką, tiekiate biomasės atliekas, ar ieškote didmeninio tiekimo sutarties – mūsų komanda pasirengusi padėti.',
      formTitle: 'Pateikti užklausą',
      nameLabel: 'Vardas, Pavardė',
      emailLabel: 'Darbo el. paštas',
      phoneLabel: 'Telefono numeris (neprivaloma)',
      companyLabel: 'Įmonė / Organizacija',
      inquiryTypeLabel: 'Užklausos pobūdis',
      types: {
        fleet_fuel: 'Kuro tiekimas komerciniam autoparkui (HVO100 / Bio-CNG)',
        feedstock: 'Biomasės ir atliekų tiekimo partnerystė',
        investment: 'Investicijos ir ESG finansavimas',
        general: 'Bendroji techninė ar savivaldos užklausa',
      },
      fleetSizeLabel: 'Numatomas kuro poreikis ar autoparko dydis (neprivaloma)',
      messageLabel: 'Pranešimas arba projekto detalės',
      consentLabel: 'Sutinku su verslo kontaktinių duomenų tvarkymu pagal BDAR reikalavimus.',
      submitBtn: 'Siųsti užklausą Vilniaus komandai',
      submitting: 'Siunčiama užklausa...',
      successTitle: 'Užklausa sėkmingai gauta',
      successMessage:
        'Ačiū! Mūsų komanda Vilniuje peržiūrės jūsų poreikius ir susisieks per 24 darbo valandas.',
      refNumber: 'Užklausos Nr.',
      sendAnother: 'Pateikti kitą užklausą',
      quickTemplates: ['Prašyti HVO100 bandymų partijos', 'Siūlyti medienos/žemės ūkio atliekas', 'Didmeninių kainų užklausa'],
      hqTitle: 'Būstinė ir R&D centras',
      hqAddress: 'Upės g. 21, „Green Hall“ verslo slėnis, LT-08128 Vilnius, Lietuva',
      terminalTitle: 'Gamybos ir terminalo mazgas',
      terminalAddress: 'Minijos g. 180, Klaipėdos LEZ / Uosto zona, Lietuva',
      directContact: 'Tiesioginis komercijos skyrius',
      email: 'tiekimas@balticbiofuels.lt',
      phone: '+370 5 210 4488',
      hours: 'I - V: 08:30 - 17:30 EET',
    },
    footer: {
      copyright: '© 2026 UAB „Baltic Biofuels“. Registruota Lietuvos Respublikoje.',
      regCode: 'Įmonės kodas: 306489211 · PVM: LT100016489215',
      disclaimer: 'Sertifikuota pagal ES Atsinaujinančios energijos direktyvą (RED III) ir ISCC EU sistemas.',
    },
  },
};
